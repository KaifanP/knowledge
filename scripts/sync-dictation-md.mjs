import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { recitation } from "../src/content/recitation.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const MARKER = "## 默写背诵 Dictation";

const FILES = {
  "wk1-os": "WK1-OS-Overview.md",
  "wk2-process": "WK2-Process-Intro.md",
  "wk3-cpu": "WK3-CPU-Scheduling.md",
  "wk3-ipc": "WK3-IPC.md",
  "wk4-memory": "WK4-Memory-Management.md",
  "wk5-security": "WK5-Secure-Communication.md",
  "wk6-osi": "WK6-Intro-OSI.md",
  "wk7-sockets": "WK7-Sockets.md",
  "wk7-dns": "WK7-DNS-Mail-RPC.md",
  "wk8-udp": "WK8-Transport-Services-UDP.md",
  "wk8-http": "WK8-HTTP.md",
  "wk9-tcp": "WK9-TCP.md",
  "wk9-protocol": "WK9-Protocol-Design.md",
  "wk10-addressing": "WK10-Addressing-Switching.md",
  "wk10-congestion": "WK10-TCP-Flow-Congestion-Control.md",
  "wk11-routing": "WK11-Routing.md",
  "wk11-control": "WK11-Control.md",
  "wk12-nat": "WK12-NAT.md"
};

function buildSection(items) {
  const rows = items
    .map(
      (item, i) =>
        `| ${i + 1} | ${item.en} · ${item.zh} | **EN:** ${item.answerEn} / **中文：** ${item.answerZh} |`
    )
    .join("\n");
  return `\n${MARKER}\n\n> 以下为本章必须能默写的中英对照；网站「默写 Recite」Tab 提供自测模式。\n\n| # | 默写提示 Prompt | 标准答案 Answer |\n|---|----------------|----------------|\n${rows}\n`;
}

for (const [id, filename] of Object.entries(FILES)) {
  const block = recitation[id];
  if (!block?.items?.length) {
    console.warn(`Skip ${filename}: no recitation data`);
    continue;
  }
  const path = join(root, filename);
  let md = readFileSync(path, "utf8");
  const section = buildSection(block.items);
  if (md.includes(MARKER)) {
    md = md.replace(new RegExp(`\\n${MARKER}[\\s\\S]*$`), section);
  } else {
    md = md.trimEnd() + section;
  }
  writeFileSync(path, md + "\n");
  console.log(`Updated ${filename}`);
}
