/** Per-unit teaching visuals for all 18 lab modules */

export function SystemCallVisual({ step }) {
  const phases = [
    { id: "user", label: "User mode · 用户态", active: step === 0 },
    { id: "trap", label: "Trap / 陷入内核", active: step === 1 },
    { id: "kernel", label: "Kernel handler · 内核处理", active: step === 2 },
    { id: "irq", label: "Interrupt · 设备中断", active: step === 3 },
    { id: "return", label: "Return · 返回用户态", active: step === 4 }
  ];
  return (
    <div className="lab-visual syscall-visual" aria-hidden="true">
      <div className={`syscall-zone user ${step <= 0 || step === 4 ? "lit" : ""}`}>
        <span className="viz-label">Application</span>
        <code>read(fd, buf, n)</code>
      </div>
      <div className="syscall-arrows">
        {step === 1 && <span className="viz-arrow down anim">trap ↓</span>}
        {step === 4 && <span className="viz-arrow up anim">return ↑</span>}
        {step === 3 && <span className="viz-arrow side anim">IRQ →</span>}
      </div>
      <div className={`syscall-zone kernel ${step >= 2 && step <= 4 ? "lit" : ""}`}>
        <span className="viz-label">Kernel mode</span>
        <span>syscall handler · I/O wait</span>
      </div>
      <div className={`syscall-zone hw ${step === 3 ? "lit" : ""}`}>
        <span className="viz-label">Hardware</span>
        <span>disk / NIC completes</span>
      </div>
      <div className="syscall-phase-row">
        {phases.map((p) => (
          <span key={p.id} className={`syscall-phase ${p.active ? "active" : ""}`}>{p.label}</span>
        ))}
      </div>
    </div>
  );
}

export function ProcessThreadVisual({ mode }) {
  const isProcess = mode === "process";
  return (
    <div className="lab-visual pt-visual" aria-hidden="true">
      {isProcess ? (
        <div className="pt-split">
          <div className="pt-box lit">
            <strong>Process P1</strong>
            <div className="pt-inner separate">code · data · heap</div>
            <div className="pt-inner separate">stack</div>
            <div className="pt-inner separate">open files</div>
          </div>
          <div className="pt-box lit">
            <strong>Process P2</strong>
            <div className="pt-inner separate">code · data · heap</div>
            <div className="pt-inner separate">stack</div>
            <div className="pt-inner separate">open files</div>
          </div>
        </div>
      ) : (
        <div className="pt-box lit wide">
          <strong>One process · 同一进程</strong>
          <div className="pt-inner shared">address space · code · heap · files</div>
          <div className="pt-threads">
            <div className="pt-thread lit">Thread T1 · stack + registers</div>
            <div className="pt-thread lit">Thread T2 · stack + registers</div>
          </div>
        </div>
      )}
      <p className="viz-hint">
        {isProcess
          ? "Processes isolate memory and resources · 进程间资源隔离"
          : "Threads share address space but own stacks · 线程共享地址空间"}
      </p>
    </div>
  );
}

export function RaceTimelineVisual({ log }) {
  const events = log.slice(0, 4).reverse();
  return (
    <div className="lab-visual race-timeline" aria-hidden="true">
      <div className="race-lanes">
        <div className="race-lane">
          <span>Thread A</span>
          <div className="race-track">
            {events.filter((e) => e.startsWith("A:")).map((e, i) => (
              <span key={i} className="race-chip a anim">{e.replace("A: ", "")}</span>
            ))}
          </div>
        </div>
        <div className="race-lane">
          <span>Thread B</span>
          <div className="race-track">
            {events.filter((e) => e.startsWith("B:")).map((e, i) => (
              <span key={i} className="race-chip b anim">{e.replace("B: ", "")}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="race-shared">
        shared memory
        <strong>{log[0]?.includes("write") ? "counter updated" : "counter"}</strong>
      </div>
    </div>
  );
}

export function PagingVisual({ logical, page, offset, frame, physical, pageSize }) {
  const offsetBits = Math.log2(pageSize);
  const pageBits = 12 - offsetBits;
  return (
    <div className="lab-visual paging-visual" aria-hidden="true">
      <div className="paging-flow">
        <div className="paging-block">
          <span>Logical {logical}</span>
          <div className="bit-row">
            <span className="bit-page lit">page {page}</span>
            <span className="bit-offset lit">offset {offset}</span>
          </div>
        </div>
        <span className="viz-arrow anim">→</span>
        <div className={`paging-block table ${frame != null ? "lit" : ""}`}>
          <span>Page table</span>
          <div className={`page-table-mini ${frame != null ? "lit" : ""}`}>
            page {activePage} → frame {frame ?? "—"}
          </div>
        </div>
        <span className="viz-arrow anim">→</span>
        <div className="paging-block">
          <span>Physical</span>
          <strong>{physical ?? "fault"}</strong>
        </div>
      </div>
      <div className="bit-legend">
        <span>{pageBits} bit page #</span>
        <span>{offsetBits} bit offset</span>
      </div>
    </div>
  );
}

export function CryptoFlowVisual({ step }) {
  const flows = [
    { label: "Certificate check", dir: "to-right", tag: "cert" },
    { label: "Session key (sym)", dir: "to-right", tag: "key" },
    { label: "Encrypted bulk", dir: "both", tag: "data" },
    { label: "MAC / AEAD", dir: "to-left", tag: "mac" },
    { label: "Auth OK", dir: "to-left", tag: "ok" }
  ];
  const visible = flows.slice(0, step + 1);
  return (
    <div className="lab-visual crypto-flow-visual" aria-hidden="true">
      <div className="tcp-node">Client</div>
      <div className="crypto-lanes">
        {visible.map((f, i) => (
          <div key={f.tag} className="crypto-lane">
            <span className={`crypto-packet anim ${f.dir} ${f.tag}`}>{f.label}</span>
          </div>
        ))}
      </div>
      <div className="tcp-node">Server</div>
    </div>
  );
}

export function EncapsulationVisual({ depth, layers }) {
  const visible = layers.slice(0, depth);
  return (
    <div className="lab-visual encap-visual" aria-hidden="true">
      <div className="encap-onion">
        {visible.map(([layer], i) => (
          <div
            key={layer}
            className="encap-layer anim"
            style={{ "--layer": i }}
          >
            <strong>{layer}</strong>
          </div>
        ))}
        <div className="encap-payload">payload</div>
      </div>
    </div>
  );
}

export function SocketLifecycleVisual({ stepIndex, steps }) {
  const clientSteps = ["socket()", "connect()", "read/write", "close()"];
  const serverListen = ["socket()", "bind()", "listen()", "accept()"];
  const connected = stepIndex >= 3;
  return (
    <div className="lab-visual socket-visual" aria-hidden="true">
      <div className="socket-col">
        <strong>Client</strong>
        {clientSteps.map((s, i) => (
          <span key={s} className={i <= Math.min(stepIndex, 3) ? "lit anim" : ""}>{s}</span>
        ))}
      </div>
      <div className="socket-wire">
        <span className={`wire-line ${connected ? "connected anim" : ""}`} />
        {connected && <span className="wire-label anim">TCP connection</span>}
      </div>
      <div className="socket-col">
        <strong>Server</strong>
        <span className="socket-sub">Listening socket</span>
        {serverListen.map((s, i) => (
          <span key={s} className={i <= stepIndex ? "lit anim" : ""}>{s}</span>
        ))}
        <span className="socket-sub">Connected socket</span>
        <span className={stepIndex >= 3 ? "lit anim" : ""}>read/write</span>
        <span className={stepIndex >= 5 ? "lit anim" : ""}>close()</span>
      </div>
    </div>
  );
}

export function UdpDemuxVisual({ dest, sockets, targetApp }) {
  return (
    <div className="lab-visual udp-visual" aria-hidden="true">
      <div className="udp-packet anim">
        UDP dst port <strong>{dest}</strong>
      </div>
      <div className="udp-sockets">
        {sockets.map((s) => (
          <div key={s.port} className={`udp-socket ${s.port === Number(dest) ? "lit anim" : ""}`}>
            <strong>{s.app}</strong>
            <span>:{s.port}</span>
            {s.port === Number(dest) && <span className="udp-hit anim">delivered ✓</span>}
          </div>
        ))}
      </div>
      <p className="viz-hint">Demux by destination port · 按目的端口解复用 → {targetApp}</p>
    </div>
  );
}

export function HttpMessageVisual({ method, path, host, cookie }) {
  const lines = [
    { text: `${method} ${path} HTTP/1.1`, type: "request" },
    { text: `Host: ${host}`, type: "header" },
    { text: "Accept: text/html", type: "header" },
    ...(cookie ? [{ text: "Cookie: sid=abc123", type: "cookie" }] : []),
    { text: "", type: "blank" }
  ];
  return (
    <div className="lab-visual http-visual" aria-hidden="true">
      {lines.map((line, i) => (
        <div
          key={i}
          className={`http-line anim ${line.type}`}
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          {line.text || "⏎ blank line ends headers"}
        </div>
      ))}
      <div className="http-body anim">[ optional message body ]</div>
    </div>
  );
}

export function RpcFlowVisual({ payload, hex }) {
  const nodes = [
    { id: "client", label: "Client app", value: payload },
    { id: "cstub", label: "Client stub", value: "marshal" },
    { id: "wire", label: "Network bytes", value: hex },
    { id: "sstub", label: "Server stub", value: "unmarshal" },
    { id: "server", label: "Server fn", value: "execute" }
  ];
  return (
    <div className="lab-visual rpc-visual" aria-hidden="true">
      {nodes.flatMap((n, i) => {
        const items = [
          <div key={n.id} className="rpc-node anim" style={{ animationDelay: `${i * 0.08}s` }}>
            <strong>{n.label}</strong>
            <code>{n.value}</code>
          </div>
        ];
        if (i < nodes.length - 1) {
          items.push(<span key={`${n.id}-arrow`} className="rpc-arrow anim">→</span>);
        }
        return items;
      })}
    </div>
  );
}

export function CidrBitVisual({ ip, prefix }) {
  const parts = ip.split(".").map(Number);
  const bits = parts.flatMap((p) =>
    Array.from({ length: 8 }, (_, i) => (p >> (7 - i)) & 1)
  );
  return (
    <div className="lab-visual cidr-visual" aria-hidden="true">
      <div className="cidr-bits">
        {bits.map((bit, i) => (
          <span
            key={i}
            className={`cidr-bit ${i < prefix ? "network" : "host"} ${i === prefix - 1 ? "boundary" : ""}`}
          >
            {bit}
          </span>
        ))}
      </div>
      <div className="cidr-legend">
        <span className="network">network /{prefix}</span>
        <span className="host">host bits</span>
      </div>
      <p className="viz-hint">{ip} → mask keeps left {prefix} bits as network ID</p>
    </div>
  );
}

export function CwndBarVisual({ points, max }) {
  return (
    <div className="bar-chart cwnd-chart" aria-hidden="true">
      {points.map((point) => (
        <div key={point.round} className={point.loss ? "loss" : ""}>
          <span
            className="cwnd-bar-anim"
            style={{
              height: `${(point.cwnd / max) * 100}%`,
              animationDelay: `${point.round * 0.05}s`
            }}
          />
          <small>{point.round}</small>
        </div>
      ))}
    </div>
  );
}

const DIJKSTRA_EDGES = [
  ["A", "B", 2], ["A", "C", 5], ["B", "C", 1], ["B", "D", 4],
  ["C", "D", 1], ["C", "E", 7], ["D", "E", 3]
];

export function DijkstraGraphVisual({ settled, candidate, dist }) {
  const nodeClass = (n) =>
    settled.includes(n) ? "settled" : candidate === n ? "candidate" : "";
  return (
    <div className="lab-visual dijkstra-graph" aria-hidden="true">
      <svg viewBox="0 0 320 200" className="dijk-svg">
        {DIJKSTRA_EDGES.map(([a, b, w]) => {
          const pos = { A: [40, 100], B: [120, 40], C: [120, 160], D: [220, 100], E: [280, 160] };
          const [x1, y1] = pos[a];
          const [x2, y2] = pos[b];
          const mx = (x1 + x2) / 2;
          const my = (y1 + y2) / 2;
          return (
            <g key={`${a}-${b}`}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} className="dijk-edge" />
              <text x={mx} y={my - 4} className="dijk-weight">{w}</text>
            </g>
          );
        })}
        {Object.entries({ A: [40, 100], B: [120, 40], C: [120, 160], D: [220, 100], E: [280, 160] }).map(([n, [x, y]]) => (
          <g key={n} className={`dijk-node ${nodeClass(n)}`}>
            <circle cx={x} cy={y} r="22" />
            <text x={x} y={y + 4} textAnchor="middle">{n}</text>
            <text x={x} y={y + 38} textAnchor="middle" className="dijk-dist">
              {dist[n] === Infinity ? "∞" : dist[n]}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function ControlPlaneVisual({ step }) {
  const modes = [
    { id: "arp-cache", label: "ARP cache check", active: step === 0 },
    { id: "arp-req", label: "ARP broadcast", active: step === 1 },
    { id: "arp-rep", label: "ARP reply", active: step === 2 },
    { id: "ttl1", label: "TTL = 1", active: step === 3 },
    { id: "ttl+", label: "TTL++", active: step === 4 }
  ];
  return (
    <div className="lab-visual control-visual" aria-hidden="true">
      <div className="control-topology">
        <div className={`control-node ${step <= 2 ? "lit" : ""}`}>Host</div>
        <div className="control-link">
          {step === 1 && <span className="control-packet broadcast anim">Who has IP?</span>}
          {step === 2 && <span className="control-packet reply anim">MAC reply</span>}
          {step >= 3 && <span className="control-packet icmp anim">ICMP TTL exceeded</span>}
        </div>
        <div className={`control-node ${step >= 1 ? "lit" : ""}`}>Router / next hop</div>
        <div className="control-link far">
          {step >= 3 && <span className="control-ttl anim">TTL={step === 3 ? 1 : "n"}</span>}
        </div>
        <div className={`control-node ${step >= 4 ? "lit" : ""}`}>Destination</div>
      </div>
      <div className="syscall-phase-row">
        {modes.map((m) => (
          <span key={m.id} className={`syscall-phase ${m.active ? "active" : ""}`}>{m.label}</span>
        ))}
      </div>
    </div>
  );
}

export function NatTopologyVisual({ rows, highlightHost }) {
  return (
    <div className="lab-visual nat-visual" aria-hidden="true">
      <div className="nat-zone inside">
        <span className="viz-label">Inside LAN</span>
        {["192.168.0.10", "192.168.0.11", "192.168.0.25"].map((h) => (
          <div key={h} className={`nat-host ${h === highlightHost ? "lit anim" : ""}`}>{h}</div>
        ))}
      </div>
      <div className="nat-router">
        <strong>NAT</strong>
        <span>203.0.113.5</span>
        <div className="nat-map-mini">
          {rows.slice(0, 2).map((r) => (
            <div key={r.inside} className="anim">{r.inside} → {r.outside}</div>
          ))}
        </div>
      </div>
      <div className="nat-zone outside">
        <span className="viz-label">Internet</span>
        <div className="nat-host lit">142.250.66.78</div>
        <div className="nat-host lit">93.184.216.34</div>
      </div>
    </div>
  );
}

export function SchedulingTimelineVisual({ segments }) {
  let t = 0;
  return (
    <div className="lab-visual sched-timeline" aria-hidden="true">
      <div className="sched-ruler">
        {Array.from({ length: 6 }, (_, i) => (
          <span key={i}>{i * 4}</span>
        ))}
      </div>
      <div className="sched-ticks">
        {segments.map((seg, i) => {
          const width = seg.end - seg.start;
          const el = (
            <div
              key={`${seg.id}-${i}`}
              className={`sched-tick tone-${seg.id} gantt-bar-anim`}
              style={{ flexGrow: width }}
            >
              {seg.id}
            </div>
          );
          t = seg.end;
          return el;
        })}
      </div>
    </div>
  );
}
