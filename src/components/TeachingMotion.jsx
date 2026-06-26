export function TabPanel({ className = "", children }) {
  return (
    <div className={`panel-enter ${className}`.trim()}>
      {children}
    </div>
  );
}

export function TcpHandshakeVisual({ step }) {
  const lanes = [];
  if (step >= 0) {
    lanes.push({ label: "SYN, seq=x", dir: "to-right", lane: 0 });
  }
  if (step >= 1) {
    lanes.push({ label: "SYN-ACK, ack=x+1, seq=y", dir: "to-left", lane: 1 });
  }
  if (step >= 2) {
    lanes.push({ label: "ACK, ack=y+1", dir: "to-right", lane: 2 });
  }
  if (step >= 3) {
    lanes.push({ label: "byte stream · 有序字节流", dir: "stream", lane: 0 });
  }

  return (
    <div className="tcp-handshake-visual" aria-hidden="true">
      <div className="tcp-node">Client</div>
      <div className="tcp-lanes">
        {[0, 1, 2].map((laneIndex) => (
          <div key={laneIndex} className="tcp-lane">
            {lanes
              .filter((packet) => packet.lane === laneIndex)
              .map((packet) => (
                <span key={packet.label} className={`tcp-packet ${packet.dir}`}>
                  {packet.label}
                </span>
              ))}
          </div>
        ))}
      </div>
      <div className="tcp-node">Server</div>
    </div>
  );
}

export function DnsFlowVisual({ step }) {
  const nodes = ["Browser", "Local DNS", "Root", "TLD", "Auth", "Answer"];
  const highlightMax = Math.min(step + 1, nodes.length - 1);
  return (
    <div className="dns-flow-visual" aria-hidden="true">
      {nodes.flatMap((label, index) => {
        const items = [
          <span
            key={label}
            className={`dns-flow-node ${index <= highlightMax ? "active" : ""}`}
          >
            {label}
          </span>
        ];
        if (index < nodes.length - 1) {
          items.push(
            <span key={`${label}-arrow`} className="dns-flow-arrow">→</span>
          );
        }
        return items;
      })}
    </div>
  );
}
