const make = (question, options, answer, explain) => ({ question, options, answer, explain });

export const quizzes = {
  "wk1-os": [
    make("System call 和 interrupt 最核心的区别是什么？", ["system call 通常由程序主动请求服务；interrupt 通常由硬件或异步事件触发", "interrupt 一定来自用户程序", "system call 不会进入 kernel mode"], 0, "两者都可能导致控制权进入内核，但触发来源和意图不同。"),
    make("Kernel mode 的权限更高主要是为了什么？", ["允许直接执行特权指令和访问受保护资源", "让普通应用运行更快", "避免使用 stack"], 0, "内核需要管理硬件和保护资源，因此必须有特权模式。"),
    make("Memory boundary 的直接目的是什么？", ["防止进程随意访问其他进程或 OS 的内存", "让 CPU cache 更大", "让程序自动并行"], 0, "边界和保护是多道程序安全运行的基础。")
  ],
  "wk2-process": [
    make("Process 和 thread 的正确关系是？", ["process 持有资源和地址空间，thread 是执行流", "thread 持有独立地址空间，process 只是调度单位", "process 和 thread 完全等价"], 0, "线程通常共享同一进程的地址空间，但各自有 stack/register 等执行状态。"),
    make("Running process 等待磁盘 I/O 时通常会进入哪个状态？", ["Blocked", "Ready", "Terminated"], 0, "等待外部事件完成时不能继续运行，也不是已经 ready。"),
    make("fork 后父子进程的变量关系更接近哪一种？", ["逻辑上各自拥有一份地址空间", "完全共享所有变量", "子进程不能访问代码段"], 0, "现代系统可能用 copy-on-write，但语义上父子地址空间独立。")
  ],
  "wk3-cpu": [
    make("Turnaround time 通常等于什么？", ["完成时间 - 到达时间", "第一次运行时间 - 到达时间", "等待时间 - burst time"], 0, "Response time 才关注第一次响应。"),
    make("Round Robin 的 time quantum 太小，最明显的问题是？", ["context switch 开销变大", "永远退化成 FCFS", "无法抢占"], 0, "时间片太小会频繁切换，吞吐下降。"),
    make("SJF 的主要风险是什么？", ["长作业可能 starvation", "一定比 RR 响应慢", "无法计算 waiting time"], 0, "短作业优先可能长期推迟长作业。")
  ],
  "wk3-ipc": [
    make("Race condition 的根源是？", ["共享状态被不同 interleaving 以非原子方式访问", "程序使用了太多函数", "CPU 速度太快"], 0, "read-modify-write 这类序列如果可交错，就可能丢更新。"),
    make("Critical region 和 mutual exclusion 的关系是？", ["critical region 是代码区域；mutual exclusion 是保护性质/机制", "二者完全同义", "mutual exclusion 只用于内存分页"], 0, "一个是被保护的区域，一个是保护目标。"),
    make("为什么普通 lock variable 不够安全？", ["检查和设置不是原子操作", "变量不能放在内存中", "锁只能用于一个进程"], 0, "两个线程可能同时看到 unlocked，然后同时进入。")
  ],
  "wk4-memory": [
    make("Paging 主要解决了 base/limit 的哪个问题？", ["进程必须占用连续物理内存", "CPU 无法执行加法", "所有程序都必须使用同一 stack"], 0, "分页允许逻辑页面映射到不连续的物理页框。"),
    make("Logical address 被分页系统拆成什么？", ["page number 和 offset", "base 和 limit", "MAC 和 IP"], 0, "page number 查页表，offset 在页内保持不变。"),
    make("TLB hit 时通常意味着什么？", ["可以跳过慢的页表访问", "一定发生 page fault", "物理内存不存在该页"], 0, "TLB 缓存最近的地址翻译。")
  ],
  "wk5-security": [
    make("MAC 和 digital signature 最大区别之一是？", ["MAC 使用共享密钥；签名使用私钥/公钥", "MAC 只能加密图片", "签名不能验证身份"], 0, "MAC 双方共享 secret，签名能让持公钥者验证私钥持有者。"),
    make("Certificate 解决的核心问题是？", ["把公钥和身份可信地绑定起来", "让 HTTP 变成 UDP", "替代所有加密算法"], 0, "CA 对身份和公钥绑定做背书。"),
    make("Confidentiality 主要防止什么？", ["未授权读取内容", "消息被静默篡改", "发送方否认发送"], 0, "保密性关注内容不被看见；完整性和认证解决其他问题。")
  ],
  "wk6-osi": [
    make("Service 和 protocol 的区别更接近哪项？", ["service 是给上层提供什么；protocol 是同层实体如何通信", "service 只用于物理层", "protocol 是用户界面"], 0, "这是分层模型中很常考的边界。"),
    make("Encapsulation 发生时通常会怎样？", ["每层在数据前后加入自己的控制信息", "每层删除所有 header", "只有应用层处理 header"], 0, "下传时逐层封装，上交时逐层解封装。"),
    make("IP narrow waist 的意义是？", ["多种上层协议和下层技术通过 IP 汇合", "IP 只能运行在一种链路上", "IP 替代 TCP"], 0, "窄腰让互联网可扩展。")
  ],
  "wk7-sockets": [
    make("TCP server 为什么通常有两个 socket？", ["一个 listening socket 接收连接，一个 connected socket 与特定 client 通信", "一个 socket 只能读，另一个只能写", "因为 UDP 要求两个 socket"], 0, "accept 返回的 connected socket 代表具体连接。"),
    make("client 主动建立 TCP 连接通常调用什么？", ["connect", "listen", "accept"], 0, "listen/accept 是 server 侧。"),
    make("Blocking read 在没有数据时会怎样？", ["等待直到数据到达或出错", "立即返回所有未来数据", "自动关闭 socket"], 0, "阻塞语义是网络编程的核心行为。")
  ],
  "wk7-dns": [
    make("Authoritative DNS server 的角色是？", ["对某个 zone 的记录给出权威答案", "只缓存浏览器历史", "负责发送邮件正文"], 0, "最终记录来源通常在 authoritative server。"),
    make("MX record 主要用于什么？", ["指向处理该域邮件的 mail server", "把名字映射到 IPv4 地址", "表示别名"], 0, "A 记录映射 IPv4，CNAME 是别名。"),
    make("IMAP 和 SMTP 的区别是？", ["SMTP 主要发送/转发邮件；IMAP 主要读取/同步邮箱", "IMAP 负责 DNS 查询", "SMTP 只能传图片"], 0, "邮件发送和读取是不同协议角色。")
  ],
  "wk8-udp": [
    make("Transport layer 相比 network layer 多关注什么？", ["process-to-process communication", "单个链路上的电信号", "显示网页样式"], 0, "端口让传输层能把数据交给正确进程。"),
    make("UDP 的特点是？", ["无连接、低开销、不保证可靠交付", "必须三次握手", "保证按序字节流"], 0, "可靠按序字节流是 TCP 的特点。"),
    make("Demultiplexing 主要依靠什么？", ["端口号和协议等 socket 标识", "屏幕分辨率", "文件扩展名"], 0, "收到 segment 后根据头部字段交给正确 socket。")
  ],
  "wk8-http": [
    make("HTTP 的基本交互模型是？", ["request/response", "peer-to-peer flooding", "CPU interrupt only"], 0, "客户端发请求，服务器回响应。"),
    make("Persistent connection 的主要收益是？", ["复用 TCP 连接，减少重复握手开销", "让 UDP 变可靠", "完全取消 header"], 0, "多个对象可以使用同一 TCP connection。"),
    make("Cookie 通常用于什么？", ["在无状态 HTTP 上携带会话相关标识", "替代 IP 地址", "加密 TCP header"], 0, "HTTP 本身无状态，cookie 帮助服务端关联请求。")
  ],
  "wk9-tcp": [
    make("TCP 为什么叫 byte stream？", ["应用写入的消息边界不被 TCP 保留", "TCP 只能发送一个 byte", "TCP 不使用 sequence number"], 0, "接收方看到的是有序字节流。"),
    make("SYN 是否消耗 sequence number？", ["是", "否", "只在 UDP 中消耗"], 0, "SYN 和 FIN 都会消耗一个序列号。"),
    make("Receive window 由谁通告？", ["接收方", "路由器", "DNS server"], 0, "它反映接收方还能接收多少数据。")
  ],
  "wk9-protocol": [
    make("Protocol design 至少要定义什么？", ["syntax、semantics、timing 等规则", "只定义 UI 颜色", "只定义文件名"], 0, "消息格式、含义、时序都要明确。"),
    make("Marshalling 是什么？", ["把参数/结构编码成可传输 bytes", "把路由器关机", "把 TCP 改成 UDP"], 0, "RPC 调用必须把本地数据表示转成网络表示。"),
    make("RPC 为什么不能直接传 pointer？", ["远端进程地址空间不同，指针值无意义", "pointer 只能在 DNS 中使用", "pointer 会自动变成 IP"], 0, "地址只在本进程上下文内有意义。")
  ],
  "wk10-addressing": [
    make("/24 和 /16 哪个网络通常容纳更多 host？", ["/16", "/24", "一样多"], 0, "prefix 越短，host bits 越多。"),
    make("IP 地址更准确地说分配给什么？", ["interface", "整台主机且只能一个", "应用层 header"], 0, "路由器有多个接口，也就有多个 IP。"),
    make("Route aggregation 的目的是什么？", ["用更短前缀合并多条路由，缩小路由表", "把所有包改成广播", "隐藏 TCP header"], 0, "层次化地址让聚合成为可能。")
  ],
  "wk10-congestion": [
    make("CWND 和 RWND 的区别是？", ["CWND 反映网络拥塞控制；RWND 反映接收方缓冲能力", "二者完全相同", "RWND 是 DNS 字段"], 0, "实际可发送窗口受两者共同限制。"),
    make("Slow start 的增长形态是？", ["指数增长", "完全不增长", "每小时增长一次"], 0, "每个 RTT 大致翻倍，名字容易误导。"),
    make("3 个 duplicate ACK 常触发什么？", ["fast retransmit", "DNS cache flush", "ARP broadcast"], 0, "这强烈暗示中间某个 segment 丢失。")
  ],
  "wk11-routing": [
    make("Forwarding 和 routing 的区别是？", ["forwarding 是按表转发包；routing 是计算/维护路由表", "routing 只发生在应用层", "二者完全相同"], 0, "一个是数据平面动作，一个是路径选择过程。"),
    make("Dijkstra 每一步选择什么节点？", ["当前 tentative distance 最小的未确定节点", "名字最长的节点", "随机节点"], 0, "贪心选择最小临时距离。"),
    make("Link state routing 中 age 字段常用于什么？", ["让旧的链路状态信息过期", "表示网页缓存时间", "统计应用线程数"], 0, "避免陈旧信息永久存在。")
  ],
  "wk11-control": [
    make("ARP 主要解决什么？", ["同一局域网内 IP 地址到 MAC 地址的映射", "HTTP cookie 加密", "TCP 拥塞窗口计算"], 0, "ARP 工作在本地链路范围。"),
    make("Traceroute 为什么能发现路径？", ["逐步增加 TTL 并接收 ICMP Time Exceeded", "让 DNS 返回所有路由器", "强制 NAT 打印表"], 0, "每一跳 TTL 到 0 时通常返回 ICMP。"),
    make("ICMP 更接近什么？", ["网络层控制/错误报告消息", "传输层可靠字节流", "应用层邮件协议"], 0, "ICMP 支持诊断和错误报告。")
  ],
  "wk12-nat": [
    make("NAT table 为什么必须维护状态？", ["返回包需要根据公网端口映射回内部主机", "为了渲染 HTML", "为了计算 CPU waiting time"], 0, "端口映射是连接状态的一部分。"),
    make("NAT 是否等价于 firewall？", ["不是", "是，完全一样", "只在 IPv6 中一样"], 0, "NAT 有一定屏蔽效果，但不是防火墙策略本身。"),
    make("私有地址为什么不能直接在公网通信？", ["公网路由器不会全局路由这些地址", "私有地址只能用于 UDP", "私有地址没有二进制表示"], 0, "RFC1918 地址在不同私网可重复使用。")
  ]
};
