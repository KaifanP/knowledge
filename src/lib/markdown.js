import { marked } from "marked";

const renderer = new marked.Renderer();
const basePath = import.meta.env?.BASE_URL || "/";

renderer.image = ({ href, title, text }) => {
  const safeHref = resolveAssetHref(href);
  const safeTitle = title ? ` title="${escapeHtml(title)}"` : "";
  return `<figure><img src="${escapeHtml(safeHref)}" alt="${escapeHtml(text || "")}"${safeTitle} loading="lazy" /><figcaption>${escapeHtml(text || "")}</figcaption></figure>`;
};

renderer.heading = ({ tokens, depth }) => {
  const text = tokens.map((token) => token.raw || token.text || "").join("");
  const id = slugify(text);
  return `<h${depth} id="${id}">${text}</h${depth}>`;
};

renderer.code = ({ text, lang }) => {
  if (lang) {
    return `<pre><code class="language-${escapeHtml(lang)}">${escapeHtml(text)}</code></pre>`;
  }
  const visual = renderCodeVisual(text);
  if (visual) return visual;
  return `<pre><code>${escapeHtml(text)}</code></pre>`;
};

marked.setOptions({
  gfm: true,
  breaks: false,
  renderer
});

export function renderMarkdown(markdown) {
  return marked.parse(markdown);
}

export function extractHeadings(markdown) {
  return markdown
    .split("\n")
    .map((line) => {
      const match = line.match(/^(#{2,4})\s+(.+)$/);
      if (!match) return null;
      const title = match[2].replace(/\*\*/g, "").trim();
      return {
        depth: match[1].length,
        title,
        id: slugify(title)
      };
    })
    .filter(Boolean);
}

export function stripMarkdown(markdown) {
  return markdown
    .replace(/!\[[^\]]*]\([^)]+\)/g, " ")
    .replace(/\[[^\]]+]\([^)]+\)/g, " ")
    .replace(/`{1,3}[^`]*`{1,3}/g, " ")
    .replace(/[#>*_\-|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function excerpt(markdown, query, size = 120) {
  const plain = stripMarkdown(markdown);
  if (!query) return plain.slice(0, size);
  const lower = plain.toLowerCase();
  const index = lower.indexOf(query.toLowerCase());
  if (index < 0) return plain.slice(0, size);
  const start = Math.max(0, index - Math.floor(size / 2));
  const end = Math.min(plain.length, start + size);
  return `${start > 0 ? "..." : ""}${plain.slice(start, end)}${end < plain.length ? "..." : ""}`;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[`~!@#$%^&*()+=[\]{};:'",.<>/?\\|]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function resolveAssetHref(href) {
  const raw = String(href || "");
  if (/^(https?:|data:|mailto:|#)/i.test(raw)) return raw;
  const normalized = raw.replace(/^\.?\//, "");
  if (!normalized.startsWith("images/")) return raw;
  const normalizedBase = basePath.endsWith("/") ? basePath : `${basePath}/`;
  return `${normalizedBase}${normalized}`;
}

function renderCodeVisual(text) {
  const clean = String(text).trim();
  if (isStackFrame(clean)) return renderStackFrame();
  if (isAddressSpace(clean)) return renderAddressSpace();
  if (isUdpHeader(clean)) return renderPacketHeader("UDP Header", [
    ["Source Port", "Destination Port"],
    ["Length", "Checksum"]
  ]);
  if (isTcpSequence(clean)) return renderSequence(clean);
  if (isFlow(clean)) return renderFlow(clean);
  return "";
}

function isStackFrame(text) {
  return text.includes("栈顶") && text.includes("返回地址") && text.includes("局部变量");
}

function isAddressSpace(text) {
  return text.includes("Code") && text.includes("Data") && text.includes("Heap") && text.includes("Stack") && text.includes("低地址");
}

function isUdpHeader(text) {
  return text.includes("Source Port") && text.includes("Destination Port") && text.includes("Checksum");
}

function isTcpSequence(text) {
  return text.includes("Client") && text.includes("Server") && (text.includes("SYN") || text.includes("FIN") || text.includes("ACK"));
}

function isFlow(text) {
  const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
  if (lines.length < 3 || lines.length > 16) return false;
  return lines.filter((line) => line.includes("→") || line === "↓" || line.startsWith("↓")).length >= 2;
}

function renderStackFrame() {
  const rows = [
    ["参数", "Args", "调用者传入的数据"],
    ["返回地址", "RA", "函数返回后 PC 跳回的位置"],
    ["保存的寄存器", "Saved registers", "恢复调用者执行现场"],
    ["局部变量", "Local variables", "当前函数自己的临时数据"]
  ];
  return `
    <figure class="concept-visual stack-visual">
      <figcaption>栈帧结构：高地址在上，栈向低地址增长。这里画的是常见布局，不是所有架构的压栈时间顺序</figcaption>
      <div class="stack-layout">
        <div class="stack-address-axis"><span>高地址</span><b></b><span>低地址</span></div>
        <div class="stack-frame-card">
          ${rows.map(([cn, en, note], index) => `
            <div class="stack-slot ${index === rows.length - 1 ? "stack-top" : ""}">
              <strong>${cn}</strong>
              <span>${en}</span>
              <small>${note}</small>
              ${index === rows.length - 1 ? "<em>SP 指向这里</em>" : ""}
            </div>
          `).join("")}
          <div class="growth-arrow">栈增长方向 ↓</div>
        </div>
      </div>
      <div class="stack-order">
        <strong>常见调用顺序</strong>
        <span>1. caller 准备参数</span>
        <span>2. call 保存返回地址 RA</span>
        <span>3. callee 保存寄存器/旧 FP</span>
        <span>4. callee 分配局部变量</span>
      </div>
      <p class="visual-note">注意：很多现代 calling convention 会优先用寄存器传参数；如果参数被 spill 到栈上，或者超过寄存器数量，才会出现在栈帧附近。</p>
    </figure>
  `;
}

function renderAddressSpace() {
  const rows = [
    ["Code", "程序指令", "共享"],
    ["Data", "全局变量 / 静态数据", "共享"],
    ["Heap", "动态分配内存", "向高地址增长"],
    ["Free space", "堆和栈之间的空闲区域", "可变化"],
    ["Stack", "局部变量 / 函数参数", "向低地址增长"]
  ];
  return `
    <figure class="concept-visual address-space-visual">
      <figcaption>进程地址空间：线程共享 Code/Data/Heap，每个线程有自己的 Stack</figcaption>
      <div class="address-axis"><span>低地址</span><b></b><span>高地址</span></div>
      <div class="address-space-card">
        ${rows.map(([name, note, badge]) => `
          <div class="address-region ${name === "Free space" ? "free" : ""}">
            <strong>${name}</strong>
            <span>${note}</span>
            <small>${badge}</small>
          </div>
        `).join("")}
      </div>
    </figure>
  `;
}

function renderPacketHeader(title, rows) {
  return `
    <figure class="concept-visual packet-visual">
      <figcaption>${title}：固定 8 bytes，核心作用是端口分用和错误检测</figcaption>
      <div class="bit-ruler">
        <span>0</span><span>7</span><span>15</span><span>23</span><span>31</span>
      </div>
      <div class="packet-grid">
        ${rows.flat().map((cell) => `<div>${cell}</div>`).join("")}
      </div>
    </figure>
  `;
}

function renderSequence(text) {
  const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
  const messages = lines
    .filter((line) => line.includes("---") || line.includes("<--"))
    .map((line) => {
      const left = line.includes("<--");
      const label = line
        .replace(/[|<>-]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      return { left, label };
    });
  const title = text.includes("FIN") ? "TCP 连接关闭时序" : "TCP 三次握手时序";
  return `
    <figure class="concept-visual sequence-visual">
      <figcaption>${title}</figcaption>
      <div class="sequence-head"><span>Client</span><span>Server</span></div>
      <div class="sequence-body">
        ${messages.map((message) => `
          <div class="sequence-row ${message.left ? "left" : "right"}">
            <span></span>
            <b>${escapeHtml(message.label)}</b>
            <span></span>
          </div>
        `).join("")}
      </div>
      <p>${text.includes("SYN") ? "SYN/FIN 会消耗 1 个 sequence number；ACK number 表示期望收到的下一个字节。" : "FIN 是方向性的；一边 FIN 后，反方向仍可能继续发送数据。"}</p>
    </figure>
  `;
}

function renderFlow(text) {
  const nodes = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && line !== "↓")
    .flatMap((line) => line.split(/\s*→\s*/))
    .map((line) => line.replace(/^↓\s*/, "").trim())
    .filter(Boolean);
  if (nodes.length < 3 || nodes.length > 14) return "";
  return `
    <figure class="concept-visual flow-visual">
      <figcaption>流程关系图</figcaption>
      <div class="flow-chain">
        ${nodes.map((node, index) => `
          <div class="flow-node">${escapeHtml(node)}</div>
          ${index < nodes.length - 1 ? "<span>→</span>" : ""}
        `).join("")}
      </div>
    </figure>
  `;
}
