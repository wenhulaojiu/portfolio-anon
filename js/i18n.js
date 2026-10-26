/* ==========================================================
   双语引擎：静态文案字典 + 语言切换（匿名展示版）
   动态内容由 main.js 的 renderDynamic 读取 data.js 的 *_en 字段
   ========================================================== */

const I18N = {
  "META.title_zh": "匿名作品集 | Anonymous Portfolio",
  "META.title_en": "Anonymous Portfolio | 匿名作品集",
  "META.desc_zh": "一份匿名的个人作品集 UI 展示：四个零依赖手写项目与编辑风格的站点设计。不含任何身份与联系方式。",
  "META.desc_en": "An anonymous portfolio UI showcase: four hand-built, zero-dependency projects and an editorial site design. No identity, no contact info.",

  "nav.logo": { zh: "作品集<span class=\"nav-logo-dot\">.</span>", en: "Portfolio<span class=\"nav-logo-dot\">.</span>" },
  "footer.logo": { zh: "作品集<span class=\"footer-dot\">.</span>", en: "Portfolio<span class=\"footer-dot\">.</span>" },
  "nav.about": { zh: "关于", en: "About" },
  "nav.skills": { zh: "技能", en: "Skills" },
  "nav.projects": { zh: "项目", en: "Projects" },
  "nav.contact": { zh: "关于本页", en: "This Page" },

  "hero.eyebrow": { zh: "作品集 — 匿名 UI 展示 · 2026", en: "PORTFOLIO — ANONYMOUS UI SHOWCASE · 2026" },
  "hero.typingLabel": { zh: "IS", en: "IS A" },
  "hero.desc": {
    zh: "把想法做成能跑起来的东西。喜欢手写每一行代码，也擅长让 AI 加速——<br class=\"br-desktop\" />这里的每一个像素、每一行动画，都是 <strong>手写</strong> 的。",
    en: "I turn ideas into things that run — hand-writing every line, with AI as my accelerator.<br class=\"br-desktop\" />Every pixel and every animation here is <strong>hand-written</strong>.",
  },
  "hero.cta1": { zh: "查看项目 <span class=\"btn-arrow\">→</span>", en: "View Projects <span class=\"btn-arrow\">→</span>" },
  "hero.cta2": { zh: "了解本站", en: "About This Site" },

  "about.title": { zh: "关于本站<span class=\"sec-title-dot\">.</span>", en: "About This Site<span class=\"sec-title-dot\">.</span>" },
  "about.lede": {
    zh: "你好，陌生人！这是一份匿名展示的作品集。从写下第一行 Hello&nbsp;World 开始，我就对「做东西给人用」这件事上了瘾。",
    en: "Hello, stranger! This is an anonymous portfolio showcase. Ever since my first Hello&nbsp;World, I've been hooked on building things people actually use.",
  },
  "about.p1": {
    zh: "这里陈列的是我独立完成的作品：两个 AI 小游戏（<strong>圈层谣言攻防战</strong>、<strong>AI 伪装狼人杀</strong>）和一个浏览器扩展（<strong>刘看山网页助手</strong>），全部零第三方依赖。你正在看的这个网站也是从视觉设计到每一行动画全部手写。",
    en: "On display: works I built solo — two AI games (<strong>Circle Rumor Warfare</strong>, <strong>AI Werewolf</strong>) and a browser extension (<strong>Liu Kanshan Web Assistant</strong>), all with zero third-party dependencies. The site you're reading is also hand-written down to every animation.",
  },
  "about.p2": {
    zh: "我习惯用 AI 辅助编程提效，但坚持搞懂每一行代码背后的原理——页面上的每个交互你都可以试：主题切换、背景音乐、快捷键、AI 问答。按下 <strong>0-5</strong> 可以直接跳转分区。",
    en: "I move fast with AI-assisted tooling but insist on understanding every line behind it. Try every interaction: theme switch, background music, keyboard nav, the AI assistant. Press <strong>0-5</strong> to jump between sections.",
  },
  "about.eduSchool": { zh: "自学 + 课堂双轨推进", en: "Self-taught + coursework" },
  "about.eduMajor": { zh: "Web 全栈 · AI 应用 · 计算机基础", en: "Full-stack web · AI apps · CS fundamentals" },

  "skills.title": { zh: "技能版图<span class=\"sec-title-dot\">.</span>", en: "The Skill Map<span class=\"sec-title-dot\">.</span>" },
  "skills.sub": { zh: "不背名词，只列真正写过代码的。", en: "No buzzword bingo — only things I've actually written code for." },

  "projects.title": { zh: "项目精选<span class=\"sec-title-dot\">.</span>", en: "Selected Works<span class=\"sec-title-dot\">.</span>" },
  "projects.sub": { zh: "数量不多，每一个都亲手完成。列表会持续更新。", en: "Not many, but every one is genuinely mine. The list keeps growing." },

  "contact.title": { zh: "匿名，是<em>故意的</em>。", en: "Anonymous, <em>on purpose</em>." },
  "contact.sub": { zh: "这是一页纯 UI 展示：没有名字，没有联系方式，没有社交账号——作品本身就是全部内容。你看到的每个交互都值得动手试试。", en: "A pure UI showcase: no name, no contact, no socials — the work is the whole content. Every interaction you see is worth trying." },
  "contact.headline": { zh: "匿名展示 · 项目即名片<span class=\"mail-arrow\">◈</span>", en: "Anonymous by design · the work speaks<span class=\"mail-arrow\">◈</span>" },
  "contact.note": { zh: "ANONYMOUS BY DESIGN · NOTHING TO CLICK · EVERYTHING TO SEE", en: "ANONYMOUS BY DESIGN · NOTHING TO CLICK · EVERYTHING TO SEE" },

  "ui.backTop": { zh: "回到顶部 ↑", en: "Top ↑" },
  "ui.music": { zh: "背景音乐（点击开关）", en: "Background music (click to toggle)" },
  "chat.title": { zh: "AI 助手", en: "AI Assistant" },
  "chat.ph": { zh: "问任何关于本站的问题…", en: "Ask anything about this site…" },
  "toast": { zh: "已复制到剪贴板 ✓", en: "Copied to clipboard ✓" },
};

function currentLang() {
  return localStorage.getItem("zyy-lang") === "en" ? "en" : "zh";
}
function t(key) {
  const entry = I18N[key];
  if (!entry) return key;
  return currentLang() === "en" ? entry.en : entry.zh;
}
function L(zh, en) {
  return currentLang() === "en" ? (en ?? zh) : zh;
}

function applyLang(lang) {
  localStorage.setItem("zyy-lang", lang);
  document.documentElement.setAttribute("lang", lang === "en" ? "en" : "zh-CN");
  document.title = currentLang() === "en" ? I18N["META.title_en"] : I18N["META.title_zh"];
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", currentLang() === "en" ? I18N["META.desc_en"] : I18N["META.desc_zh"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
  });

  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = currentLang() === "en" ? "中" : "EN";

  if (typeof window.renderDynamic === "function") window.renderDynamic();
  window.dispatchEvent(new CustomEvent("langchange"));
}

document.getElementById("langBtn").addEventListener("click", () => {
  applyLang(currentLang() === "en" ? "zh" : "en");
});

if (currentLang() === "en") applyLang("en");
