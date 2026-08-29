export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a href="#top" className="name">YOUR FRIEND'S NAME</a>

        <div className="navLinks">
          <a href="#research">Research</a>
          <a href="#about">About</a>
          <a href="mailto:name@email.com">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <p className="eyebrow">NUS × SCIENCES PO</p>

        <h1>
          Political science,
          <br />
          technology & strategy.
        </h1>

        <p className="intro">
          Dual-degree student at the National University of Singapore and
          Sciences Po, interested in how institutions, regulation and
          technology shape markets, organisations and public life.
        </p>

        <div className="links">
          <a href="#research">Selected Research ↓</a>
          <a href="/cv.pdf">CV ↗</a>
          <a href="https://www.linkedin.com/in/USERNAME">LinkedIn ↗</a>
        </div>
      </section>

      <section className="focus">
        <p className="sectionLabel">Areas of interest</p>

        <div className="focusGrid">
          <div>
            <h3>Technology & Regulation</h3>
            <p>AI governance, digital policy and regulated markets.</p>
          </div>

          <div>
            <h3>Political Economy</h3>
            <p>Institutions, markets, states and cross-border strategy.</p>
          </div>

          <div>
            <h3>Higher Education</h3>
            <p>Universities, research systems, talent and innovation.</p>
          </div>
        </div>
      </section>

      <section id="research" className="research">
        <p className="sectionLabel">Selected research</p>

        <article className="paper">
          <div>
            <p className="paperMeta">2026 · Working Paper</p>
            <h2>Research Paper Title One</h2>
            <p>
              One concise sentence explaining the research question and main
              argument. Keep this sharp enough that someone understands the
              paper without opening it.
            </p>
          </div>

          <a href="/papers/paper-one.pdf">Read paper ↗</a>
        </article>

        <article className="paper">
          <div>
            <p className="paperMeta">2025 · Research Paper</p>
            <h2>Research Paper Title Two</h2>
            <p>
              One concise sentence explaining the central idea, method or
              finding and why it matters.
            </p>
          </div>

          <a href="/papers/paper-two.pdf">Read paper ↗</a>
        </article>
      </section>

      <section id="about" className="about">
        <p className="sectionLabel">About</p>

        <div className="aboutText">
          <p>
            Her work sits at the intersection of political science,
            technology and institutional strategy, with a particular interest
            in sectors where regulation materially shapes business decisions.
          </p>

          <p>
            She is interested in both research and commercially oriented roles
            such as business development, strategy and partnerships.
          </p>
        </div>
      </section>

      <footer>
        <p>Singapore · Paris</p>

        <div>
          <a href="mailto:name@email.com">Email</a>
          <a href="https://www.linkedin.com/in/USERNAME">LinkedIn</a>
          <a href="https://github.com/USERNAME">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
