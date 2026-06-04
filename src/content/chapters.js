import wk1 from "../../WK1-OS-Overview.md?raw";
import wk2 from "../../WK2-Process-Intro.md?raw";
import wk3Cpu from "../../WK3-CPU-Scheduling.md?raw";
import wk3Ipc from "../../WK3-IPC.md?raw";
import wk4 from "../../WK4-Memory-Management.md?raw";
import wk5 from "../../WK5-Secure-Communication.md?raw";
import wk6 from "../../WK6-Intro-OSI.md?raw";
import wk7Sockets from "../../WK7-Sockets.md?raw";
import wk7Dns from "../../WK7-DNS-Mail-RPC.md?raw";
import wk8Udp from "../../WK8-Transport-Services-UDP.md?raw";
import wk8Http from "../../WK8-HTTP.md?raw";
import wk9Tcp from "../../WK9-TCP.md?raw";
import wk9Protocol from "../../WK9-Protocol-Design.md?raw";
import wk10Addressing from "../../WK10-Addressing-Switching.md?raw";
import wk10Congestion from "../../WK10-TCP-Flow-Congestion-Control.md?raw";
import wk11Routing from "../../WK11-Routing.md?raw";
import wk11Control from "../../WK11-Control.md?raw";
import wk12Nat from "../../WK12-NAT.md?raw";

const imagePath = (filename) => `${import.meta.env.BASE_URL}images/${filename}`;

export const chapters = [
  {
    id: "wk1-os",
    week: "WK1",
    title: "OS Overview",
    filename: "WK1-OS-Overview.md",
    group: "Operating Systems",
    lab: "system-call",
    image: imagePath("WK1-OS-Overview.png"),
    focus: ["hardware abstraction", "resource management", "system calls", "interrupts"],
    md: wk1
  },
  {
    id: "wk2-process",
    week: "WK2",
    title: "Process Intro",
    filename: "WK2-Process-Intro.md",
    group: "Operating Systems",
    lab: "process-thread",
    image: imagePath("WK2-Process-States.png"),
    focus: ["process states", "PCB/TCB", "fork", "threads"],
    md: wk2
  },
  {
    id: "wk3-cpu",
    week: "WK3",
    title: "CPU Scheduling",
    filename: "WK3-CPU-Scheduling.md",
    group: "Operating Systems",
    lab: "scheduling",
    image: imagePath("WK3-RR-Example.png"),
    focus: ["FCFS", "SJF", "RR", "response time", "turnaround time"],
    md: wk3Cpu
  },
  {
    id: "wk3-ipc",
    week: "WK3",
    title: "IPC",
    filename: "WK3-IPC.md",
    group: "Operating Systems",
    lab: "race-condition",
    image: imagePath("WK3-Race-Condition-Execution.png"),
    focus: ["race condition", "critical region", "mutual exclusion", "TSL"],
    md: wk3Ipc
  },
  {
    id: "wk4-memory",
    week: "WK4",
    title: "Memory Management",
    filename: "WK4-Memory-Management.md",
    group: "Operating Systems",
    lab: "paging",
    image: imagePath("WK4-Paging-Model.png"),
    focus: ["base/limit", "paging", "page fault", "TLB"],
    md: wk4
  },
  {
    id: "wk5-security",
    week: "WK5",
    title: "Secure Communication",
    filename: "WK5-Secure-Communication.md",
    group: "Security",
    lab: "crypto",
    image: imagePath("WK5-Certificates.png"),
    focus: ["confidentiality", "integrity", "authentication", "MAC", "signature"],
    md: wk5
  },
  {
    id: "wk6-osi",
    week: "WK6",
    title: "Intro OSI",
    filename: "WK6-Intro-OSI.md",
    group: "Networks",
    lab: "encapsulation",
    image: imagePath("WK6-OSI-Model.png"),
    focus: ["layering", "service vs protocol", "encapsulation", "narrow waist"],
    md: wk6
  },
  {
    id: "wk7-sockets",
    week: "WK7",
    title: "Socket Programming",
    filename: "WK7-Sockets.md",
    group: "Networks",
    lab: "sockets",
    image: imagePath("WK7-Socket-Primitives.png"),
    focus: ["socket primitives", "5-tuple", "blocking read", "server two sockets"],
    md: wk7Sockets
  },
  {
    id: "wk7-dns",
    week: "WK7",
    title: "DNS, Mail & RPC",
    filename: "WK7-DNS-Mail-RPC.md",
    group: "Application Layer",
    lab: "dns",
    image: imagePath("WK7-DNS-Hierarchy.png"),
    focus: ["DNS hierarchy", "resource records", "SMTP", "IMAP"],
    md: wk7Dns
  },
  {
    id: "wk8-udp",
    week: "WK8",
    title: "Transport Services & UDP",
    filename: "WK8-Transport-Services-UDP.md",
    group: "Transport Layer",
    lab: "udp-demux",
    image: imagePath("WK8-Transport-MUX-DEMUX.png"),
    focus: ["process-to-process", "ports", "UDP header", "mux/demux"],
    md: wk8Udp
  },
  {
    id: "wk8-http",
    week: "WK8",
    title: "HTTP",
    filename: "WK8-HTTP.md",
    group: "Application Layer",
    lab: "http",
    image: imagePath("WK8-HTTP-Request-Example.png"),
    focus: ["request/response", "headers", "cookies", "cache", "HTTP/2"],
    md: wk8Http
  },
  {
    id: "wk9-tcp",
    week: "WK9",
    title: "TCP",
    filename: "WK9-TCP.md",
    group: "Transport Layer",
    lab: "tcp-handshake",
    image: imagePath("WK9-TCP-Header-Format.png"),
    focus: ["three-way handshake", "byte stream", "sequence number", "window"],
    md: wk9Tcp
  },
  {
    id: "wk9-protocol",
    week: "WK9",
    title: "Protocol Design",
    filename: "WK9-Protocol-Design.md",
    group: "Application Layer",
    lab: "rpc",
    image: imagePath("WK9-RPC-Architecture.png"),
    focus: ["syntax", "semantics", "timing", "RPC", "marshalling"],
    md: wk9Protocol
  },
  {
    id: "wk10-addressing",
    week: "WK10",
    title: "Addressing & Switching",
    filename: "WK10-Addressing-Switching.md",
    group: "Network Layer",
    lab: "cidr",
    image: imagePath("WK10-Network-Host-Addresses.png"),
    focus: ["IPv4", "CIDR", "route aggregation", "packet switching"],
    md: wk10Addressing
  },
  {
    id: "wk10-congestion",
    week: "WK10",
    title: "TCP Flow & Congestion",
    filename: "WK10-TCP-Flow-Congestion-Control.md",
    group: "Transport Layer",
    lab: "cwnd",
    image: imagePath("WK10-TCP-Tahoe.png"),
    focus: ["sliding window", "zero window probe", "CWND", "slow start"],
    md: wk10Congestion
  },
  {
    id: "wk11-routing",
    week: "WK11",
    title: "Routing Algorithms",
    filename: "WK11-Routing.md",
    group: "Network Layer",
    lab: "dijkstra",
    image: imagePath("WK11-Dijkstra-Graph-Step.png"),
    focus: ["forwarding vs routing", "Dijkstra", "link state", "distance vector"],
    md: wk11Routing
  },
  {
    id: "wk11-control",
    week: "WK11",
    title: "Control Plane",
    filename: "WK11-Control.md",
    group: "Network Layer",
    lab: "control-plane",
    image: imagePath("WK11-ICMP-Message-Types.png"),
    focus: ["ARP", "ICMP", "traceroute", "data/control plane"],
    md: wk11Control
  },
  {
    id: "wk12-nat",
    week: "WK12",
    title: "NAT & Debugging",
    filename: "WK12-NAT.md",
    group: "Network Layer",
    lab: "nat",
    image: imagePath("WK12-NAT-Mechanism.png"),
    focus: ["private address", "port mapping", "end-to-end", "debugging"],
    md: wk12Nat
  }
];

export const chapterById = Object.fromEntries(chapters.map((chapter) => [chapter.id, chapter]));
