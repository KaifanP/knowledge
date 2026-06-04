# COMP30023 Interactive Revision Web Plan

目标：把现有 `WK*.md` 笔记变成一个本地互动复习网页。网页第一屏就是学习工作台：左侧章节导航，中间阅读与图片，右侧当前章节重点、题卡、进度和互动实验入口。

## 全局结构

- 阅读模式：渲染原始 Markdown，保留图片、代码块、表格和章节层级。
- 搜索模式：跨全部 WK 搜索关键词，显示命中章节和片段。
- 互动实验：每个 WK 绑定一个最能帮助理解的交互模块。
- 易错题：每章提供判断、选择和简答提示，优先覆盖常见错误。
- 知识地图：把 OS、process、IPC、memory、network stack、transport、routing、NAT 连接起来。
- 进度记录：用浏览器 localStorage 记录完成、收藏、不熟、quiz 正确率。

## WK1 - OS Overview

理解目标：OS 的本质是硬件抽象和资源管理；用户态、内核态、中断、系统调用之间的边界要清楚。

互动规划：
- System call journey：用户程序发起 `read()`，一步步经过 user mode、trap、kernel、device interrupt、return。
- Mode switch 对照：点击事件，判断它发生在 user mode 还是 kernel mode。
- Stack/subroutine 小动画：函数调用时 stack frame 如何压入和弹出。

题型重点：
- 中断 vs 系统调用。
- OS kernel vs whole OS。
- 为什么需要 memory boundary。

第一版实现：system call stepper。

## WK2 - Process Intro

理解目标：process 是资源容器，thread 是执行流；fork、PCB/TCB、process states 和 address space 是核心。

互动规划：
- Process state machine：new/ready/running/blocked/terminated，选择事件触发状态转移。
- Fork visualizer：给一段 fork 代码，展示父子进程各自路径。
- Process vs thread memory map：切换 process/thread，看哪些共享、哪些独立。

题型重点：
- process 和 thread 的边界。
- fork 后变量和地址空间的理解。
- blocked 和 ready 的区别。

第一版实现：process/thread memory map。

## WK3 - CPU Scheduling

理解目标：调度算法的差异要能从 timeline 看出来，而不是只背定义。

互动规划：
- Scheduling simulator：输入 arrival/burst/priority，切换 FCFS、SJF、RR、MLFQ，自动生成 Gantt chart。
- Metrics calculator：计算 waiting time、turnaround time、response time。
- Time quantum slider：观察 RR 响应时间和 context switch 开销。

题型重点：
- turnaround vs response time。
- preemptive vs non-preemptive。
- starvation 和 aging。

第一版实现：FCFS/SJF/RR Gantt chart + 指标。

## WK3 - IPC

理解目标：race condition 是 interleaving 导致的错误；mutual exclusion 是保证 critical region 的手段。

互动规划：
- Race condition interleaving：两个线程执行 read/modify/write，点击不同交错顺序观察错误结果。
- Lock variable vs TSL：展示为什么普通 lock variable 不原子。
- Deadlock conditions checker：输入资源等待关系，判断是否可能死锁。

题型重点：
- critical region vs mutual exclusion。
- busy waiting 的成本。
- TSL 为什么需要硬件原子性。

第一版实现：race condition interleaving。

## WK4 - Memory Management

理解目标：从 base/limit 到 paging 的动机要连起来；地址翻译、page fault、replacement algorithm 要会算。

互动规划：
- Address translation calculator：输入 logical address、page size、page table，算 page number、offset、frame、physical address。
- Page replacement simulator：FIFO、Second chance、LRU 对同一 reference string 的 page fault 数比较。
- TLB hit/miss visualizer：看 TLB 如何减少 page table access。

题型重点：
- external vs internal fragmentation。
- logical address vs physical address。
- TLB 命中后是否还查页表。

第一版实现：paging calculator。

## WK5 - Secure Communication

理解目标：confidentiality、integrity、authentication 分别解决不同问题；MAC、signature、certificate 不能混。

互动规划：
- Security goal matcher：给攻击场景，选择需要的安全属性。
- Hybrid encryption flow：点击消息，观察 symmetric key、public key、certificate 各自作用。
- MAC vs signature 对照卡：谁能验证、是否可否认、用什么 key。

题型重点：
- MAC vs digital signature。
- certificate 为什么需要 CA。
- encrypt-then-MAC 的顺序。

第一版实现：hybrid encryption flow。

## WK6 - Intro OSI

理解目标：service 和 protocol 的区别、layering、encapsulation、point-to-point/end-to-end 是网络后续内容的根。

互动规划：
- Encapsulation stack：从 HTTP message 到 TCP segment、IP packet、frame，逐层加 header。
- OSI vs TCP/IP drag match：把层和协议拖到正确位置。
- Narrow waist explorer：展示 IP 如何连接上层协议和下层网络技术。

题型重点：
- service vs protocol。
- OSI vs TCP/IP 层数和映射。
- end-to-end vs point-to-point。

第一版实现：encapsulation stack。

## WK7 - Sockets

理解目标：socket 是应用和传输层之间的接口；client/server 调用顺序和 server two sockets 非常重要。

互动规划：
- Socket lifecycle：client 和 server 两列，按顺序点亮 socket/bind/listen/accept/connect/read/write/close。
- Blocking read demo：数据没到时 read 阻塞；non-blocking 立即返回。
- 5-tuple builder：输入 IP/port/protocol，区分 TCP connection 和 UDP socket。

题型重点：
- server 为什么需要 listening socket 和 connected socket。
- bind/listen/accept/connect 的顺序。
- blocking vs non-blocking。

第一版实现：socket lifecycle。

## WK7 - DNS, Mail & RPC

理解目标：DNS 是分层数据库；邮件系统由 UA/MTA/MDA 和 SMTP/IMAP/POP3 组成；RPC 需要 marshalling。

互动规划：
- DNS lookup path：local DNS、root、TLD、authoritative 逐步解析。
- DNS cache TTL：调整 TTL，看后续查询是否命中缓存。
- Mail route visualizer：sender UA 到 receiver mailbox 的协议路径。

题型重点：
- recursive vs iterative query。
- A/MX/CNAME/NS records。
- SMTP vs IMAP/POP3。

第一版实现：DNS lookup path。

## WK8 - Transport Services & UDP

理解目标：transport layer 提供 process-to-process communication；UDP 简单、无连接、无可靠性但低开销。

互动规划：
- Multiplexing/demultiplexing：多个 app 使用端口，segment 到达后分发给正确 socket。
- UDP header builder：source port、dest port、length、checksum。
- Reflection DDoS scenario：小请求如何放大成大响应。

题型重点：
- transport vs network layer。
- UDP socket 是什么 tuple。
- UDP 为什么仍然有用。

第一版实现：mux/demux demo。

## WK8 - HTTP

理解目标：HTTP 是 request/response 协议；connection、headers、cookies、cache 是考试常见点。

互动规划：
- HTTP request builder：选择 method/path/header/body，生成 request message。
- Persistent vs non-persistent timing：对象数量和 RTT 变化时比较连接成本。
- Cache decision flow：Cache-Control、Expires、ETag、If-None-Match。

题型重点：
- persistent connection 的收益。
- cookie vs session。
- HTTP/2 和 HTTP/3 的动机。

第一版实现：request builder。

## WK9 - TCP

理解目标：TCP 是 reliable byte stream；三次握手、四次挥手、sequence/ack/window 是计算题核心。

互动规划：
- Three-way handshake animation：SYN、SYN-ACK、ACK 和 sequence number 消耗。
- TCP close animation：FIN/RST 和 half-close。
- Sliding window byte stream：拖动 ACK 观察窗口移动。

题型重点：
- SYN/FIN 是否占序列号。
- byte stream 不保留消息边界。
- receive window 是接收方通告的。

第一版实现：handshake animation。

## WK9 - Protocol Design

理解目标：协议设计需要明确 syntax、semantics、timing；RPC 把本地调用伪装成远程调用但无法传指针。

互动规划：
- Protocol designer checklist：按 syntax/semantics/timing/error handling 补全一个协议。
- RPC marshalling visualizer：函数参数如何变成 bytes，远端如何 unmarshal。
- FIN vs RST decision：场景判断正常关闭还是硬关闭。

题型重点：
- protocol 三要素。
- marshalling/unmarshalling。
- 为什么 RPC 不能直接传 pointer。

第一版实现：RPC marshalling cards。

## WK10 - Addressing & Switching

理解目标：IP 地址分配给 interface；prefix/subnet/route aggregation 是地址题核心。

互动规划：
- CIDR calculator：输入 IP/prefix，算 network、host range、mask。
- Route aggregation visualizer：多个前缀合并成更短前缀。
- Packet switching path：store-and-forward 每跳延迟。

题型重点：
- `/24` 和 `/16` 谁更大。
- network address vs host address。
- datagram vs virtual circuit。

第一版实现：CIDR calculator。

## WK10 - TCP Flow & Congestion Control

理解目标：sliding window 解决可靠、有序、流控；CWND 解决网络拥塞；slow start 实际是指数增长。

互动规划：
- Congestion window chart：设置 ssthresh/loss round，看 slow start、avoidance、loss 后变化。
- Zero window probe demo：window=0 后 persist timer 如何防死锁。
- Fast retransmit demo：3 duplicate ACK 触发重传。

题型重点：
- receive window vs congestion window。
- slow start 名字为什么误导。
- timeout 和 fast retransmit 的区别。

第一版实现：CWND chart。

## WK11 - Routing

理解目标：forwarding 是本地查表动作，routing 是构建路由表；Dijkstra 和 link state 是重点。

互动规划：
- Dijkstra stepper：每一步选择最小 tentative distance，更新邻居。
- Flooding duplicate suppression：TTL/sequence number 如何避免无限转发。
- Distance vector vs link state compare：信息来源和收敛方式。

题型重点：
- forwarding vs routing。
- Dijkstra 不能处理负权。
- age 字段的作用。

第一版实现：Dijkstra stepper。

## WK11 - Control

理解目标：ARP、ICMP、traceroute 是控制平面的具体工具；data plane/control plane 区分要清楚。

互动规划：
- ARP resolution path：同一 LAN 中 IP 到 MAC 如何解析。
- Traceroute timeline：TTL 从 1 开始，ICMP Time Exceeded 如何返回。
- Data/control plane classifier：给动作判断属于哪个 plane。

题型重点：
- ARP 作用在局域网内。
- ICMP 是控制消息，不是传输层协议。
- traceroute 和 TTL 的关系。

第一版实现：traceroute/ARP flow。

## WK12 - NAT

理解目标：NAT 是地址/端口转换和状态维护；它缓解 IPv4 稀缺，但破坏 end-to-end。

互动规划：
- NAT table simulator：内网 host 发起连接，生成 public port 映射，返回包如何查表。
- UPnP risk scenario：应用自动开放端口的风险。
- Network debugging checklist：从 local host、gateway、DNS、routing、remote service 逐层排查。

题型重点：
- NAT 不是防火墙。
- 私有地址不能在公网路由。
- NAT 为什么违反 layering/end-to-end。

第一版实现：NAT table simulator。

## 第一版交付范围

- 本地 Vite + React 网页。
- 自动接入 18 个 `WK*.md` 文件和 `images/` 图片。
- 全局搜索、章节导航、阅读进度、收藏/不熟标记。
- 每章 quiz。
- 知识地图。
- 首批互动实验覆盖所有 WK 文件；复杂实验先做成可操作的轻量版本，后续可继续加深。
