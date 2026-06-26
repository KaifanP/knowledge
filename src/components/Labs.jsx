import { useMemo, useState } from "react";
import { DnsFlowVisual, TcpHandshakeVisual } from "./TeachingMotion.jsx";
import {
  CidrBitVisual,
  ControlPlaneVisual,
  CryptoFlowVisual,
  CwndBarVisual,
  DijkstraGraphVisual,
  EncapsulationVisual,
  HttpMessageVisual,
  NatTopologyVisual,
  PagingVisual,
  ProcessThreadVisual,
  RaceTimelineVisual,
  RpcFlowVisual,
  SchedulingTimelineVisual,
  SocketLifecycleVisual,
  SystemCallVisual,
  UdpDemuxVisual
} from "./LabVisuals.jsx";

export function LabRouter({ chapter }) {
  switch (chapter.lab) {
    case "system-call":
      return (
        <StepperLab
          title="System call journey"
          steps={systemCallSteps}
          renderVisual={(index) => <SystemCallVisual step={index} />}
        />
      );
    case "process-thread":
      return <ProcessThreadLab />;
    case "scheduling":
      return <SchedulingLab />;
    case "race-condition":
      return <RaceConditionLab />;
    case "paging":
      return <PagingLab />;
    case "crypto":
      return <CryptoLab />;
    case "encapsulation":
      return <EncapsulationLab />;
    case "sockets":
      return <SocketLab />;
    case "dns":
      return (
        <StepperLab
          title="DNS lookup path"
          steps={dnsSteps}
          renderVisual={(index) => <DnsFlowVisual step={index} />}
        />
      );
    case "udp-demux":
      return <UdpDemuxLab />;
    case "http":
      return <HttpBuilderLab />;
    case "tcp-handshake":
      return (
        <StepperLab
          title="TCP three-way handshake"
          steps={tcpSteps}
          renderVisual={(index) => <TcpHandshakeVisual step={index} />}
        />
      );
    case "rpc":
      return <RpcLab />;
    case "cidr":
      return <CidrLab />;
    case "cwnd":
      return <CwndLab />;
    case "dijkstra":
      return <DijkstraLab />;
    case "control-plane":
      return (
        <StepperLab
          title="Traceroute and ARP flow"
          steps={controlSteps}
          renderVisual={(index) => <ControlPlaneVisual step={index} />}
        />
      );
    case "nat":
      return <NatLab />;
    default:
      return <div className="empty-panel">这一章的互动实验还在排队。</div>;
  }
}

function StepperLab({ title, steps, renderVisual }) {
  const [index, setIndex] = useState(0);
  const step = steps[index];
  const progress = ((index + 1) / steps.length) * 100;
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>{title}</h3>
        </div>
        <div className="step-count">{index + 1}/{steps.length}</div>
      </div>
      <div className="stepper-track">
        {steps.map((item, itemIndex) => (
          <button
            key={item.label}
            className={itemIndex === index ? "step-dot active" : "step-dot"}
            onClick={() => setIndex(itemIndex)}
            title={item.label}
          >
            {itemIndex + 1}
          </button>
        ))}
      </div>
      <div className="stepper-progress" aria-hidden="true">
        <div className="stepper-progress-fill" style={{ width: `${progress}%` }} />
      </div>
      {renderVisual?.(index)}
      <div className="lab-stage lab-stage-swap" key={`${title}-${index}`}>
        <h4>{step.label}</h4>
        <p>{step.body}</p>
        <code>{step.note}</code>
      </div>
      <div className="lab-actions">
        <button onClick={() => setIndex(Math.max(0, index - 1))}>上一步</button>
        <button onClick={() => setIndex(Math.min(steps.length - 1, index + 1))}>下一步</button>
      </div>
    </section>
  );
}

const systemCallSteps = [
  { label: "User code", body: "应用程序调用 read(fd, buf, n)，此时仍在 user mode。", note: "普通应用不能直接碰硬件。" },
  { label: "Trap", body: "CPU 通过 trap 切入 kernel mode，控制权交给 OS 的 system call handler。", note: "mode switch 发生在这里。" },
  { label: "Kernel work", body: "内核检查参数、权限和文件状态，必要时让进程 blocked 等待 I/O。", note: "blocked 不等于 terminated。" },
  { label: "Interrupt", body: "设备完成 I/O 后发出 interrupt，内核把数据放到合适缓冲区。", note: "interrupt 通常是异步事件。" },
  { label: "Return", body: "内核恢复进程上下文，返回 user mode，read 得到结果。", note: "用户代码继续执行。" }
];

const dnsSteps = [
  { label: "Browser asks local DNS", body: "浏览器或 OS resolver 先问本地 DNS。", note: "缓存命中就可以直接返回。" },
  { label: "Root server", body: "本地 DNS 若无缓存，先问 root，得到 TLD server 线索。", note: "root 不保存所有主机 IP。" },
  { label: "TLD server", body: "TLD server 例如 .com 返回 authoritative server 线索。", note: "这是分层数据库。" },
  { label: "Authoritative server", body: "权威服务器返回 A/AAAA/CNAME/MX 等记录。", note: "最终权威答案来自这里。" },
  { label: "Cache and answer", body: "本地 DNS 按 TTL 缓存结果，再把答案返回给客户端。", note: "TTL 控制缓存有效期。" }
];

const tcpSteps = [
  { label: "SYN", body: "Client 发送 SYN，选择初始 sequence number x。", note: "SYN 消耗 1 个序列号。" },
  { label: "SYN-ACK", body: "Server 回复 SYN-ACK，ack=x+1，并选择自己的 sequence number y。", note: "双方都同步初始序列号。" },
  { label: "ACK", body: "Client 回复 ACK，ack=y+1，连接进入 established。", note: "第三个 ACK 通常可携带数据。" },
  { label: "Byte stream", body: "之后 TCP 传输的是有序 byte stream，不保留应用消息边界。", note: "read 次数不一定等于 write 次数。" }
];

const controlSteps = [
  { label: "Need next hop MAC", body: "主机要发 IP packet 到下一跳，先检查 ARP cache。", note: "ARP 只在本地链路范围内解析。" },
  { label: "ARP request", body: "若无缓存，广播 Who has this IP?", note: "广播不会穿过路由器。" },
  { label: "ARP reply", body: "目标接口回复自己的 MAC，发送方缓存映射。", note: "之后 frame 用这个 MAC 发出。" },
  { label: "Traceroute TTL=1", body: "traceroute 从 TTL=1 开始发包，第一跳让 TTL 归零并回 ICMP。", note: "ICMP Time Exceeded 暴露这一跳。" },
  { label: "Increase TTL", body: "逐步增加 TTL，直到到达目标或停止。", note: "路径是一跳一跳探出来的。" }
];

function ProcessThreadLab() {
  const [mode, setMode] = useState("process");
  const rows = mode === "process"
    ? [
        ["Address space", "separate"],
        ["Open files", "can be inherited, then independent descriptors"],
        ["Registers", "separate"],
        ["Stack", "separate"],
        ["Crash impact", "usually isolated from other processes"]
      ]
    : [
        ["Address space", "shared within the process"],
        ["Open files", "shared process resource"],
        ["Registers", "separate per thread"],
        ["Stack", "separate per thread"],
        ["Crash impact", "can bring down the process"]
      ];
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>Process vs thread map</h3>
        </div>
        <div className="segmented">
          <button className={mode === "process" ? "active" : ""} onClick={() => setMode("process")}>Process</button>
          <button className={mode === "thread" ? "active" : ""} onClick={() => setMode("thread")}>Thread</button>
        </div>
      </div>
      <ProcessThreadVisual mode={mode} />
      <div className="memory-map">
        {rows.map(([label, value]) => (
          <div key={label} className="memory-row">
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function SchedulingLab() {
  const [algorithm, setAlgorithm] = useState("RR");
  const [quantum, setQuantum] = useState(2);
  const processes = [
    { id: "P1", arrival: 0, burst: 5 },
    { id: "P2", arrival: 1, burst: 3 },
    { id: "P3", arrival: 2, burst: 8 },
    { id: "P4", arrival: 3, burst: 6 }
  ];
  const schedule = useMemo(() => buildSchedule(processes, algorithm, quantum), [algorithm, quantum]);
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>CPU scheduling simulator</h3>
        </div>
        <div className="segmented">
          {["FCFS", "SJF", "RR"].map((item) => (
            <button key={item} className={algorithm === item ? "active" : ""} onClick={() => setAlgorithm(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
      {algorithm === "RR" && (
        <label className="slider-row">
          <span>Quantum</span>
          <input type="range" min="1" max="5" value={quantum} onChange={(event) => setQuantum(Number(event.target.value))} />
          <strong>{quantum}</strong>
        </label>
      )}
      <div className="process-grid">
        {processes.map((process) => (
          <div key={process.id}>
            <strong>{process.id}</strong>
            <span>arr {process.arrival}</span>
            <span>burst {process.burst}</span>
          </div>
        ))}
      </div>
      <div className="gantt">
        {schedule.segments.map((segment, index) => (
          <div
            key={`${segment.id}-${segment.start}-${index}`}
            className={`gantt-bar gantt-bar-anim tone-${segment.id}`}
            style={{ flexGrow: segment.end - segment.start }}
            title={`${segment.id}: ${segment.start}-${segment.end}`}
          >
            <span>{segment.id}</span>
            <small>{segment.start}-{segment.end}</small>
          </div>
        ))}
      </div>
      <SchedulingTimelineVisual segments={schedule.segments} />
      <div className="metric-grid">
        {schedule.metrics.map((metric) => (
          <div key={metric.id}>
            <strong>{metric.id}</strong>
            <span>wait {metric.waiting}</span>
            <span>turn {metric.turnaround}</span>
            <span>resp {metric.response}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function buildSchedule(processes, algorithm, quantum) {
  if (algorithm === "RR") return buildRoundRobin(processes, quantum);
  const remaining = [...processes].sort((a, b) => a.arrival - b.arrival || a.id.localeCompare(b.id));
  const segments = [];
  let time = 0;
  while (remaining.length) {
    const available = remaining.filter((process) => process.arrival <= time);
    let next;
    if (available.length === 0) {
      next = remaining[0];
      time = next.arrival;
    } else if (algorithm === "SJF") {
      next = available.sort((a, b) => a.burst - b.burst || a.arrival - b.arrival)[0];
    } else {
      next = available[0];
    }
    segments.push({ id: next.id, start: time, end: time + next.burst });
    time += next.burst;
    remaining.splice(remaining.findIndex((process) => process.id === next.id), 1);
  }
  return withMetrics(processes, segments);
}

function buildRoundRobin(processes, quantum) {
  const jobs = processes.map((process) => ({ ...process, remaining: process.burst }));
  const segments = [];
  const queue = [];
  let time = 0;
  let nextArrivalIndex = 0;
  const ordered = [...jobs].sort((a, b) => a.arrival - b.arrival);
  while (queue.length || nextArrivalIndex < ordered.length) {
    while (nextArrivalIndex < ordered.length && ordered[nextArrivalIndex].arrival <= time) {
      queue.push(ordered[nextArrivalIndex]);
      nextArrivalIndex += 1;
    }
    if (!queue.length) {
      time = ordered[nextArrivalIndex].arrival;
      continue;
    }
    const job = queue.shift();
    const slice = Math.min(quantum, job.remaining);
    segments.push({ id: job.id, start: time, end: time + slice });
    time += slice;
    job.remaining -= slice;
    while (nextArrivalIndex < ordered.length && ordered[nextArrivalIndex].arrival <= time) {
      queue.push(ordered[nextArrivalIndex]);
      nextArrivalIndex += 1;
    }
    if (job.remaining > 0) queue.push(job);
  }
  return withMetrics(processes, segments);
}

function withMetrics(processes, segments) {
  const metrics = processes.map((process) => {
    const own = segments.filter((segment) => segment.id === process.id);
    const completion = Math.max(...own.map((segment) => segment.end));
    const first = Math.min(...own.map((segment) => segment.start));
    const turnaround = completion - process.arrival;
    return {
      id: process.id,
      waiting: turnaround - process.burst,
      turnaround,
      response: first - process.arrival
    };
  });
  return { segments, metrics };
}

function RaceConditionLab() {
  const [value, setValue] = useState(0);
  const [locals, setLocals] = useState({ A: null, B: null });
  const [log, setLog] = useState([]);
  const [bump, setBump] = useState(false);
  function read(thread) {
    setLocals((current) => ({ ...current, [thread]: value }));
    setLog((current) => [`${thread}: read ${value}`, ...current].slice(0, 5));
  }
  function write(thread) {
    if (locals[thread] === null) return;
    const next = locals[thread] + 1;
    setValue(next);
    setBump(true);
    setTimeout(() => setBump(false), 400);
    setLog((current) => [`${thread}: write ${next}`, ...current].slice(0, 5));
  }
  function reset() {
    setValue(0);
    setLocals({ A: null, B: null });
    setLog([]);
  }
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>Race condition interleaving</h3>
        </div>
        <button onClick={reset}>Reset</button>
      </div>
      <RaceTimelineVisual log={log} />
      <div className={`counter-display ${bump ? "counter-bump" : ""}`}>shared counter = {value}</div>
      <div className="thread-grid">
        {["A", "B"].map((thread) => (
          <div key={thread}>
            <h4>Thread {thread}</h4>
            <p>local = {locals[thread] === null ? "empty" : locals[thread]}</p>
            <button onClick={() => read(thread)}>Read</button>
            <button onClick={() => write(thread)}>Write +1</button>
          </div>
        ))}
      </div>
      <ol className="log-list">
        {log.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}
      </ol>
    </section>
  );
}

function PagingLab() {
  const [logical, setLogical] = useState(2148);
  const pageSize = 1024;
  const table = { 0: 5, 1: 9, 2: 1, 3: 7 };
  const page = Math.floor(logical / pageSize);
  const offset = logical % pageSize;
  const frame = table[page];
  const physical = frame === undefined ? null : frame * pageSize + offset;
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>Paging calculator</h3>
        </div>
        <code>page size = {pageSize} B</code>
      </div>
      <label className="input-row">
        <span>Logical address</span>
        <input type="number" min="0" max="4095" value={logical} onChange={(event) => setLogical(Number(event.target.value))} />
      </label>
      <PagingVisual
        logical={logical}
        page={page}
        offset={offset}
        frame={frame}
        physical={physical}
        pageSize={pageSize}
      />
      <div className="translation-grid">
        <div><span>page number</span><strong>{page}</strong></div>
        <div><span>offset</span><strong>{offset}</strong></div>
        <div><span>frame</span><strong>{frame ?? "page fault"}</strong></div>
        <div><span>physical address</span><strong>{physical ?? "not resident"}</strong></div>
      </div>
      <div className="page-table">
        {Object.entries(table).map(([pageNumber, frameNumber]) => (
          <div key={pageNumber} className={Number(pageNumber) === page ? "active" : ""}>
            page {pageNumber} {"->"} frame {frameNumber}
          </div>
        ))}
      </div>
    </section>
  );
}

function CryptoLab() {
  const [step, setStep] = useState(0);
  const steps = [
    ["Certificate", "Browser checks the server certificate and learns the real server public key."],
    ["Session key", "Client creates a fast symmetric session key for this connection."],
    ["Key exchange", "Public-key crypto protects the session key during setup."],
    ["Encrypted data", "Bulk data uses symmetric encryption for confidentiality."],
    ["Integrity/auth", "MAC or AEAD detects tampering; signatures/certificates support authentication."]
  ];
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>Hybrid encryption flow</h3>
        </div>
        <div className="step-count">{step + 1}/{steps.length}</div>
      </div>
      <div className="crypto-flow">
        {steps.map(([label], index) => (
          <button key={label} className={index === step ? "active" : ""} onClick={() => setStep(index)}>
            {label}
          </button>
        ))}
      </div>
      <CryptoFlowVisual step={step} />
      <div className="lab-stage lab-stage-swap" key={step}>
        <h4>{steps[step][0]}</h4>
        <p>{steps[step][1]}</p>
      </div>
    </section>
  );
}

function EncapsulationLab() {
  const [depth, setDepth] = useState(4);
  const layers = [
    ["Application", "HTTP message", "GET /index.html"],
    ["Transport", "TCP segment", "TCP hdr | HTTP message"],
    ["Network", "IP packet", "IP hdr | TCP hdr | HTTP message"],
    ["Link", "Frame", "ETH hdr | IP hdr | TCP hdr | HTTP message | FCS"]
  ];
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>Encapsulation stack</h3>
        </div>
        <input type="range" min="1" max="4" value={depth} onChange={(event) => setDepth(Number(event.target.value))} />
      </div>
      <EncapsulationVisual depth={depth} layers={layers} />
      <div className="stack-view">
        {layers.slice(0, depth).map(([layer, unit, payload]) => (
          <div key={layer}>
            <strong>{layer}</strong>
            <span>{unit}</span>
            <code>{payload}</code>
          </div>
        ))}
      </div>
    </section>
  );
}

function SocketLab() {
  const [index, setIndex] = useState(0);
  const steps = ["socket()", "bind()", "listen()", "accept()", "read()/write()", "close()"];
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>Server socket lifecycle</h3>
        </div>
        <button onClick={() => setIndex((index + 1) % steps.length)}>Next</button>
      </div>
      <SocketLifecycleVisual stepIndex={index} steps={steps} />
      <div className="socket-columns">
        <div>
          <h4>Listening socket</h4>
          {steps.slice(0, 4).map((step, stepIndex) => (
            <span key={step} className={stepIndex <= index ? "active" : ""}>{step}</span>
          ))}
        </div>
        <div>
          <h4>Connected socket</h4>
          {["created by accept()", "read()/write()", "close()"].map((step, stepIndex) => (
            <span key={step} className={index >= stepIndex + 3 ? "active" : ""}>{step}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function UdpDemuxLab() {
  const [dest, setDest] = useState(53);
  const sockets = [
    { port: 53, app: "DNS resolver" },
    { port: 123, app: "NTP client" },
    { port: 5004, app: "RTP media app" }
  ];
  const target = sockets.find((socket) => socket.port === Number(dest));
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>UDP demultiplexing</h3>
        </div>
        <select value={dest} onChange={(event) => setDest(Number(event.target.value))}>
          {sockets.map((socket) => <option key={socket.port} value={socket.port}>port {socket.port}</option>)}
        </select>
      </div>
      <UdpDemuxVisual dest={dest} sockets={sockets} targetApp={target?.app} />
      <div className="packet-box">UDP segment: src 62000 {"->"} dst {dest}</div>
      <div className="socket-list">
        {sockets.map((socket) => (
          <div key={socket.port} className={socket.port === Number(dest) ? "active" : ""}>
            <strong>{socket.app}</strong>
            <span>listening on {socket.port}</span>
          </div>
        ))}
      </div>
      <p className="lab-note">Delivered to: <strong>{target?.app}</strong></p>
    </section>
  );
}

function HttpBuilderLab() {
  const [method, setMethod] = useState("GET");
  const [path, setPath] = useState("/index.html");
  const [host, setHost] = useState("example.com");
  const [cookie, setCookie] = useState(true);
  const request = `${method} ${path} HTTP/1.1\nHost: ${host}\nAccept: text/html${cookie ? "\nCookie: sid=abc123" : ""}\n\n`;
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>HTTP request builder</h3>
        </div>
        <select value={method} onChange={(event) => setMethod(event.target.value)}>
          {["GET", "POST", "PUT", "DELETE"].map((item) => <option key={item}>{item}</option>)}
        </select>
      </div>
      <label className="input-row"><span>Path</span><input value={path} onChange={(event) => setPath(event.target.value)} /></label>
      <label className="input-row"><span>Host</span><input value={host} onChange={(event) => setHost(event.target.value)} /></label>
      <label className="check-row"><input type="checkbox" checked={cookie} onChange={(event) => setCookie(event.target.checked)} /> Cookie</label>
      <HttpMessageVisual method={method} path={path} host={host} cookie={cookie} />
      <pre className="request-box">{request}</pre>
    </section>
  );
}

function RpcLab() {
  const [payload, setPayload] = useState("add(7, 5)");
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>RPC marshalling</h3>
        </div>
      </div>
      <label className="input-row"><span>Call</span><input value={payload} onChange={(event) => setPayload(event.target.value)} /></label>
      <RpcFlowVisual payload={payload} hex={toHex(payload)} />
      <div className="rpc-flow">
        <div><strong>Client stub</strong><span>{payload}</span></div>
        <div><strong>Bytes on network</strong><code>{toHex(payload)}</code></div>
        <div><strong>Server stub</strong><span>unmarshal and execute</span></div>
        <div><strong>Reply</strong><span>result encoded back to client</span></div>
      </div>
    </section>
  );
}

function toHex(value) {
  return Array.from(value).map((char) => char.charCodeAt(0).toString(16).padStart(2, "0")).join(" ");
}

function CidrLab() {
  const [ip, setIp] = useState("192.168.10.42");
  const [prefix, setPrefix] = useState(24);
  const result = useMemo(() => calculateCidr(ip, prefix), [ip, prefix]);
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>CIDR calculator</h3>
        </div>
      </div>
      <label className="input-row"><span>IP</span><input value={ip} onChange={(event) => setIp(event.target.value)} /></label>
      <label className="slider-row">
        <span>Prefix</span>
        <input type="range" min="8" max="30" value={prefix} onChange={(event) => setPrefix(Number(event.target.value))} />
        <strong>/{prefix}</strong>
      </label>
      <CidrBitVisual ip={ip} prefix={prefix} />
      <div className="translation-grid">
        <div><span>mask</span><strong>{result.mask}</strong></div>
        <div><span>network</span><strong>{result.network}</strong></div>
        <div><span>broadcast</span><strong>{result.broadcast}</strong></div>
        <div><span>usable hosts</span><strong>{result.hosts}</strong></div>
      </div>
    </section>
  );
}

function calculateCidr(ip, prefix) {
  const parsed = ipToNumber(ip);
  if (parsed === null) return { mask: "invalid", network: "invalid", broadcast: "invalid", hosts: "invalid" };
  const mask = prefix === 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  const network = (parsed & mask) >>> 0;
  const broadcast = (network | (~mask >>> 0)) >>> 0;
  const hosts = prefix >= 31 ? 2 ** (32 - prefix) : Math.max(0, 2 ** (32 - prefix) - 2);
  return {
    mask: numberToIp(mask),
    network: numberToIp(network),
    broadcast: numberToIp(broadcast),
    hosts
  };
}

function ipToNumber(ip) {
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4 || parts.some((part) => !Number.isInteger(part) || part < 0 || part > 255)) return null;
  return parts.reduce((acc, part) => ((acc << 8) + part) >>> 0, 0);
}

function numberToIp(number) {
  return [24, 16, 8, 0].map((shift) => (number >>> shift) & 255).join(".");
}

function CwndLab() {
  const [ssthresh, setSsthresh] = useState(8);
  const [lossRound, setLossRound] = useState(7);
  const points = useMemo(() => buildCwnd(ssthresh, lossRound), [ssthresh, lossRound]);
  const max = Math.max(...points.map((point) => point.cwnd), 1);
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>Congestion window chart</h3>
        </div>
      </div>
      <label className="slider-row"><span>ssthresh</span><input type="range" min="4" max="16" value={ssthresh} onChange={(event) => setSsthresh(Number(event.target.value))} /><strong>{ssthresh}</strong></label>
      <label className="slider-row"><span>loss round</span><input type="range" min="3" max="12" value={lossRound} onChange={(event) => setLossRound(Number(event.target.value))} /><strong>{lossRound}</strong></label>
      <CwndBarVisual points={points} max={max} />
      <p className="lab-note">当前模型：Tahoe 风格，loss 后 ssthresh = cwnd / 2，并重新 slow start。</p>
    </section>
  );
}

function buildCwnd(initialThreshold, lossRound) {
  const points = [];
  let cwnd = 1;
  let threshold = initialThreshold;
  for (let round = 1; round <= 12; round += 1) {
    points.push({ round, cwnd, loss: round === lossRound });
    if (round === lossRound) {
      threshold = Math.max(1, Math.floor(cwnd / 2));
      cwnd = 1;
    } else if (cwnd < threshold) {
      cwnd *= 2;
    } else {
      cwnd += 1;
    }
  }
  return points;
}

function DijkstraLab() {
  const graph = {
    A: { B: 2, C: 5 },
    B: { A: 2, C: 1, D: 4 },
    C: { A: 5, B: 1, D: 1, E: 7 },
    D: { B: 4, C: 1, E: 3 },
    E: { C: 7, D: 3 }
  };
  const [state, setState] = useState(() => initialDijkstra(graph));
  const current = chooseNext(graph, state);
  function step() {
    if (!current) return;
    const next = {
      settled: [...state.settled, current],
      dist: { ...state.dist },
      prev: { ...state.prev },
      last: current
    };
    Object.entries(graph[current]).forEach(([neighbor, weight]) => {
      if (next.settled.includes(neighbor)) return;
      const candidate = next.dist[current] + weight;
      if (candidate < next.dist[neighbor]) {
        next.dist[neighbor] = candidate;
        next.prev[neighbor] = current;
      }
    });
    setState(next);
  }
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>Dijkstra stepper</h3>
        </div>
        <div className="lab-actions compact">
          <button onClick={() => setState(initialDijkstra(graph))}>Reset</button>
          <button onClick={step} disabled={!current}>Step</button>
        </div>
      </div>
      <DijkstraGraphVisual settled={state.settled} candidate={current} dist={state.dist} />
      <div className="node-grid">
        {Object.keys(graph).map((node) => (
          <div key={node} className={state.settled.includes(node) ? "settled" : current === node ? "candidate" : ""}>
            <strong>{node}</strong>
            <span>{state.dist[node] === Infinity ? "inf" : state.dist[node]}</span>
            <small>prev {state.prev[node] || "-"}</small>
          </div>
        ))}
      </div>
      <p className="lab-note">Next: <strong>{current || "done"}</strong></p>
    </section>
  );
}

function initialDijkstra(graph) {
  return {
    settled: [],
    dist: Object.fromEntries(Object.keys(graph).map((node) => [node, node === "A" ? 0 : Infinity])),
    prev: {},
    last: null
  };
}

function chooseNext(graph, state) {
  return Object.keys(graph)
    .filter((node) => !state.settled.includes(node))
    .sort((a, b) => state.dist[a] - state.dist[b] || a.localeCompare(b))[0];
}

function NatLab() {
  const [host, setHost] = useState("192.168.0.10");
  const [rows, setRows] = useState([
    { inside: "192.168.0.10:51510", outside: "203.0.113.5:40001", remote: "142.250.66.78:443" }
  ]);
  function addMapping() {
    const port = 40001 + rows.length;
    setRows([
      ...rows,
      {
        inside: `${host}:${51510 + rows.length}`,
        outside: `203.0.113.5:${port}`,
        remote: "93.184.216.34:443"
      }
    ]);
  }
  return (
    <section className="lab">
      <div className="lab-head">
        <div>
          <p className="eyebrow">Interactive lab</p>
          <h3>NAT table simulator</h3>
        </div>
        <button onClick={addMapping}>New flow</button>
      </div>
      <NatTopologyVisual rows={rows} highlightHost={host} />
      <select value={host} onChange={(event) => setHost(event.target.value)}>
        <option>192.168.0.10</option>
        <option>192.168.0.11</option>
        <option>192.168.0.25</option>
      </select>
      <div className="nat-table">
        <div className="header">Inside</div>
        <div className="header">Public mapping</div>
        <div className="header">Remote</div>
        {rows.flatMap((row) => [
          <div key={`${row.inside}-i`}>{row.inside}</div>,
          <div key={`${row.inside}-o`}>{row.outside}</div>,
          <div key={`${row.inside}-r`}>{row.remote}</div>
        ])}
      </div>
      <p className="lab-note">返回包命中 public port 后，NAT 才知道该转回哪台内网主机。</p>
    </section>
  );
}
