import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  Beaker,
  BookOpen,
  Bookmark,
  CheckCircle2,
  GitBranch,
  ListChecks,
  Map,
  ScrollText,
  Search,
  Star,
  Target,
  TriangleAlert
} from "lucide-react";
import { chapters } from "./content/chapters.js";
import { examFocus } from "./content/examFocus.js";
import { recitation } from "./content/recitation.js";
import { knowledgeEdges, knowledgeNodes, weekPlans } from "./content/plans.js";
import { quizzes } from "./content/quizzes.js";
import { LabRouter } from "./components/Labs.jsx";
import { excerpt, extractHeadings, renderMarkdown, stripMarkdown } from "./lib/markdown.js";
import { loadProgress, saveProgress, updateChapterProgress } from "./lib/storage.js";

const tabs = [
  { id: "read", label: "阅读 Read", icon: BookOpen },
  { id: "exam", label: "考点 Exam", icon: Target },
  { id: "recite", label: "默写 Recite", icon: ScrollText },
  { id: "lab", label: "实验 Lab", icon: Beaker },
  { id: "quiz", label: "题卡 Quiz", icon: ListChecks },
  { id: "map", label: "地图 Map", icon: GitBranch },
  { id: "plan", label: "规划 Plan", icon: Map }
];

export default function App() {
  const [selectedId, setSelectedId] = useState(chapters[0].id);
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState("read");
  const [progress, setProgress] = useState(() => loadProgress());
  const selected = chapters.find((chapter) => chapter.id === selectedId) || chapters[0];
  const selectedProgress = progress[selected.id] || {};
  const rendered = useMemo(() => renderMarkdown(selected.md), [selected]);
  const headings = useMemo(() => extractHeadings(selected.md), [selected]);
  const searchResults = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return [];
    return chapters
      .map((chapter) => ({
        chapter,
        text: `${chapter.title} ${chapter.filename} ${stripMarkdown(chapter.md)}`.toLowerCase()
      }))
      .filter((item) => item.text.includes(needle))
      .slice(0, 12);
  }, [query]);
  const completeCount = chapters.filter((chapter) => progress[chapter.id]?.done).length;
  const completion = Math.round((completeCount / chapters.length) * 100);

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  function patchSelected(patch) {
    setProgress((current) => updateChapterProgress(current, selected.id, patch));
  }

  function pickChapter(chapterId, nextTab = tab) {
    setSelectedId(chapterId);
    setTab(nextTab);
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span>COMP30023</span>
          <strong>Interactive Revision</strong>
          <small>期末复习工作台 · bilingual exam focus</small>
        </div>
        <label className="search-box">
          <Search size={16} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索知识点 · search notes" />
        </label>
        {query.trim() ? (
          <SearchResults
            results={searchResults}
            query={query}
            onPick={(id) => {
              setQuery("");
              pickChapter(id, "read");
            }}
          />
        ) : (
          <ChapterNav selectedId={selected.id} onPick={(id) => pickChapter(id, "read")} progress={progress} />
        )}
      </aside>

      <main className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">{selected.week} · {selected.group}</p>
            <h1>{selected.title}</h1>
            <span className="filename">{selected.filename}</span>
          </div>
          <div className="progress-pill">
            <CheckCircle2 size={18} />
            <strong>{completion}%</strong>
            <span>{completeCount}/{chapters.length} done</span>
          </div>
        </header>

        <div className="tabbar" role="tablist" aria-label="Study mode">
          {tabs.map((item) => {
            const Icon = item.icon;
            return (
              <button key={item.id} className={tab === item.id ? "active" : ""} onClick={() => setTab(item.id)}>
                <Icon size={17} />
                {item.label}
              </button>
            );
          })}
        </div>

        {tab === "read" && (
          <article className="markdown-panel" dangerouslySetInnerHTML={{ __html: rendered }} />
        )}
        {tab === "exam" && <ExamPanel chapterId={selected.id} onJumpToLab={() => setTab("lab")} />}
        {tab === "recite" && (
          <RecitePanel
            chapterId={selected.id}
            memorized={selectedProgress.reciteDone || []}
            onMemorizedChange={(reciteDone) => patchSelected({ reciteDone })}
          />
        )}
        {tab === "lab" && <LabRouter chapter={selected} />}
        {tab === "quiz" && (
          <QuizPanel
            chapterId={selected.id}
            questions={quizzes[selected.id] || []}
            bestScore={selectedProgress.bestScore}
            onScore={(bestScore) => patchSelected({ bestScore })}
          />
        )}
        {tab === "map" && <KnowledgeMap onPick={(id) => pickChapter(id, "read")} activeId={selected.id} />}
        {tab === "plan" && <PlanBoard onPick={(id) => pickChapter(id, "lab")} />}
      </main>

      <aside className="inspector">
        <ChapterCard
          chapter={selected}
          progress={selectedProgress}
          onPatch={patchSelected}
          onOpenLab={() => setTab("lab")}
          onOpenQuiz={() => setTab("quiz")}
          onOpenExam={() => setTab("exam")}
          onOpenRecite={() => setTab("recite")}
        />
        <ExamQuickView chapterId={selected.id} onOpenExam={() => setTab("exam")} />
        <ReciteQuickView chapterId={selected.id} onOpenRecite={() => setTab("recite")} />
        <Toc headings={headings} />
      </aside>
    </div>
  );
}

function ChapterNav({ selectedId, onPick, progress }) {
  const groups = chapters.reduce((acc, chapter) => {
    acc[chapter.group] = acc[chapter.group] || [];
    acc[chapter.group].push(chapter);
    return acc;
  }, {});
  return (
    <nav className="chapter-nav">
      {Object.entries(groups).map(([group, items]) => (
        <section key={group}>
          <h2>{group}</h2>
          {items.map((chapter) => (
            <button key={chapter.id} className={chapter.id === selectedId ? "active" : ""} onClick={() => onPick(chapter.id)}>
              <span>{chapter.week}</span>
              <strong>{chapter.title}</strong>
              {progress[chapter.id]?.done && <CheckCircle2 size={15} />}
            </button>
          ))}
        </section>
      ))}
    </nav>
  );
}

function SearchResults({ results, query, onPick }) {
  return (
    <div className="search-results">
      <p>{results.length} 个结果 · results</p>
      {results.map(({ chapter }) => (
        <button key={chapter.id} onClick={() => onPick(chapter.id)}>
          <strong>{chapter.week} · {chapter.title}</strong>
          <span>{excerpt(chapter.md, query, 110)}</span>
        </button>
      ))}
    </div>
  );
}

function ChapterCard({ chapter, progress, onPatch, onOpenLab, onOpenQuiz, onOpenExam, onOpenRecite }) {
  const plan = weekPlans[chapter.id];
  return (
    <section className="side-card hero-card">
      <img src={chapter.image} alt="" />
      <div className="side-actions">
        <button className={progress.done ? "active" : ""} onClick={() => onPatch({ done: !progress.done })} title="完成 Done">
          <CheckCircle2 size={18} />
        </button>
        <button className={progress.star ? "active" : ""} onClick={() => onPatch({ star: !progress.star })} title="收藏 Star">
          <Bookmark size={18} />
        </button>
        <button className={progress.weak ? "active warn" : ""} onClick={() => onPatch({ weak: !progress.weak })} title="不熟 Weak">
          <AlertTriangle size={18} />
        </button>
      </div>
      <h3>{chapter.week} · {chapter.title}</h3>
      <p>{plan.goal}</p>
      <div className="focus-list">
        {chapter.focus.map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="mini-buttons">
        <button onClick={onOpenExam}><Target size={16} />考点</button>
        <button onClick={onOpenRecite}><ScrollText size={16} />默写</button>
        <button onClick={onOpenLab}><Beaker size={16} />实验</button>
        <button onClick={onOpenQuiz}><ListChecks size={16} />题卡</button>
      </div>
      {typeof progress.bestScore === "number" && (
        <div className="score-note"><Star size={15} /> best quiz {progress.bestScore}%</div>
      )}
      {Array.isArray(progress.reciteDone) && progress.reciteDone.length > 0 && (
        <div className="score-note"><CheckCircle2 size={15} /> recite {progress.reciteDone.length} done</div>
      )}
    </section>
  );
}

function ExamQuickView({ chapterId, onOpenExam }) {
  const focus = examFocus[chapterId];
  if (!focus) return null;
  return (
    <section className="side-card exam-quick">
      <div className="exam-quick-head">
        <ScrollText size={16} />
        <h3>考点速览 Exam Focus</h3>
      </div>
      <p className="exam-summary">{focus.summaryZh}</p>
      <ul className="exam-quick-list">
        {focus.topics.slice(0, 6).map((topic) => (
          <li key={topic.en}>
            <strong>{topic.en}</strong>
            <span>{topic.zh}</span>
          </li>
        ))}
      </ul>
      <button className="exam-quick-open" onClick={onOpenExam}>展开全部 · open full list</button>
    </section>
  );
}

function ReciteQuickView({ chapterId, onOpenRecite }) {
  const block = recitation[chapterId];
  if (!block) return null;
  return (
    <section className="side-card recite-quick">
      <div className="exam-quick-head">
        <ScrollText size={16} />
        <h3>默写速览 Recite</h3>
      </div>
      <p className="exam-summary">{block.summaryZh}</p>
      <ul className="exam-quick-list">
        {block.items.slice(0, 5).map((item) => (
          <li key={item.en}>
            <strong>{item.en}</strong>
            <span>{item.zh}</span>
          </li>
        ))}
      </ul>
      <button className="exam-quick-open" onClick={onOpenRecite}>开始默写 · start recite</button>
    </section>
  );
}

function RecitePanel({ chapterId, memorized, onMemorizedChange }) {
  const block = recitation[chapterId];
  const [revealed, setRevealed] = useState({});
  useEffect(() => {
    setRevealed({});
  }, [chapterId]);

  if (!block) {
    return <div className="empty-panel">本章默写整理中 · recitation coming soon.</div>;
  }

  const items = block.items;
  const revealedCount = items.filter((_, i) => revealed[i]).length;
  const memorizedSet = new Set(memorized);

  function toggleReveal(index) {
    setRevealed((current) => ({ ...current, [index]: !current[index] }));
  }

  function revealAll(show) {
    if (!show) {
      setRevealed({});
      return;
    }
    const all = {};
    items.forEach((_, i) => {
      all[i] = true;
    });
    setRevealed(all);
  }

  function toggleMemorized(index) {
    const next = memorizedSet.has(index)
      ? memorized.filter((i) => i !== index)
      : [...memorized, index].sort((a, b) => a - b);
    onMemorizedChange(next);
  }

  return (
    <section className="recite-panel">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Dictation · 双语默写</p>
          <h3>默写背诵 Recite</h3>
        </div>
        <div className="recite-toolbar">
          <span className="recite-progress">{memorizedSet.size}/{items.length} 已掌握 · {revealedCount}/{items.length} 已揭示</span>
          <button type="button" className="lab-link" onClick={() => revealAll(true)}>全部显示 Reveal all</button>
          <button type="button" className="lab-link" onClick={() => revealAll(false)}>全部隐藏 Hide all</button>
        </div>
      </div>
      <p className="exam-lead">{block.summaryZh}<span className="exam-lead-en">{block.summary}</span></p>
      <ol className="recite-list">
        {items.map((item, index) => {
          const isRevealed = revealed[index];
          const isMemorized = memorizedSet.has(index);
          return (
            <li key={item.en} className={`recite-card ${isRevealed ? "recite-revealed" : ""} ${isMemorized ? "recite-memorized" : ""}`}>
              <div className="recite-card-head">
                <span className="exam-index">{String(index + 1).padStart(2, "0")}</span>
                <div className="recite-prompt">
                  <h4>{item.en}</h4>
                  <span className="exam-zh">{item.zh}</span>
                </div>
                <label className="recite-check">
                  <input
                    type="checkbox"
                    checked={isMemorized}
                    onChange={() => toggleMemorized(index)}
                  />
                  <span>已掌握 Got it</span>
                </label>
              </div>
              <div className={`recite-answer ${isRevealed ? "" : "recite-hidden"}`}>
                {isRevealed ? (
                  <>
                    <p className="recite-answer-en">{item.answerEn}</p>
                    <p className="recite-answer-zh">{item.answerZh}</p>
                    {item.slide && <span className="recite-slide">{item.slide}</span>}
                  </>
                ) : (
                  <button type="button" className="recite-reveal-btn" onClick={() => toggleReveal(index)}>
                    显示答案 Reveal answer
                  </button>
                )}
              </div>
              {isRevealed && (
                <button type="button" className="recite-hide-btn" onClick={() => toggleReveal(index)}>
                  隐藏 Hide
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

function Toc({ headings }) {
  const visible = headings.filter((heading) => heading.depth <= 3).slice(0, 24);
  return (
    <section className="side-card toc">
      <h3>目录 Outline</h3>
      {visible.map((heading) => (
        <button
          key={`${heading.id}-${heading.title}`}
          className={`depth-${heading.depth}`}
          onClick={() => document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
        >
          {heading.title}
        </button>
      ))}
    </section>
  );
}

function QuizPanel({ chapterId, questions, bestScore, onScore }) {
  const [answers, setAnswers] = useState({});
  useEffect(() => setAnswers({}), [chapterId]);
  const answered = Object.keys(answers).length;
  const correct = questions.filter((question, index) => answers[index] === question.answer).length;
  const score = questions.length ? Math.round((correct / questions.length) * 100) : 0;
  useEffect(() => {
    if (answered === questions.length && questions.length && score > (bestScore || 0)) onScore(score);
  }, [answered, bestScore, onScore, questions.length, score]);
  return (
    <section className="quiz-panel">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Exam cards</p>
          <h3>易错题卡 Trap cards</h3>
        </div>
        <div className="step-count">{correct}/{questions.length}</div>
      </div>
      <div className="quiz-list">
        {questions.map((question, index) => (
          <article key={question.question} className="quiz-item">
            <h4>{index + 1}. {question.question}</h4>
            <div className="answer-grid">
              {question.options.map((option, optionIndex) => {
                const picked = answers[index] === optionIndex;
                const done = answers[index] !== undefined;
                const correctAnswer = question.answer === optionIndex;
                return (
                  <button
                    key={option}
                    className={[
                      picked ? "picked" : "",
                      done && correctAnswer ? "correct" : "",
                      done && picked && !correctAnswer ? "wrong" : ""
                    ].join(" ")}
                    onClick={() => setAnswers((current) => ({ ...current, [index]: optionIndex }))}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {answers[index] !== undefined && <p>{question.explain}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

function ExamPanel({ chapterId, onJumpToLab }) {
  const focus = examFocus[chapterId];
  if (!focus) {
    return <div className="empty-panel">本章考点整理中 · exam focus coming soon.</div>;
  }
  return (
    <section className="exam-panel">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Exam focus · 双语考点</p>
          <h3>考点详解 Exam Focus</h3>
        </div>
        <button className="lab-link" onClick={onJumpToLab}><Beaker size={15} />配套实验 Lab</button>
      </div>
      <p className="exam-lead">{focus.summaryZh}<span className="exam-lead-en">{focus.summary}</span></p>
      <ol className="exam-list">
        {focus.topics.map((topic, index) => (
          <li key={topic.en} className="exam-card">
            <div className="exam-card-head">
              <span className="exam-index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h4>{topic.en}</h4>
                <span className="exam-zh">{topic.zh}</span>
              </div>
            </div>
            <div className="exam-fields">
              <ExamField icon="listChecks" label="考试会问 Asks" en={topic.asks} zh={topic.asksZh} tone="asks" />
              <ExamField icon="gitCompare" label="核心区分 Distinction" en={topic.distinction} zh={topic.distinctionZh} tone="distinction" />
              <ExamField icon="triangleAlert" label="常见陷阱 Trap" en={topic.trap} zh={topic.trap} tone="trap" bare />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ExamField({ label, en, zh, tone, bare }) {
  return (
    <div className={`exam-field tone-${tone}`}>
      <div className="exam-field-label">
        {tone === "trap" && <TriangleAlert size={14} />}
        {tone === "asks" && <ListChecks size={14} />}
        {tone === "distinction" && <GitBranch size={14} />}
        {label}
      </div>
      <p className="exam-field-en">{en}</p>
      {!bare && <p className="exam-field-zh">{zh}</p>}
    </div>
  );
}

function KnowledgeMap({ activeId, onPick }) {
  return (
    <section className="map-panel">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Knowledge graph</p>
          <h3>知识点地图 Knowledge Map</h3>
        </div>
      </div>
      <div className="map-grid">
        {knowledgeNodes.map((node) => (
          <button key={node.id} className={node.chapter === activeId ? "active" : ""} onClick={() => onPick(node.chapter)}>
            <strong>{node.id}</strong>
            <span>{node.group}</span>
          </button>
        ))}
      </div>
      <div className="edge-list">
        {knowledgeEdges.map(([from, to]) => (
          <div key={`${from}-${to}`}>
            <span>{from}</span>
            <b>→</b>
            <span>{to}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PlanBoard({ onPick }) {
  return (
    <section className="plan-board">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Build plan</p>
          <h3>每章互动规划 Study Plan</h3>
        </div>
      </div>
      <div className="plan-grid">
        {chapters.map((chapter) => {
          const plan = weekPlans[chapter.id];
          return (
            <article key={chapter.id}>
              <div>
                <span>{chapter.week}</span>
                <h4>{chapter.title}</h4>
              </div>
              <p>{plan.goal}</p>
              <strong>{plan.lab}</strong>
              <ul>
                {plan.exam.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <button onClick={() => onPick(chapter.id)}>打开实验 Open lab</button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
