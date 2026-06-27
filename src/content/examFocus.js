// Structured bilingual exam focus for every chapter.
// Each topic carries the English term (what appears on the exam paper),
// the Chinese reading, what the exam usually asks, the key distinction,
// and a common trap students fall into.

export const examFocus = {
  "wk1-os": {
    summary: "OS as hardware abstraction and resource manager; the user/kernel boundary is the spine of everything that follows.",
    summaryZh: "把 OS 看成硬件抽象 + 资源管理器；user/kernel 边界是后续所有内容的脊柱。",
    topics: [
      {
        en: "Operating System vs Kernel",
        zh: "操作系统 vs 内核",
        asks: "Explain the difference between the OS kernel and the whole operating system.",
        asksZh: "区分 OS kernel 和 whole OS。",
        distinction: "Kernel = the privileged core that runs in kernel mode; the whole OS also includes libraries, daemons, shells, system utilities.",
        distinctionZh: "Kernel = 内核态运行的核心；whole OS 还包括库、守护进程、shell、系统工具。",
        trap: "Treating 'OS' and 'kernel' as exact synonyms in a written answer."
      },
      {
        en: "Hardware Abstraction",
        zh: "硬件抽象",
        asks: "Why does the OS provide an abstraction layer over hardware?",
        asksZh: "OS 为什么要对硬件做抽象？",
        distinction: "Abstraction hides detail and gives each app a private virtual machine; resource management shares the real machine.",
        distinctionZh: "抽象隐藏细节、给每个程序一台虚拟机；资源管理是共享真实机器。",
        trap: "Confusing abstraction (simplification) with protection (isolation)."
      },
      {
        en: "User Mode vs Kernel Mode",
        zh: "用户态 vs 内核态",
        asks: "Why do we need two CPU execution modes?",
        asksZh: "为什么 CPU 要分两种模式？",
        distinction: "Kernel mode can run privileged instructions and touch any memory; user mode cannot.",
        distinctionZh: "内核态可执行特权指令、访问任意内存；用户态不行。",
        trap: "Thinking a system call is itself a mode — the call is the request, the mode switch happens via a trap."
      },
      {
        en: "Interrupt vs System Call vs Trap",
        zh: "中断 vs 系统调用 vs 陷阱",
        asks: "Contrast interrupt handling with system call handling.",
        asksZh: "对比中断处理和系统调用处理。",
        distinction: "Interrupt = asynchronous hardware/software event; system call = synchronous request from a program; both transfer control to the kernel.",
        distinctionZh: "中断 = 异步事件；系统调用 = 程序主动同步请求；两者都把控制权交给内核。",
        trap: "Saying 'interrupts come from user programs' — software interrupts/traps are a special case, normal interrupts are async."
      },
      {
        en: "Memory Boundary / Protection",
        zh: "内存边界 / 保护",
        asks: "What problem does a memory boundary solve?",
        asksZh: "内存边界解决什么问题？",
        distinction: "A base/limit or MMU boundary stops one process from reading/writing another's (or the kernel's) memory.",
        distinctionZh: "base/limit 或 MMU 边界阻止进程越界访问其它进程或内核内存。",
        trap: "Confusing the memory boundary with the user/kernel mode bit — both protect, but they protect different things."
      },
      {
        en: "Stack Frames & Subroutine Call",
        zh: "栈帧与子程序调用",
        asks: "What is stored on the stack when a function is called?",
        asksZh: "函数调用时栈上保存什么？",
        distinction: "A frame holds arguments, return address, saved registers, local variables; SP moves toward lower addresses.",
        distinctionZh: "栈帧含参数、返回地址、保存的寄存器、局部变量；SP 向低地址增长。",
        trap: "Assuming the call order equals the hardware push order — calling convention decides what lives in registers vs on the stack."
      },
      {
        en: "Interrupt Return Outcomes",
        zh: "中断返回的三种结局",
        asks: "After handling an interrupt, does the interrupted program always resume?",
        asksZh: "中断处理完之后，被中断的程序一定继续跑吗？",
        distinction: "Three outcomes: resume the interrupted program; OS kills it (fatal exception); OS schedules another process (e.g. time slice expired via clock interrupt).",
        distinctionZh: "三种结局：恢复被中断程序；OS 杀掉它（致命异常）；OS 调度另一个进程（时钟中断时间片用完）。",
        trap: "Assuming 'return from interrupt' always means 'resume exactly what was running' — the kernel may use the interrupt as a scheduling point."
      },
      {
        en: "System Call Can Block the Caller",
        zh: "系统调用可能阻塞调用者",
        asks: "Is a system call guaranteed to return immediately? What does the kernel do meanwhile?",
        asksZh: "系统调用一定立即返回吗？此时内核做什么？",
        distinction: "A syscall like read() may block the caller (→ blocked state); the kernel then schedules another ready process until an interrupt wakes the blocker. Synchronous for the caller, still a scheduling opportunity for the kernel.",
        distinctionZh: "read() 等可能把调用者阻塞（→ blocked），内核转去调度另一个 ready 进程，等中断唤醒它。对调用者同步，对内核仍是调度点。",
        trap: "Equating 'system call = synchronous' with 'returns immediately' — synchronous refers to the caller waiting for the result, not to instant return."
      }
    ]
  },

  "wk2-process": {
    summary: "Process = resource container; thread = execution flow; fork, PCB, process states and address space are the four pillars.",
    summaryZh: "进程 = 资源容器；线程 = 执行流；fork、PCB、进程状态、地址空间是四根支柱。",
    topics: [
      {
        en: "Process vs Thread",
        zh: "进程 vs 线程",
        asks: "What is shared and what is private between threads of the same process?",
        asksZh: "同一进程的线程之间，什么共享、什么私有？",
        distinction: "Process owns address space + open files; threads share address space & files but each has its own stack, registers, PC.",
        distinctionZh: "进程持有地址空间与打开的文件；线程共享地址空间与文件，但各有独立 stack、register、PC。",
        trap: "Saying threads have separate address spaces — they do not; only the stack is per-thread."
      },
      {
        en: "Process Control Block (PCB) / TCB",
        zh: "进程控制块 / 线程控制块",
        asks: "What information must the OS keep in a PCB?",
        asksZh: "OS 必须在 PCB 里保存什么？",
        distinction: "PCB stores PID, state, CPU registers, memory bounds, scheduling info, open files; TCB is the lighter per-thread subset.",
        distinctionZh: "PCB 存 PID、状态、寄存器、内存界限、调度信息、打开文件；TCB 是更轻的每线程子集。",
        trap: "Forgetting that the saved PC/registers live in the PCB — that is what makes a context switch reversible."
      },
      {
        en: "Process States (ready / running / blocked / terminated)",
        zh: "进程状态",
        asks: "When does a process move from running to blocked? From blocked to running?",
        asksZh: "什么时候 running→blocked？blocked→running？",
        distinction: "Running→blocked on an event (I/O, wait); blocked→ready when the event completes; ready→running by the scheduler.",
        distinctionZh: "等待事件时 running→blocked；事件完成 blocked→ready；调度器选它 ready→running。",
        trap: "Drawing an arrow blocked→running directly — it must go through ready."
      },
      {
        en: "fork() Semantics",
        zh: "fork 语义",
        asks: "After fork(), how do parent and child differ, and what does fork return?",
        asksZh: "fork 后父子进程有何不同？fork 返回什么？",
        distinction: "Two independent address spaces (copy-on-write under the hood); fork returns child PID to parent, 0 to child.",
        distinctionZh: "两份独立地址空间（底层 copy-on-write）；fork 给父返回子 PID，给子返回 0。",
        trap: "Assuming the child sees the same PID as the parent, or that variables are shared post-fork."
      },
      {
        en: "Context Switch",
        zh: "上下文切换",
        asks: "What does a context switch actually do, and what is its cost?",
        asksZh: "上下文切换到底做什么？代价是什么？",
        distinction: "Save the running process's registers/PC into its PCB, load another's, switch page tables; pure overhead, no useful work.",
        distinctionZh: "把当前进程的寄存器/PC 存入 PCB，装入另一个，切换页表；是纯开销。",
        trap: "Confusing a mode switch (user↔kernel) with a context switch (process↔process)."
      },
      {
        en: "Address Space Layout",
        zh: "地址空间布局",
        asks: "Sketch the layout of a process address space.",
        asksZh: "画出进程地址空间布局。",
        distinction: "Code, Data, Heap (grows up), free space, Stack (grows down); threads share all but the stack.",
        distinctionZh: "Code、Data、Heap（向上）、空闲、Stack（向下）；线程共享除 stack 外的全部。",
        trap: "Drawing the stack at the top growing up — it sits at the high end and grows toward low addresses."
      },
      {
        en: "Thread Context vs Running Thread",
        zh: "未运行线程的上下文",
        asks: "When a thread is not running, where are its PC/SP, and what do the CPU's PC/SP point to?",
        asksZh: "线程不在运行时，它的 PC/SP 在哪？CPU 的 PC/SP 指向什么？",
        distinction: "An idle thread's context (PC, SP, registers) lives in memory (its TCB); the CPU's PC/SP currently point at whichever thread is running.",
        distinctionZh: "未运行线程的上下文（PC、SP、寄存器）在内存（TCB）里；CPU 的 PC/SP 当前指向正在运行的那个线程。",
        trap: "Thinking each thread 'owns' the CPU registers permanently — registers belong to the running thread; others' register state is saved in memory."
      }
    ]
  },

  "wk3-cpu": {
    summary: "Read scheduling off a Gantt chart, not from definitions; know which metric each algorithm optimises.",
    summaryZh: "从 Gantt 图读调度，而不是背定义；清楚每个算法优化哪个指标。",
    topics: [
      {
        en: "Preemptive vs Non-preemptive",
        zh: "可抢占 vs 不可抢占",
        asks: "Give an example of each and say when preemption is triggered.",
        asksZh: "各举一例，说明何时抢占。",
        distinction: "Non-preemptive runs a job until it blocks or finishes; preemptive can be interrupted by a timer or higher-priority arrival.",
        distinctionZh: "不可抢占：进程阻塞或结束才让出 CPU；可抢占：定时器或更高优先级到来时打断。",
        trap: "Calling RR non-preemptive — RR is the textbook preemptive algorithm via timer."
      },
      {
        en: "FCFS / SJF / RR / Priority",
        zh: "FCFS / SJF / RR / 优先级",
        asks: "Given arrival and burst times, draw the Gantt chart and compute waiting time.",
        asksZh: "给到达与 burst，画 Gantt、算等待时间。",
        distinction: "FCFS = arrival order; SJF = shortest remaining burst; RR = fixed quantum in FIFO order; Priority = by priority number.",
        distinctionZh: "FCFS 按到达；SJF 按最短剩余；RR 按 FIFO 加时间片；Priority 按优先级。",
        trap: "Forgetting to re-sort on each arrival for preemptive SJF (SRTF)."
      },
      {
        en: "Turnaround vs Response vs Waiting Time",
        zh: "周转 vs 响应 vs 等待时间",
        asks: "Define turnaround time and response time precisely.",
        asksZh: "精确给出 turnaround 和 response 的定义。",
        distinction: "Turnaround = completion − arrival; response = first CPU time − arrival; waiting = turnaround − burst.",
        distinctionZh: "Turnaround = 完成 − 到达；Response = 首次运行 − 到达；Waiting = Turnaround − burst。",
        trap: "Confusing waiting time with response time when a job waits, runs, then waits again."
      },
      {
        en: "Convoy Effect (FCFS)",
        zh: "护航效应",
        asks: "What is the convoy effect and which algorithm suffers from it?",
        asksZh: "什么是 convoy effect？哪个算法受其影响？",
        distinction: "One slow CPU-bound process makes all short I/O-bound processes wait behind it under FCFS.",
        distinctionZh: "FCFS 下一个慢的 CPU 密集进程让所有短 I/O 进程排在后面。",
        trap: "Blaming SJF for the convoy effect — it is an FCFS pathology."
      },
      {
        en: "Starvation & Aging",
        zh: "饥饿与老化",
        asks: "How can priority scheduling starve a process, and how is aging a fix?",
        asksZh: "优先级调度如何饿死进程？aging 如何解决？",
        distinction: "Starvation = indefinite wait because higher-priority jobs keep arriving; aging raises priority over time.",
        distinctionZh: "Starvation = 高优先级不断到来导致无限等待；aging 随时间提升优先级。",
        trap: "Thinking SJF cannot starve — short jobs can starve a long one forever."
      },
      {
        en: "Round Robin Quantum Trade-off",
        zh: "RR 时间片权衡",
        asks: "What happens if the RR quantum is too small? Too large?",
        asksZh: "RR 时间片太小/太大分别会怎样？",
        distinction: "Too small → context-switch overhead dominates; too large → RR degrades to FCFS.",
        distinctionZh: "太小 → 上下文切换开销占主导；太大 → RR 退化为 FCFS。",
        trap: "Saying smaller quantum always means better response — past a point, overhead cancels the gain."
      },
      {
        en: "MLFQ Quanta Trade-off",
        zh: "MLFQ 配额权衡",
        asks: "In the lecture's 4-level MLFQ, why are the quanta 2 / 4 / 8 / 16 — smaller at the top, larger at the bottom?",
        asksZh: "课件 4 级 MLFQ 的配额 2/4/8/16，为什么上小下大？",
        distinction: "High-priority queues serve interactive/I/O jobs that need fast response → small quantum; low-priority queues hold CPU-bound jobs that already sank down → large quantum to amortise context-switch cost.",
        distinctionZh: "高优先级队列服务交互/I/O 作业，需要快响应 → 小时间片；低队列是沉下来的 CPU 密集作业 → 大时间片摊薄切换开销。",
        trap: "Thinking all MLFQ queues share one quantum — each level has its own, and the ratio (doubling here) is the design knob."
      }
    ]
  },

  "wk3-ipc": {
    summary: "Race conditions come from non-atomic interleavings; mutual exclusion needs atomic hardware primitives.",
    summaryZh: "竞态来自非原子的交错；互斥需要硬件级原子原语。",
    topics: [
      {
        en: "Race Condition",
        zh: "竞态条件",
        asks: "Define a race condition and give the read-modify-write example.",
        asksZh: "定义竞态，举 read-modify-write 例子。",
        distinction: "Outcome depends on the relative timing/interleaving of threads; correctness is not guaranteed.",
        distinctionZh: "结果取决于线程交错时序；正确性不保证。",
        trap: "Believing a single-core CPU cannot have races — preemption between instructions still interleaves."
      },
      {
        en: "Critical Region vs Mutual Exclusion",
        zh: "临界区 vs 互斥",
        asks: "Distinguish a critical region from mutual exclusion.",
        asksZh: "区分临界区与互斥。",
        distinction: "Critical region = the code that touches shared state; mutual exclusion = the property that only one thread is inside at a time.",
        distinctionZh: "临界区 = 访问共享状态的代码段；互斥 = 同时只允许一个线程在里面的性质。",
        trap: "Using the two terms as synonyms — one names a place, the other names a guarantee."
      },
      {
        en: "Requirements for a Good Lock",
        zh: "好锁的四个条件",
        asks: "List the four conditions a correct mutual-exclusion solution must satisfy.",
        asksZh: "列出正确互斥方案需满足的四条。",
        distinction: "Mutual exclusion, progress (decide who enters next), bounded waiting (no starvation), and (ideally) no busy waiting.",
        distinctionZh: "互斥、进展、有限等待、（理想）无忙等。",
        trap: "Forgetting 'progress' — a solution that deadlocks satisfies mutual exclusion but fails progress."
      },
      {
        en: "Busy Waiting",
        zh: "忙等待",
        asks: "What is the cost of busy waiting, and when is it acceptable?",
        asksZh: "忙等的代价？什么情况可接受？",
        distinction: "Spinning burns CPU cycles; acceptable only when the wait is shorter than a context switch (short critical sections).",
        distinctionZh: "自旋消耗 CPU；仅当等待短于上下文切换时可接受。",
        trap: "Assuming spinlocks are always bad — on multiprocessors with short waits they can beat blocking locks."
      },
      {
        en: "TSL / Hardware Atomicity",
        zh: "TSL / 硬件原子性",
        asks: "Why must TSL be a single atomic instruction?",
        asksZh: "为什么 TSL 必须是单条原子指令？",
        distinction: "A naive lock variable does read-then-write as two steps, so two threads can both see it free; TSL does test-and-set atomically in hardware.",
        distinctionZh: "普通锁变量读和写是两步，两线程都能看到空闲；TSL 在硬件里原子地测试并设置。",
        trap: "Thinking a `while (lock)` in C is enough — without atomicity it is exactly the bug locks exist to fix."
      },
      {
        en: "Deadlock Conditions (Coffman)",
        zh: "死锁四条件",
        asks: "List the four necessary conditions for deadlock.",
        asksZh: "列出死锁四个必要条件。",
        distinction: "Mutual exclusion, hold-and-wait, no preemption, circular wait — all four must hold.",
        distinctionZh: "互斥、占有并等待、不可抢占、循环等待 — 四者同时成立。",
        trap: "Saying any three are enough — deadlock requires all four; breaking any one prevents it."
      },
      {
        en: "Strict Alternation Failure Mode",
        zh: "严格交替的失败模式",
        asks: "Why does strict alternation violate the mutual-exclusion requirements even though it provides mutual exclusion?",
        asksZh: "严格交替明明提供了互斥，为什么仍违反互斥的几个条件？",
        distinction: "It provides mutual exclusion but breaks the progress requirement: a thread outside the critical region can still block another from entering, because the turn variable forces strict turns.",
        distinctionZh: "它给了互斥，但破坏了进展性：临界区外的线程仍能阻塞别人进入，因为 turn 变量强制轮流。",
        trap: "Conflating 'mutual exclusion' (which strict alternation has) with the full set of four conditions (which it fails on progress)."
      }
    ]
  },

  "wk4-memory": {
    summary: "Base/limit motivates paging; paging fixes contiguous allocation; learn to compute page/offset/frame/physical by hand.",
    summaryZh: "base/limit 引出分页；分页解决连续分配；能手算 page/offset/frame/physical。",
    topics: [
      {
        en: "External vs Internal Fragmentation",
        zh: "外部 vs 内部碎片",
        asks: "Give an example of each fragmentation type and which scheme causes it.",
        asksZh: "各举一例，说明哪种方案产生。",
        distinction: "External = free holes between allocated blocks (variable partitioning); internal = unused space inside an allocated block (fixed pages).",
        distinctionZh: "外部 = 已分配块之间的空闲洞（变长分区）；内部 = 已分配块内部未用空间（固定页）。",
        trap: "Saying paging suffers external fragmentation — it suffers internal, not external."
      },
      {
        en: "Logical vs Physical Address",
        zh: "逻辑地址 vs 物理地址",
        asks: "Who generates the logical address and who produces the physical one?",
        asksZh: "谁产生逻辑地址？谁产生物理地址？",
        distinction: "CPU emits a logical address; the MMU translates it to a physical address using the page table.",
        distinctionZh: "CPU 产生逻辑地址；MMU 用页表翻译成物理地址。",
        trap: "Thinking the program ever sees a physical address — it never does."
      },
      {
        en: "Address Translation (page number, offset, frame)",
        zh: "地址翻译",
        asks: "Given a logical address and page size, compute page number, offset, and physical address.",
        asksZh: "给逻辑地址和页大小，算页号、偏移、物理地址。",
        distinction: "page = addr div pageSize; offset = addr mod pageSize; physical = frame × pageSize + offset.",
        distinctionZh: "页号 = 地址 ÷ 页大小；偏移 = 地址 mod 页大小；物理 = 页框 × 页大小 + 偏移。",
        trap: "Forgetting that the offset is copied verbatim — only the page number is translated."
      },
      {
        en: "Page Fault & TLB",
        zh: "缺页与 TLB",
        asks: "On a TLB hit, do we still consult the page table? On a page fault?",
        asksZh: "TLB 命中还查页表吗？缺页呢？",
        distinction: "TLB hit → skip the page table; TLB miss → walk the page table, and if the page is not resident, raise a page fault.",
        distinctionZh: "TLB 命中 → 跳过页表；未命中 → 查页表，若不在内存则触发缺页。",
        trap: "Confusing a TLB miss with a page fault — a miss just means 'check the table'; a fault means 'the page is on disk'."
      },
      {
        en: "Replacement Algorithms (FIFO / LRU / Second Chance)",
        zh: "页面置换算法",
        asks: "Given a reference string, count page faults for FIFO vs LRU vs Second Chance.",
        asksZh: "给引用串，数 FIFO/LRU/Second Chance 的缺页次数。",
        distinction: "FIFO uses arrival time; LRU uses last use time; Second Chance uses a reference bit + a circular queue.",
        distinctionZh: "FIFO 按到达；LRU 按最近使用；Second Chance 用引用位 + 循环队列。",
        trap: "Believing LRU = optimal in practice — Belady's anomaly hits FIFO, not LRU, but LRU needs hardware support."
      },
      {
        en: "TLB and Effective Access Time",
        zh: "TLB 与有效访问时间",
        asks: "Compute effective memory access time given TLB hit ratio and memory access cost.",
        asksZh: "给 TLB 命中率与访存代价，算有效访问时间。",
        distinction: "EAT = hit_ratio × (TLB + mem) + (1 − hit_ratio) × (TLB + pagetable + mem); fault cost adds disk time.",
        distinctionZh: "EAT = 命中率×(TLB+访存) + (1−命中率)×(TLB+查表+访存)；缺页还要加磁盘时间。",
        trap: "Forgetting to add the page-table lookup on a TLB miss."
      },
      {
        en: "Aging Counter Mechanics",
        zh: "老化计数器演算",
        asks: "Walk through how an 8-bit aging counter changes over clock ticks, and how you pick the victim.",
        asksZh: "演示 8 位 aging 计数器逐 tick 的变化，以及如何选牺牲页。",
        distinction: "Each tick: shift every counter right 1 bit, prepend that page's R bit to the left, clear all R bits; evict the page with the smallest counter (most leading zeros).",
        distinctionZh: "每 tick：所有计数器右移 1 位，把本页 R 追加到最左，清所有 R；驱逐计数器最小（前导 0 最多）的页。",
        trap: "Treating aging as exact LRU — a page referenced 9 ticks ago and one referenced 1000 ticks ago can both read 0 once the history shifts out."
      }
    ]
  },

  "wk5-security": {
    summary: "Confidentiality, integrity, authentication solve different problems; never conflate MAC, signature, certificate.",
    summaryZh: "保密性、完整性、认证解决不同问题；MAC、签名、证书不能混。",
    topics: [
      {
        en: "Security Goals (CIA)",
        zh: "安全三目标",
        asks: "Map an attack (eavesdrop / tamper / impersonate) to the security goal it violates.",
        asksZh: "把窃听/篡改/冒充映射到违反的安全目标。",
        distinction: "Confidentiality blocks reading; integrity blocks tampering; authentication verifies identity.",
        distinctionZh: "保密性防读；完整性防改；认证验身份。",
        trap: "Calling encryption an authentication mechanism — encryption alone gives confidentiality, not authentication."
      },
      {
        en: "Symmetric vs Public-key Crypto",
        zh: "对称 vs 公钥密码",
        asks: "When do you use symmetric, when public-key, and why combine them?",
        asksZh: "何时用对称、何时用公钥？为何要组合？",
        distinction: "Symmetric = one shared key, fast, for bulk data; public-key = key pair, slow, for key exchange and signatures.",
        distinctionZh: "对称 = 一个共享密钥，快，用于数据；公钥 = 密钥对，慢，用于密钥交换与签名。",
        trap: "Thinking public-key is 'more secure' so use it for everything — it is too slow for bulk encryption."
      },
      {
        en: "MAC vs Digital Signature",
        zh: "MAC vs 数字签名",
        asks: "Who can verify a MAC vs a signature? Can either be repudiated?",
        asksZh: "MAC 与签名谁能验证？能否抵赖？",
        distinction: "MAC uses a shared secret — both parties can produce/verify, so non-repudiation fails; signatures use private-key sign / public-key verify, giving non-repudiation.",
        distinctionZh: "MAC 用共享密钥 — 双方都能生成/验证，无法防抵赖；签名用私钥签、公钥验，可防抵赖。",
        trap: "Saying a MAC proves who sent the message — it only proves 'someone with the secret' sent it."
      },
      {
        en: "Hash Functions & HMAC",
        zh: "哈希与 HMAC",
        asks: "Why do we use a keyed hash (HMAC) instead of a plain hash for integrity?",
        asksZh: "为什么用 HMAC 而不是普通哈希做完整性？",
        distinction: "A plain hash has no key, so anyone can recompute it; HMAC keys the hash so only holders of the key can produce a valid tag.",
        distinctionZh: "普通哈希无密钥，任何人都能重算；HMAC 带密钥，只有持密钥者能生成有效 tag。",
        trap: "Using a raw hash(md5(msg)) as a tag — vulnerable to length-extension; use HMAC."
      },
      {
        en: "Certificates & CA",
        zh: "证书与 CA",
        asks: "What problem does a certificate solve that a bare public key cannot?",
        asksZh: "证书解决了裸公钥解决不了什么问题？",
        distinction: "A certificate binds a public key to an identity, signed by a trusted CA — it solves key authenticity, not confidentiality.",
        distinctionZh: "证书把公钥与身份绑定，由可信 CA 签名 — 解决的是公钥真实性，不是保密。",
        trap: "Thinking the CA encrypts anything — it only signs the binding."
      },
      {
        en: "Encrypt-then-MAC vs MAC-then-Encrypt",
        zh: "先加密后 MAC",
        asks: "Why is encrypt-then-MAC preferred over MAC-then-encrypt?",
        asksZh: "为什么 encrypt-then-MAC 更优？",
        distinction: "Encrypt-then-MAC lets the receiver reject tampered ciphertext before decrypting, avoiding oracle attacks; MAC-then-encrypt requires decryption to check the tag.",
        distinctionZh: "先加密后 MAC 可在解密前拒绝被篡改的密文；先 MAC 后加密必须先解密才能验。",
        trap: "Putting the MAC inside the encryption and believing it is authenticated — that is MAC-then-encrypt, the riskier order."
      },
      {
        en: "TLS 1.2 vs 1.3 Handshake (Not Examinable)",
        zh: "TLS 1.2 vs 1.3 握手（非考）",
        asks: "What key-exchange change does TLS 1.3 make, and what security property does it gain?",
        asksZh: "TLS 1.3 在密钥交换上做了什么改变？获得了什么安全属性？",
        distinction: "TLS 1.3 drops RSA key exchange, uses Diffie-Hellman key share (gx/gy) in the first round trip, and CertificateVerify signs the whole handshake; this yields forward secrecy.",
        distinctionZh: "TLS 1.3 取消 RSA 密钥交换，改用 DH key share 在首轮往返完成协商，CertificateVerify 对整个握手签名；由此获得前向保密。",
        trap: "Thinking forward secrecy comes from encrypting with RSA — it comes from one-time DH keys that are discarded, so a later private-key leak can't decrypt old sessions."
      }
    ]
  },

  "wk6-osi": {
    summary: "Layering, service vs protocol, encapsulation, and the IP narrow waist are the roots of every network topic.",
    summaryZh: "分层、服务 vs 协议、封装、IP 窄腰是所有网络话题的根。",
    topics: [
      {
        en: "Service vs Protocol",
        zh: "服务 vs 协议",
        asks: "Explain the difference between a service and a protocol with an example.",
        asksZh: "举例区分服务与协议。",
        distinction: "Service = what a layer offers the layer above (interface); protocol = how peer entities at the same layer talk to each other (rules).",
        distinctionZh: "服务 = 给上层提供什么（接口）；协议 = 同层对等实体怎么通信（规则）。",
        trap: "Confusing a service primitive (e.g. CONNECT) with a protocol message (e.g. SYN)."
      },
      {
        en: "OSI 7 vs TCP/IP 4 Layers",
        zh: "OSI 7 层 vs TCP/IP 4 层",
        asks: "Map the OSI layers to the TCP/IP layers; where does the session/presentation layer go?",
        asksZh: "把 OSI 层映射到 TCP/IP 层；会话/表示层去哪了？",
        distinction: "OSI = 7 (Physical, Data Link, Network, Transport, Session, Presentation, Application); TCP/IP = 4 (Link, Internet, Transport, Application), folding session+presentation into the application.",
        distinctionZh: "OSI 7 层；TCP/IP 4 层，把会话与表示并入应用层。",
        trap: "Counting 5 layers — the 5-layer hybrid is a teaching model, not the TCP/IP model itself."
      },
      {
        en: "Encapsulation / Decapsulation",
        zh: "封装与解封装",
        asks: "Describe what happens to headers as data goes down then up the stack.",
        asksZh: "数据上下栈时 header 怎么变？",
        distinction: "Going down each layer adds its own header (encapsulation); going up each layer strips its header (decapsulation).",
        distinctionZh: "下行每层加自己的 header；上行每层去掉自己的 header。",
        trap: "Thinking the application header is removed at the transport layer — each layer only removes its own."
      },
      {
        en: "End-to-end vs Point-to-Point",
        zh: "端到端 vs 点到点",
        asks: "Which layers are end-to-end and which are point-to-point?",
        asksZh: "哪些层端到端、哪些点到点？",
        distinction: "Transport and above are end-to-end (host-to-host); network is host-to-host but hop-by-hop; link is point-to-point on one link.",
        distinctionZh: "传输层及以上端到端；网络层主机到主机但逐跳；链路层单链路点到点。",
        trap: "Calling the network layer end-to-end — it is end-to-end in destination but executed hop-by-hop at routers."
      },
      {
        en: "IP Narrow Waist",
        zh: "IP 窄腰",
        asks: "Why is IP called the narrow waist of the Internet?",
        asksZh: "为什么 IP 叫互联网窄腰？",
        distinction: "Many applications run over IP, and IP runs over many link technologies; IP is the single common point that lets everything interoperate.",
        distinctionZh: "众多应用跑在 IP 上，IP 跑在众多链路上；IP 是让一切互通的唯一汇合点。",
        trap: "Thinking TCP is the narrow waist — it is IP; TCP is one of many things sitting on IP."
      },
      {
        en: "Connection-oriented vs Connectionless Service",
        zh: "面向连接 vs 无连接服务",
        asks: "Classify TCP and UDP as service types and explain the trade-off.",
        asksZh: "把 TCP/UDP 归类为服务类型并说明权衡。",
        distinction: "Connection-oriented (TCP) sets up state first, gives reliability; connectionless (UDP) sends at once, no per-flow state.",
        distinctionZh: "面向连接（TCP）先建状态、给可靠性；无连接（UDP）直接发、无流状态。",
        trap: "Equating connection-oriented with reliable — they are correlated in TCP but are independent properties in general."
      },
      {
        en: "IS-IS and the Narrow Waist",
        zh: "IS-IS 与窄腰",
        asks: "Give an example of an OSI-originated protocol that the TCP/IP community adopted, and explain the narrow waist.",
        asksZh: "举一个 OSI 起源、被 TCP/IP 社区采用的协议，并解释窄腰。",
        distinction: "IS-IS was designed by OSI but is widely used for IP routing; the IP narrow waist means many apps run over IP and IP runs over many links, so IP is the single interop point.",
        distinctionZh: "IS-IS 由 OSI 设计但广泛用于 IP 路由；IP 窄腰指众多应用跑在 IP 上、IP 跑在众多链路上，IP 是唯一互通点。",
        trap: "Believing the narrow waist is TCP — it is IP; and that OSI produced nothing usable — IS-IS is a counter-example."
      }
    ]
  },

  "wk7-sockets": {
    summary: "A socket is the API between app and transport; the server's two sockets and the primitive order are the core traps.",
    summaryZh: "socket 是应用与传输的接口；server 两个 socket 与原语顺序是核心陷阱。",
    topics: [
      {
        en: "What is a Socket",
        zh: "socket 是什么",
        asks: "Define a socket and its 5-tuple.",
        asksZh: "定义 socket 与其 5 元组。",
        distinction: "A socket is a kernel data structure; named by the 5-tuple (proto, local IP, local port, remote IP, remote port).",
        distinctionZh: "socket 是内核数据结构；由 5 元组（协议、本地 IP、本地端口、远端 IP、远端端口）命名。",
        trap: "Confusing a port with a socket — one socket occupies one port at a time, but a port can host many sockets via accept()."
      },
      {
        en: "Server Two Sockets",
        zh: "服务器两个 socket",
        asks: "Why does a TCP server need a listening socket and a connected socket?",
        asksZh: "为什么 TCP 服务器需要监听 socket 与连接 socket？",
        distinction: "The listening socket only accepts SYN/connections; accept() returns a fresh connected socket bound to one specific client 5-tuple.",
        distinctionZh: "监听 socket 只接连接；accept() 返回一个新的连接 socket，绑定到某客户端 5 元组。",
        trap: "Thinking accept() reuses the listening socket — it returns a new one; the listening socket stays open for more clients."
      },
      {
        en: "Primitive Order (server: socket→bind→listen→accept)",
        zh: "原语顺序",
        asks: "Put bind/listen/accept/connect in the correct order for server and client.",
        asksZh: "给 server 与 client 排出正确顺序。",
        distinction: "Server: socket, bind, listen, accept, read/write, close; Client: socket, connect, read/write, close.",
        distinctionZh: "服务器：socket, bind, listen, accept, read/write, close；客户端：socket, connect, read/write, close。",
        trap: "Calling accept() before listen() — listen() must mark the socket as passive first."
      },
      {
        en: "Blocking vs Non-blocking I/O",
        zh: "阻塞 vs 非阻塞 I/O",
        asks: "What does a blocking read return when no data is available?",
        asksZh: "无数据时阻塞 read 返回什么？",
        distinction: "Blocking read sleeps until data or error; non-blocking read returns immediately with EAGAIN/EWOULDBLOCK if nothing is ready.",
        distinctionZh: "阻塞 read 睡到有数据或出错；非阻塞 read 立即返回 EAGAIN/EWOULDBLOCK。",
        trap: "Assuming a non-blocking read always returns some bytes — it can return 'nothing ready' immediately."
      },
      {
        en: "Concurrent Server (fork / threads / select)",
        zh: "并发服务器",
        asks: "How does a concurrent server serve many clients at once?",
        asksZh: "并发服务器如何同时服务多客户端？",
        distinction: "After accept(), fork a child (or spawn a thread) per client, or use select/poll/epoll to multiplex on one process.",
        distinctionZh: "accept() 后每客户端 fork 子进程或建线程，或用 select/poll/epoll 在一个进程里多路复用。",
        trap: "Forgetting the listening socket is inherited by forked children and must be closed in the child."
      },
      {
        en: "TCP vs UDP Sockets",
        zh: "TCP vs UDP socket",
        asks: "What socket calls does UDP skip that TCP needs?",
        asksZh: "UDP socket 跳过哪些 TCP 需要的调用？",
        distinction: "UDP uses socket, (optional bind), sendto/recvfrom, close — no listen, accept, or connect (connect on UDP only sets the default destination).",
        distinctionZh: "UDP 用 socket、(可选 bind)、sendto/recvfrom、close — 无 listen/accept；UDP 的 connect 只设默认目的地。",
        trap: "Calling accept() on a UDP socket — UDP is connectionless, accept() does not exist for it."
      },
      {
        en: "Listen Backlog & AI_PASSIVE",
        zh: "listen backlog 与被动绑定",
        asks: "What is the second argument to listen(), and why does a server call getaddrinfo with NULL host + AI_PASSIVE?",
        asksZh: "listen() 第二个参数是什么？服务器为何用 NULL 主机 + AI_PASSIVE 调 getaddrinfo？",
        distinction: "listen(fd, N) caps the backlog of pending (not-yet-accept) connections at N (lecture uses 10); NULL + AI_PASSIVE binds to the wildcard address on all interfaces, suitable for a passive listener.",
        distinctionZh: "listen(fd, N) 限制待 accept 的排队连接上限为 N（课件用 10）；NULL + AI_PASSIVE 绑到所有接口的通配地址，适合被动监听。",
        trap: "Passing a concrete hostname like 'localhost' on the server side — that binds only to the loopback, refusing external connections."
      }
    ]
  },

  "wk7-dns": {
    summary: "DNS is a hierarchical, cacheable, distributed database; mail is UA/MTA/MDA with SMTP push and IMAP/POP3 pull.",
    summaryZh: "DNS 是分层可缓存分布式数据库；邮件是 UA/MTA/MDA，SMTP 推、IMAP/POP3 拉。",
    topics: [
      {
        en: "DNS Hierarchy",
        zh: "DNS 层级",
        asks: "Name the DNS levels from root to leaf and give examples.",
        asksZh: "从根到叶列出 DNS 层级并举例。",
        distinction: "Root → TLD (.com, .org, .au) → authoritative for the domain → leaf host records.",
        distinctionZh: "根 → TLD → 域权威 → 叶子主机记录。",
        trap: "Forgetting the root zone — there are 13 logical root server addresses, and queries start from them on a cache miss."
      },
      {
        en: "Recursive vs Iterative Query",
        zh: "递归 vs 迭代查询",
        asks: "Distinguish recursive and iterative DNS queries; who does which?",
        asksZh: "区分递归与迭代查询；谁做哪个？",
        distinction: "Client→local DNS is recursive (local DNS must return the answer); local DNS→root/TLD/authoritative is iterative (it follows referrals).",
        distinctionZh: "客户端→本地 DNS 递归（本地 DNS 必须给答案）；本地 DNS→根/TLD/权威迭代（顺着引荐走）。",
        trap: "Saying the root server resolves the name for the client — it only gives a referral to the TLD."
      },
      {
        en: "Resource Records (A / MX / CNAME / NS / AAAA)",
        zh: "资源记录",
        asks: "What does each record type return?",
        asksZh: "每种记录返回什么？",
        distinction: "A → IPv4; AAAA → IPv6; MX → mail exchanger + priority; CNAME → alias to canonical name; NS → authoritative name server.",
        distinctionZh: "A→IPv4；AAAA→IPv6；MX→邮件交换+优先级；CNAME→规范名别名；NS→权威服务器。",
        trap: "Treating CNAME as 'the same as A' — CNAME points to a name, not an IP; you must then resolve that name."
      },
      {
        en: "DNS Caching & TTL",
        zh: "DNS 缓存与 TTL",
        asks: "How does TTL trade off freshness against load?",
        asksZh: "TTL 如何权衡新鲜度与负载？",
        distinction: "Long TTL → fewer queries, slower propagation of changes; short TTL → fast updates, more load on authoritative servers.",
        distinctionZh: "长 TTL → 查询少、变更传播慢；短 TTL → 更新快、权威负载高。",
        trap: "Assuming a cache always honours the TTL exactly — negative caching and resolver overrides can differ."
      },
      {
        en: "SMTP vs IMAP vs POP3",
        zh: "SMTP vs IMAP vs POP3",
        asks: "Which protocol pushes mail and which pulls it?",
        asksZh: "哪个协议推邮件、哪个拉？",
        distinction: "SMTP pushes mail server-to-server and client-to-server (submission); IMAP/POP3 pull mail from server to the user agent.",
        distinctionZh: "SMTP 在服务器间和客户端到服务器推；IMAP/POP3 从服务器拉到 UA。",
        trap: "Thinking SMTP is used to read mail — it only delivers; reading is IMAP or POP3."
      },
      {
        en: "RPC & Marshalling",
        zh: "RPC 与 marshalling",
        asks: "Why does RPC need marshalling, and why can't it pass a pointer?",
        asksZh: "RPC 为什么要 marshalling？为何不能传指针？",
        distinction: "Marshalling encodes arguments into network bytes; a pointer is only meaningful in the caller's address space, so it cannot be sent.",
        distinctionZh: "marshalling 把参数编码成网络字节；指针只在调用方地址空间有意义，不能发送。",
        trap: "Believing RPC can hand a pointer across machines — the callee's address space is unrelated to the caller's."
      },
      {
        en: "WebSocket vs HTTP Streaming",
        zh: "WebSocket vs HTTP 流",
        asks: "How does a WebSocket differ from plain HTTP for streaming, and on what ports does it run?",
        asksZh: "WebSocket 与普通 HTTP 在流式传输上有何不同？用什么端口？",
        distinction: "WebSocket (ws://, wss://) upgrades an HTTP connection to a persistent bidirectional byte stream on ports 80/443; plain HTTP is request/response and server push is a workaround, not a true bidirectional channel.",
        distinctionZh: "WebSocket（ws://、wss://）把 HTTP 连接升级为持久双向字节流，跑在 80/443；普通 HTTP 是请求/响应，服务端推送是 workaround 而非真双向。",
        trap: "Thinking WebSocket needs a new port — it reuses 80/443 and starts life as an HTTP upgrade handshake."
      }
    ]
  },

  "wk8-udp": {
    summary: "Transport gives process-to-process delivery via ports; UDP is connectionless, minimal, but powerful where it fits.",
    summaryZh: "传输层经端口给进程到进程交付；UDP 无连接、最小化，但适用场景很强。",
    topics: [
      {
        en: "Transport vs Network Layer",
        zh: "传输层 vs 网络层",
        asks: "What does the transport layer add over the network layer?",
        asksZh: "传输层比网络层多了什么？",
        distinction: "Network = host-to-host best effort; transport = process-to-process (via ports) and optional reliability/order.",
        distinctionZh: "网络层 = 主机到主机尽力而为；传输层 = 进程到进程（靠端口）+ 可选可靠/有序。",
        trap: "Saying the network layer knows which app a packet is for — it does not; the port does."
      },
      {
        en: "Multiplexing / Demultiplexing",
        zh: "多路复用与分用",
        asks: "How does demultiplexing decide which socket gets a segment?",
        asksZh: "分用如何决定 segment 给哪个 socket？",
        distinction: "On arrival the OS reads the (proto, dst port, dst IP, src port, src IP) tuple and matches it to a registered socket.",
        distinctionZh: "到达时 OS 读 5 元组，匹配已注册的 socket。",
        trap: "Thinking only the destination port matters — for connected TCP sockets the full 5-tuple is matched."
      },
      {
        en: "Port Registry & Well-known Ranges",
        zh: "端口注册表与范围",
        asks: "Name the three IANA port ranges and where the official registry lives.",
        asksZh: "说出 IANA 端口三段范围，以及官方注册表在哪。",
        distinction: "Well-known 0–1023, registered 1024–49151, dynamic 49152–65535; registry at iana.org/assignments/port-numbers.",
        distinctionZh: "公认 0–1023、注册 1024–49151、动态 49152–65535；注册表在 iana.org/assignments/port-numbers。",
        trap: "Putting 1024 in the well-known range — well-known ends at 1023; 1024 starts the registered range."
      },
      {
        en: "UDP Header (8 bytes)",
        zh: "UDP 头部",
        asks: "List the four UDP header fields and their sizes.",
        asksZh: "列出 UDP 头四个字段及大小。",
        distinction: "Source Port (16), Destination Port (16), Length (16), Checksum (16) — total 8 bytes.",
        distinctionZh: "源端口、目的端口、长度、校验和 — 各 16 位，共 8 字节。",
        trap: "Forgetting the length field covers header + data, not just data."
      },
      {
        en: "Why UDP at all",
        zh: "为什么用 UDP",
        asks: "Give two reasons applications choose UDP over TCP.",
        asksZh: "举两个应用选 UDP 而非 TCP 的理由。",
        distinction: "No handshake (low latency), no per-connection state (scalable), app controls reliability/timing (DNS, VoIP, games).",
        distinctionZh: "无握手（低延迟）、无连接状态（可扩展）、应用自控可靠性/时序（DNS、VoIP、游戏）。",
        trap: "Claiming UDP is reliable — it is not; reliability is the application's job if needed."
      },
      {
        en: "UDP Checksum",
        zh: "UDP 校验和",
        asks: "What does the UDP checksum cover, and is it mandatory in IPv4?",
        asksZh: "UDP 校验和覆盖什么？IPv4 里强制吗？",
        distinction: "It covers a pseudo-header + UDP header + data; optional in IPv4, mandatory in IPv6.",
        distinctionZh: "覆盖伪头 + UDP 头 + 数据；IPv4 可选，IPv6 强制。",
        trap: "Treating the checksum as a security feature — it only catches accidental corruption."
      },
      {
        en: "UDP Reflection / Amplification",
        zh: "UDP 反射放大攻击",
        asks: "How can UDP be abused for a reflection/amplification DDoS?",
        asksZh: "UDP 如何被滥用做反射放大 DDoS？",
        distinction: "Attacker spoofs the victim's IP as source, sends small UDP queries to servers with large responses (DNS, NTP); the large replies hit the victim.",
        distinctionZh: "攻击者伪造受害者 IP 为源，发小请求给大响应服务器（DNS/NTP）；大响应打向受害者。",
        trap: "Blaming TCP for amplification — TCP's handshake stops spoofed reflection; UDP's statelessness enables it."
      }
    ]
  },

  "wk8-http": {
    summary: "HTTP is a request/response message protocol; connections, headers, cookies, caching and HTTP/2-3 motivations are common.",
    summaryZh: "HTTP 是请求/响应消息协议；连接、头部、cookie、缓存、HTTP/2-3 动机是常考点。",
    topics: [
      {
        en: "Request/Response Format",
        zh: "请求/响应格式",
        asks: "Write out the structure of an HTTP request and a response.",
        asksZh: "写出 HTTP 请求与响应结构。",
        distinction: "Request = request line (method, path, version) + headers + blank line + optional body; Response = status line + headers + blank line + body.",
        distinctionZh: "请求 = 请求行 + 头部 + 空行 + 可选体；响应 = 状态行 + 头部 + 空行 + 体。",
        trap: "Forgetting the blank line — it is what tells the receiver the headers are done."
      },
      {
        en: "Persistent vs Non-persistent Connection",
        zh: "持久 vs 非持久连接",
        asks: "Compute how many RTTs it takes to fetch N objects with and without persistent connections.",
        asksZh: "算取 N 个对象在两种连接下各需多少 RTT。",
        distinction: "Non-persistent (HTTP/1.0) = 2 RTTs per object (1 TCP + 1 request); persistent (HTTP/1.1) = 1 TCP + N RTTs, or pipelined fewer.",
        distinctionZh: "非持久 = 每对象 2 RTT；持久 = 1 个 TCP + N RTT，流水线更少。",
        trap: "Counting one RTT per object under HTTP/1.1 without subtracting the shared handshake."
      },
      {
        en: "Cookies & Sessions",
        zh: "cookie 与会话",
        asks: "How does a cookie let a server remember a stateless HTTP client?",
        asksZh: "cookie 如何让无状态 HTTP 记住客户端？",
        distinction: "Server sends Set-Cookie; client stores it and echoes it in Cookie headers; the server maps the cookie to server-side session state.",
        distinctionZh: "服务器发 Set-Cookie；客户端存储并在 Cookie 头回送；服务器把 cookie 映射到服务端会话。",
        trap: "Believing cookies hold the session data — usually the cookie is only a session ID; the data lives server-side."
      },
      {
        en: "Conditional GET / Caching",
        zh: "条件 GET 与缓存",
        asks: "Use Cache-Control, Expires, ETag, If-None-Match to make a cache revalidate.",
        asksZh: "用 Cache-Control、Expires、ETag、If-None-Match 让缓存再验证。",
        distinction: "Last-Modified + If-Modified-Since uses time; ETag + If-None-Match uses a version token; a 304 means 'use your cache'.",
        distinctionZh: "Last-Modified + If-Modified-Since 用时间；ETag + If-None-Match 用版本 token；304 表示用缓存。",
        trap: "Mixing up If-None-Match (ETag) with If-Modified-Since (time) — they are two different validators."
      },
      {
        en: "HTTPS = HTTP over TLS",
        zh: "HTTPS = HTTP over TLS",
        asks: "What does HTTPS add, and on what port does it usually run?",
        asksZh: "HTTPS 加了什么？常用端口？",
        distinction: "HTTPS runs ordinary HTTP inside a TLS tunnel; default port 443; TLS provides confidentiality + integrity + (server) authentication.",
        distinctionZh: "HTTPS 把普通 HTTP 跑在 TLS 隧道里；默认 443；TLS 给保密+完整+（服务器）认证。",
        trap: "Saying HTTPS is a different message format — the HTTP messages are identical; only the transport is encrypted."
      },
      {
        en: "HTTP/2 and HTTP/3 Motivation",
        zh: "HTTP/2 与 HTTP/3 动机",
        asks: "What problems of HTTP/1.1 do HTTP/2 and HTTP/3 solve?",
        asksZh: "HTTP/2 与 HTTP/3 解决 HTTP/1.1 的什么问题？",
        distinction: "HTTP/2 adds multiplexing over one TCP + binary framing + header compression; HTTP/3 runs over QUIC (UDP) to avoid TCP head-of-line blocking.",
        distinctionZh: "HTTP/2 在一条 TCP 上多路复用 + 二进制帧 + 头压缩；HTTP/3 跑在 QUIC(UDP) 上避免 TCP 队头阻塞。",
        trap: "Thinking HTTP/3 runs over TCP — it runs over QUIC, which is UDP-based."
      },
      {
        en: "URI vs URL",
        zh: "URI vs URL",
        asks: "Is every URL a URI? Is every URI a URL? Give a URI that is not a URL.",
        asksZh: "每个 URL 都是 URI 吗？每个 URI 都是 URL 吗？举一个不是 URL 的 URI。",
        distinction: "URI is the superset (URL + URN); URLs locate by address and can be absolute or relative; a URN like an ISBN is a URI but not a URL.",
        distinctionZh: "URI 是超集（URL + URN）；URL 按地址定位，可绝对可相对；像 ISBN 这样的 URN 是 URI 但不是 URL。",
        trap: "Treating URI and URL as synonyms — an ISBN/URN identifies without locating, so it is a URI but not a URL."
      }
    ]
  },

  "wk9-tcp": {
    summary: "TCP is a reliable byte stream; the 3-way handshake, 4-way close, sequence/ack and window are the calculation core.",
    summaryZh: "TCP 是可靠字节流；三次握手、四次挥手、序号/确认、窗口是计算核心。",
    topics: [
      {
        en: "Byte Stream (no message boundaries)",
        zh: "字节流（无消息边界）",
        asks: "Why is TCP called a byte stream, and what does that mean for read/write?",
        asksZh: "为什么 TCP 叫字节流？对 read/write 意味着什么？",
        distinction: "TCP sends an ordered byte stream; one write ≠ one read — multiple writes may merge, one write may be split.",
        distinctionZh: "TCP 发有序字节流；一次 write ≠ 一次 read — 多次 write 可合并，一次 write 可拆分。",
        trap: "Assuming `recv` returns exactly what one `send` sent — TCP gives no such guarantee."
      },
      {
        en: "Three-way Handshake & Seq Numbers",
        zh: "三次握手与序号",
        asks: "Walk through SYN / SYN-ACK / ACK with sequence numbers; does SYN consume a seq number?",
        asksZh: "走一遍 SYN/SYN-ACK/ACK 的序号；SYN 占序号吗？",
        distinction: "Client SYN seq=x; Server SYN-ACK seq=y, ack=x+1; Client ACK ack=y+1; SYN and FIN each consume one sequence number.",
        distinctionZh: "客户端 SYN seq=x；服务器 SYN-ACK seq=y, ack=x+1；客户端 ACK ack=y+1；SYN 与 FIN 各占一个序号。",
        trap: "Saying SYN does not consume a seq number — it does; that is why ack=x+1, not x."
      },
      {
        en: "Connection Close (FIN / RST, half-close)",
        zh: "连接关闭与半关闭",
        asks: "Explain half-close and the difference between FIN and RST.",
        asksZh: "解释半关闭；FIN 与 RST 区别。",
        distinction: "FIN closes one direction only (half-close); the other side may still send; RST aborts the whole connection abruptly.",
        distinctionZh: "FIN 只关一个方向（半关闭），对端仍可发；RST 立即硬关闭整条连接。",
        trap: "Thinking FIN closes both directions at once — each side must send its own FIN."
      },
      {
        en: "TCP Header Fields",
        zh: "TCP 头部字段",
        asks: "Identify the role of sequence number, ack number, and window in the header.",
        asksZh: "说明头部里序号、确认号、窗口的作用。",
        distinction: "Seq = first byte in this segment; ACK = next byte expected; Window = receive buffer the receiver is advertising.",
        distinctionZh: "Seq = 本段第一字节；ACK = 期望下一字节；Window = 接收方通告的接收缓冲。",
        trap: "Reading ACK as 'last received' — it is 'next expected', so it is last_received + 1."
      },
      {
        en: "Sliding Window / Flow Control",
        zh: "滑动窗口与流控",
        asks: "How does the receive window stop a fast sender from overwhelming a slow receiver?",
        asksZh: "接收窗口如何防止快发送方压垮慢接收方？",
        distinction: "The receiver advertises rwnd; the sender keeps unacknowledged bytes ≤ rwnd, so the receiver's buffer cannot overflow.",
        distinctionZh: "接收方通告 rwnd；发送方未确认字节 ≤ rwnd，接收缓冲不会溢出。",
        trap: "Confusing rwnd (flow control, receiver-driven) with cwnd (congestion control, sender-driven)."
      },
      {
        en: "Sliding Window Byte Trace",
        zh: "滑动窗口字节追踪",
        asks: "Walk a sliding-window exchange with segment size 10: after sending bytes 1–10 and the app reading them, what ACK and Window does the receiver send?",
        asksZh: "用 seg size 10 走一遍：发出 1–10 字节且应用读走后，接收方回什么 ACK 和 Window？",
        distinction: "After receiving 1–10: ACK:11, Window:40 (buffer holds 10); after the app reads those 10 bytes: a WindowUpdate with ACK:11, Window:50; invariant LastByteSent − LastByteAcked ≤ RWND throughout.",
        distinctionZh: "收到 1–10：ACK:11, Window:40（缓冲占 10）；应用读走后：WindowUpdate，ACK:11, Window:50；全程满足 LastByteSent − LastByteAcked ≤ RWND。",
        trap: "Thinking ACK advances the moment data arrives but Window stays fixed — the Window shrinks on arrival and reopens on a WindowUpdate after the app reads."
      },
      {
        en: "TCP 5-tuple & Service Primitives",
        zh: "TCP 5 元组与服务原语",
        asks: "What uniquely identifies a TCP connection, and which primitive is non-blocking?",
        asksZh: "什么唯一标识一条 TCP 连接？哪个原语非阻塞？",
        distinction: "The 5-tuple (proto, local IP, local port, remote IP, remote port); select() is the non-blocking multiplexing primitive, not a TCP primitive itself.",
        distinctionZh: "5 元组唯一标识连接；select() 是非阻塞多路复用，本身不是 TCP 原语。",
        trap: "Listing select() as a TCP service primitive — it is an OS multiplexing facility."
      }
    ]
  },

  "wk9-protocol": {
    summary: "A protocol must define syntax, semantics, timing, and error handling; RPC fakes local calls but cannot ship pointers.",
    summaryZh: "协议要定义语法、语义、时序与错误处理；RPC 伪装本地调用但不能传指针。",
    topics: [
      {
        en: "Protocol Three Elements (syntax / semantics / timing)",
        zh: "协议三要素",
        asks: "Define syntax, semantics, and timing of a protocol with examples.",
        asksZh: "定义协议的语法、语义、时序并举例。",
        distinction: "Syntax = message format/fields; semantics = what each field means and what action to take; timing = ordering, timeouts, speed.",
        distinctionZh: "语法 = 报文格式；语义 = 字段含义与动作；时序 = 顺序、超时、速率。",
        trap: "Listing only format and forgetting timing — a protocol without timeouts is not implementable."
      },
      {
        en: "Error Handling in Protocols",
        zh: "协议错误处理",
        asks: "Give three ways a protocol can recover from errors.",
        asksZh: "举三种协议错误恢复方式。",
        distinction: "ACK/NACK + retransmission, sequence numbers to detect duplicates, checksum/CRC to detect corruption.",
        distinctionZh: "ACK/NACK + 重传、序号查重复、校验和/CRC 查损坏。",
        trap: "Confusing error detection (checksum) with error recovery (retransmission)."
      },
      {
        en: "RPC Architecture (stub / marshalling)",
        zh: "RPC 架构",
        asks: "Describe the role of client stub and server stub in RPC.",
        asksZh: "描述客户端存根与服务器存根的作用。",
        distinction: "Client stub marshals args into a request and unmarshals the reply; server stub unmarshals the request, calls the real procedure, marshals the reply.",
        distinctionZh: "客户端存根把参数编为请求、解回复；服务器存根解请求、调真实过程、编回复。",
        trap: "Thinking the stubs do the network I/O themselves — they hand bytes to the transport; the RPC runtime does I/O."
      },
      {
        en: "Marshalling / Unmarshalling",
        zh: "编组与解组",
        asks: "What does marshalling convert, and why must it be standardised?",
        asksZh: "marshalling 转换什么？为何要标准化？",
        distinction: "Marshalling converts in-memory structures (ints, structs, strings) into a canonical byte stream; unmarshalling reverses it on the remote side.",
        distinctionZh: "marshalling 把内存结构转成规范字节流；远端解组还原。",
        trap: "Assuming the wire format matches the local memory layout — endianness and padding differ across machines."
      },
      {
        en: "Why RPC Cannot Pass Pointers",
        zh: "为何 RPC 不能传指针",
        asks: "Explain why passing a pointer over RPC is meaningless.",
        asksZh: "解释为何跨 RPC 传指针无意义。",
        distinction: "A pointer is a local address; the callee's address space is unrelated, so the value points to nothing valid remotely.",
        distinctionZh: "指针是本地地址；被调用方地址空间无关，远端该值不指向有效内容。",
        trap: "Trying to 'send the data the pointer points to' without copying it explicitly — RPC needs the data marshalled, not the address."
      },
      {
        en: "Protocol Deployment & Rollout",
        zh: "协议部署与上线",
        asks: "Name three deployment questions a protocol designer must answer before releasing a spec publicly.",
        asksZh: "说出协议公开发布前必须回答的三个部署问题。",
        distinction: "How finished before deploy; what happens on a new spec release (versioning/back-compat); how to test thoroughly before public release.",
        distinctionZh: "多成熟才上线；新 spec 发布怎么办（版本协商/向后兼容）；公开发布前如何充分测试。",
        trap: "Thinking the job ends at 'it works in the lab' — once deployed on the Internet a protocol is nearly impossible to un-deploy."
      },
      {
        en: "Synchronous vs Asynchronous RPC",
        zh: "同步 vs 异步 RPC",
        asks: "Contrast synchronous RPC and asynchronous RPC for the caller.",
        asksZh: "对比调用方视角的同步与异步 RPC。",
        distinction: "Synchronous RPC blocks the caller until the reply returns; asynchronous RPC returns control immediately and delivers the reply later via callback/polling.",
        distinctionZh: "同步 RPC 阻塞到回复；异步 RPC 立即返回，回复稍后经回调/轮询送达。",
        trap: "Assuming RPC is always blocking — asynchronous RPC is a standard variant."
      }
    ]
  },

  "wk10-addressing": {
    summary: "IP addresses name interfaces, not hosts; CIDR, masks, host ranges and aggregation are the arithmetic core.",
    summaryZh: "IP 地址命名接口而非主机；CIDR、掩码、主机范围、聚合是算术核心。",
    topics: [
      {
        en: "IP Address Names an Interface",
        zh: "IP 地址命名接口",
        asks: "To what entity is an IP address assigned — a host or an interface?",
        asksZh: "IP 地址分配给主机还是接口？",
        distinction: "An IP address identifies a network interface; a router with N interfaces has N IP addresses.",
        distinctionZh: "IP 地址标识网络接口；有 N 个接口的路由器有 N 个 IP。",
        trap: "Saying 'one IP per host' — a multihomed host/router has several."
      },
      {
        en: "CIDR & Prefix Length",
        zh: "CIDR 与前缀长度",
        asks: "Given 192.168.10.42/24, compute network, mask, broadcast, host range.",
        asksZh: "给 192.168.10.42/24，算网络、掩码、广播、主机范围。",
        distinction: "/n means the first n bits are network; host bits = 32 − n; mask has n ones then zeros.",
        distinctionZh: "/n 表示前 n 位为网络；主机位 = 32 − n；掩码前 n 个 1 其余 0。",
        trap: "Believing /24 is bigger than /16 — /24 has fewer hosts; shorter prefix = bigger network."
      },
      {
        en: "Network vs Broadcast vs Host Address",
        zh: "网络地址 vs 广播地址 vs 主机地址",
        asks: "Which two addresses in a subnet cannot be assigned to hosts?",
        asksZh: "子网中哪两个地址不能分给主机？",
        distinction: "All-zeros host = network address; all-ones host = broadcast address; usable hosts = 2^(hostbits) − 2.",
        distinctionZh: "主机位全 0 = 网络地址；全 1 = 广播地址；可用主机 = 2^主机位 − 2。",
        trap: "Forgetting to subtract the network and broadcast addresses when counting usable hosts."
      },
      {
        en: "Route Aggregation / Supernetting",
        zh: "路由聚合",
        asks: "How does route aggregation shrink routing tables?",
        asksZh: "路由聚合如何缩小路由表？",
        distinction: "Several prefixes sharing a common high-order bits are advertised as one shorter prefix (e.g. 4 × /24 → one /22).",
        distinctionZh: "若干共享高位的前缀合并为一个更短前缀（如 4 个 /24 → 一个 /22）。",
        trap: "Aggregating prefixes that do not share enough leading bits — the merged prefix would include addresses you don't own."
      },
      {
        en: "Prefix Membership Drill",
        zh: "前缀归属判断",
        asks: "Is 128.250.73.5 in 128.250.0.0/16? /24? /17? Can you infer its netmask from the IP alone?",
        asksZh: "128.250.73.5 在 /16? /24? /17? 内吗？能单从 IP 推断掩码吗？",
        distinction: "/16 yes; /24 no (third byte 73≠0); /17 yes (73<128, the 17th bit is 0); you cannot infer the netmask from the IP alone — it is a per-interface config.",
        distinctionZh: "/16 是；/24 否（第三字节 73≠0）；/17 是（73<128，第 17 位为 0）；不能单从 IP 推掩码，它是接口配置。",
        trap: "Assuming a single 'correct' prefix for an IP — the same IP belongs to different prefixes under different masks; the mask must be configured."
      },
      {
        en: "Packet Switching vs Virtual Circuit",
        zh: "数据报 vs 虚电路",
        asks: "Compare datagram packet switching with virtual-circuit switching.",
        asksZh: "对比数据报与虚电路交换。",
        distinction: "Datagram = each packet routed independently, no setup, stateless; virtual circuit = setup a path, packets carry a VC number, routers keep per-flow state.",
        distinctionZh: "数据报 = 每包独立路由、无建立、无状态；虚电路 = 先建路径、包带 VC 号、路由器存每流状态。",
        trap: "Thinking the Internet uses virtual circuits — IP is datagram-based."
      },
      {
        en: "Store-and-Forward Delay",
        zh: "存储转发延迟",
        asks: "Compute the per-hop store-and-forward delay for an L-bit packet on a link of rate R.",
        asksZh: "算 L 位包在速率 R 链路上每跳存储转发延迟。",
        distinction: "Each hop must receive the whole packet before forwarding: delay = L / R per hop, plus propagation.",
        distinctionZh: "每跳需收完整包才转发：延迟 = L / R 每跳，再加传播延迟。",
        trap: "Counting only propagation and ignoring the L/R transmission time at each hop."
      }
    ]
  },

  "wk10-congestion": {
    summary: "Sliding window gives reliability/order/flow control; cwnd handles network congestion; slow start is actually exponential.",
    summaryZh: "滑动窗口给可靠/有序/流控；cwnd 处理网络拥塞；slow start 其实是指数增长。",
    topics: [
      {
        en: "rwnd vs cwnd",
        zh: "rwnd vs cwnd",
        asks: "Distinguish receive window and congestion window; which limits the sender?",
        asksZh: "区分接收窗口与拥塞窗口；谁限制发送方？",
        distinction: "rwnd is advertised by the receiver (flow control); cwnd is computed by the sender (congestion control); effective window = min(rwnd, cwnd).",
        distinctionZh: "rwnd 由接收方通告（流控）；cwnd 由发送方算（拥塞控制）；有效窗口 = min(rwnd, cwnd)。",
        trap: "Saying the receiver sets cwnd — it never does; cwnd is purely sender-side."
      },
      {
        en: "Slow Start (exponential growth)",
        zh: "慢启动（指数增长）",
        asks: "Why is slow start called slow, and how does the window grow?",
        asksZh: "slow start 为什么叫慢？窗口如何增长？",
        distinction: "It starts at 1 and doubles per RTT — exponential, but 'slow' compared to starting at the full window; stops growing at ssthresh.",
        distinctionZh: "从 1 起，每 RTT 翻倍 — 指数；到 ssthresh 停止；'slow' 是相对一开始就发满窗口而言。",
        trap: "Believing slow start grows linearly — it doubles, so it is exponential."
      },
      {
        en: "Congestion Avoidance (AIMD)",
        zh: "拥塞避免（AIMD）",
        asks: "Describe additive increase / multiplicative decrease.",
        asksZh: "描述加性增、乘性减。",
        distinction: "Above ssthresh, cwnd grows by 1 MSS per RTT (additive); on loss, cwnd is halved and ssthresh = cwnd/2 (multiplicative).",
        distinctionZh: "超过 ssthresh 后每 RTT 加 1 MSS；丢包时 cwnd 减半、ssthresh = cwnd/2。",
        trap: "Halving ssthresh but leaving cwnd unchanged after loss — both must react."
      },
      {
        en: "Timeout vs Fast Retransmit",
        zh: "超时 vs 快速重传",
        asks: "What triggers a timeout retransmit vs a fast retransmit?",
        asksZh: "什么触发超时重传？什么触发快速重传？",
        distinction: "Timeout = no ACK in time (coarse, strong congestion signal). Fast retransmit = 3 duplicate ACKs; Tahoe restarts slow start, while Reno treats it as a milder signal and uses fast recovery.",
        distinctionZh: "超时 = 时间内无 ACK（强拥塞信号）。快速重传 = 3 个重复 ACK；Tahoe 回到慢启动，Reno 把它当较弱信号并进入 fast recovery。",
        trap: "Applying Reno's halved-window fast recovery answer to Tahoe — Tahoe does not have fast recovery."
      },
      {
        en: "Tahoe vs Reno",
        zh: "Tahoe vs Reno",
        asks: "How does Reno improve on Tahoe on a fast-retransmit event?",
        asksZh: "Reno 在快速重传上如何改进 Tahoe？",
        distinction: "Tahoe sets cwnd = 1 on any loss; Reno halves cwnd and enters fast recovery on 3 dup ACKs, only resetting to 1 on a timeout.",
        distinctionZh: "Tahoe 任何丢包都 cwnd=1；Reno 收到 3 重复 ACK 时减半并进入快速恢复，仅超时才归 1。",
        trap: "Treating 'fast recovery' as the same in both — Tahoe does not have it; only Reno does."
      },
      {
        en: "Zero Window Probe / Persist Timer",
        zh: "零窗口探测与持续计时器",
        asks: "How does TCP avoid deadlock when the receiver advertises a zero window?",
        asksZh: "接收方通告零窗口时，TCP 如何防死锁？",
        distinction: "The sender periodically sends a zero-window probe (0-byte segment in the lecture trace) to elicit a fresh window advertisement, driven by the persist timer (not the retransmit timer).",
        distinctionZh: "发送方周期性发 zero-window probe（课件 trace 中为 0 字节 segment），由持续计时器（非重传计时器）驱动，以获取新窗口通告。",
        trap: "Using the retransmission timer for probes — that is a different timer with a different purpose."
      },
      {
        en: "Zero-window Deadlock & Persist Timer",
        zh: "零窗口死锁与持续计时器",
        asks: "Trace the full path: seg 21 lost → fast retransmit → Window:0 → deadlock → recovery.",
        asksZh: "走完整路径：seg 21 丢→fast retransmit→Window:0→死锁→恢复。",
        distinction: "3 DupACK:21 (Window:50) triggers fast retransmit of seg 21; receiver then ACKs 71 but Window:0 (buffer full); if the WindowUpdate is lost, the persist timer fires a ZeroWindowProbe and the receiver replies ZeroWindowProbeACK with the new window.",
        distinctionZh: "3 个 DupACK:21（Window:50）触发重传 seg 21；接收方回 ACK:71 但 Window:0（缓冲满）；若 WindowUpdate 丢失，persist timer 发 ZeroWindowProbe，接收方回 ZeroWindowProbeACK 带新窗口。",
        trap: "Conflating the persist timer with the retransmission timer — the persist timer exists precisely because there is nothing to retransmit (the window, not data, is stuck)."
      }
    ]
  },

  "wk11-routing": {
    summary: "Forwarding is a local table lookup; routing builds that table; Dijkstra and link-state are the centrepiece.",
    summaryZh: "转发是本地查表；路由构建该表；Dijkstra 与链路状态是重点。",
    topics: [
      {
        en: "Forwarding vs Routing",
        zh: "转发 vs 路由",
        asks: "Distinguish forwarding from routing, and which plane each belongs to.",
        asksZh: "区分转发与路由，各属哪个平面。",
        distinction: "Forwarding = data plane, move a packet from input to output link using the table; routing = control plane, compute/maintain that table.",
        distinctionZh: "转发 = 数据平面，按表把包从入链路移到出链路；路由 = 控制平面，算/维护该表。",
        trap: "Saying routing is what a router does to each packet — that is forwarding; routing happens in the background."
      },
      {
        en: "Dijkstra's Algorithm",
        zh: "Dijkstra 算法",
        asks: "Run Dijkstra step by step on a small graph and report shortest paths.",
        asksZh: "在小图上逐步跑 Dijkstra，给最短路径。",
        distinction: "Repeatedly settle the unsettled node with the smallest tentative distance, then relax its edges; greedy and optimal for non-negative weights.",
        distinctionZh: "反复选未确定节点中 tentative 距离最小者确定，再松弛其边；贪心、对非负权最优。",
        trap: "Applying Dijkstra to a graph with negative edge weights — it can give wrong results; use Bellman-Ford."
      },
      {
        en: "Link State vs Distance Vector",
        zh: "链路状态 vs 距离向量",
        asks: "Compare what each router knows and how it converges in LS vs DV.",
        asksZh: "对比 LS 与 DV 中路由器知道什么、如何收敛。",
        distinction: "LS floods full topology, every router runs Dijkstra (global view); DV tells neighbours only its best distances, uses Bellman-Ford (local view).",
        distinctionZh: "LS 泛洪全网拓扑，每路由器跑 Dijkstra（全局视图）；DV 只向邻居告最佳距离，用 Bellman-Ford（局部视图）。",
        trap: "Saying DV routers know the whole topology — they only know their neighbours' distance vectors."
      },
      {
        en: "Flooding & Sequence/Age",
        zh: "泛洪与序号/年龄",
        asks: "Why do link-state advertisements carry a sequence number and an age?",
        asksZh: "为什么 LSA 要带序号和 age？",
        distinction: "Sequence number lets a receiver keep the newest copy; age (TTL) lets old LSAs expire so stale info cannot persist forever.",
        distinctionZh: "序号让接收方保留最新副本；age（TTL）让旧 LSA 过期，陈旧信息不会永久存在。",
        trap: "Keeping an LSA purely by 'larger sequence' and forgetting age — a crashed router's last LSA would otherwise live forever."
      },
      {
        en: "IPv6 Header & Address Format",
        zh: "IPv6 头部与地址格式",
        asks: "Name the key IPv6 header fields and write 8000:0000:0000:0000:0123:4567:89AB:CDEF in compressed form; what is ::ffff:192.31.2.46?",
        asksZh: "说出 IPv6 关键头部字段，把上述地址压缩；::ffff:192.31.2.46 是什么？",
        distinction: "Fields: Version=6, Differentiated services (6-bit class + 2-bit ECN), Flow label, Payload length, Next header, Hop limit (=TTL), 16-byte src/dst; compressed: 8000::123:4567:89AB:CDEF; ::ffff:192.31.2.46 is an IPv4-mapped IPv6 address.",
        distinctionZh: "字段：Version=6、Differentiated services、Flow label、Payload length、Next header、Hop limit(=TTL)、16 字节 src/dst；压缩：8000::123:4567:89AB:CDEF；::ffff:192.31.2.46 是 IPv4-mapped IPv6 地址。",
        trap: "Using :: more than once to compress different zero runs — only one :: is allowed, otherwise the address is ambiguous."
      },
      {
        en: "Count-to-Infinity (DV)",
        zh: "计数到无穷",
        asks: "Explain the count-to-infinity problem in distance-vector routing.",
        asksZh: "解释 DV 的 count-to-infinity 问题。",
        distinction: "When a link cost increases, DV updates propagate slowly and routers keep advertising ever-growing distances to an unreachable network.",
        distinctionZh: "链路代价增加时，DV 更新传播慢，路由器对不可达网络持续通告越来越大的距离。",
        trap: "Blaming link-state for count-to-infinity — it is a DV-specific pathology; split horizon/poison reverse mitigate it."
      },
      {
        en: "Hierarchical Routing / Autonomous Systems",
        zh: "层次路由与自治系统",
        asks: "Why does the Internet use hierarchical routing?",
        asksZh: "互联网为何用层次路由？",
        distinction: "Scale: intra-AS (IGP like OSPF/RIP) handles inside; inter-AS (BGP) handles between ASes; each AS hides internal detail.",
        distinctionZh: "为可扩展：AS 内用 IGP（OSPF/RIP），AS 间用 BGP；每个 AS 隐藏内部细节。",
        trap: "Assuming BGP picks shortest paths — BGP picks paths by policy, not just distance."
      }
    ]
  },

  "wk11-control": {
    summary: "ARP, ICMP and traceroute are control-plane tools; keeping the data plane and control plane separate is the key idea.",
    summaryZh: "ARP、ICMP、traceroute 是控制平面工具；数据平面与控制平面分开是关键。",
    topics: [
      {
        en: "Data Plane vs Control Plane",
        zh: "数据平面 vs 控制平面",
        asks: "Classify forwarding, routing-table computation, ARP, ICMP into planes.",
        asksZh: "把转发、路由表计算、ARP、ICMP 归入平面。",
        distinction: "Data plane = per-packet actions (forwarding); control plane = background functions that build state (routing, ARP, ICMP signalling).",
        distinctionZh: "数据平面 = 每包动作（转发）；控制平面 = 后台建状态（路由、ARP、ICMP 信令）。",
        trap: "Calling ICMP a transport protocol — it is a network-layer control protocol."
      },
      {
        en: "ARP (IP → MAC on a LAN)",
        zh: "ARP（局域网 IP→MAC）",
        asks: "Explain ARP's scope: does it cross routers?",
        asksZh: "解释 ARP 范围：是否穿过路由器？",
        distinction: "ARP resolves a next-hop IP to a MAC on one local link; ARP broadcasts do not pass routers.",
        distinctionZh: "ARP 在单条本地链路上把下一跳 IP 解析为 MAC；ARP 广播不穿路由器。",
        trap: "Thinking ARP resolves the destination's MAC across the Internet — it only resolves the next hop on the local link."
      },
      {
        en: "ICMP",
        zh: "ICMP",
        asks: "Give two ICMP message types and what they report.",
        asksZh: "举两种 ICMP 消息及其报告内容。",
        distinction: "ICMP carries control/error messages at the network layer — e.g. Echo Request/Reply (ping) and Time Exceeded (TTL hit 0).",
        distinctionZh: "ICMP 在网络层传控制/错误消息 — 如 Echo 请求/应答（ping）和 Time Exceeded（TTL 到 0）。",
        trap: "Putting ICMP in the transport layer — it sits in IP, alongside TCP/UDP's peer, not above it."
      },
      {
        en: "Traceroute via TTL & ICMP",
        zh: "traceroute 原理",
        asks: "How does traceroute discover each hop using TTL and ICMP?",
        asksZh: "traceroute 如何用 TTL 与 ICMP 发现每一跳？",
        distinction: "It sends packets with TTL = 1, 2, 3, …; each router that decrements TTL to 0 returns ICMP Time Exceeded, revealing the hop; the final host returns Echo Reply / port-unreachable.",
        distinctionZh: "发 TTL=1,2,3… 的包；TTL 减到 0 的路由器回 ICMP Time Exceeded，暴露该跳；终点回 Echo Reply/端口不可达。",
        trap: "Assuming traceroute measures physical distance — it measures hop count and round-trip time, not geography."
      },
      {
        en: "DHCP (briefly, as control/signalling)",
        zh: "DHCP 简述",
        asks: "Outline how a host obtains an IP via DHCP (DORA).",
        asksZh: "简述主机经 DHCP 获取 IP（DORA）。",
        distinction: "Discover (broadcast) → Offer (server) → Request (client picks) → Ack (server confirms lease); it is application-layer on UDP but bootstraps IP.",
        distinctionZh: "Discover（广播）→ Offer → Request → Ack；跑在 UDP 上，但为 IP 提供引导。",
        trap: "Forgetting DHCP uses UDP broadcast initially because the host has no IP yet."
      },
      {
        en: "Why Separate Planes",
        zh: "为何分平面",
        asks: "Give one reason the control plane is kept separate from the data plane.",
        asksZh: "举一个控制平面与数据平面分离的理由。",
        distinction: "Separation lets forwarding stay fast/simple in hardware while control logic runs slower in software and can change without disrupting forwarding.",
        distinctionZh: "分离让转发在硬件里快而简单，控制逻辑在软件里慢跑且可更新而不打断转发。",
        trap: "Believing control-plane changes always pause forwarding — well-designed networks keep forwarding alive during recomputation."
      },
      {
        en: "Traceroute across International Hops",
        zh: "跨洲 traceroute",
        asks: "Why can a traceroute with few hops still show large RTTs, and what do carrier names in the output reveal?",
        asksZh: "为什么跳数少的 traceroute 仍可能有大 RTT？输出里的运营商名说明了什么？",
        distinction: "RTT is dominated by propagation distance (speed of light along cables), not hop count; carrier domains like telia.net/cogentco.com show the packet is crossing a Tier-1 backbone, often over submarine cables.",
        distinctionZh: "RTT 主要由传播距离（光速沿电缆）决定，而非跳数；telia.net/cogentco.com 等运营商名说明在穿越 Tier-1 骨干，常走海底电缆。",
        trap: "Equating 'few hops' with 'low latency' — a single cross-Pacific hop can be ~150 ms while 10 local hops may be < 5 ms."
      }
    ]
  },

  "wk12-nat": {
    summary: "NAT is stateful address/port translation; it eases IPv4 scarcity but breaks the end-to-end principle.",
    summaryZh: "NAT 是有状态的地址/端口转换；缓解 IPv4 稀缺但破坏端到端原则。",
    topics: [
      {
        en: "What NAT Does",
        zh: "NAT 做什么",
        asks: "Describe how a NAT box rewrites packets in both directions.",
        asksZh: "描述 NAT 在两个方向如何改写包。",
        distinction: "Outbound: rewrite source (private IP:port) → (public IP: new port), record mapping; inbound: look up the dest public port, rewrite dest back to the private IP:port.",
        distinctionZh: "出向：源（私 IP:端口）→（公 IP:新端口）并记映射；入向：按目的公网端口查表，目的改回私 IP:端口。",
        trap: "Thinking NAT rewrites the destination on outbound packets — it rewrites the source outbound, the destination inbound."
      },
      {
        en: "NAT is Stateful",
        zh: "NAT 有状态",
        asks: "Why must a NAT keep per-flow state?",
        asksZh: "为什么 NAT 必须保存每流状态？",
        distinction: "Return packets carry only the public port, so without the mapping table NAT cannot know which private host to deliver to.",
        distinctionZh: "返回包只带公网端口，没有映射表 NAT 无法知道交给哪台私网主机。",
        trap: "Assuming NAT is stateless like a router — routers forward statelessly; NAT must remember every flow."
      },
      {
        en: "NAT is not a Firewall",
        zh: "NAT 不是防火墙",
        asks: "Why is NAT not equivalent to a firewall?",
        asksZh: "为什么 NAT 不等于防火墙？",
        distinction: "NAT hides private hosts as a side effect, but it does not inspect content or enforce policy; a real firewall explicitly allows/denies by rule.",
        distinctionZh: "NAT 顺带隐藏私网主机，但不检查内容、不执行策略；防火墙按规则显式允许/拒绝。",
        trap: "Relying on NAT for security — inbound pinholes, UPnP and outbound tunnels can all expose hosts."
      },
      {
        en: "Private Addresses (RFC1918)",
        zh: "私有地址",
        asks: "Why are RFC1918 addresses not routed on the public Internet?",
        asksZh: "为什么 RFC1918 地址不在公网路由？",
        distinction: "They are reusable across private networks; public routers have no route to them, so they must be translated at a NAT to reach the Internet.",
        distinctionZh: "它们在多个私网可复用；公网路由器无路由，必须经 NAT 才能上网。",
        trap: "Trying to ping an RFC1918 address across the Internet — it will not route."
      },
      {
        en: "NAT breaks End-to-End / Layering",
        zh: "NAT 破坏端到端与分层",
        asks: "In what two ways does NAT violate Internet design principles?",
        asksZh: "NAT 在哪两方面违反互联网设计原则？",
        distinction: "It violates the end-to-end principle (peers cannot assume a raw IP path) and layering (it rewrites port numbers, a transport-layer field, in a network-layer box).",
        distinctionZh: "它违反端到端原则（对端不能假设有原始 IP 路径）与分层（在网络层设备里改写传输层端口号）。",
        trap: "Defending NAT as clean layering — it is the textbook example of a layering violation."
      },
      {
        en: "Layered Debugging Matrix",
        zh: "分层调试矩阵",
        asks: "How does the lecture's debugging matrix help isolate 'the internet is not working'?",
        asksZh: "课件的调试矩阵如何帮助定位'网络不工作'？",
        distinction: "Rows = spatial location (host, LAN, gateway, ISP, remote), columns = stack layer (physical/link/network/transport/app); place the symptom in a cell to shrink the hypothesis space, then verify each cell with a matching tool.",
        distinctionZh: "行 = 空间位置（主机、LAN、网关、ISP、远端），列 = 协议栈层（物理/链路/网络/传输/应用）；把症状填进格子缩小假设空间，再用对应工具逐格验证。",
        trap: "Jumping straight to 'the server is down' before checking DNS or local routing — work the matrix cell by cell instead."
      },
      {
        en: "Network Debugging Checklist",
        zh: "网络排错清单",
        asks: "List a bottom-up debugging order for 'a host cannot reach a remote service'.",
        asksZh: "列出'主机连不上远端服务'的自下而上排错顺序。",
        distinction: "Local link & IP → gateway/ARP → DNS resolution → routing table → NAT/firewall → remote service & port.",
        distinctionZh: "本地链路与 IP → 网关/ARP → DNS 解析 → 路由表 → NAT/防火墙 → 远端服务与端口。",
        trap: "Jumping to 'the server is down' before checking DNS or local routing — work layer by layer."
      }
    ]
  }
};
