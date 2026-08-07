const publications = [
  {
    year: "2026",
    venue: "ICML",
    topic: "Reasoning",
    title: "Universal Reasoner: A Single, Composable Plug-and-Play Reasoner for Frozen LLMs",
    authors: "Jaemin Kim*, Hangeol Chang*, Hyunmin Hwang*, Choonghan Kim, Jong Chul Ye",
    summary: "A lightweight reward-trained module that adds composable reasoning skills to frozen language models.",
    href: "https://arxiv.org/abs/2505.19075",
  },
  {
    year: "2026",
    venue: "Under review",
    topic: "Retrieval",
    title: "Hypothesis-Conditioned Query Rewriting for Decision-Useful Retrieval",
    authors: "Hangeol Chang, Changsun Lee, Seungjoon Rho, Junho Yeo, Jong Chul Ye",
    summary: "A training-free retrieval planner that searches for evidence useful to a decision, rather than broadly relevant context.",
    href: "https://arxiv.org/abs/2603.19008",
  },
  {
    year: "2026",
    venue: "Under review",
    topic: "Clinical AI",
    title: "Dementia-R1: Reinforced Pretraining and Reasoning from Unstructured Clinical Notes",
    authors: "Choonghan Kim*, Hyunmin Hwang*, Hangeol Chang*, Jaemin Kim*, Jinse Park, Jae-Sung Lim, Jong Chul Ye",
    summary: "Longitudinal clinical reasoning with verifiable intermediate rewards for real-world dementia prognosis.",
    href: "https://arxiv.org/abs/2601.03018",
  },
  {
    year: "2026",
    venue: "ICML Workshop",
    topic: "Agents",
    title: "AgentPSO: Evolving Agent Reasoning Skill via Multi-agent Particle Swarm Optimization",
    authors: "Hyunmin Hwang*, Jaemin Kim*, Choonghan Kim, Hangeol Chang, Jong Chul Ye",
    summary: "A particle-swarm-inspired framework for evolving reusable reasoning skills across a population of agents.",
    href: "https://arxiv.org/abs/2605.08704",
  },
  {
    year: "2026",
    venue: "IPIU · Best Paper",
    topic: "Image Editing",
    title: "Ground-A-Score: Scaling Up the Score Distillation for Multi-Attribute Editing",
    authors: "Hangeol Chang*, Jinho Chang*, Jong Chul Ye",
    summary: "Grounded score distillation for precise image edits with multiple attributes and spatial constraints.",
    href: "https://arxiv.org/abs/2403.13551",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Language model reasoning",
    text: "Transferable reasoning skills, reinforcement learning, and evaluation for frozen or efficient language models.",
  },
  {
    number: "02",
    title: "Decision-useful retrieval",
    text: "RAG pipelines that retrieve evidence capable of changing a model's final decision.",
  },
  {
    number: "03",
    title: "Reward-guided behavior",
    text: "Practical methods that translate reward signals into controllable model behavior at inference time.",
  },
];

function ExternalArrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="name-mark" href="#top">Hangeol Chang</a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#focus">Research</a>
          <a href="#background">Background</a>
        </nav>
        <a className="cv-link" href="/hangeol-chang-cv.pdf">CV <ExternalArrow /></a>
      </header>

      <section className="intro" id="top">
        <div className="intro-identity">
          <p className="overline">Ph.D. Student · KAIST AI</p>
          <h1>Hangeol<br />Chang</h1>
        </div>
        <div className="intro-statement">
          <p className="lead">
            I study how to make language models <strong>reason, retrieve evidence,</strong> and <strong>respond to rewards</strong> more effectively.
          </p>
          <p className="intro-detail">
            My work develops empirical pipelines that steer and structure model behavior, with applications in general reasoning and clinical AI.
          </p>
          <div className="profile-links">
            <a href="mailto:hangeol@kaist.ac.kr">Email <ExternalArrow /></a>
            <a href="https://github.com/hangeol" target="_blank" rel="noreferrer">GitHub <ExternalArrow /></a>
            <a href="https://scholar.google.com/citations?user=VvJxxzAAAAAJ&hl=en" target="_blank" rel="noreferrer">Scholar <ExternalArrow /></a>
            <a href="https://www.linkedin.com/in/hangeol-chang" target="_blank" rel="noreferrer">LinkedIn <ExternalArrow /></a>
          </div>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-intro">
          <div>
            <p className="overline">Selected work</p>
            <h2 id="work-title">Research at a glance</h2>
          </div>
          <p>Five selected projects spanning reasoning, retrieval, agents, clinical AI, and generative modeling. * Equal contribution.</p>
        </div>

        <div className="work-table">
          {publications.map((paper, index) => (
            <a className="work-row" href={paper.href} target="_blank" rel="noreferrer" key={paper.title}>
              <div className="work-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="work-meta">
                <span>{paper.year}</span>
                <strong>{paper.venue}</strong>
                <span className="topic">{paper.topic}</span>
              </div>
              <div className="work-main">
                <h3>{paper.title}</h3>
                <p className="authors">{paper.authors}</p>
                <p className="summary">{paper.summary}</p>
              </div>
              <div className="row-arrow"><ExternalArrow /></div>
            </a>
          ))}
        </div>
      </section>

      <section className="focus-section" id="focus" aria-labelledby="focus-title">
        <div className="section-label">
          <p className="overline">Research focus</p>
          <h2 id="focus-title">What connects the work</h2>
        </div>
        <div className="focus-list">
          {focusAreas.map((area) => (
            <article key={area.title}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="background-section" id="background" aria-labelledby="background-title">
        <div className="section-label">
          <p className="overline">Background</p>
          <h2 id="background-title">Experience & education</h2>
        </div>
        <div className="background-columns">
          <div>
            <h3>Experience & recognition</h3>
            <div className="timeline">
              <article>
                <span>2026</span>
                <div><strong>Samsung Humantech Paper Award</strong><p>Silver Prize · 2nd Prize in Signal Processing</p></div>
              </article>
              <article>
                <span>2026</span>
                <div><strong>IPIU Best Paper Award</strong><p>Ground-A-Score · Top 2% paper</p></div>
              </article>
              <article>
                <span>2025</span>
                <div><strong>NAVER · On-site Research Project</strong><p>RAG pipeline for clinical decision support</p></div>
              </article>
              <article>
                <span>2024—</span>
                <div><strong>Clinical AI Research Project</strong><p>LLM-based dementia data processing and support platform</p></div>
              </article>
            </div>
          </div>
          <div>
            <h3>Education</h3>
            <div className="timeline">
              <article>
                <span>2024—</span>
                <div><strong>Ph.D. in AI · KAIST</strong><p>Advisor: Prof. Jong Chul Ye</p></div>
              </article>
              <article>
                <span>2022—24</span>
                <div><strong>M.S. in AI · KAIST</strong><p>Diffusion models and LLM-guided image editing</p></div>
              </article>
              <article>
                <span>2018—21</span>
                <div><strong>B.S. · Yonsei University</strong><p>Full scholarship · Early graduation · 3.95/4.3</p></div>
              </article>
              <article>
                <span>2021—22</span>
                <div><strong>Graduate research · Solid-state physics</strong><p>Yonsei University</p></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p className="overline">Contact</p>
          <a className="email" href="mailto:hangeol@kaist.ac.kr">hangeol@kaist.ac.kr <ExternalArrow /></a>
        </div>
        <p>Hangeol Chang · KAIST AI · 2026</p>
      </footer>
    </main>
  );
}
