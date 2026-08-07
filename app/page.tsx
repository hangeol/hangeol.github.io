const publications = [
  {
    index: "01",
    venue: "ICML 2026",
    title:
      "Universal Reasoner: A Single, Composable Plug-and-Play Reasoner for Frozen LLMs",
    authors:
      "Jaemin Kim*, Hangeol Chang*, Hyunmin Hwang*, Choonghan Kim, Jong Chul Ye",
    description:
      "A reward-trained guidance module that gives frozen language models new reasoning skills — without updating the backbone.",
    href: "https://arxiv.org/abs/2505.19075",
    accent: "lime",
  },
  {
    index: "02",
    venue: "UNDER REVIEW · 2026",
    title:
      "Hypothesis-Conditioned Query Rewriting for Decision-Useful Retrieval",
    authors: "Hangeol Chang, Changsun Lee, Seungjoon Rho, Junho Yeo, Jong Chul Ye",
    description:
      "A training-free retrieval planner that turns a working hypothesis into targeted, decision-useful evidence queries.",
    href: "https://arxiv.org/abs/2603.19008",
    accent: "blue",
  },
  {
    index: "03",
    venue: "UNDER REVIEW · 2026",
    title:
      "Dementia-R1: Reinforced Pretraining and Reasoning from Unstructured Clinical Notes",
    authors:
      "Choonghan Kim*, Hyunmin Hwang*, Hangeol Chang*, Jaemin Kim*, Jinse Park, Jae-Sung Lim, Jong Chul Ye",
    description:
      "Longitudinal clinical reasoning with verifiable intermediate rewards for real-world dementia prognosis.",
    href: "https://arxiv.org/abs/2601.03018",
    accent: "coral",
  },
  {
    index: "04",
    venue: "ICML WORKSHOP 2026",
    title:
      "AgentPSO: Evolving Agent Reasoning Skill via Multi-agent Particle Swarm Optimization",
    authors: "Hyunmin Hwang*, Jaemin Kim*, Choonghan Kim, Hangeol Chang, Jong Chul Ye",
    description:
      "A multi-agent framework that evolves reusable reasoning skills through particle-swarm-inspired search.",
    href: "https://arxiv.org/abs/2605.08704",
    accent: "violet",
  },
  {
    index: "05",
    venue: "IPIU 2026 · BEST PAPER",
    title:
      "Ground-A-Score: Scaling Up the Score Distillation for Multi-Attribute Editing",
    authors: "Hangeol Chang*, Jinho Chang*, Jong Chul Ye",
    description:
      "Grounded divide-and-conquer score distillation for precise, multi-attribute diffusion image editing.",
    href: "https://arxiv.org/abs/2403.13551",
    accent: "gold",
  },
];

const milestones = [
  {
    year: "2026",
    title: "Silver Prize · Samsung Humantech Paper Award",
    note: "Universal Reasoner · 2nd Prize in Signal Processing",
  },
  {
    year: "2026",
    title: "Best Paper Award · IPIU",
    note: "Ground-A-Score · Top 2% paper",
  },
  {
    year: "2025",
    title: "On-site Research · NAVER",
    note: "RAG pipeline for clinical decision support",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Hangeol Chang, home">
          HC<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-contact" href="mailto:hangeol@kaist.ac.kr">
          Let&apos;s talk <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow">
          <span className="status-dot" /> Ph.D. Student · KAIST AI
        </div>
        <div className="hero-grid">
          <div>
            <h1>
              I build language models that
              <span className="emphasis"> reason with direction.</span>
            </h1>
            <p className="hero-copy">
              I&apos;m <strong>Hangeol Chang</strong>, a researcher working at the
              intersection of reasoning, retrieval, and reinforcement learning.
              My work turns reward signals into practical ways to steer and
              structure model behavior.
            </p>
            <div className="hero-links">
              <a className="button primary" href="#research">
                Explore research <span aria-hidden="true">↓</span>
              </a>
              <a className="button secondary" href="/hangeol-chang-cv.pdf">
                Download CV <Arrow />
              </a>
            </div>
          </div>

          <div className="research-orbit" aria-label="Research themes: reason, retrieve, reward">
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="orbit-core">
              <span>MODEL</span>
              <strong>BEHAVIOR</strong>
            </div>
            <div className="orbit-node node-reason">
              <span>01</span>
              <strong>REASON</strong>
            </div>
            <div className="orbit-node node-retrieve">
              <span>02</span>
              <strong>RETRIEVE</strong>
            </div>
            <div className="orbit-node node-reward">
              <span>03</span>
              <strong>REWARD</strong>
            </div>
          </div>
        </div>
        <div className="hero-meta">
          <span>Seoul · Daejeon, Korea</span>
          <span>Available for research conversations</span>
          <span>Last updated · Aug 2026</span>
        </div>
      </section>

      <section className="focus-section" aria-labelledby="focus-heading">
        <div className="section-kicker">CURRENT FOCUS</div>
        <h2 id="focus-heading">
          Better models are not only larger.
          <br />They are <em>better guided.</em>
        </h2>
        <div className="focus-grid">
          <article className="focus-card lime-card">
            <span className="card-number">01</span>
            <h3>Reasoning</h3>
            <p>
              Efficient, composable reasoning skills that transfer across tasks
              and frozen model backbones.
            </p>
            <span className="card-tag">GRPO · RL · Evaluation</span>
          </article>
          <article className="focus-card blue-card">
            <span className="card-number">02</span>
            <h3>Retrieval</h3>
            <p>
              RAG systems that seek evidence useful for decisions, not merely
              documents that look relevant.
            </p>
            <span className="card-tag">RAG · Query Planning</span>
          </article>
          <article className="focus-card paper-card">
            <span className="card-number">03</span>
            <h3>Reward Guidance</h3>
            <p>
              Turning trajectory-level feedback into precise, controllable model
              behavior at inference time.
            </p>
            <span className="card-tag">Guidance · Alignment</span>
          </article>
        </div>
      </section>

      <section className="research-section" id="research" aria-labelledby="research-heading">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">SELECTED RESEARCH</div>
            <h2 id="research-heading">Ideas, tested in the wild.</h2>
          </div>
          <p>
            Five projects across language reasoning, retrieval, clinical AI, and
            generative modeling. <span>* equal contribution</span>
          </p>
        </div>

        <div className="publication-list">
          {publications.map((paper) => (
            <a
              className={`publication ${paper.accent}`}
              href={paper.href}
              key={paper.title}
              target="_blank"
              rel="noreferrer"
            >
              <div className="publication-index">{paper.index}</div>
              <div className="publication-body">
                <div className="publication-venue">{paper.venue}</div>
                <h3>{paper.title}</h3>
                <p className="publication-authors">{paper.authors}</p>
                <p className="publication-description">{paper.description}</p>
              </div>
              <div className="publication-arrow" aria-hidden="true">↗</div>
            </a>
          ))}
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-heading">
        <div className="work-intro">
          <div className="section-kicker light">RECOGNITION & PRACTICE</div>
          <h2 id="work-heading">Research that leaves the page.</h2>
          <p>
            From award-winning papers to physician-support systems, I care about
            methods that survive contact with real constraints.
          </p>
        </div>
        <div className="milestone-list">
          {milestones.map((item) => (
            <article className="milestone" key={item.title}>
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-heading">
        <div className="about-lead">
          <div className="section-kicker">ABOUT</div>
          <h2 id="about-heading">
            From physics to AI,
            <br />guided by hard questions.
          </h2>
        </div>
        <div className="about-copy">
          <p className="about-large">
            Before language models, I studied solid-state physics. That training
            still shapes how I work: start from mechanisms, build an empirical
            pipeline, and test what actually moves the system.
          </p>
          <div className="education-list">
            <div>
              <span>2024 — PRESENT</span>
              <strong>Ph.D. in AI · KAIST</strong>
              <p>Advisor: Prof. Jong Chul Ye</p>
            </div>
            <div>
              <span>2022 — 2024</span>
              <strong>M.S. in AI · KAIST</strong>
              <p>Diffusion models and LLM-guided editing</p>
            </div>
            <div>
              <span>2018 — 2021</span>
              <strong>B.S. · Yonsei University</strong>
              <p>Full scholarship · Early graduation · 3.95/4.3</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div>
            <div className="section-kicker light">CONNECT</div>
            <h2>Let&apos;s think through<br />something difficult.</h2>
          </div>
          <a className="footer-email" href="mailto:hangeol@kaist.ac.kr">
            hangeol@kaist.ac.kr <Arrow />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Hangeol Chang</span>
          <div className="social-links">
            <a href="https://github.com/hangeol" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://scholar.google.com/citations?user=VvJxxzAAAAAJ&hl=en" target="_blank" rel="noreferrer">Scholar <Arrow /></a>
            <a href="https://www.linkedin.com/in/hangeol-chang" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
