// slide-audited against 2026 PDFs
// Bilingual dictation items per chapter — definitions, formulas, standard phrases from slides.
// Source of truth for the Recite tab and WK*.md Dictation sections.

export const recitation = {
  "wk1-os": {
    summary: "Memorise the OS definition, hardware-abstraction goals, kernel boundary, interrupts, and syscalls.",
    summaryZh: "默写 OS 定义、硬件抽象目标、内核边界、中断与系统调用。",
    items: [
      {
        en: "Define operating system (slide wording).",
        zh: "用课件原文定义操作系统。",
        answerEn: "A program that interfaces the machine with the application programs; its job is to make other programs run efficiently.",
        answerZh: "在机器与应用程序之间提供接口的程序；其任务是让其他程序高效运行。",
        slide: "p.2"
      },
      {
        en: "State the two core functions of an OS.",
        zh: "写出 OS 的两大核心功能。",
        answerEn: "Hardware abstraction and resource management.",
        answerZh: "硬件抽象（Hardware Abstraction）和资源管理（Resource Management）。",
        slide: "p.2"
      },
      {
        en: "Hardware abstraction — two goals (slide p.3).",
        zh: "硬件抽象的两个目标（课件 p.3）。",
        answerEn: "(1) Simplify the computer model; (2) provide each application a dedicated abstract machine.",
        answerZh: "（1）简化计算机模型；（2）为每个应用提供看似专用的抽象机器。",
        slide: "p.3"
      },
      {
        en: "Name four abstractions the OS provides over hardware.",
        zh: "写出 OS 提供的四种硬件抽象。",
        answerEn: "Process, thread, address space, file (and socket).",
        answerZh: "进程（Process）、线程（Thread）、地址空间（Address Space）、文件（File）（及套接字 Socket）。",
        slide: "p.4"
      },
      {
        en: "Define OS kernel (slide p.20).",
        zh: "用课件 p.20 定义 OS kernel。",
        answerEn: "Part of the OS in kernel mode — core functions for scheduling, resource allocation, and I/O device access.",
        answerZh: "内核态运行的 OS 部分——调度、资源分配、访问 I/O 设备的核心功能。",
        slide: "p.20"
      },
      {
        en: "User vs kernel mode (slide p.18–19).",
        zh: "用户态 vs 内核态（课件 p.18–19）。",
        answerEn: "User: cannot issue privileged instructions; only OS-allowed memory. Kernel: all instructions; all memory.",
        answerZh: "用户态：不能执行特权指令；只能访问 OS 允许的内存。内核态：全部指令；全部内存。",
        slide: "p.18–19"
      },
      {
        en: "Privileged instruction (slide p.19).",
        zh: "特权指令（课件 p.19）。",
        answerEn: "Instructions that affect control of the machine or do I/O.",
        answerZh: "影响机器控制或执行 I/O 的指令。",
        slide: "p.19"
      },
      {
        en: "Stack frame contents (slide p.12).",
        zh: "栈帧内容（课件 p.12）。",
        answerEn: "Return address, saved registers, and local variables; stack pointer points to top of stack.",
        answerZh: "返回地址、保存的寄存器、局部变量；栈指针指向栈顶。",
        slide: "p.12"
      },
      {
        en: "List three outcomes after interrupt handling returns.",
        zh: "列出中断处理返回后的三种结局。",
        answerEn: "(1) Resume interrupted program; (2) OS kills it (fatal exception); (3) OS schedules another process.",
        answerZh: "（1）恢复被中断程序；（2）OS 杀掉它（致命异常）；（3）OS 调度另一个进程。",
        slide: "p.23"
      },
      {
        en: "Can a system call block the caller? What does the kernel do meanwhile?",
        zh: "系统调用会阻塞调用者吗？此时内核做什么？",
        answerEn: "Yes (e.g. read()); the kernel may schedule another ready process until an interrupt wakes the blocker.",
        answerZh: "会（如 read()）；内核可调度另一个 ready 进程，直到中断唤醒阻塞者。",
        slide: "p.25"
      },
      {
        en: "System call execution — five steps (slide p.25).",
        zh: "系统调用执行的五个步骤（课件 p.25）。",
        answerEn: "(1) Put syscall number in register; (2) execute syscall instruction; (3) CPU switches to kernel mode; (4) kernel looks up syscall table; (5) execute handler and return.",
        answerZh: "（1）系统调用号放入寄存器；（2）执行 syscall 指令；（3）CPU 切换到内核态；（4）内核查系统调用表；（5）执行处理程序并返回。",
        slide: "p.25"
      },
      {
        en: "Interrupt vs system call — sync/async and who triggers.",
        zh: "中断 vs 系统调用：同步/异步与触发者。",
        answerEn: "Interrupt = asynchronous event (hardware or exception); system call = synchronous request initiated by the program.",
        answerZh: "Interrupt = 异步事件（硬件或异常）；system call = 程序主动发起的同步请求。",
        slide: "p.25"
      },
    ]
  },
  "wk2-process": {
    summary: "Memorise process/thread definitions, three states, PCB, fork/exec, and thread sharing.",
    summaryZh: "默写 process/thread 定义、三状态、PCB、fork/exec 与线程共享。",
    items: [
      {
        en: "Define process (slide wording).",
        zh: "用课件原文定义 process。",
        answerEn: "A running program.",
        answerZh: "运行中的程序（A running program）。",
        slide: "p.2"
      },
      {
        en: "List the three basic process states.",
        zh: "列出进程的三种基本状态。",
        answerEn: "Running, Ready, Blocked.",
        answerZh: "Running（运行）、Ready（就绪）、Blocked（阻塞）。",
        slide: "p.12"
      },
      {
        en: "When does a running process enter Blocked state?",
        zh: "运行中的进程何时进入 Blocked？",
        answerEn: "When it waits for an event it cannot complete immediately (e.g. disk I/O, waiting for input).",
        answerZh: "等待无法立即完成的事件时（如磁盘 I/O、等待输入）。",
        slide: "p.12"
      },
      {
        en: "PCB fields (slide p.14).",
        zh: "PCB 字段（课件 p.14）。",
        answerEn: "PID, parent process, memory management info, file descriptors, priority, used CPU time; execution context: PC, SP, registers.",
        answerZh: "PID、父进程、内存管理信息、文件描述符、优先级、已用 CPU 时间；执行上下文：PC、SP、寄存器。",
        slide: "p.14"
      },
      {
        en: "After fork() — same vs different (slide p.9).",
        zh: "fork() 后相同与不同（课件 p.9）。",
        answerEn: "Different address spaces; same memory image, PC, registers, and open file handles.",
        answerZh: "不同地址空间；相同内存映像、PC、寄存器、打开文件句柄。",
        slide: "p.9"
      },
      {
        en: "What does exec() do?",
        zh: "exec() 做什么？",
        answerEn: "Replaces the current process image with a new program; typically called after fork().",
        answerZh: "用新程序替换当前进程映像；通常在 fork() 之后调用。",
        slide: "p.10"
      },
      {
        en: "Ready → Running — who decides?",
        zh: "Ready → Running 由谁决定？",
        answerEn: "The OS scheduler selects a ready process/thread and dispatches it to the CPU.",
        answerZh: "OS 调度器从 ready 队列选出进程/线程并分派到 CPU。",
        slide: "p.12"
      },
      {
        en: "Define thread.",
        zh: "定义 thread。",
        answerEn: "A unit of execution within a process.",
        answerZh: "进程内的执行单元（unit of execution within a process）。",
        slide: "p.15"
      },
      {
        en: "Where is an idle thread's PC and SP stored?",
        zh: "未运行线程的 PC 和 SP 存在哪里？",
        answerEn: "In its TCB in memory; the CPU's PC/SP point at whichever thread is currently running.",
        answerZh: "存在内存中该线程的 TCB 里；CPU 的 PC/SP 指向当前正在运行的线程。",
        slide: "p.15"
      },
      {
        en: "Threads share vs own — code, data, heap, stack.",
        zh: "线程共享什么、各自拥有什么？",
        answerEn: "Share code, data, and heap; each thread has its own stack.",
        answerZh: "共享 code、data、heap；每个线程拥有独立 stack。",
        slide: "p.19"
      },
      {
        en: "Thread vs process — which is lighter to create?",
        zh: "创建 thread 还是 process 更轻？",
        answerEn: "Thread — it shares the address space and does not require a full resource duplicate.",
        answerZh: "Thread 更轻——共享地址空间，无需复制全部资源。",
        slide: "p.19"
      },
      {
        en: "Two benefits of multithreading (slide p.22).",
        zh: "多线程的两个好处（课件 p.22）。",
        answerEn: "(1) Overlap I/O with computation — one thread waits while another uses CPU; (2) parallel speedup on multi-core (e.g. each thread processes a segment of a large array).",
        answerZh: "（1）I/O 与计算重叠——一线程等待 I/O 时另一线程用 CPU；（2）多核并行加速（如大数组分段并行处理）。",
        slide: "p.22"
      },
    ]
  },
  "wk3-cpu": {
    summary: "Memorise scheduling metrics, SJF/RR/MLFQ properties, convoy effect, and context-switch cost.",
    summaryZh: "默写调度指标、SJF/RR/MLFQ 特性、convoy effect 与上下文切换开销。",
    items: [
      {
        en: "Turnaround time and response time formulas.",
        zh: "周转时间与响应时间公式。",
        answerEn: "Turnaround = completion time − arrival time; response = time of first run − arrival time.",
        answerZh: "周转时间 = 完成时间 − 到达时间；响应时间 = 第一次运行时间 − 到达时间。",
        slide: "p.5"
      },
      {
        en: "SJF example — average turnaround (slide p.16).",
        zh: "SJF 例子——平均周转时间（课件 p.16）。",
        answerEn: "Processes D(3), A(5), C(7), B(11) → turnarounds 3, 8, 15, 26 → TAVG = (3+8+15+26)/4 = 13.",
        answerZh: "进程 D(3)、A(5)、C(7)、B(11) → 周转 3、8、15、26 → 平均 = (3+8+15+26)/4 = 13。",
        slide: "p.16"
      },
      {
        en: "Define convoy effect in FCFS (slide p.15 full wording).",
        zh: "定义 FCFS 的 convoy effect（课件 p.15 原文）。",
        answerEn: "When a long CPU-bound process runs, all short I/O-bound processes wait behind it, leaving I/O devices idle.",
        answerZh: "长 CPU 密集型进程运行时，所有短 I/O 密集型进程在其后等待，导致 I/O 设备空闲。",
        slide: "p.15"
      },
      {
        en: "Round Robin — what happens when time quantum is too small?",
        zh: "RR 时间片过小会怎样？",
        answerEn: "Context-switch overhead dominates; throughput drops.",
        answerZh: "上下文切换开销占主导，吞吐量下降。",
        slide: "p.23"
      },
      {
        en: "SJF optimality for turnaround (slide p.17).",
        zh: "SJF 对周转时间的最优性（课件 p.17）。",
        answerEn: "For a given job set, SJF minimises average turnaround time (if burst times known).",
        answerZh: "对给定作业集，SJF 最小化平均周转时间（若已知 burst time）。",
        slide: "p.17"
      },
      {
        en: "Preemptive vs non-preemptive scheduling.",
        zh: "抢占式 vs 非抢占式调度。",
        answerEn: "Preemptive: OS can remove a running process (timer interrupt, higher priority); non-preemptive: process runs until it blocks or finishes.",
        answerZh: "抢占式：OS 可剥夺运行中进程；非抢占式：进程运行到阻塞或结束才切换。",
        slide: "p.8"
      },
      {
        en: "MLFQ quanta per priority queue (slide p.26–27).",
        zh: "MLFQ 各优先级队列的时间片（课件 p.26–27）。",
        answerEn: "Priority 4 (highest): 2 quanta; Priority 3: 4; Priority 2: 8; Priority 1 (lowest): 16. New processes start at highest priority; use up quanta → move down.",
        answerZh: "Priority 4（最高）：2；Priority 3：4；Priority 2：8；Priority 1（最低）：16。新进程从最高优先级队列开始，用完配额则降级。",
        slide: "p.26–27"
      },
      {
        en: "MLFQ — what if a process blocks before using its quantum?",
        zh: "MLFQ——进程在时间片用完前阻塞会怎样？",
        answerEn: "If a process blocks within its quantum, it stays in the same queue (does not demote).",
        answerZh: "若进程在时间片内阻塞，留在当前队列（不降级）。",
        slide: "p.27"
      },
      {
        en: "Fairness in scheduling — slide wording.",
        zh: "调度公平性的课件表述。",
        answerEn: "Comparable processes should get comparable service.",
        answerZh: "可比的进程应获得可比的服务（comparable processes get comparable service）。",
        slide: "p.10"
      },
      {
        en: "Priority scheduling — starvation risk (slide p.25).",
        zh: "优先级调度——饥饿风险（课件 p.25）。",
        answerEn: "Low-priority processes may never get CPU; aging can gradually raise priority over waiting time.",
        answerZh: "低优先级进程可能永远得不到 CPU；aging 可随等待时间逐渐提高优先级。",
        slide: "p.25"
      },
      {
        en: "Process context switch — why flush TLB?",
        zh: "进程 context switch——为何 flush TLB？",
        answerEn: "Process switch loads a new page table; TLB entries from the old process are invalid and must be flushed.",
        answerZh: "进程切换加载新页表；旧进程的 TLB 项失效，必须 flush TLB。",
        slide: "p.4"
      },
      {
        en: "Blocked process re-queued — FCFS/RR with I/O.",
        zh: "带 I/O 阻塞时，进程返回 ready 队列排到何处？",
        answerEn: "FCFS: return to tail of ready queue; RR: treated as new arrival at tail (unused quantum not restored).",
        answerZh: "FCFS：回到 ready 队列尾部；RR：当作新到达排到队尾（未用完的时间片不补）。",
        slide: "p.14,21–22"
      },
    ]
  },
  "wk3-ipc": {
    summary: "Memorise race conditions, ME conditions, TSL, strict alternation, and priority inversion.",
    summaryZh: "默写 race condition、互斥条件、TSL、严格交替与优先级反转。",
    items: [
      {
        en: "Define race condition.",
        zh: "定义 race condition。",
        answerEn: "Outcome depends on the interleaving of accesses to shared mutable state by concurrent threads.",
        answerZh: "结果取决于并发线程对共享可变状态访问的交错顺序。",
        slide: "p.4"
      },
      {
        en: "Critical region vs mutual exclusion.",
        zh: "Critical region 与 mutual exclusion 的关系。",
        answerEn: "Critical region = code accessing shared data; mutual exclusion = property that only one thread is in its critical region at a time.",
        answerZh: "Critical region = 访问共享数据的代码段；mutual exclusion = 同一时刻只有一个线程在其 critical region 内的性质。",
        slide: "p.10"
      },
      {
        en: "Four conditions for a good mutual-exclusion solution.",
        zh: "良好互斥解的四个条件。",
        answerEn: "(1) Mutual exclusion; (2) no assumptions about CPU speed/count; (3) no blocking outside CR (progress); (4) no starvation.",
        answerZh: "（1）互斥；（2）不对 CPU 速度/数量做假设；（3）临界区外不阻塞他人（progress）；（4）无饥饿。",
        slide: "p.15"
      },
      {
        en: "Why is a plain lock variable unsafe?",
        zh: "普通 lock 变量为何不安全？",
        answerEn: "Test-and-set is not atomic — two threads can both see unlocked and enter the critical region.",
        answerZh: "检测-设置不是原子操作——两线程可能都看到 unlocked 并进入 critical region。",
        slide: "p.19"
      },
      {
        en: "Busy waiting definition (slide wording).",
        zh: "Busy waiting 的课件原文表述。",
        answerEn: "Busy waiting — spin until lock becomes 0; repeatedly test the lock without yielding.",
        answerZh: "Busy waiting——自旋直到锁变为 0；反复检测锁而不让出 CPU。",
        slide: "p.17"
      },
      {
        en: "TSL (Test-and-Set Lock) — one-line mechanism.",
        zh: "TSL 一句话机制。",
        answerEn: "Atomically read old value and set lock to 1 in one indivisible hardware instruction.",
        answerZh: "一条不可分割的硬件指令原子地读出旧值并将锁置 1。",
        slide: "p.36–37"
      },
      {
        en: "Strict alternation failure — exact slide quote (p.35).",
        zh: "严格交替失败——课件原文（p.35）。",
        answerEn: "Thread B is blocking Thread A … but Thread B is outside of the critical region.",
        answerZh: "Thread B is blocking Thread A … but Thread B is outside of the critical region（B 在临界区外仍阻塞 A）。",
        slide: "p.35"
      },
      {
        en: "Define context switch.",
        zh: "定义 context switch。",
        answerEn: "OS stops one thread and starts another — save/restore register state (PC, SP, registers).",
        answerZh: "OS 停一线程、启另一线程——保存/恢复寄存器状态（PC、SP、寄存器）。",
        slide: "p.18"
      },
      {
        en: "Busy-waiting lock vs blocking mutex (slide p.20).",
        zh: "忙等待锁 vs 阻塞 mutex（课件 p.20）。",
        answerEn: "Busy waiting = spin until lock free; blocking mutex = thread sleeps until lock available (releases CPU).",
        answerZh: "忙等待 = 自旋直到锁可用；阻塞 mutex = 线程挂起直到锁可用（释放 CPU）。",
        slide: "p.20"
      },
      {
        en: "Stack pop race — what goes wrong? (slide p.7–8).",
        zh: "栈 pop 竞态——错在哪？（课件 p.7–8）。",
        answerEn: "Two threads both see stack non-empty, both pop — second pop on empty stack violates program logic.",
        answerZh: "两线程都看到栈非空，都 pop——第二次 pop 空栈，违反程序逻辑。",
        slide: "p.7–8"
      },
      {
        en: "Define priority inversion.",
        zh: "定义 priority inversion。",
        answerEn: "High-priority thread waits for a lock held by low-priority thread; low-priority thread cannot run (e.g. busy-waiting high-priority thread blocks it).",
        answerZh: "高优先级线程等待低优先级线程持有的锁；低优先级线程无法运行（如高优先级忙等待阻塞了它）。",
        slide: "p.22"
      },
      {
        en: "Read-modify-write race — counter example.",
        zh: "Read-modify-write 竞态——counter 例子。",
        answerEn: "Two threads both read counter=5, both write 6 — one update lost.",
        answerZh: "两线程都读到 counter=5，都写 6——一次更新丢失。",
        slide: "p.4"
      },
    ]
  },
  "wk4-memory": {
    summary: "Memorise paging translation, page faults, replacement traces, TLB, and locality.",
    summaryZh: "默写分页翻译、缺页、置换演算、TLB 与局部性。",
    items: [
      {
        en: "Early multiprogramming — swap on every context switch (slide p.3).",
        zh: "早期多道程序——每次 context switch 做什么（课件 p.3）？",
        answerEn: "Only the running process stays in RAM; each context switch fully swaps the current process out to disk and the next one in.",
        answerZh: "只有运行中进程在 RAM；每次 context switch 把当前进程整进程换出磁盘、把下一个换进来。",
        slide: "p.3"
      },
      {
        en: "Logical address split in paging.",
        zh: "分页系统中逻辑地址如何拆分？",
        answerEn: "Page number + offset within page.",
        answerZh: "页号（page number）+ 页内偏移（offset）。",
        slide: "p.24"
      },
      {
        en: "Paging trace — LA0→PA20, LA5→PA25 (slide p.24).",
        zh: "分页演算——LA0→PA20，LA5→PA25（课件 p.24）。",
        answerEn: "Page size 4: LA0 = page 0 offset 0, frame 5 → PA20; LA5 = page 1 offset 1, frame 6 → PA25.",
        answerZh: "页大小 4：LA0 = 页 0 偏移 0，帧 5 → PA20；LA5 = 页 1 偏移 1，帧 6 → PA25。",
        slide: "p.24"
      },
      {
        en: "Offset example: logical 9, page size 4.",
        zh: "例子：逻辑地址 9，页大小 4，offset 是多少？",
        answerEn: "9 mod 4 = 1.",
        answerZh: "9 mod 4 = 1。",
        slide: "p.24"
      },
      {
        en: "Base/limit address translation.",
        zh: "Base/limit 地址翻译公式。",
        answerEn: "If logical address < limit: physical = logical + base; else trap (protection fault).",
        answerZh: "若逻辑地址 < limit：物理地址 = 逻辑地址 + base；否则触发保护异常。",
        slide: "p.9"
      },
      {
        en: "Internal fragmentation example (slide p.28).",
        zh: "内部碎片例子（课件 p.28）。",
        answerEn: "Page size 4 B, process 13 B → needs 4 pages = 16 B → internal fragmentation = 16 − 13 = 3 B.",
        answerZh: "页大小 4 B，进程 13 B → 需 4 页 = 16 B → 内部碎片 = 16 − 13 = 3 B。",
        slide: "p.28"
      },
      {
        en: "Page fault — OS handling steps (slide p.30).",
        zh: "Page fault——OS 处理步骤（课件 p.30）。",
        answerEn: "(1) Evict a page if no free frame (write back if modified); (2) load required page from disk; (3) update page table; (4) re-execute faulting instruction.",
        answerZh: "（1）无空闲帧则驱逐一页（modified 则写回）；（2）从磁盘加载所需页；（3）更新页表；（4）重新执行触发缺页的指令。",
        slide: "p.30"
      },
      {
        en: "PTE fields — present, referenced, modified (slide p.29).",
        zh: "PTE 字段——present、referenced、modified（课件 p.29）。",
        answerEn: "Present = in RAM or on disk; Referenced set on access; Modified set on write (must write back if evicted).",
        answerZh: "Present = 在 RAM 或磁盘；Referenced 访问时置位；Modified 写入时置位（驱逐须写回）。",
        slide: "p.29"
      },
      {
        en: "Temporal vs spatial locality (slide p.33).",
        zh: "时间局部性 vs 空间局部性（课件 p.33）。",
        answerEn: "Temporal = recently used data likely reused soon; spatial = nearby addresses likely accessed together.",
        answerZh: "时间局部性 = 刚用的数据很快再用；空间局部性 = 相邻地址很可能一起访问。",
        slide: "p.33"
      },
      {
        en: "TLB purpose (slide p.44).",
        zh: "TLB 的作用（课件 p.44）。",
        answerEn: "Cache recent page-table translations to avoid a full page-table walk on every memory access.",
        answerZh: "缓存最近页表翻译，避免每次内存访问都做完整页表查找。",
        slide: "p.44"
      },
      {
        en: "Second-chance at time 20 — page A with R=1 (slide p.35).",
        zh: "Second-chance：时刻 20 缺页，队头页 A 的 R=1（课件 p.35）。",
        answerEn: "Do not evict A; clear R to 0 and move A to tail; check new head instead.",
        answerZh: "不驱逐 A；R 清 0 并移到队尾；改检查新队头。",
        slide: "p.35"
      },
      {
        en: "Aging trace — X1000000 → 11000000 (slide p.38–40).",
        zh: "Aging 演算——X1000000 → 11000000（课件 p.38–40）。",
        answerEn: "Previous pattern X1000000, R=1 this tick → shift right → append R as MSB → 11000000; lowest value = victim.",
        answerZh: "上一 tick X1000000，本 tick R=1 → 右移 → 追加 R 为最高位 → 11000000；值最小者被驱逐。",
        slide: "p.38–40"
      },
    ]
  },
  "wk5-security": {
    summary: "Memorise CIA, crypto primitives, certificates, hybrid encryption, and encrypt-then-MAC.",
    summaryZh: "默写 CIA、密码原语、证书、混合加密与 encrypt-then-MAC。",
    items: [
      {
        en: "CIA triad — expand each letter.",
        zh: "CIA 三元组各指什么？",
        answerEn: "Confidentiality, Integrity, Authentication.",
        answerZh: "保密性（Confidentiality）、完整性（Integrity）、认证（Authentication）。",
        slide: "p.3"
      },
      {
        en: "Confidentiality vs integrity — one line each.",
        zh: "保密性与完整性各一句话。",
        answerEn: "Confidentiality = prevent unauthorised reading; integrity = detect/prevent unauthorised modification.",
        answerZh: "保密性 = 防止未授权读取；完整性 = 检测/防止未授权篡改。",
        slide: "p.4"
      },
      {
        en: "Symmetric vs public-key cryptography.",
        zh: "对称密码 vs 公钥密码。",
        answerEn: "Symmetric = same secret key encrypts and decrypts; public-key = key pair — public encrypts/verify, private decrypts/signs.",
        answerZh: "对称 = 同一密钥加解密；公钥 = 密钥对——公钥加密/验证，私钥解密/签名。",
        slide: "p.10"
      },
      {
        en: "Kerckhoffs' principle (slide wording).",
        zh: "Kerckhoffs 原则（课件表述）。",
        answerEn: "Security depends on the decryption key, not secrecy of the algorithm.",
        answerZh: "安全性依赖解密密钥，而非算法保密。",
        slide: "p.8"
      },
      {
        en: "MAC vs digital signature.",
        zh: "MAC vs 数字签名。",
        answerEn: "MAC uses shared secret key (both parties); signature uses private key to sign, public key to verify.",
        answerZh: "MAC 用共享密钥（双方持有）；签名用私钥签、公钥验。",
        slide: "p.22"
      },
      {
        en: "Hash function — collision resistance and one-way (slide p.19).",
        zh: "哈希函数——抗碰撞与单向性（课件 p.19）。",
        answerEn: "Collision resistance: hard to find m ≠ m' with H(m)=H(m'); one-way: given H(m), hard to recover m.",
        answerZh: "抗碰撞：难找 m≠m' 使 H(m)=H(m')；单向：给定 H(m) 难恢复 m。",
        slide: "p.19"
      },
      {
        en: "What problem does a digital certificate solve?",
        zh: "数字证书解决什么问题？",
        answerEn: "Bind a public key to an identity in a trustworthy way (CA signature).",
        answerZh: "可信地将公钥与身份绑定（CA 签名背书）。",
        slide: "p.33–34"
      },
      {
        en: "Man-in-the-middle attack — how certificates help.",
        zh: "中间人攻击——证书如何防御？",
        answerEn: "Client verifies server certificate chain to ensure it talks to the real server, not an impostor.",
        answerZh: "客户端验证服务器证书链，确保连接真实服务器而非冒充者。",
        slide: "p.31"
      },
      {
        en: "Hybrid encryption — why and how (slide p.15–16).",
        zh: "混合加密——为何与如何（课件 p.15–16）。",
        answerEn: "Use public-key crypto to exchange a symmetric session key, then encrypt bulk data with symmetric crypto (efficient + no pre-shared secret).",
        answerZh: "用公钥密码交换对称会话密钥，再用对称密码加密大量数据（高效且无需预共享密钥）。",
        slide: "p.15–16"
      },
      {
        en: "Encrypt-then-MAC strategy (slide p.28).",
        zh: "Encrypt-then-MAC 策略（课件 p.28）。",
        answerEn: "Encrypt message first, then MAC the ciphertext; verify MAC before decrypting.",
        answerZh: "先加密消息，再对密文计算 MAC；先验 MAC 再解密。",
        slide: "p.28"
      },
      {
        en: "Public-key encrypt vs sign — which key for each?",
        zh: "公钥加密 vs 签名各用哪个密钥？",
        answerEn: "Encrypt with recipient's public key; sign with sender's private key.",
        answerZh: "用接收方公钥加密；用发送方私钥签名。",
        slide: "p.14"
      },
      {
        en: "Non-repudiation — which mechanism provides it?",
        zh: "不可否认性由哪种机制提供？",
        answerEn: "Digital signature — only the private-key holder could have produced it.",
        answerZh: "数字签名——只有私钥持有者才能生成。",
        slide: "p.23"
      },
    ]
  },
  "wk6-osi": {
    summary: "Memorise layering, service vs protocol, TCP/IP stack, narrow waist, and encapsulation.",
    summaryZh: "默写分层、service vs protocol、TCP/IP 栈、窄腰与封装。",
    items: [
      {
        en: "Service vs protocol.",
        zh: "Service vs protocol。",
        answerEn: "Service = what a layer offers to the layer above; protocol = rules for peer communication at the same layer.",
        answerZh: "Service = 本层向上层提供什么；protocol = 同层对等实体通信的规则。",
        slide: "p.11"
      },
      {
        en: "Why layering? (two benefits).",
        zh: "为何分层？（两个好处）",
        answerEn: "Modularity / easier to change one layer; abstraction hides complexity from other layers.",
        answerZh: "模块化/便于修改某一层；抽象向其他层隐藏复杂性。",
        slide: "p.10"
      },
      {
        en: "Connection-oriented vs connectionless service.",
        zh: "面向连接 vs 无连接服务。",
        answerEn: "Connection-oriented = setup phase before data transfer (e.g. TCP); connectionless = send without prior setup (e.g. UDP).",
        answerZh: "面向连接 = 传数据前先建立连接（如 TCP）；无连接 = 无预先建立直接发送（如 UDP）。",
        slide: "p.13"
      },
      {
        en: "Point-to-point vs end-to-end — four tasks (slide p.17).",
        zh: "Point-to-point vs end-to-end——四项任务（课件 p.17）。",
        answerEn: "p2p (data link): get data p2p, tidy up p2p; e2e (transport): get data e2e, tidy up e2e.",
        answerZh: "p2p（链路层）：get data p2p、tidy up p2p；e2e（传输层）：get data e2e、tidy up e2e。",
        slide: "p.17"
      },
      {
        en: "List four TCP/IP layers bottom to top.",
        zh: "自下而上列出 TCP/IP 四层。",
        answerEn: "Link (Network Access), Internet (Network), Transport, Application.",
        answerZh: "链路层（Network Access）、网际层（Internet）、传输层、应用层。",
        slide: "p.19"
      },
      {
        en: "PDU name at transport layer.",
        zh: "传输层的 PDU 叫什么？",
        answerEn: "Segment (TCP) or datagram (UDP).",
        answerZh: "Segment（TCP）或 datagram（UDP）。",
        slide: "p.14"
      },
      {
        en: "Encapsulation — what happens going down the stack?",
        zh: "封装——数据向下经过协议栈时发生什么？",
        answerEn: "Each layer adds its own header (and sometimes trailer) around data from above.",
        answerZh: "每层在上层数据外加自己的首部（有时还有尾部）。",
        slide: "p.20"
      },
      {
        en: "IP as the narrow waist — slide wording (p.22).",
        zh: "IP 窄腰——课件表述（p.22）。",
        answerEn: "IP over everything, and everything over IP — many upper protocols and lower link technologies converge on IP.",
        answerZh: "IP over everything, and everything over IP——众多上层协议与下层链路技术以 IP 为汇合点。",
        slide: "p.22"
      },
      {
        en: "Protocol stack example — HTTP/TCP/UDP/IP (slide p.21).",
        zh: "协议栈例子——HTTP/TCP/UDP/IP（课件 p.21）。",
        answerEn: "Application (HTTP) → Transport (TCP or UDP) → Internet (IP) → Link layer.",
        answerZh: "应用层（HTTP）→ 传输层（TCP 或 UDP）→ 网际层（IP）→ 链路层。",
        slide: "p.21"
      },
      {
        en: "Network layer main function.",
        zh: "网络层主要功能。",
        answerEn: "Host-to-host delivery — routing datagrams across multiple networks.",
        answerZh: "主机到主机交付——跨多个网络路由数据报。",
        slide: "p.9"
      },
      {
        en: "Transport layer main function.",
        zh: "传输层主要功能。",
        answerEn: "Process-to-process delivery using port numbers on top of host-to-host IP.",
        answerZh: "在主机到主机 IP 之上用端口号实现进程到进程交付。",
        slide: "p.9"
      },
      {
        en: "OSI vs TCP/IP — practical difference.",
        zh: "OSI vs TCP/IP——实用区别。",
        answerEn: "TCP/IP reflects what the Internet actually runs; OSI is a design/diagnostic reference model.",
        answerZh: "TCP/IP 反映互联网实际运行；OSI 是设计/诊断参考模型。",
        slide: "p.19"
      },
    ]
  },
  "wk7-sockets": {
    summary: "Memorise socket doorway, 5-tuple, server/client setup, two sockets, and blocking I/O.",
    summaryZh: "默写 socket 门、五元组、服务器/客户端建立、双 socket 与阻塞 I/O。",
    items: [
      {
        en: "Define socket — slide doorway analogy (p.6).",
        zh: "定义 socket——课件 doorway 类比（p.6）。",
        answerEn: "Socket is the doorway between application layer and transport layer — user-space code sends messages to kernel network code.",
        answerZh: "Socket 是应用层与传输层之间的门——用户空间代码向内核网络代码发消息。",
        slide: "p.6"
      },
      {
        en: "TCP connection 5-tuple.",
        zh: "TCP 连接的五元组。",
        answerEn: "Protocol, local IP, local port, remote IP, remote port.",
        answerZh: "协议、本地 IP、本地端口、远端 IP、远端端口。",
        slide: "p.8"
      },
      {
        en: "Server socket setup order (four calls).",
        zh: "服务器 socket 建立顺序（四个调用）。",
        answerEn: "socket() → bind() → listen() → accept().",
        answerZh: "socket() → bind() → listen() → accept()。",
        slide: "p.14"
      },
      {
        en: "Client TCP connect — main calls.",
        zh: "客户端 TCP 连接主要调用。",
        answerEn: "socket() then connect() to server address/port.",
        answerZh: "socket() 之后 connect() 到服务器地址/端口。",
        slide: "p.12–13"
      },
      {
        en: "Listening socket vs connected socket (slide p.17–18).",
        zh: "Listening socket vs connected socket（课件 p.17–18）。",
        answerEn: "Listening socket = half socket (protocol, local IP, port only); connected socket = full 5-tuple for read/write.",
        answerZh: "Listening socket = 半 socket（仅协议、本地 IP、端口）；connected socket = 完整五元组，用于读写。",
        slide: "p.17–18"
      },
      {
        en: "listen(listenfd, 10) — second argument.",
        zh: "listen(listenfd, 10) 第二个参数含义。",
        answerEn: "Maximum backlog — up to 10 pending connections queued before accept().",
        answerZh: "Backlog 上限——accept 前最多 10 个待完成连接排队。",
        slide: "p.16"
      },
      {
        en: "Blocking read behaviour.",
        zh: "Blocking read 的行为。",
        answerEn: "Process waits until data arrives or an error occurs — does not return immediately with nothing.",
        answerZh: "进程等待直到有数据到达或出错——不会空读立即返回。",
        slide: "p.21"
      },
      {
        en: "File descriptor after accept().",
        zh: "accept() 返回什么？",
        answerEn: "A new connected socket file descriptor for communicating with that specific client.",
        answerZh: "与该特定客户端通信的新 connected socket 文件描述符。",
        slide: "p.14"
      },
      {
        en: "Port number purpose — demultiplexing.",
        zh: "端口号作用——解复用。",
        answerEn: "Demultiplex incoming segments to the correct application process/socket on a host.",
        answerZh: "将到达的分段解复用到主机上正确的应用进程/socket。",
        slide: "p.13–14"
      },
      {
        en: "close() on listening socket effect.",
        zh: "close() 关闭 listening socket 的效果。",
        answerEn: "Stops accepting new connections; existing connected sockets may remain open until closed separately.",
        answerZh: "停止接受新连接；已有 connected socket 可继续直到单独关闭。",
        slide: "p.17"
      },
      {
        en: "Server vs client role.",
        zh: "Server vs client 角色。",
        answerEn: "Server passively waits (bind/listen/accept); client actively initiates connect().",
        answerZh: "Server 被动等待（bind/listen/accept）；client 主动 connect()。",
        slide: "p.12–13"
      },
      {
        en: "Socket identified by file descriptor.",
        zh: "Socket 如何标识？",
        answerEn: "In UNIX, socket is accessed via a file descriptor (integer) through system calls read/write/close.",
        answerZh: "UNIX 中 socket 通过文件描述符（整数）经 read/write/close 等系统调用访问。",
        slide: "p.6"
      },
    ]
  },
  "wk7-dns": {
    summary: "Memorise DNS hierarchy, record types, resolver relay, and mail protocols.",
    summaryZh: "默写 DNS 层次、记录类型、resolver 转发与邮件协议。",
    items: [
      {
        en: "DNS hierarchy — three levels top to leaf.",
        zh: "DNS 层次自上而下三层。",
        answerEn: "Root DNS servers → TLD servers → authoritative DNS servers.",
        answerZh: "根 DNS 服务器 → 顶级域（TLD）服务器 → 权威 DNS 服务器。",
        slide: "p.18–19"
      },
      {
        en: "Local DNS server role.",
        zh: "本地 DNS 服务器角色。",
        answerEn: "Default nameserver for a host/ISP — caches answers and relays queries up the hierarchy.",
        answerZh: "主机/ISP 的默认域名服务器——缓存答案并向上层转发查询。",
        slide: "p.19"
      },
      {
        en: "AAAA record example (slide p.14).",
        zh: "AAAA 记录例子（课件 p.14）。",
        answerEn: "AAAA maps hostname to IPv6, e.g. 1062::A22:AAE9:51C7:8451.",
        answerZh: "AAAA 将主机名映射到 IPv6，如 1062::A22:AAE9:51C7:8451。",
        slide: "p.14"
      },
      {
        en: "A record vs AAAA record.",
        zh: "A 记录 vs AAAA 记录。",
        answerEn: "A = hostname to IPv4; AAAA = hostname to IPv6.",
        answerZh: "A = 主机名到 IPv4；AAAA = 主机名到 IPv6。",
        slide: "p.14"
      },
      {
        en: "MX record purpose.",
        zh: "MX 记录用途。",
        answerEn: "Maps domain to mail server(s) that receive email for that domain.",
        answerZh: "将域名映射到接收该域邮件的邮件服务器。",
        slide: "p.16"
      },
      {
        en: "NS record purpose.",
        zh: "NS 记录用途。",
        answerEn: "Delegates a subdomain to authoritative name servers for that zone.",
        answerZh: "将子域委派给该区域的权威名称服务器。",
        slide: "p.16"
      },
      {
        en: "Four DNS components (slide p.7–8).",
        zh: "DNS 四个核心组成（课件 p.7–8）。",
        answerEn: "Domain name space, DNS database (RRs), name servers, resolvers.",
        answerZh: "域名空间、DNS 数据库（RR）、域名服务器、解析器（resolvers）。",
        slide: "p.7–8"
      },
      {
        en: "Local resolver relay (slide p.21).",
        zh: "本地 resolver 转发（课件 p.21）。",
        answerEn: "Resolver sends query to local DNS; local DNS fetches answer from hierarchy if not cached, then returns to client.",
        answerZh: "Resolver 向本地 DNS 发查询；本地 DNS 无缓存则向上查询，再返回客户端。",
        slide: "p.21"
      },
      {
        en: "SMTP role and port.",
        zh: "SMTP 角色与端口。",
        answerEn: "Push protocol for sending/transferring mail between MTAs; well-known port 25.",
        answerZh: "服务器间发送/转发邮件的推送协议；well-known 端口 25。",
        slide: "p.28"
      },
      {
        en: "IMAP vs POP3 — main difference.",
        zh: "IMAP vs POP3 主要区别。",
        answerEn: "IMAP keeps mail on server and syncs folders; POP3 typically downloads and may delete from server.",
        answerZh: "IMAP 邮件留服务器并同步文件夹；POP3 通常下载并可能从服务器删除。",
        slide: "p.44"
      },
      {
        en: "MIME purpose.",
        zh: "MIME 用途。",
        answerEn: "Extends email format to support non-ASCII text, attachments, and multimedia.",
        answerZh: "扩展邮件格式以支持非 ASCII 文本、附件和多媒体。",
        slide: "p.42"
      },
      {
        en: "CNAME record purpose.",
        zh: "CNAME 记录用途。",
        answerEn: "Alias — canonical name points one hostname to another hostname.",
        answerZh: "别名——将一个主机名指向另一个规范主机名。",
        slide: "p.16"
      },
    ]
  },
  "wk8-udp": {
    summary: "Memorise transport services, UDP header, mux/demux, port ranges, and UDP trade-offs.",
    summaryZh: "默写传输层服务、UDP 首部、复用/解复用、端口范围与 UDP 权衡。",
    items: [
      {
        en: "Transport vs network layer scope.",
        zh: "传输层 vs 网络层范围。",
        answerEn: "Network = host-to-host; transport = process-to-process using ports.",
        answerZh: "网络层 = 主机到主机；传输层 = 用端口实现进程到进程。",
        slide: "p.8–9"
      },
      {
        en: "Well-known, registered, dynamic port ranges.",
        zh: "Well-known、registered、dynamic 端口范围。",
        answerEn: "0–1023 well-known; 1024–49151 registered; 49152–65535 dynamic/ephemeral.",
        answerZh: "0–1023 well-known；1024–49151 registered；49152–65535 dynamic/ephemeral。",
        slide: "p.15"
      },
      {
        en: "IANA port registry URL (slide p.15).",
        zh: "IANA 端口注册表 URL（课件 p.15）。",
        answerEn: "http://www.iana.org/assignments/port-numbers",
        answerZh: "http://www.iana.org/assignments/port-numbers",
        slide: "p.15"
      },
      {
        en: "UDP header fields (four main).",
        zh: "UDP 首部四个主要字段。",
        answerEn: "Source port, destination port, length, checksum.",
        answerZh: "源端口、目的端口、长度、校验和。",
        slide: "p.20"
      },
      {
        en: "UDP checksum — pseudo-header (slide p.20).",
        zh: "UDP 校验和——伪首部（课件 p.20）。",
        answerEn: "Checksum covers UDP segment plus pseudo-header (src/dst IP, protocol, length).",
        answerZh: "校验和覆盖 UDP 段加伪首部（源/目的 IP、协议、长度）。",
        slide: "p.20"
      },
      {
        en: "Multiplexing at sender.",
        zh: "发送端 multiplexing。",
        answerEn: "Gathering data from multiple application sockets and passing to network layer with proper headers.",
        answerZh: "从多个应用 socket 收集数据，加首部交给网络层。",
        slide: "p.13–14"
      },
      {
        en: "Demultiplexing at receiver.",
        zh: "接收端 demultiplexing。",
        answerEn: "Delivering incoming segments to correct socket using destination port (and IP for UDP).",
        answerZh: "用目的端口（UDP 还看 IP）将到达分段交给正确 socket。",
        slide: "p.13–14"
      },
      {
        en: "3-tuple vs 5-tuple (slide p.14).",
        zh: "3 元组 vs 5 元组（课件 p.14）。",
        answerEn: "Full address = 5-tuple (protocol, local IP, local port, remote IP, remote port); TCP listen/most UDP sockets use 3-tuple (local IP, local port).",
        answerZh: "完整地址 = 5 元组；TCP listen/多数 UDP socket 用 3 元组（本地 IP、本地端口）。",
        slide: "p.14"
      },
      {
        en: "UDP connectionless — meaning.",
        zh: "UDP 无连接的含义。",
        answerEn: "No handshake or connection state — each datagram is independent.",
        answerZh: "无握手或连接状态——每个 datagram 独立。",
        slide: "p.19"
      },
      {
        en: "When prefer UDP over TCP? (two cases).",
        zh: "何时选 UDP 而非 TCP？（两例）",
        answerEn: "Simple request-response (DNS) and real-time apps tolerating loss (VoIP).",
        answerZh: "简单请求-响应（DNS）与可容忍丢包的实时应用（VoIP）。",
        slide: "p.21"
      },
      {
        en: "UDP strengths and weaknesses (slide p.23).",
        zh: "UDP 优缺点（课件 p.23）。",
        answerEn: "Strengths: simple, low header overhead, no forced retransmission wait, multicast. Weaknesses: no flow/error/congestion control.",
        answerZh: "优点：简单、首部小、不强制等重传、支持 multicast。缺点：无流控/差错控制/拥塞控制。",
        slide: "p.23"
      },
      {
        en: "Memcached reflected DDoS attack (slide p.25).",
        zh: "Memcached 反射 DDoS（课件 p.25）。",
        answerEn: "Attacker spoofs victim IP; small UDP query triggers huge response to victim (amplification).",
        answerZh: "攻击者伪造受害者 IP；小 UDP 查询触发大响应打向受害者（放大攻击）。",
        slide: "p.25"
      },
    ]
  },
  "wk8-http": {
    summary: "Memorise HTTP flow, methods, caching, URI vs URL, HTTPS, and HTTP/2.",
    summaryZh: "默写 HTTP 流程、方法、缓存、URI vs URL、HTTPS 与 HTTP/2。",
    items: [
      {
        en: "URI vs URL.",
        zh: "URI vs URL。",
        answerEn: "URI = identifier (includes URN like ISBN); URL = locator with access mechanism (http://…). All URLs are URIs.",
        answerZh: "URI = 标识符（含 URN 如 ISBN）；URL = 带访问机制的定位符（http://…）。所有 URL 都是 URI。",
        slide: "p.10"
      },
      {
        en: "Persistent vs non-persistent HTTP.",
        zh: "持久 vs 非持久 HTTP 连接。",
        answerEn: "Non-persistent = one object per TCP connection; persistent = multiple objects over same connection.",
        answerZh: "非持久 = 每个对象一条 TCP 连接；持久 = 同一连接传多个对象。",
        slide: "p.12–13"
      },
      {
        en: "HTTP 11-step flow — progressive display (slide p.15).",
        zh: "HTTP 11 步流程——渐进渲染（课件 p.15）。",
        answerEn: "DNS → TCP setup → HTTP request → response; browser renders progressively; repeat for embedded objects; may reuse persistent connection.",
        answerZh: "DNS → TCP 建立 → HTTP 请求 → 响应；HTML 边收边渲染；嵌入对象重复此流程；可复用持久连接。",
        slide: "p.15"
      },
      {
        en: "HTTP request line — GET example.",
        zh: "HTTP 请求行——GET 例子。",
        answerEn: "GET /path HTTP/1.1 — method, URI/path, HTTP version.",
        answerZh: "GET /path HTTP/1.1——方法、URI/路径、HTTP 版本。",
        slide: "p.18"
      },
      {
        en: "HTTP response status line format.",
        zh: "HTTP 响应状态行格式。",
        answerEn: "HTTP/version status-code reason-phrase (e.g. HTTP/1.1 200 OK).",
        answerZh: "HTTP/版本 状态码 原因短语（如 HTTP/1.1 200 OK）。",
        slide: "p.18"
      },
      {
        en: "Conditional GET — 304 Not Modified (slide p.19–22).",
        zh: "Conditional GET——304 Not Modified（课件 p.19–22）。",
        answerEn: "Client sends If-Modified-Since; if unchanged server returns 304 Not Modified with no body.",
        answerZh: "客户端发 If-Modified-Since；未修改则服务器回 304 Not Modified，无 body。",
        slide: "p.19–22"
      },
      {
        en: "HTTPS — port (slide p.23).",
        zh: "HTTPS 端口（课件 p.23）。",
        answerEn: "HTTPS uses port 443 (HTTP over TLS).",
        answerZh: "HTTPS 使用端口 443（HTTP 跑在 TLS 之上）。",
        slide: "p.23"
      },
      {
        en: "HTTP/2 main improvement — multiplexing (slide p.24).",
        zh: "HTTP/2 主要改进——多路复用（课件 p.24）。",
        answerEn: "Many streams multiplexed over one TCP connection; header compression.",
        answerZh: "单 TCP 连接上多路复用多条流；首部压缩。",
        slide: "p.24"
      },
      {
        en: "HTTP GET vs POST.",
        zh: "GET vs POST。",
        answerEn: "GET retrieves data (should be safe/idempotent); POST submits data and may change server state.",
        answerZh: "GET 获取数据（应安全/幂等）；POST 提交数据并可能改变服务器状态。",
        slide: "p.7"
      },
      {
        en: "SMTP success reply code example (slide p.21).",
        zh: "SMTP 成功应答码例子（课件 p.21）。",
        answerEn: "250 Message accepted for delivery.",
        answerZh: "250 Message accepted（接受投递）。",
        slide: "p.21"
      },
      {
        en: "HTTP is stateless — meaning.",
        zh: "HTTP 无状态的含义。",
        answerEn: "Server retains no information about past requests between connections.",
        answerZh: "服务器在连接间不保留过去请求的信息。",
        slide: "p.6"
      },
      {
        en: "Non-persistent HTTP cost.",
        zh: "非持久 HTTP 的开销。",
        answerEn: "Each object needs new TCP connection — at least 2 RTT per object (TCP setup + request/response).",
        answerZh: "每个对象需新 TCP 连接——每对象至少 2 RTT（TCP 建立 + 请求/响应）。",
        slide: "p.12–13"
      },
    ]
  },
  "wk9-tcp": {
    summary: "Memorise TCP handshake, sequence/window, teardown, byte trace, and buffering trade-off.",
    summaryZh: "默写 TCP 握手、序号/窗口、关闭、字节追踪与缓冲权衡。",
    items: [
      {
        en: "TCP vs UDP — slide analogy.",
        zh: "TCP vs UDP——课件类比。",
        answerEn: "UDP is like text messages; TCP is like a phone call (connection-oriented, ongoing session).",
        answerZh: "UDP 像短信；TCP 像电话（面向连接、持续会话）。",
        slide: "p.2–3"
      },
      {
        en: "Three-way handshake — SYN bit patterns (slide p.22–28).",
        zh: "三次握手——SYN 位模式（课件 p.22–28）。",
        answerEn: "Client: SYN=1, ACK=0; Server: SYN=1, ACK=1; Client: ACK=1 — exchange initial sequence numbers.",
        answerZh: "Client: SYN=1, ACK=0；Server: SYN=1, ACK=1；Client: ACK=1——交换初始序号。",
        slide: "p.22–28"
      },
      {
        en: "TCP sequence number field purpose.",
        zh: "TCP 序号字段用途。",
        answerEn: "Byte offset in sender's byte stream — first data byte in segment.",
        answerZh: "发送方字节流中的字节偏移——段中第一个数据字节的序号。",
        slide: "p.10"
      },
      {
        en: "Receive window (rwnd) — meaning.",
        zh: "接收窗口（rwnd）含义。",
        answerEn: "Bytes the receiver is willing to accept — flow control limit on sender.",
        answerZh: "接收方愿意接收的字节数——对发送方的流量控制上限。",
        slide: "p.15"
      },
      {
        en: "Sliding window invariant (slide p.52).",
        zh: "滑动窗口不变式（课件 p.52）。",
        answerEn: "LastByteSent − LastByteAcked ≤ ReceiveWindowAdvertised.",
        answerZh: "LastByteSent − LastByteAcked ≤ ReceiveWindowAdvertised。",
        slide: "p.52"
      },
      {
        en: "ACK number meaning — cumulative.",
        zh: "ACK 号含义——累积确认。",
        answerEn: "Next byte sequence number the receiver expects (cumulative ACK).",
        answerZh: "接收方期望的下一个字节序号（累积确认）。",
        slide: "p.11"
      },
      {
        en: "Four-way connection teardown.",
        zh: "四次挥手关闭连接。",
        answerEn: "FIN → ACK → FIN → ACK (each direction closed separately).",
        answerZh: "FIN → ACK → FIN → ACK（每个方向单独关闭）。",
        slide: "p.30"
      },
      {
        en: "FIN retransmit behaviour (slide p.31).",
        zh: "FIN 重传行为（课件 p.31）。",
        answerEn: "Sender retransmits unacknowledged segments including FIN if ACK not received.",
        answerZh: "若收不到 ACK，发送方重传未确认段（包括 FIN）。",
        slide: "p.31"
      },
      {
        en: "RST vs FIN (slide p.32).",
        zh: "RST vs FIN（课件 p.32）。",
        answerEn: "FIN = orderly shutdown; RST = hard close — immediately terminate, no further listening.",
        answerZh: "FIN = 有序关闭；RST = 硬关闭——立即终止，不再监听。",
        slide: "p.32"
      },
      {
        en: "SYN segment consumes one sequence number?",
        zh: "SYN 段是否占用一个序号？",
        answerEn: "Yes — SYN counts as one byte in the sequence space.",
        answerZh: "是——SYN 在序号空间中占一个字节。",
        slide: "p.22–28"
      },
      {
        en: "Byte trace — ACK:11 Window:40 then WindowUpdate Window:50 (slide p.43–50).",
        zh: "字节追踪——ACK:11 Window:40 后 WindowUpdate Window:50（课件 p.43–50）。",
        answerEn: "After bytes 1–10 received: ACK:11, Window:40; after app reads 10 B: ACK:11, Window:50 (WindowUpdate).",
        answerZh: "收到 1–10 后：ACK:11, Window:40；应用读走 10 B 后：ACK:11, Window:50（WindowUpdate）。",
        slide: "p.43–50"
      },
      {
        en: "TCP buffering trade-off (slide p.13).",
        zh: "TCP 缓冲权衡（课件 p.13）。",
        answerEn: "Larger buffers reduce header overhead but increase delay.",
        answerZh: "更大缓冲减少首部开销但增加延迟。",
        slide: "p.13"
      },
    ]
  },
  "wk9-protocol": {
    summary: "Memorise RPC, marshalling, stubs, protocol design questions, and TCP close recap.",
    summaryZh: "默写 RPC、marshalling、stub、协议设计问题与 TCP 关闭回顾。",
    items: [
      {
        en: "RPC definition.",
        zh: "RPC 定义。",
        answerEn: "Remote Procedure Call — invoke a procedure on a remote host as if it were local.",
        answerZh: "远程过程调用——像调用本地函数一样调用远程主机上的过程。",
        slide: "p.10"
      },
      {
        en: "Marshalling definition.",
        zh: "Marshalling 定义。",
        answerEn: "Convert in-memory data structures to a canonical byte stream for transmission (unmarshalling reverses).",
        answerZh: "将内存数据结构转换为规范字节流以便传输（unmarshalling 反向转换）。",
        slide: "p.11"
      },
      {
        en: "Client stub vs server stub roles.",
        zh: "Client stub vs server stub 角色。",
        answerEn: "Client stub marshals args, sends request, unmarshals result; server stub unmarshals args, calls procedure, marshals result.",
        answerZh: "Client stub：marshal 参数、发请求、unmarshal 结果；Server stub：unmarshal 参数、调用过程、marshal 结果。",
        slide: "p.11–12"
      },
      {
        en: "Protocol design — four core questions (slide p.9).",
        zh: "协议设计——四个核心问题（课件 p.9）。",
        answerEn: "(1) What does interaction look like? (2) What data to communicate? (3) What format? (4) How handle errors?",
        answerZh: "（1）交互模式？（2）传什么数据？（3）什么格式？（4）如何处理错误？",
        slide: "p.9"
      },
      {
        en: "RPC challenges — pointers and global variables (slide p.13).",
        zh: "RPC 挑战——指针与全局变量（课件 p.13）。",
        answerEn: "Pointers cannot be passed directly across address spaces; global variables are not shared between client and server.",
        answerZh: "指针不能跨地址空间直接传递；全局变量在客户端与服务器间不共享。",
        slide: "p.13"
      },
      {
        en: "Protocol deployment questions (slide p.22 exact).",
        zh: "协议部署问题（课件 p.22 原文）。",
        answerEn: "How finished before deploy? What happens on new spec release? How to test thoroughly before public release?",
        answerZh: "多成熟才能上线？新 spec 发布怎么办？公开发布前如何充分测试？",
        slide: "p.22"
      },
      {
        en: "TCP sync recap — SYN/ACK patterns (slide p.4–5).",
        zh: "TCP 同步回顾——SYN/ACK 模式（课件 p.4–5）。",
        answerEn: "Connection request: SYN=1, ACK=0; reply: SYN=1, ACK=1; third segment: ACK=1.",
        answerZh: "连接请求：SYN=1, ACK=0；回复：SYN=1, ACK=1；第三段：ACK=1。",
        slide: "p.4–5"
      },
      {
        en: "TCP close recap — FIN directional (slide p.4–5).",
        zh: "TCP 关闭回顾——FIN 方向性（课件 p.4–5）。",
        answerEn: "FIN closes one direction; other direction may still send data; typically 4 segments (FIN+ACK each way).",
        answerZh: "FIN 关闭一个方向；另一方向仍可发数据；通常 4 段（各向 FIN+ACK）。",
        slide: "p.4–5"
      },
      {
        en: "RST vs FIN recap (slide p.4–5).",
        zh: "RST vs FIN 回顾（课件 p.4–5）。",
        answerEn: "FIN = orderly shutdown; RST = hard close when invalid data, crash, or no open connection.",
        answerZh: "FIN = 有序关闭；RST = 无效数据、崩溃或无连接时的硬关闭。",
        slide: "p.4–5"
      },
      {
        en: "Cumulative ACK recap.",
        zh: "累积 ACK 回顾。",
        answerEn: "ACK number = next byte expected; does not advance past a gap even if later bytes arrived.",
        answerZh: "ACK 号 = 期望下一字节；中间有 gap 时不前进，即使后续字节已到。",
        slide: "p.4–5"
      },
      {
        en: "RPC — client thread suspended during call.",
        zh: "RPC——调用期间客户端线程。",
        answerEn: "Client thread is suspended while server executes; resumes when result returns.",
        answerZh: "客户端线程在服务器执行期间挂起；结果返回后恢复。",
        slide: "p.10"
      },
      {
        en: "Protocol design — start simple, iterate.",
        zh: "协议设计——从简开始迭代。",
        answerEn: "Begin with minimal functionality (e.g. one RPC function), then extend — do not lock API too early.",
        answerZh: "从最小功能开始（如单个 RPC 函数），再逐步扩展——不要过早锁定 API。",
        slide: "p.9"
      },
    ]
  },
  "wk10-addressing": {
    summary: "Memorise CIDR, prefix exercises, longest match, switching, store-and-forward, and IPv6.",
    summaryZh: "默写 CIDR、前缀练习、最长匹配、交换、存储转发与 IPv6。",
    items: [
      {
        en: "IP address binds to what?",
        zh: "IP 地址绑定到什么？",
        answerEn: "An interface (host-router port), not the host as a whole.",
        answerZh: "接口（interface），而非整台主机。",
        slide: "p.6"
      },
      {
        en: "CIDR notation meaning.",
        zh: "CIDR 表示法含义。",
        answerEn: "a.b.c.d/x — x is prefix length (number of leading network bits).",
        answerZh: "a.b.c.d/x——x 为前缀长度（网络位前导位数）。",
        slide: "p.19"
      },
      {
        en: "Number of addresses in /n prefix.",
        zh: "/n 前缀有多少地址？",
        answerEn: "2^(32−n) addresses (IPv4).",
        answerZh: "2^(32−n) 个地址（IPv4）。",
        slide: "p.21"
      },
      {
        en: "Network vs broadcast vs host in a subnet.",
        zh: "子网中网络地址、广播地址与主机地址。",
        answerEn: "Network = all host bits 0; broadcast = all host bits 1; usable hosts between them.",
        answerZh: "网络地址 = 主机位全 0；广播 = 主机位全 1；可用主机在中间。",
        slide: "p.18"
      },
      {
        en: "Can you infer netmask from IP alone? (slide p.22)",
        zh: "能否单从 IP 推断 netmask？（课件 p.22）",
        answerEn: "No — netmask/prefix is configuration, not inherent in the address.",
        answerZh: "不能——掩码/前缀是配置信息，不是地址固有属性。",
        slide: "p.22"
      },
      {
        en: "128.250.73.5 prefix exercise (slide p.21–22).",
        zh: "128.250.73.5 前缀练习（课件 p.21–22）。",
        answerEn: "In /16 yes; in 128.250.0.0/24 no (use 128.250.73.0/24); in /17 yes; /17 has 2^15 = 32768 addresses.",
        answerZh: "在 /16 是；在 128.250.0.0/24 否（属 128.250.73.0/24）；在 /17 是；/17 有 2^15 = 32768 地址。",
        slide: "p.21–22"
      },
      {
        en: "Longest prefix match rule.",
        zh: "最长前缀匹配规则。",
        answerEn: "Router chooses forwarding entry with longest matching network prefix.",
        answerZh: "路由器选择匹配网络前缀最长的转发表项。",
        slide: "p.24"
      },
      {
        en: "Route aggregation benefit.",
        zh: "路由聚合好处。",
        answerEn: "One forwarding-table entry covers many networks — smaller tables, faster lookup.",
        answerZh: "一条转发表项覆盖多个网络——表更小、查找更快。",
        slide: "p.24"
      },
      {
        en: "Datagram vs virtual circuit network.",
        zh: "Datagram vs 虚电路网络。",
        answerEn: "Datagram = connectionless per-packet routing; VC = setup phase, fixed path, local VC numbers per hop.",
        answerZh: "Datagram = 无连接逐包路由；VC = 有建立阶段、固定路径、VC 号逐跳本地。",
        slide: "p.12"
      },
      {
        en: "Store-and-forward — five steps (slide p.9).",
        zh: "存储转发——五步（课件 p.9）。",
        answerEn: "(1) Host sends to router; (2) buffer on arrival, verify checksum; (3) store until out interface free; (4) forward to next router; (5) repeat.",
        answerZh: "（1）主机发到路由器；（2）到达缓冲、校验 checksum；（3）存到出接口空闲；（4）转发下一跳；（5）重复。",
        slide: "p.9"
      },
      {
        en: "Private address range 10.0.0.0/8.",
        zh: "私有地址 10.0.0.0/8 范围。",
        answerEn: "10.0.0.0 through 10.255.255.255.",
        answerZh: "10.0.0.0 至 10.255.255.255。",
        slide: "p.23"
      },
      {
        en: "IPv6 basics — 128-bit, hop limit, ::ffff, compression (slide p.26–28).",
        zh: "IPv6 基础——128 位、hop limit、::ffff、压缩（课件 p.26–28）。",
        answerEn: "128-bit addresses; hop limit like TTL; IPv4-mapped ::ffff:x.x.x.x; compress longest zero run (8000::123:4567:89AB:CDEF).",
        answerZh: "128 位地址；hop limit 同 TTL；IPv4-mapped ::ffff:x.x.x.x；压缩最长零段（8000::123:4567:89AB:CDEF）。",
        slide: "p.26–28"
      },
    ]
  },
  "wk10-congestion": {
    summary: "Memorise rwnd vs cwnd, slow start, AIMD, fast retransmit, zero-window probe, and full trace.",
    summaryZh: "默写 rwnd vs cwnd、慢启动、AIMD、快重传、零窗口探测与完整 trace。",
    items: [
      {
        en: "rwnd vs cwnd — who sets each? (slide p.45)",
        zh: "rwnd vs cwnd——各由谁决定？（课件 p.45）",
        answerEn: "rwnd = receiver advertises (flow control); cwnd = sender infers from network (congestion control).",
        answerZh: "rwnd = 接收方通告（流量控制）；cwnd = 发送方根据网络推断（拥塞控制）。",
        slide: "p.45"
      },
      {
        en: "Effective send window formula.",
        zh: "有效发送窗口公式。",
        answerEn: "min(rwnd, cwnd) — unacknowledged data may not exceed this.",
        answerZh: "min(rwnd, cwnd)——未确认数据不得超过此值。",
        slide: "p.45"
      },
      {
        en: "Slow start — cwnd growth (slide p.46).",
        zh: "慢启动——cwnd 增长（课件 p.46）。",
        answerEn: "Increase cwnd by one MSS for each ACK received (exponential growth per RTT).",
        answerZh: "每收到一个 ACK，cwnd 增加一个 MSS（每 RTT 近似翻倍）。",
        slide: "p.46"
      },
      {
        en: "Congestion avoidance — cwnd growth (slide p.48).",
        zh: "拥塞避免——cwnd 增长（课件 p.48）。",
        answerEn: "Linear increase: add MSS per window of ACKs (additive increase).",
        answerZh: "线性增加：每窗口 ACK 增加 MSS（加法增长）。",
        slide: "p.48"
      },
      {
        en: "TCP Tahoe on loss (slide p.48).",
        zh: "TCP Tahoe 丢包时（课件 p.48）。",
        answerEn: "ssthresh = cwnd/2 before loss; cwnd = 1 MSS; restart slow start.",
        answerZh: "丢包前 cwnd 一半设为 ssthresh；cwnd = 1 MSS；重新慢启动。",
        slide: "p.48"
      },
      {
        en: "Fast retransmit trigger — 3 DupACKs (slide p.27).",
        zh: "快重传触发——3 个 DupACK（课件 p.27）。",
        answerEn: "Three duplicate ACKs for same sequence number — infer loss without waiting for timeout.",
        answerZh: "同一序号三个重复 ACK——不等超时就推断丢包。",
        slide: "p.27"
      },
      {
        en: "TCP Reno vs Tahoe on fast retransmit (slide p.50).",
        zh: "Reno vs Tahoe 快重传后（课件 p.50）。",
        answerEn: "Reno: halve cwnd and enter fast recovery; Tahoe: cwnd=1 MSS and restart slow start.",
        answerZh: "Reno：cwnd 减半并 fast recovery；Tahoe：cwnd=1 MSS 并重新慢启动。",
        slide: "p.50"
      },
      {
        en: "Zero window — URGENT data and probe (slide p.8).",
        zh: "零窗口——URGENT 数据与 probe（课件 p.8）。",
        answerEn: "When rwnd=0 sender stops data; may send URGENT data or zero-window probe to get new window.",
        answerZh: "rwnd=0 时发送方停发数据；可发 URGENT 数据或 zero-window probe 获取新窗口。",
        slide: "p.8"
      },
      {
        en: "Persist timer and ZeroWindowProbe.",
        zh: "Persist 定时器与 ZeroWindowProbe。",
        answerEn: "If window stays zero, persist timer fires → sender sends ZeroWindowProbe → receiver re-advertises rwnd.",
        answerZh: "窗口持续为零时 persist 定时器超时 → 发送 ZeroWindowProbe → 接收方重新通告 rwnd。",
        slide: "p.8"
      },
      {
        en: "Full trace — SYN:1 Window:50 through seg21 dupACK (slide p.23–41).",
        zh: "完整 trace——SYN:1 Window:50 到 seg21 dupACK（课件 p.23–41）。",
        answerEn: "Handshake Window:50 → send/receive → seg21 lost → DupACK:21 ×3 → fast retransmit → ACK:71 Window:0 → persist probe → Window:50 restored.",
        answerZh: "握手 Window:50 → 收发 → seg21 丢 → DupACK:21 三次 → 快重传 → ACK:71 Window:0 → persist probe → 窗口恢复 50。",
        slide: "p.23–41"
      },
      {
        en: "Pre-Jacobson TCP — only rwnd (slide p.44).",
        zh: "Jacobson 之前——仅 rwnd（课件 p.44）。",
        answerEn: "Before Jacobson, TCP used only rwnd for flow control — no cwnd; senders could not detect network congestion.",
        answerZh: "Jacobson 之前 TCP 仅用 rwnd 流控——无 cwnd；发送方无法感知网络拥塞。",
        slide: "p.44"
      },
      {
        en: "ssthresh role and DupACK meaning.",
        zh: "ssthresh 作用与 DupACK 含义。",
        answerEn: "ssthresh = threshold between slow start and congestion avoidance; DupACK = receiver repeats same ACK when out-of-order segment arrives.",
        answerZh: "ssthresh = 慢启动与拥塞避免之间的阈值；DupACK = 乱序段到达时接收方重复同一 ACK。",
        slide: "p.46–48"
      },
    ]
  },
  "wk11-routing": {
    summary: "Memorise forwarding vs routing, link-state five steps, Dijkstra, flooding, and IPv6.",
    summaryZh: "默写转发 vs 路由、链路状态五步、Dijkstra、洪泛与 IPv6。",
    items: [
      {
        en: "Forwarding vs routing.",
        zh: "Forwarding vs routing。",
        answerEn: "Forwarding = data plane, move packet to next hop using table; routing = control plane, build the table.",
        answerZh: "Forwarding = 数据平面，查表转下一跳；routing = 控制平面，构建转发表。",
        slide: "p.8–10"
      },
      {
        en: "Link State Routing — five steps (slide p.42).",
        zh: "链路状态路由——五步（课件 p.42）。",
        answerEn: "(1) Discover neighbours; (2) set link costs; (3) construct link-state packet; (4) reliable flooding to all routers; (5) run Dijkstra locally.",
        answerZh: "（1）发现邻居；（2）设置链路代价；（3）构造链路状态包；（4）可靠洪泛到所有路由器；（5）本地运行 Dijkstra。",
        slide: "p.42"
      },
      {
        en: "OSPF — what is it?",
        zh: "OSPF 是什么？",
        answerEn: "Open Shortest Path First — most common link-state routing protocol (within a domain).",
        answerZh: "Open Shortest Path First——最常见的链路状态路由协议（域内）。",
        slide: "p.42+"
      },
      {
        en: "Dijkstra early termination condition (slide p.41).",
        zh: "Dijkstra 提前终止条件（课件 p.41）。",
        answerEn: "Stop when destination node has smallest tentative distance (e.g. D=10 is minimum).",
        answerZh: "当目的节点 tentative 距离最小时停止（如 D=10 已为最小）。",
        slide: "p.41"
      },
      {
        en: "Flooding — duplicate control (slide p.14).",
        zh: "Flooding 如何控制重复（课件 p.14）。",
        answerEn: "Sequence numbers / record seen packets — forward each packet at most once per link.",
        answerZh: "序号/记录已见分组——每条链路最多转发一次。",
        slide: "p.14"
      },
      {
        en: "IPv6 address length (slide p.2).",
        zh: "IPv6 地址长度（课件 p.2）。",
        answerEn: "128 bits.",
        answerZh: "128 位。",
        slide: "p.2"
      },
      {
        en: "IPv6 Hop limit field (slide p.3).",
        zh: "IPv6 Hop limit 字段（课件 p.3）。",
        answerEn: "Same role as IPv4 TTL — decremented each hop, drop at zero.",
        answerZh: "同 IPv4 TTL——每跳减 1，为零则丢弃。",
        slide: "p.3"
      },
      {
        en: "IPv4-mapped IPv6 address form (slide p.4).",
        zh: "IPv4-mapped IPv6 地址形式（课件 p.4）。",
        answerEn: "::ffff:192.31.2.46 — IPv4 embedded in low 32 bits.",
        answerZh: "::ffff:192.31.2.46——IPv4 嵌入低 32 位。",
        slide: "p.4"
      },
      {
        en: "Compress IPv6: 8000:0000:0000:0000:0123:4567:89AB:CDEF (slide p.4).",
        zh: "压缩 IPv6（课件 p.4）。",
        answerEn: "8000::123:4567:89AB:CDEF.",
        answerZh: "8000::123:4567:89AB:CDEF。",
        slide: "p.4"
      },
      {
        en: "Link-state packet contents.",
        zh: "链路状态包内容。",
        answerEn: "Router ID, sequence number, age, list of neighbours and costs.",
        answerZh: "路由器 ID、序号、age、邻居列表及代价。",
        slide: "p.42"
      },
      {
        en: "Static vs adaptive routing.",
        zh: "静态 vs 自适应路由。",
        answerEn: "Static = manually configured, does not adapt; adaptive = updates as topology changes.",
        answerZh: "静态 = 手工配置、不随拓扑变；自适应 = 拓扑变化时更新。",
        slide: "p.8"
      },
      {
        en: "Sink tree from shortest paths.",
        zh: "最短路径汇树。",
        answerEn: "Optimal routes from all routers to a destination form a sink tree (no loops).",
        answerZh: "所有路由器到同一目的的最优路由形成汇树（无环）。",
        slide: "p.10"
      },
    ]
  },
  "wk11-control": {
    summary: "Memorise ARP, ICMP, DHCP, traceroute, data vs control plane, and MAC layer note.",
    summaryZh: "默写 ARP、ICMP、DHCP、traceroute、数据/控制平面与 MAC 层次说明。",
    items: [
      {
        en: "ARP purpose (slide p.16).",
        zh: "ARP 用途（课件 p.16）。",
        answerEn: "Resolve next-hop IP address to MAC address on a LAN.",
        answerZh: "在同一 LAN 上将下一跳 IP 解析为 MAC 地址。",
        slide: "p.16"
      },
      {
        en: "ARP request — broadcast or unicast?",
        zh: "ARP 请求是广播还是单播？",
        answerEn: "Broadcast on LAN — who has IP X? Target replies unicast.",
        answerZh: "LAN 上广播——谁有 IP X？目标单播回复。",
        slide: "p.16"
      },
      {
        en: "ARP cache (slide p.18).",
        zh: "ARP 缓存（课件 p.18）。",
        answerEn: "Resolved IP→MAC mappings cached temporarily; entries time out and must be refreshed.",
        answerZh: "IP→MAC 映射临时缓存；表项超时后须重新解析。",
        slide: "p.18"
      },
      {
        en: "ICMP purpose (slide p.6).",
        zh: "ICMP 用途（课件 p.6）。",
        answerEn: "Error reporting and network diagnostics between IP entities.",
        answerZh: "IP 实体间的差错报告与网络诊断。",
        slide: "p.6"
      },
      {
        en: "Traceroute — TTL mechanism (slide p.7).",
        zh: "Traceroute——TTL 机制（课件 p.7）。",
        answerEn: "Send packets with TTL=1,2,3…; each hop returns Time Exceeded; map path and RTTs.",
        answerZh: "发送 TTL=1,2,3… 的包；每跳返回 Time Exceeded；映射路径与 RTT。",
        slide: "p.7"
      },
      {
        en: "ICMP Time Exceeded — when sent?",
        zh: "ICMP Time Exceeded 何时发送？",
        answerEn: "When a router decrements TTL to zero (or reassembly timeout).",
        answerZh: "路由器将 TTL 减到零时（或重组超时时）。",
        slide: "p.7"
      },
      {
        en: "DHCP DISCOVER and OFFER (slide p.11–12).",
        zh: "DHCP DISCOVER 与 OFFER（课件 p.11–12）。",
        answerEn: "Client broadcasts DISCOVER; server replies OFFER with proposed IP address.",
        answerZh: "客户端广播 DISCOVER；服务器 OFFER 回复提议的 IP 地址。",
        slide: "p.11–12"
      },
      {
        en: "DHCP also provides gateway and DNS (slide p.12).",
        zh: "DHCP 还提供网关与 DNS（课件 p.12）。",
        answerEn: "Besides IP address, DHCP can assign default gateway and DNS server.",
        answerZh: "除 IP 地址外，DHCP 可分配默认网关和 DNS 服务器。",
        slide: "p.12"
      },
      {
        en: "DHCP — layer 7 control plane (slide p.13).",
        zh: "DHCP——第 7 层控制平面（课件 p.13）。",
        answerEn: "DHCP is an application-layer (Layer 7) control-plane protocol running over UDP.",
        answerZh: "DHCP 是跑在 UDP 之上的应用层（第 7 层）控制平面协议。",
        slide: "p.13"
      },
      {
        en: "Data plane vs control plane (slide p.4).",
        zh: "Data plane vs control plane（课件 p.4）。",
        answerEn: "Data plane forwards packets; control plane builds routing/forwarding state.",
        answerZh: "Data plane 转发分组；control plane 构建路由/转发状态。",
        slide: "p.4"
      },
      {
        en: "MAC address — layer note (slide p.15).",
        zh: "MAC 地址——层次说明（课件 p.15）。",
        answerEn: "Called physical address but works at data link layer, not physical layer.",
        answerZh: "虽叫 physical address，但工作在数据链路层，不在物理层。",
        slide: "p.15"
      },
      {
        en: "Ping — ICMP Echo (slide p.6) and default gateway (slide p.12).",
        zh: "Ping——ICMP Echo（课件 p.6）与默认网关（课件 p.12）。",
        answerEn: "Ping sends ICMP Echo Request; target replies Echo Reply. Default gateway = router for off-subnet destinations.",
        answerZh: "Ping 发 ICMP Echo Request；目标回 Echo Reply。默认网关 = 目的不在本地子网时的路由器。",
        slide: "p.6,12"
      },
    ]
  },
  "wk12-nat": {
    summary: "Memorise NAT mechanism, RFC1918 ranges, limitations, debugging matrix, and tools.",
    summaryZh: "默写 NAT 机制、RFC1918 范围、局限、调试矩阵与工具。",
    items: [
      {
        en: "NAT main purpose.",
        zh: "NAT 主要目的。",
        answerEn: "Allow many private hosts to share one or few public IP addresses.",
        answerZh: "让多台私有主机共享一个或少数公网 IP。",
        slide: "p.4"
      },
      {
        en: "RFC1918 private ranges (three) (slide p.4–5).",
        zh: "RFC1918 三个私有地址范围（课件 p.4–5）。",
        answerEn: "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.",
        answerZh: "10.0.0.0/8、172.16.0.0/12、192.168.0.0/16。",
        slide: "p.4–5"
      },
      {
        en: "NAT outbound — replace IP+port with table index (slide p.7).",
        zh: "NAT 出站——用表索引替换 IP+端口（课件 p.7）。",
        answerEn: "Replace private source IP with public IP; replace source port with NAT table entry index (stores original IP:port).",
        answerZh: "私有源 IP 换为公网 IP；源端口换为 NAT 表项索引（存原始 IP:port）。",
        slide: "p.7"
      },
      {
        en: "NAT — checksum recalculation (slide p.7).",
        zh: "NAT——校验和重算（课件 p.7）。",
        answerEn: "IP and TCP/UDP checksums must be recalculated after header fields change.",
        answerZh: "首部字段改变后须重新计算 IP 与 TCP/UDP 校验和。",
        slide: "p.7"
      },
      {
        en: "NAT is stateful — meaning.",
        zh: "NAT 有状态——含义。",
        answerEn: "NAT box maintains mapping table for active flows — inbound packets matched to entries.",
        answerZh: "NAT 设备维护活跃流的映射表——入站包须匹配表项。",
        slide: "p.7–8"
      },
      {
        en: "NAT is not a firewall (slide p.9).",
        zh: "NAT 不是防火墙（课件 p.9）。",
        answerEn: "NAT translates addresses; firewall filters by policy — NAT provides obscurity not full security.",
        answerZh: "NAT 做地址翻译；防火墙按策略过滤——NAT 仅提供隐蔽性而非完整安全。",
        slide: "p.9"
      },
      {
        en: "End-to-end connectivity break (slide p.8).",
        zh: "端到端连接性破坏（课件 p.8）。",
        answerEn: "Private hosts can receive inbound packets only after outbound flow created mapping (unless port forwarding).",
        answerZh: "私有主机只有出站流建立映射后才能收 inbound 包（除非端口转发）。",
        slide: "p.8"
      },
      {
        en: "Inbound connection to private host — NAT issue (slide p.8–9).",
        zh: "外部主动连内网主机——NAT 问题（课件 p.8–9）。",
        answerEn: "No mapping exists unless port forwarding or similar configured.",
        answerZh: "无映射表项除非配置端口转发等。",
        slide: "p.8–9"
      },
      {
        en: "Layered debugging — four guiding questions (slide p.13–16).",
        zh: "分层调试——四个引导问题（课件 p.13–16）。",
        answerEn: "(1) Which part of user experience failed? (2) What to ask colleagues? (3) What could fail at each location? (4) How to test each hypothesis?",
        answerZh: "（1）用户体验哪部分失败？（2）问同事什么？（3）各位置可能什么问题？（4）如何验证假设？",
        slide: "p.13–16"
      },
      {
        en: "ping works but TCP fails — likely layer?",
        zh: "ping 通但 TCP 失败——可能哪层？",
        answerEn: "Transport or application — IP works; check port/firewall/app.",
        answerZh: "传输或应用层——IP 可达；查端口/防火墙/应用。",
        slide: "p.13–16"
      },
      {
        en: "DNS resolves but HTTP fails — check what?",
        zh: "DNS 能解析但 HTTP 失败——查什么？",
        answerEn: "Application/transport — port 80/443 blocked, server down, or wrong Host header.",
        answerZh: "应用/传输——80/443 被挡、服务器宕机或 Host 头错误。",
        slide: "p.13–16"
      },
      {
        en: "Debug tools by function (slide p.16) and traceroute one hop.",
        zh: "按功能记调试工具（课件 p.16）与 traceroute 只走一跳。",
        answerEn: "Know tool functions (ping connectivity, traceroute path, dig DNS, curl HTTP) not every command name. One hop only → local gateway/first router.",
        answerZh: "记工具功能（ping 连通、traceroute 路径、dig DNS、curl HTTP），不背所有命令名。只走一跳 → 本地网关/第一跳路由器。",
        slide: "p.16"
      },
    ]
  },
};
