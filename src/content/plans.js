export const weekPlans = {
  "wk1-os": {
    goal: "把 OS 看成硬件抽象和资源管理器，特别抓住 user mode、kernel mode、interrupt、system call 的边界。",
    lab: "System call journey：按步骤观察 read() 从用户程序进入内核、等待设备中断、再返回用户态。",
    exam: ["中断和系统调用的区别", "kernel 和 OS 的区别", "为什么需要内存边界"]
  },
  "wk2-process": {
    goal: "建立 process 是资源容器、thread 是执行流的心智模型。",
    lab: "Process/thread memory map：切换进程和线程，看 address space、stack、register、file descriptor 哪些共享。",
    exam: ["process vs thread", "fork 后父子进程行为", "ready 与 blocked 的区别"]
  },
  "wk3-cpu": {
    goal: "从 timeline 和指标理解调度算法，而不是只背 FCFS/SJF/RR 名字。",
    lab: "Scheduling simulator：切换 FCFS、SJF、RR，自动生成 Gantt chart 和 waiting/turnaround/response time。",
    exam: ["turnaround vs response time", "preemptive vs non-preemptive", "starvation 与 aging"]
  },
  "wk3-ipc": {
    goal: "看见 race condition 来自不同 interleaving，理解 mutual exclusion 为什么必须靠原子性。",
    lab: "Race condition interleaving：点击两个线程的 read/modify/write 步骤，观察 lost update。",
    exam: ["critical region vs mutual exclusion", "busy waiting 的成本", "TSL 的硬件原子性"]
  },
  "wk4-memory": {
    goal: "把 base/limit 的限制自然过渡到 paging，能手算 page number、offset、frame 和 physical address。",
    lab: "Paging calculator：输入 logical address，立即算出地址翻译过程。",
    exam: ["external vs internal fragmentation", "logical vs physical address", "TLB hit/miss"]
  },
  "wk5-security": {
    goal: "分清 confidentiality、integrity、authentication，以及 MAC、signature、certificate 的角色。",
    lab: "Hybrid encryption flow：逐步看 session key、public key、certificate、MAC/signature 各自保护什么。",
    exam: ["MAC vs digital signature", "certificate 与 CA", "encrypt-then-MAC"]
  },
  "wk6-osi": {
    goal: "用 layering 和 encapsulation 组织所有网络知识。",
    lab: "Encapsulation stack：从 HTTP message 到 TCP segment、IP packet、link frame 逐层加 header。",
    exam: ["service vs protocol", "OSI vs TCP/IP", "end-to-end vs point-to-point"]
  },
  "wk7-sockets": {
    goal: "记住 socket 是应用和传输层的接口，server two sockets 是核心易错点。",
    lab: "Socket lifecycle：client/server 两列按顺序点亮 primitives。",
    exam: ["listening socket vs connected socket", "bind/listen/accept/connect 顺序", "blocking vs non-blocking"]
  },
  "wk7-dns": {
    goal: "把 DNS 理解为分层、可缓存的分布式数据库。",
    lab: "DNS lookup path：local DNS、root、TLD、authoritative 逐步解析。",
    exam: ["recursive vs iterative", "A/MX/CNAME/NS record", "SMTP vs IMAP"]
  },
  "wk8-udp": {
    goal: "理解 transport layer 的 process-to-process 角色，以及 UDP 简单但有用的原因。",
    lab: "Mux/demux demo：segment 到达后按 port 分发给正确 socket。",
    exam: ["transport vs network", "UDP socket tuple", "UDP 为什么适合 DNS/实时应用"]
  },
  "wk8-http": {
    goal: "把 HTTP 看成 request/response message protocol，重点抓连接、message format、headers、HTTPS、HTTP/2/3。",
    lab: "HTTP request builder：选择 method、path、headers，生成原始请求报文。",
    exam: ["persistent connection", "request/response format", "HTTP/2 与 HTTP/3 动机"]
  },
  "wk9-tcp": {
    goal: "掌握 reliable byte stream、sequence/ack、三次握手、四次挥手和 window。",
    lab: "TCP handshake animation：SYN、SYN-ACK、ACK 和 sequence number 消耗。",
    exam: ["SYN/FIN 是否消耗序列号", "TCP 不保留消息边界", "receive window 是谁维护的"]
  },
  "wk9-protocol": {
    goal: "协议设计必须同时定义 syntax、semantics、timing 和错误处理。",
    lab: "RPC marshalling cards：本地函数参数如何变成 bytes，再在远端恢复。",
    exam: ["protocol 三要素", "marshalling/unmarshalling", "RPC 为什么不能传 pointer"]
  },
  "wk10-addressing": {
    goal: "把 IP 地址看成 interface 的层次化地址；能算 CIDR、mask、host range。",
    lab: "CIDR calculator：输入 IP/prefix 自动计算 network、mask、host count。",
    exam: ["/24 与 /16 的大小", "network address vs host address", "datagram vs virtual circuit"]
  },
  "wk10-congestion": {
    goal: "区分 receive window 和 congestion window，理解 slow start、avoidance、loss response。",
    lab: "CWND chart：调节 ssthresh 和 loss round，观察 Tahoe 风格窗口变化。",
    exam: ["RWND vs CWND", "slow start 为什么是指数增长", "timeout vs fast retransmit"]
  },
  "wk11-routing": {
    goal: "分清 forwarding 和 routing，用 Dijkstra stepper 看 link state 如何形成路径。",
    lab: "Dijkstra stepper：每一步选择最小 tentative distance 并更新邻居。",
    exam: ["forwarding vs routing", "Dijkstra 不能处理负权", "age 字段作用"]
  },
  "wk11-control": {
    goal: "理解 ARP、ICMP、traceroute 这些控制消息如何帮助网络运行和调试。",
    lab: "Traceroute/ARP flow：用 TTL 和 ICMP 看路径发现过程。",
    exam: ["ARP 的局域网范围", "ICMP 不是传输层协议", "traceroute 与 TTL"]
  },
  "wk12-nat": {
    goal: "NAT 是状态化的地址/端口转换；它缓解 IPv4 稀缺但破坏 end-to-end。",
    lab: "NAT table simulator：发起连接生成公网端口映射，返回包按表转回内网主机。",
    exam: ["NAT 不是防火墙", "私有地址不能公网路由", "layering/end-to-end violation"]
  }
};

export const knowledgeEdges = [
  ["OS abstraction", "Process"],
  ["Process", "CPU scheduling"],
  ["Process", "IPC"],
  ["IPC", "Mutual exclusion"],
  ["Process", "Memory management"],
  ["Memory management", "Paging/TLB"],
  ["Layering", "Transport services"],
  ["Transport services", "UDP"],
  ["Transport services", "TCP"],
  ["TCP", "HTTP"],
  ["TCP", "Congestion control"],
  ["Layering", "IP addressing"],
  ["IP addressing", "Routing"],
  ["Routing", "Control plane"],
  ["IP addressing", "NAT"],
  ["DNS", "HTTP"],
  ["Secure communication", "HTTPS/TLS"]
];

export const knowledgeNodes = [
  { id: "OS abstraction", chapter: "wk1-os", group: "OS" },
  { id: "Process", chapter: "wk2-process", group: "OS" },
  { id: "CPU scheduling", chapter: "wk3-cpu", group: "OS" },
  { id: "IPC", chapter: "wk3-ipc", group: "OS" },
  { id: "Mutual exclusion", chapter: "wk3-ipc", group: "OS" },
  { id: "Memory management", chapter: "wk4-memory", group: "OS" },
  { id: "Paging/TLB", chapter: "wk4-memory", group: "OS" },
  { id: "Secure communication", chapter: "wk5-security", group: "Security" },
  { id: "Layering", chapter: "wk6-osi", group: "Network" },
  { id: "DNS", chapter: "wk7-dns", group: "Application" },
  { id: "Transport services", chapter: "wk8-udp", group: "Transport" },
  { id: "UDP", chapter: "wk8-udp", group: "Transport" },
  { id: "HTTP", chapter: "wk8-http", group: "Application" },
  { id: "TCP", chapter: "wk9-tcp", group: "Transport" },
  { id: "Congestion control", chapter: "wk10-congestion", group: "Transport" },
  { id: "IP addressing", chapter: "wk10-addressing", group: "Network" },
  { id: "Routing", chapter: "wk11-routing", group: "Network" },
  { id: "Control plane", chapter: "wk11-control", group: "Network" },
  { id: "NAT", chapter: "wk12-nat", group: "Network" },
  { id: "HTTPS/TLS", chapter: "wk5-security", group: "Security" }
];
