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
  Search,
  Star
} from "lucide-react";
import { chapters } from "./content/chapters.js";
import { knowledgeEdges, knowledgeNodes, weekPlans } from "./content/plans.js";
import { quizzes } from "./content/quizzes.js";
import { LabRouter } from "./components/Labs.jsx";
import { excerpt, extractHeadings, renderMarkdown, stripMarkdown } from "./lib/markdown.js";
import { loadProgress, saveProgress, updateChapterProgress } from "./lib/storage.js";

const tabs = [
  { id: "read", label: "阅读", icon: BookOpen },
  { id: "lab", label: "实验", icon: Beaker },
  { id: "quiz", label: "题卡", icon: ListChecks },
  { id: "map", label: "地图", icon: GitBranch },
  { id: "plan", label: "规划", icon: Map }
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
        </div>
        <label className="search-box">
          <Search size={16} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索知识点" />
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
            <span>{completeCount}/{chapters.length}</span>
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
        />
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
      <p>{results.length} 个结果</p>
      {results.map(({ chapter }) => (
        <button key={chapter.id} onClick={() => onPick(chapter.id)}>
          <strong>{chapter.week} · {chapter.title}</strong>
          <span>{excerpt(chapter.md, query, 110)}</span>
        </button>
      ))}
    </div>
  );
}

function ChapterCard({ chapter, progress, onPatch, onOpenLab, onOpenQuiz }) {
  const plan = weekPlans[chapter.id];
  return (
    <section className="side-card hero-card">
      <img src={chapter.image} alt="" />
      <div className="side-actions">
        <button className={progress.done ? "active" : ""} onClick={() => onPatch({ done: !progress.done })} title="完成">
          <CheckCircle2 size={18} />
        </button>
        <button className={progress.star ? "active" : ""} onClick={() => onPatch({ star: !progress.star })} title="收藏">
          <Bookmark size={18} />
        </button>
        <button className={progress.weak ? "active warn" : ""} onClick={() => onPatch({ weak: !progress.weak })} title="不熟">
          <AlertTriangle size={18} />
        </button>
      </div>
      <h3>{chapter.week} · {chapter.title}</h3>
      <p>{plan.goal}</p>
      <div className="focus-list">
        {chapter.focus.map((item) => <span key={item}>{item}</span>)}
      </div>
      <div className="mini-buttons">
        <button onClick={onOpenLab}><Beaker size={16} />实验</button>
        <button onClick={onOpenQuiz}><ListChecks size={16} />题卡</button>
      </div>
      {typeof progress.bestScore === "number" && (
        <div className="score-note"><Star size={15} /> best quiz {progress.bestScore}%</div>
      )}
    </section>
  );
}

function Toc({ headings }) {
  const visible = headings.filter((heading) => heading.depth <= 3).slice(0, 24);
  return (
    <section className="side-card toc">
      <h3>目录</h3>
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
          <h3>易错题卡</h3>
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

function KnowledgeMap({ activeId, onPick }) {
  return (
    <section className="map-panel">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Knowledge graph</p>
          <h3>知识点地图</h3>
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
          <h3>每章互动规划</h3>
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
              <button onClick={() => onPick(chapter.id)}>打开实验</button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
