/* ==========================================================
   ★ 匿名展示版：无姓名、无学校、无城市、无任何联系方式与外链。
   纯 UI 展示用。改内容只动这个文件。
   带 En 后缀的字段是英文版；没有 En 的两种语言共用
   ========================================================== */

const DATA = {

  /* ---------- 首屏打字机轮播 ---------- */
  typingRoles: ["Web 全栈练习生", "AI 小游戏开发者", "浏览器插件作者", "像素级细节控"],
  typingRolesEn: ["Full-stack Learner", "AI Game Developer", "Browser Extension Author", "Pixel Perfectionist"],

  /* ---------- 技术栈跑马灯（术语两种语言通用） ---------- */
  marquee: ["C / C++", "Python", "JavaScript", "HTML / CSS", "数据结构", "计算机网络", "操作系统", "Git & GitHub", "Linux 基础", "Prompt 工程", "VS Code", "Cursor"],

  /* ---------- 技能版图（深色区） ---------- */
  skills: [
    {
      no: "A.",
      title: "编程语言",
      titleEn: "Programming Languages",
      desc: "实际写过较多代码的语言。",
      descEn: "Languages I've actually shipped code in.",
      tags: ["C", "C++", "Python", "JavaScript", "SQL"],
    },
    {
      no: "B.",
      title: "Web 与浏览器端",
      titleEn: "Web & Browser",
      desc: "从静态页面到 Node 服务再到浏览器扩展，本站即练手成果。",
      descEn: "From static pages to Node servers to a Chrome extension — this site included.",
      tags: ["HTML", "CSS", "JS 动画", "Node.js", "Chrome 扩展 MV3", "HTTP / REST"],
    },
    {
      no: "C.",
      title: "AI 工程化",
      titleEn: "AI Engineering",
      desc: "把大模型真正做进产品：不止聊天，还有语义评分与拟人行为。",
      descEn: "Shipping LLMs into products: not just chat — semantic scoring & human-like agents.",
      tags: ["OpenAI 兼容 API", "SSE 流式对话", "Prompt 设计", "降级容错", "Cursor / Copilot"],
    },
    {
      no: "D.",
      title: "工具与协作",
      titleEn: "Tooling & Workflow",
      desc: "日常开发环境与工作流。",
      descEn: "My daily development environment.",
      tags: ["Git", "GitHub", "Linux", "VS Code", "Vercel"],
    },
    {
      no: "E.",
      title: "计算机基础",
      titleEn: "CS Fundamentals",
      desc: "持续进修的专业核心课。",
      descEn: "Core CS coursework, steadily progressing.",
      tags: ["数据结构", "算法", "操作系统", "计算机网络"],
    },
    {
      no: "F.",
      title: "正在学习",
      titleEn: "Currently Learning",
      desc: "接下来三个月的攻击方向。",
      descEn: "The next three months.",
      tags: ["React", "TypeScript", "RAG", "Agent 开发"],
    },
  ],

  /* ---------- 项目精选（匿名版：不放任何外链） ----------
     links 全部留空 → 卡片右侧显示「源码暂不公开」 */
  projects: [
    {
      no: "01",
      emoji: "◈",
      title: "圈层谣言攻防战",
      titleEn: "Circle Rumor Warfare",
      badge: "已上线",
      badgeEn: "LIVE",
      status: "done",
      desc: "回合制策略游戏：在兴趣 / 家长 / 职场 / 校园四个交叠社交圈中，选择造谣或辟谣一方，每回合挑选节点、撰写说服话术，与 AI 对手争夺传播面。节点带有怀疑度、从众度等画像，跨圈扩散是胜负手。",
      descEn: "A turn-based strategy game about how rumors spread through four overlapping social circles. Pick rumor-maker or debunker, choose three nodes per turn, write your persuasion, and battle an AI opponent across node profiles like skepticism and conformity.",
      highlights: [
        "接入大模型对话术做语义评分，断网自动降级为本地规则引擎",
        "Node 零依赖后端是唯一结算权威，前端只负责提交选择",
        "红绿色盲友好标记 + forced-colors 无障碍支持，附平衡性测试脚本",
      ],
      highlightsEn: [
        "LLM semantic scoring of your wording, with automatic fallback to a local rules engine offline",
        "Zero-dependency Node backend as the single scoring authority — the client only submits choices",
        "Color-blind-safe shape encoding + forced-colors support, with balance test scripts",
      ],
      tags: ["Node.js", "JavaScript", "Canvas 力导向图", "LLM API", "无障碍"],
      links: [],
    },
    {
      no: "02",
      emoji: "◈",
      title: "刘看山网页助手",
      titleEn: "Liu Kanshan Web Assistant",
      badge: "v1.5.0",
      badgeEn: "v1.5.0",
      status: "done",
      desc: "Chrome / Edge 浏览器扩展（Manifest V3）：一键读取当前网页内容，在侧边栏针对页面多轮追问，还支持划词右键提问和桌宠动画。用户自配 OpenAI 兼容 API，流式输出回答。",
      descEn: "A Chrome/Edge extension (Manifest V3) that reads the current page and answers your questions in a side panel via any OpenAI-compatible API — with streaming output, selection quick-asks, and a desktop pet.",
      highlights: [
        "Side Panel API 侧边栏对话，基于页面内容连续追问",
        "无后端、无遥测、不打包密钥——隐私设计从第一行开始",
        "知乎页面专项内容抽取优化",
      ],
      highlightsEn: [
        "Side Panel API chat with multi-turn follow-ups on page content",
        "No backend, no telemetry, no bundled keys — privacy first from line one",
        "Zhihu-specific content extraction",
      ],
      tags: ["Chrome Extension", "Manifest V3", "Side Panel API", "SSE 流式", "JavaScript"],
      links: [],
    },
    {
      no: "03",
      emoji: "◈",
      title: "AI 伪装狼人杀",
      titleEn: "AI Werewolf",
      badge: "单机可玩",
      badgeEn: "PLAYABLE",
      status: "done",
      desc: "单机狼人杀：AI 玩家各自有性格、发言记忆和对每个座位的怀疑值，会接前一个人的话、站边、带节奏，投出真实对局感。双击 HTML 即可运行，无需安装 Node，也无需 API Key。",
      descEn: "Single-player Werewolf where every AI player has a personality, a memory of what was said, and suspicion toward each seat — they interject, take sides, and vote like humans. Double-click the HTML and play; no Node, no API key.",
      highlights: [
        "可选接入大模型增强发言，内置本地拟人 AI 兜底",
        "密钥只存浏览器本地，永不提交到仓库",
        "设计文档拆分为游戏循环 / AI 行为 / 角色等独立章节",
      ],
      highlightsEn: [
        "Optional LLM enhancement with a built-in local persona engine as fallback",
        "Keys stay in your browser, never committed to the repo",
        "Design docs split into game loop / AI behavior / roles",
      ],
      tags: ["JavaScript", "HTML", "AI 拟人对话", "GitHub Pages"],
      links: [],
    },
    {
      no: "04",
      emoji: "◈",
      title: "本站（你正在看的）",
      titleEn: "This Site",
      badge: "纯手写",
      badgeEn: "HANDCRAFTED",
      status: "done",
      desc: "从视觉设计到每一行动画全部手写的作品集：编辑部风格排版、星座连线 Canvas、主题切换、双语、Web Audio 背景音乐、AI 助手。零框架零依赖，纯 HTML / CSS / JS。你现在体验到的所有交互就是它的功能清单。",
      descEn: "Hand-written from visual design to every line of animation: editorial layout, a constellation canvas, theme switch, bilingual copy, Web Audio background music, and an AI assistant. Zero frameworks, zero dependencies. Every interaction you can feel on this page is its feature list.",
      highlights: [
        "米白纸感 × 深炭黑分节的编辑级视觉设计",
        "Canvas 星座连线背景、滚动进度条、错峰入场动画",
        "生成式环境音乐 + 双语 + 键盘导航 + 自定义光标",
      ],
      highlightsEn: [
        "Cream-paper × charcoal editorial visual system",
        "Canvas constellation background, scroll progress, staggered entrances",
        "Generative ambient music + bilingual + keyboard nav + custom cursor",
      ],
      tags: ["HTML", "CSS", "JavaScript", "Canvas", "Web Audio", "i18n"],
      links: [],
    },
  ],

  /* ---------- 数据带（匿名版：不出现学校与年级） ---------- */
  stats: [
    { num: 4, suffix: " 个", suffixEn: "", label: "亲手完成的项目", labelEn: "Projects shipped" },
    { num: 0, suffix: "", suffixEn: "", label: "第三方运行时依赖", labelEn: "Third-party runtime deps" },
    { num: 500, suffix: "+", suffixEn: "+", label: "小时编码积累", labelEn: "Hours of coding" },
    { num: 100, suffix: "%", suffixEn: "%", label: "手写代码占比", labelEn: "Hand-written code" },
  ],

  /* ---------- 匿名版：无联系卡片 ---------- */
  contacts: [],

  /* ---------- AI 助手知识库（匿名版：回答不出现任何身份信息） ---------- */
  chatFAQ: [
    {
      keys: ["技能", "会什么", "技术", "语言", "技术栈", "stack", "会啥"],
      keysEn: ["skill", "tech", "stack", "language", "what can he"],
      answer: "TA 的主力语言是 JavaScript（加上 C / C++ 和 Python），\n独立完成过 Node 后端、Chrome 浏览器扩展（MV3）和大模型 API 集成（流式对话、语义评分）。\n详细版可以看「技能版图」那一节～",
      answerEn: "The developer's main language is JavaScript (plus C/C++ and Python).\nShipped a Node backend, a Chrome extension (MV3), and LLM integrations — streaming chat and semantic scoring.\nSee the Skill Map section for details.",
    },
    {
      keys: ["项目", "作品", "做过什么", "做了什么", "游戏", "插件", "扩展"],
      keysEn: ["project", "work", "built", "game", "extension", "made"],
      answer: "已上线三个能玩 / 能用的作品：\n· 《圈层谣言攻防战》AI 策略游戏\n· 「刘看山网页助手」Chrome/Edge 扩展 v1.5.0\n· 《AI 伪装狼人杀》单机狼人杀\n加上这个网站，全部零第三方依赖手写！",
      answerEn: "Three playable / usable works:\n· Circle Rumor Warfare (AI strategy game)\n· Liu Kanshan Web Assistant — Chrome/Edge extension v1.5.0\n· AI Werewolf, with personable AI players\nPlus this website — all hand-written with zero third-party dependencies.",
    },
    {
      keys: ["名字", "你是谁", "作者", "学校", "大学", "哪里", "联系", "邮箱", "微信", "电话", "github"],
      keysEn: ["name", "who", "author", "school", "university", "contact", "email", "wechat", "phone", "github"],
      answer: "这是一页匿名 UI 展示——没有名字、学校和联系方式，是故意的 🙂\n可以问我：有哪些项目？用了什么技术？这个站是怎么做的？",
      answerEn: "This is an anonymous UI showcase — no name, no school, no contact info, on purpose 🙂\nAsk me: what projects are here? what tech powers it? how was this site built?",
    },
    {
      keys: ["网站", "本站", "怎么做的", "技术实现", "动画", "音乐", "音乐怎么", "星座"],
      keysEn: ["site", "how", "built", "animation", "music", "constellation", "made"],
      answer: "你现在看到的站点本身就是一件作品：\n· 零依赖手写 HTML / CSS / JS，编辑部风格视觉\n· 星座连线是 Canvas 实时渲染，鼠标能拨开星群\n· 背景音乐是 Web Audio 实时生成的，不是音频文件\n· 中英双语、键盘 0-5 跳转、自定义光标、AI 助手",
      answerEn: "This site is itself the showcase:\n· Zero-dependency hand-written HTML / CSS / JS, editorial visual style\n· The constellation is live Canvas — hover to push the stars around\n· Background music is generated in real time with Web Audio, no audio files\n· Bilingual, keyboard 0-5 nav, custom cursor, AI assistant",
    },
    {
      keys: ["实习", "求职", "找工作", "岗位", "招聘", "面试"],
      keysEn: ["intern", "hire", "hiring", "job", "recruit", "available"],
      answer: "TA 正在寻找开发实习（前端 / 全栈 / AI 应用方向）。\n本页为匿名展示版，如有意向请联系 TA 的正式渠道（简历上会提供）。",
      answerEn: "The developer is looking for an internship (frontend / full-stack / AI apps).\nThis page is anonymous by design — reach out via the official channels listed on the résumé.",
    },
    {
      keys: ["你好", "hi", "hello", "在吗", "是谁", "介绍"],
      keysEn: ["hi", "hello", "hey", "who", "introduce"],
      answer: "你好，陌生人！我是这个站点的 AI 助手 🤖\n可以问我：这里有什么项目？用了什么技术？站是怎么做出来的？",
      answerEn: "Hi, stranger! I'm this site's AI assistant 🤖\nAsk me: what projects are here? what tech powers it? how was it built?",
    },
  ],
  chatFallback: "这个问题我还在学习中 🤔 换个问法试试：\n· 这里有哪些项目？\n· 用了什么技术？\n· 这个站是怎么做的？",
  chatFallbackEn: "Still learning that one 🤔 Try asking:\n· What projects are here?\n· What tech powers it?\n· How was this site built?",
  chatChips: ["有什么项目？", "用了什么技术？", "这个站怎么做的？"],
  chatChipsEn: ["Projects?", "Tech stack?", "How was it built?"],
};
