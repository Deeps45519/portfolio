"use client";
import Image from "next/image";

const papers = [
  {
    no: "01",
    meta: "POLITICAL BEHAVIOUR · INDIA · 2024",
    title:
      "Beyond the Ballot: Reassessing Political Sentiment Measurement Under Information and Access Constraints in Rural Bihar",
  },
  {
    no: "02",
    meta: "INSTITUTIONAL DESIGN · SINGAPORE · 2024",
    title:
      "The Architecture of Belonging: Institutional Rules, Social Oversight and the Long-Run Formation of Self-Perception",
  },
  {
    no: "03",
    meta: "GEOPOLITICAL RISK · ASIA · 2025",
    title:
      "Strategic Friction: How Political Risk Alters Market Entry Decisions in High-Barrier Economies",
  },
  {
    no: "04",
    meta: "TECHNOLOGY & LABOUR · 2026",
    title:
      "Before Institutions Catch Up: AI-Driven Labour Disruption and Organisational Adaptation",
  },
  {
    no: "05",
    meta: "DISCOURSE & DECISION-MAKING · 2025",
    title:
      "Narratives Under Pressure: Framing, Institutional Trust and Decision-Making in High-Stakes Environments",
  },
];

const speaking = [
  {
    no: "01",
    meta: "PANEL / ROUNDTABLE · 2025",
    title: "Future of Work and Institutional Adaptation",
  },
  {
    no: "02",
    meta: "SEMINAR · 2024",
    title: "Political Behaviour and Measurement Under Field Constraints",
  },
  {
    no: "03",
    meta: "GUEST SESSION · 2025",
    title: "Research, Policy and Decision-Making Under Uncertainty",
  },
];

function DecisionLandscape() {
  return (
    <div className="thinking-block">
      <div className="thinking-intro">
        <p className="section-label">How I think</p>
        <h2>
          Read the landscape before choosing the move.
        </h2>
        <p>
          Strategy starts by understanding the forces around an institution —
          regulation, political risk, market incentives and public behaviour —
          before deciding what action is actually viable.
        </p>
      </div>

      <div className="landscape-wrap">
        <svg
          className="landscape"
          viewBox="0 0 520 430"
          role="img"
          aria-label="Animated isometric decision landscape"
        >
          <defs>
            <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodOpacity="0.08" />
            </filter>
          </defs>

          <g className="floating-map" filter="url(#softShadow)">
            {/* base platform */}
            <polygon
              className="base-plane"
              points="260,72 430,170 260,268 90,170"
            />

            {/* terrain zones */}
            <polygon
              className="zone zone-reg"
              points="260,88 343,136 260,184 177,136"
            />
            <polygon
              className="zone zone-market"
              points="177,136 260,184 177,232 94,184"
            />
            <polygon
              className="zone zone-public"
              points="343,136 426,184 343,232 260,184"
            />
            <polygon
              className="zone zone-risk"
              points="260,184 343,232 260,280 177,232"
            />

            {/* central institution */}
            <g className="institution">
              <polygon points="226,142 260,162 260,212 226,192" />
              <polygon points="260,162 294,142 294,192 260,212" />
              <polygon points="226,142 260,122 294,142 260,162" />
            </g>

            {/* decision path */}
            <path
              className="decision-path"
              d="M121 184 C170 158, 203 171, 232 191 C260 212, 293 211, 330 192 C357 178, 383 184, 404 199"
            />

            {/* strategic nodes */}
            <circle className="node node-a" cx="127" cy="181" r="6" />
            <circle className="node node-b" cx="208" cy="178" r="6" />
            <circle className="node node-c" cx="260" cy="211" r="6" />
            <circle className="node node-d" cx="334" cy="190" r="6" />
            <circle className="node node-e" cx="403" cy="199" r="6" />

            {/* labels */}
            <g className="map-label">
              <line x1="208" y1="120" x2="167" y2="95" />
              <text x="106" y="91">REGULATION</text>
            </g>

            <g className="map-label">
              <line x1="145" y1="190" x2="84" y2="218" />
              <text x="28" y="231">MARKETS</text>
            </g>

            <g className="map-label">
              <line x1="375" y1="188" x2="438" y2="220" />
              <text x="439" y="233">PUBLIC</text>
            </g>

            <g className="map-label">
              <line x1="260" y1="250" x2="260" y2="319" />
              <text x="226" y="339">POLITICAL RISK</text>
            </g>

            <g className="map-label central-label">
              <line x1="260" y1="126" x2="260" y2="78" />
              <text x="222" y="62">INSTITUTION</text>
            </g>

            <g className="map-label strategy-label">
              <line x1="404" y1="199" x2="454" y2="172" />
              <text x="443" y="163">STRATEGY</text>
            </g>
          </g>

          {/* moving signal */}
          <circle className="moving-signal" r="5">
            <animateMotion
              dur="7s"
              repeatCount="indefinite"
              path="M121 184 C170 158, 203 171, 232 191 C260 212, 293 211, 330 192 C357 178, 383 184, 404 199"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="cv-link" href="/cv.pdf">
          CV ↗
        </a>

        <span className="top-location">Singapore • France</span>
      </header>

      
      <section id="top" className="hero">
        <div className="hero-inner">

          <div className="hero-copy">
            <p className="eyebrow">GEOPOLITICAL RISK & STRATEGY</p>

            <h1>Shanmuga Deepika</h1>

            <p className="hero-deck">
              Geopolitical consultant bridging AI-native firms with regulatory compliance. Dual-degree graduate at the National University of Singapore and Sciences Po, interested in how institutions, regulation and technology
              shape markets, organisations and public life.
            </p>
          </div>

          <figure className="hero-portrait">
            <div className="portrait-frame">
              <Image
                src="/deepika.jpg"
                alt="Shanmuga Sundaram Deepika"
                width={1200}
                height={1500}
                priority
                sizes="(max-width: 839px) 78vw, 300px"
                className="portrait-image"
              />
            </div>
          </figure>

        </div>
      </section>

      <section id="research" className="section">
        <p className="section-label">Research papers</p>

        <div className="paper-list">
          {papers.map((paper) => (
            <article className="list-card" key={paper.no}>
              <span className="item-no">{paper.no}</span>

              <div className="item-copy">
                <p className="item-meta">{paper.meta}</p>
                <h2>{paper.title}</h2>
              </div>

              <button
                className="round-link"
                type="button"
                aria-label={`Open ${paper.title}`}
              >
                <span>↗</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="visual-section">
        <DecisionLandscape />
      </section>

      <section id="speaking" className="section speaking-section">
        <p className="section-label">Speaking</p>

        <div className="paper-list">
          {speaking.map((item) => (
            <article className="list-card" key={item.no}>
              <span className="item-no">{item.no}</span>

              <div className="item-copy">
                <p className="item-meta">{item.meta}</p>
                <h2>{item.title}</h2>
              </div>

              <button
                className="round-link"
                type="button"
                aria-label={`Open ${item.title}`}
              >
                <span>↗</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-grid">
          <p className="section-label">Contact</p>

          <div>
            <p className="contact-copy">
              For research, strategy, speaking or doctoral conversations.
            </p>

            <div className="contact-links">
              <a href="mailto:deepikashasundaram@gmail.com">
                Email ↗
              </a>
              <a href="https://www.linkedin.com/in/deepika-shanmuga-sundaram/">LinkedIn ↗</a>
              <a href="/cv.pdf">CV ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>Shanmuga Sundaram Deepika</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
