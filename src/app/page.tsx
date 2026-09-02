"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroContent =
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "bullets";
      content: string[];
    };

const heroParagraphs: HeroContent[] = [
  {
    type: "paragraph",
    content:
      "Geopolitical analyst currently analysing AI-driven labour disruption. Led field research into strategy for Indonesian banks, SEA power generation monopolies and Japan's mature market ventures. Rebuilt at-risk partnerships through informal coalitions worth millions.",
  },

  {
    type: "bullets",
    content: [
      "Advised 5+ Indonesian banks on market-entry strategy at 24 years old",
      "Secured $1.5M via coalition-building for SEA power-generation companies",
      "Rebuilt 3 at-risk Tier 1 APAC partnerships",
    ],
  },
];

type Paper = {
  no: string;
  meta: string;
  title: string;
  detail?: string;
  supervisor?: string;
};

const papers: Paper[] = [
  {
    no: "01",
    meta: "Working Paper · 2026",
    title:
      "Shame, Status, and the Erosion of Tacit Knowledge in the Age of AI",

    detail:
      "A mixed-methods study examining how AI-driven knowledge externalization is reshaping the value of expertise, judgment, and professional identity at a workforce level — as intuition, timing, and hard-won instinct shift from individually-held skill to something structurally unownable and unteachable. The paper brings a new lens to the existing discourse on labour disruption.",

  },

  {
    no: "02",
    meta: "Gallup Whitepaper · Gallup · 2025",
    title:
      "Beyond Tradition: Reinventing the Japanese Workplace",

    detail:
      "Co-authored Gallup's whitepaper on the future of Japan's workforce. Working under Regional Director Puneet Singh, led the policy research and designed the C-suite stakeholder interviews that surfaced the structural gaps shaping how Japanese leadership thinks about the future of work.",

    supervisor:
      "Regional Director Puneet Singh",
  },


  {
    no: "03",
    meta: "Political Science Research Proposal · NUS · 2024",
    title:
      "Crime, Power & the Rural Vote: Understanding Political Support for Criminals in Rural India.",

    detail:
      "A research proposal examining political support for criminal candidates in rural India, based in Bihar. Presented to a PhD seminar at NUS under the supervision of Professor Guillem Riambau-Armet",

    supervisor:
      "Professor Guillem Riambau-Armet",
  },
  
  {
    no: "04",
    meta: "INDEPENDENT STUDY · NUS University Scholars' Programme · 2024",
    title:
      "The Space Between Permission and Prohibition: Strategic Ambiguity in Politics and Its Lasting Effects on Minorities.",

    detail:
      "An Ethics Board-approved study examining the effects of strategic ambiguity in policy and formal institutions on queer individuals in Singapore. Supervised by Professor Alberto Pérez Pereiro and graded A",

    supervisor:
      "Professor Alberto Pérez Pereiro",
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


function ScrambleText() {
  const [displayContent, setDisplayContent] =
    useState<HeroContent>(heroParagraphs[0]);

  const [transitioning, setTransitioning] = useState(false);

  const currentIndex = useRef(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    let scrambleInterval: ReturnType<typeof setInterval> | null = null;
    let startTimeout: ReturnType<typeof setTimeout> | null = null;

    const softenText = (text: string, intensity: number) => {
      return text
        .split("")
        .map((char) => {
          // Never disturb spaces or punctuation
          if (
            char === " " ||
            char === "." ||
            char === "," ||
            char === "-" ||
            char === "'" ||
            char === "$"
          ) {
            return char;
          }

          // Only affect a small percentage of characters
          if (Math.random() < intensity) {
            return "&";
          }

          return char;
        })
        .join("");
    };

    const scrambleContent = (
      target: HeroContent,
      intensity: number
    ): HeroContent => {
      if (target.type === "paragraph") {
        return {
          type: "paragraph",
          content: softenText(target.content, intensity),
        };
      }

      return {
        type: "bullets",
        content: target.content.map((item) =>
          softenText(item, intensity)
        ),
      };
    };

    const cycle = () => {
      const nextIndex =
        (currentIndex.current + 1) % heroParagraphs.length;

      const target = heroParagraphs[nextIndex];

      setTransitioning(true);

      startTimeout = setTimeout(() => {
        let step = 0;
        const totalSteps = 14;

        scrambleInterval = setInterval(() => {
          step += 1;

          const progress = step / totalSteps;

          // Starts at ~8% disturbed characters,
          // then gradually resolves to 0%
          const intensity = 0.08 * (1 - progress);

          setDisplayContent(
            scrambleContent(target, intensity)
          );

          if (step >= totalSteps) {
            if (scrambleInterval) {
              clearInterval(scrambleInterval);
            }

            setDisplayContent(target);
            currentIndex.current = nextIndex;
            setTransitioning(false);
          }
        }, 55);
      }, 180);
    };

    const cycleInterval = setInterval(cycle, 6500);

    return () => {
      clearInterval(cycleInterval);

      if (scrambleInterval) {
        clearInterval(scrambleInterval);
      }

      if (startTimeout) {
        clearTimeout(startTimeout);
      }
    };
  }, []);

  return (
    <div
      className={`hero-deck paragraph-shift ${
        transitioning ? "is-transitioning" : ""
      }`}
    >
      {displayContent.type === "paragraph" ? (
        <p className="hero-paragraph">
          {displayContent.content}
        </p>
      ) : (
        <div className="hero-bullets">
          {displayContent.content.map((item, index) => (
            <div
              className="hero-bullet"
              key={`${index}-${item}`}
            >
              <span aria-hidden="true">↳</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

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

            <h1>Shanmuga Sundaram Deepika</h1>

            <ScrambleText />
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
            <article className="paper-entry" key={paper.no}>
              <span className="paper-number">{paper.no}</span>

              {paper.detail ? (
                <details className="paper-accordion">
                  <summary className="paper-summary">
                    <div className="paper-heading">
                      <p className="item-meta">{paper.meta}</p>
                      <h2>{paper.title}</h2>
                    </div>

                    <span
                      className="paper-toggle"
                      aria-hidden="true"
                    />
                  </summary>

                  <div className="paper-expanded">
                    <div className="paper-expanded-row">
                      <span>Context</span>
                      <p>{paper.detail}</p>
                    </div>

                    {paper.supervisor && (
                      <div className="paper-expanded-row">
                        <span>Supervision</span>
                        <p>{paper.supervisor}</p>
                      </div>
                    )}
                  </div>
                </details>
              ) : (
                <div className="paper-static">
                  <div className="paper-heading">
                    <p className="item-meta">{paper.meta}</p>
                    <h2>{paper.title}</h2>
                  </div>
                </div>
              )}
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
              For research, strategy, or speaking roles.
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
