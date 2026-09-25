const publications = [
  {
    venue: "ICML 2026",
    title: "Universal Reasoner: A Single, Composable Plug-and-Play Reasoner for Frozen LLMs",
    authors: "Jaemin Kim*, Hangeol Chang*, Hyunmin Hwang*, Choonghan Kim, Jong Chul Ye",
    summary: "A lightweight reward-trained module that adds composable reasoning skills to frozen language models.",
    href: "https://arxiv.org/abs/2505.19075",
  },
  {
    venue: "Under review · 2026",
    title: "Hypothesis-Conditioned Query Rewriting for Decision-Useful Retrieval",
    authors: "Hangeol Chang, Changsun Lee, Seungjoon Rho, Junho Yeo, Jong Chul Ye",
    summary: "A training-free retrieval planner that searches for evidence useful to a decision, rather than broadly relevant context.",
    href: "https://arxiv.org/abs/2603.19008",
  },
  {
    venue: "EMNLP 2026 · Oral",
    title: "Dementia-R1: Reinforced Pretraining and Reasoning from Unstructured Clinical Notes",
    authors: "Choonghan Kim*, Hyunmin Hwang*, Hangeol Chang*, Jaemin Kim*, Jinse Park, Jae-Sung Lim, Jong Chul Ye",
    summary: "Longitudinal clinical reasoning with verifiable intermediate rewards for real-world dementia prognosis.",
    href: "https://arxiv.org/abs/2601.03018",
  },
  {
    venue: "ICML Workshop 2026",
    title: "AgentPSO: Evolving Agent Reasoning Skill via Multi-agent Particle Swarm Optimization",
    authors: "Hyunmin Hwang*, Jaemin Kim*, Choonghan Kim, Hangeol Chang, Jong Chul Ye",
    summary: "A particle-swarm-inspired framework for evolving reusable reasoning skills across a population of agents.",
    href: "https://arxiv.org/abs/2605.08704",
  },
  {
    venue: "IPIU 2026",
    title: "Ground-A-Score: Scaling Up the Score Distillation for Multi-Attribute Editing",
    authors: "Hangeol Chang*, Jinho Chang*, Jong Chul Ye",
    summary: "Grounded score distillation for precise image edits with multiple attributes and spatial constraints.",
    href: "https://arxiv.org/abs/2403.13551",
  },
];

const news = [
  { date: "Sep. 2026", text: "Dementia-R1 selected for an oral presentation at EMNLP 2026." },
  { date: "Apr. 2026", text: "Universal Reasoner accepted to ICML 2026." },
  { date: "Mar. 2026", text: "Hypothesis-Conditioned Query Rewriting released on arXiv." },
  { date: "Feb. 2026", text: "Received the Silver Prize at the 32nd Samsung Humantech Paper Award." },
  { date: "Feb. 2026", text: "Received the Silver Prize in the IPIU 2026 Best Paper Award." },
  { date: "Jan. 2026", text: "Dementia-R1 released on arXiv." },
];

const projects = [
  { date: "2025", title: "Clinical Decision Support with RAG", detail: "On-site research project with NAVER · Physician-support pipeline" },
  { date: "2024—", title: "LLM-based Dementia Data Processing & Clinical Support", detail: "Government-funded research project" },
];

const education = [
  { date: "2024—", title: "Ph.D. · KAIST", school: "Kim Jaechul Graduate School of AI", detail: "Advisor: Prof. Jong Chul Ye" },
  { date: "2022—24", title: "M.S. · KAIST", school: "Kim Jaechul Graduate School of AI", detail: "Advisor: Prof. Jong Chul Ye" },
  { date: "2021—22", title: "Graduate Studies · Yonsei University", school: "Department of Physics · Solid-State Physics", detail: "M.S.–Ph.D. integrated program · Three semesters" },
  { date: "2018—21", title: "B.S. · Yonsei University", school: "School of Integrated Technology", detail: "Full scholarship · Early graduation · GPA 3.95/4.3" },
];

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

function PublicationAuthors({ authors }: { authors: string }) {
  const [before, after] = authors.split("Hangeol Chang");

  return (
    <>
      {before}<strong className="author-self">Hangeol Chang</strong>{after}
    </>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <aside className="profile" aria-label="Profile">
        <img
          className="profile-photo"
          src="/hangeol-chang.jpeg"
          alt="Portrait of Hangeol Chang"
          width="412"
          height="530"
        />
        <h1>Hangeol Chang</h1>
        <p className="role">Ph.D. Student</p>
        <p className="affiliation">KAIST Kim Jaechul Graduate School of AI</p>
        <a className="email-small" href="mailto:hangeol@kaist.ac.kr">hangeol@kaist.ac.kr</a>

        <nav aria-label="Profile links">
          <a href="/hangeol-chang-cv.pdf">CV</a>
          <a href="https://scholar.google.com/citations?user=VvJxxzAAAAAJ&hl=en" target="_blank" rel="noreferrer">Scholar</a>
          <a href="https://github.com/hangeol" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/hangeol-chang" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://bispl-website.github.io/" target="_blank" rel="noreferrer">Lab</a>
        </nav>
      </aside>

      <div className="content">
        <section id="about">
          <h2>About Me</h2>
          <p>
            I am a Ph.D. student at KAIST, advised by Prof. Jong Chul Ye. I study how to make language models reason, retrieve evidence, and respond to rewards more effectively.
          </p>
          <p>
            My research focuses on language model reasoning, retrieval-augmented generation, reinforcement learning, and reward-guided model behavior, with applications in general reasoning and clinical AI.
          </p>
        </section>

        <section id="news">
          <h2>News</h2>
          <ul className="news-list">
            {news.map((item) => (
              <li key={`${item.date}-${item.text}`}>
                <strong>[{item.date}]</strong> {item.text}
              </li>
            ))}
          </ul>
        </section>

        <section id="publications">
          <div className="heading-line">
            <h2>Publications</h2>
            <span>* equal contribution</span>
          </div>
          <div className="publication-list">
            {publications.map((paper) => (
              <article className="publication" key={paper.title}>
                <div className="publication-venue">{paper.venue}</div>
                <h3>{paper.title}</h3>
                <p className="authors"><PublicationAuthors authors={paper.authors} /></p>
                <p className="summary">{paper.summary}</p>
                <a className="paper-link" href={paper.href} target="_blank" rel="noreferrer">arXiv <ExternalArrow /></a>
              </article>
            ))}
          </div>
        </section>

        <section id="honors">
          <h2>Honors</h2>
          <div className="compact-list">
            <article><span>2026</span><div><strong>Silver Prize · 32nd Samsung Humantech Paper Award</strong><p>Universal Reasoner · 2nd Prize in Signal Processing</p></div></article>
            <article><span>2026</span><div><strong>Silver Prize · Best Paper Award at IPIU 2026</strong><p>Ground-A-Score · Top 2% paper</p></div></article>
          </div>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="compact-list">
            {education.map((item) => (
              <article key={item.title}>
                <span>{item.date}</span>
                <div className="education-entry">
                  <strong>{item.title}</strong>
                  <p className="education-school">{item.school}</p>
                  <p className="education-detail">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2>Research Projects</h2>
          <div className="compact-list">
            {projects.map((item) => (
              <article key={item.title}>
                <span>{item.date}</span>
                <div><strong>{item.title}</strong><p>{item.detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <footer>© 2026 Hangeol Chang</footer>
      </div>
    </main>
  );
}
