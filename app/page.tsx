const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer",
} as const;

const metrics = [
  {
    label: "Venture",
    value: "Top 20 / 1,500",
    detail: "NORA reached the global finals in ten weeks.",
  },
  {
    label: "Thesis",
    value: "9,645 CVEs",
    detail: "An open-source vulnerability intelligence dataset.",
  },
  {
    label: "Evaluation",
    value: "90.37%",
    detail: "Risk-category match with official EPSS labels.",
  },
  {
    label: "Team",
    value: "3 people",
    detail: "A small founding team building across product, clinical, and business needs.",
  },
];

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to selected work
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ava Frohna, home">
          AVA FROHNA<span> / PORTFOLIO 26</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#recognition">Recognition</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-resume" href="/Ava_Frohna_CV_2026.pdf" download>
          Résumé PDF <span aria-hidden="true">↓</span>
        </a>
      </header>

      <section className="hero page-grid" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Technical lead · security researcher · builder</p>
          <h1 id="hero-title">
            Building <em>secure</em> systems for consequential work.
          </h1>
          <p className="hero-intro">
            I&apos;m Ava Frohna, Technical Lead &amp; Co-Founder at NORA, and I&apos;m
            studying a Master of Computer Science majoring in Cybersecurity at
            the University of Sydney. I learn unfamiliar domains quickly, then
            turn that learning into secure products, rigorous research, and
            business decisions.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-secondary" href="mailto:frohna.ava@gmail.com">
              Start a conversation
            </a>
          </div>
        </div>

        <aside className="hero-aside" aria-label="Current focus">
          <p className="folio">Folio 01 / Profile</p>
          <blockquote>
            “The interesting work lives where technical choices become human,
            commercial, and safety decisions.”
          </blockquote>
          <dl>
            <div>
              <dt>Current practice</dt>
              <dd>Technical Lead &amp; Co-Founder, NORA</dd>
            </div>
            <div>
              <dt>Academic</dt>
              <dd>Master of Computer Science majoring in Cybersecurity</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>Sydney, Australia</dd>
            </div>
            <div>
              <dt>Interested in</dt>
              <dd>Security · software · AI · technology risk</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="metric-strip" aria-label="Selected outcomes">
        {metrics.map((metric, index) => (
          <article className="metric" key={metric.label}>
            <p className="metric-index">
              {String(index + 1).padStart(2, "0")} / {metric.label}
            </p>
            <p className="metric-value">{metric.value}</p>
            <p className="metric-detail">{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="work-section" id="main-content" aria-labelledby="work-title">
        <div className="section-lead" id="work">
          <p className="eyebrow light">Selected work / 04 case files</p>
          <h2 id="work-title">Evidence, not adjectives.</h2>
          <p>
            A focused set of projects showing how I learn quickly, make
            decisions across disciplines, and turn ambiguity into useful work.
          </p>
        </div>

        <div className="case-grid">
          <article className="case-card case-featured">
            <div className="case-meta">
              <span>Case 01</span>
              <span>Health tech · Venture</span>
            </div>
            <h3>NORA</h3>
            <p className="case-deck">
              From a new three-person team to a global top-20 healthcare
              venture in ten weeks.
            </p>
            <p>
              I own the technical surface of an AI-enabled clinical
              communication platform: Fastify and PostgreSQL backend, React
              nurse dashboard, React Native patient app, provider-agnostic AI
              adapters, and Microsoft Azure deployment.
            </p>
            <ul>
              <li>
                Translate clinical, business, regulatory, cybersecurity, and
                patient-safety requirements into product decisions.
              </li>
              <li>
                Built groundwork for ISO 14971, ISO 27001, IEC 62304, and a
                future TGA submission.
              </li>
              <li>
                Helped earn first place at the Sydney hub and a global top-20
                finish among 1,500 teams in the Harvard venture program.
              </li>
            </ul>
            <div className="tag-row" aria-label="NORA skills">
              <span>Technical leadership</span>
              <span>Startup development</span>
              <span>Secure product engineering</span>
            </div>
            <a
              className="case-link"
              href="https://www.norahealth.au"
              {...externalLinkProps}
            >
              Visit NORA <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="case-card">
            <div className="case-meta">
              <span>Case 02</span>
              <span>AI security research · In progress</span>
            </div>
            <h3>AI security research</h3>
            <p className="case-deck">
              Building reproducible research pipelines for faculty-supervised
              work in AI security.
            </p>
            <p>
              Working with public vulnerability data, structured evidence, and
              human review while maintaining careful provenance and
              research-quality controls. Detailed objectives, methods, scale,
              and findings remain private pending publication.
            </p>
            <ul>
              <li>
                Develop reproducible pipelines for collecting and organizing
                security research data.
              </li>
              <li>
                Use automated and human checks to support consistent,
                traceable analysis.
              </li>
              <li>
                Document uncertainty and safety boundaries for responsible
                publication.
              </li>
            </ul>
            <div className="tag-row" aria-label="Research skills">
              <span>Research pipelines</span>
              <span>Vulnerability analysis</span>
              <span>Human review</span>
            </div>
            <p className="case-status">
              Manuscript in preparation · Details withheld pending publication
            </p>
          </article>

          <article className="case-card">
            <div className="case-meta">
              <span>Case 03</span>
              <span>Cybersecurity · Machine learning</span>
            </div>
            <h3>Open-source EPSS</h3>
            <p className="case-deck">
              Testing whether public threat intelligence can approximate a
              proprietary exploitation-risk signal.
            </p>
            <p>
              Our four-person bachelor thesis team created 9,645 enriched CVE
              records from six public sources, CVSS data, CVE descriptions, and
              SentenceBERT embeddings.
            </p>
            <ul>
              <li>
                The neural-network model reached a 90.37% match between
                predicted and official EPSS risk categories.
              </li>
              <li>
                I scraped Bleeping Computer, Hacker News, and ExploitDB and ran
                the full result analysis, producing tables, graphs, and metrics.
              </li>
              <li>
                I wrote the abstract and evaluation, co-rewrote two sections,
                and led the final factual and editorial review.
              </li>
            </ul>
            <div className="tag-row" aria-label="EPSS skills">
              <span>Python</span>
              <span>SentenceBERT</span>
              <span>Vulnerability intelligence</span>
            </div>
            <a
              className="case-link"
              href="https://github.com/avafrohna/EPSS-thesis-project"
              {...externalLinkProps}
            >
              View the repository <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="case-card">
            <div className="case-meta">
              <span>Case 04</span>
              <span>Project management · Health tech</span>
            </div>
            <h3>Clinical AI pilot plan</h3>
            <p className="case-deck">
              A complete development and hospital pilot plan for an AI clinical
              decision-support system.
            </p>
            <p>
              As Project Manager for a five-person team, I connected delivery,
              governance, risk, quality, suppliers, and clinical adoption into
              one executable plan.
            </p>
            <ul>
              <li>
                Owned the charter, RACI, WBS, critical path, and an AUD 650K
                costed budget with phased funding and reserves.
              </li>
              <li>
                Developed risk, quality, supplier, communication,
                change-management, and earned-value plans.
              </li>
              <li>
                Received the University of Sydney Best Project Award and
                Certificate of Excellence.
              </li>
            </ul>
            <div className="tag-row" aria-label="Project management skills">
              <span>Project management</span>
              <span>Risk &amp; governance</span>
              <span>Stakeholder communication</span>
            </div>
          </article>
        </div>
      </section>

      <section className="experience-section page-grid" id="experience" aria-labelledby="experience-title">
        <div className="section-heading">
          <p className="eyebrow">Experience / Beyond the case files</p>
          <h2 id="experience-title">Built across product, research, and people.</h2>
        </div>
        <div className="timeline">
          <article>
            <p className="timeline-date">Apr 2026 — Present</p>
            <div>
              <h3>Technical Lead &amp; Co-Founder</h3>
              <p>NORA · AI Healthcare Venture</p>
              <p>
                Own the technical product and help run a three-person venture,
                translating clinical, commercial, regulatory, cybersecurity,
                and patient-safety needs into engineering and company decisions.
              </p>
            </div>
          </article>
          <article>
            <p className="timeline-date">Jun 2026 — Present</p>
            <div>
              <h3>Engineering Research Intern</h3>
              <p>University of Sydney · Security Research</p>
              <p>
                Building reproducible pipelines and human-review workflows for
                faculty-supervised AI security research; detailed objectives,
                methods, scale, and findings remain private pending publication.
              </p>
            </div>
          </article>
          <article>
            <p className="timeline-date">Jun 2026 — Present</p>
            <div>
              <h3>Web Developer</h3>
              <p>You Belong San Diego · Nonprofit</p>
              <p>
                Building a web presence that helps people find local groups and
                communities, while supporting digital outreach.
              </p>
            </div>
          </article>
          <article>
            <p className="timeline-date">May 2025 — Jan 2026</p>
            <div>
              <h3>Mobile Associate / Mobile Expert</h3>
              <p>T-Mobile · San Diego</p>
              <p>
                Resolved complex device issues for non-technical customers and
                trained new team members in high-volume retail conditions.
              </p>
            </div>
          </article>
          <article>
            <p className="timeline-date">Oct 2022 — Jun 2024</p>
            <div>
              <h3>Student Ambassador for Computer Science</h3>
              <p>Vrije Universiteit Amsterdam</p>
              <p>
                Represented the program to prospective students through tours,
                lectures, and direct guidance.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="capabilities-section" id="capabilities" aria-labelledby="capabilities-title">
        <div className="capabilities-intro">
          <p className="eyebrow light">Capabilities / Working range</p>
          <h2 id="capabilities-title">Technical depth with operating judgment.</h2>
          <p>
            I learn unfamiliar domains quickly, then turn that learning into
            working systems, clearer decisions, and momentum for the team.
          </p>
        </div>
        <div className="capability-grid">
          <article>
            <p className="capability-number">01</p>
            <h3>Product engineering</h3>
            <p>
              TypeScript, JavaScript, Python, React, React Native, Expo,
              Fastify, Node.js, PostgreSQL, APIs, Azure, Docker, Kubernetes,
              Unix/Linux.
            </p>
          </article>
          <article>
            <p className="capability-number">02</p>
            <h3>Security &amp; research</h3>
            <p>
              Vulnerability analysis, threat modeling, security controls,
              cryptography, risk assessment, vulnerability analysis, research
              pipelines, human review, ML, neural networks, embeddings.
            </p>
          </article>
          <article>
            <p className="capability-number">03</p>
            <h3>Regulated systems</h3>
            <p>
              ISO 14971 risk management, ISO 27001 ISMS, IEC 62304 software
              lifecycle, TGA submission groundwork, patient-safety trade-offs.
            </p>
          </article>
          <article>
            <p className="capability-number">04</p>
            <h3>Venture &amp; delivery</h3>
            <p>
              Startup development, product strategy, commercial awareness,
              project management, stakeholder communication, cross-functional
              leadership, mentoring.
            </p>
          </article>
        </div>
      </section>

      <section
        className="recognition-section page-grid"
        id="recognition"
        aria-labelledby="recognition-title"
      >
        <div>
          <p className="eyebrow">Recognition / Selected</p>
          <h2 id="recognition-title">Signals earned through the work.</h2>
        </div>
        <div className="recognition-list">
          <article>
            <p>2026</p>
            <h3>Harvard Venture Building Program</h3>
            <span>Certificate of Achievement · Global Top 20 Demo Day Finalist</span>
          </article>
          <article>
            <p>2026</p>
            <h3>Harvard Health Systems Innovation Lab</h3>
            <span>First Place · Sydney Hub</span>
          </article>
          <article>
            <p>2026</p>
            <h3>University of Sydney</h3>
            <span>Best Project Award · Project Management in IT</span>
          </article>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div>
          <p className="eyebrow light">Contact / Next conversation</p>
          <h2>Let&apos;s build something worth trusting.</h2>
        </div>
        <div className="contact-copy">
          <p>
            Open to internship and part-time opportunities across cybersecurity,
            software engineering, AI research, health tech, and technology risk.
          </p>
          <a className="contact-email" href="mailto:frohna.ava@gmail.com">
            frohna.ava@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className="social-links">
            <a href="http://www.linkedin.com/in/ava-frohna" {...externalLinkProps}>
              LinkedIn
            </a>
            <a href="https://github.com/avafrohna" {...externalLinkProps}>
              GitHub
            </a>
            <a href="/Ava_Frohna_CV_2026.pdf" download>
              Résumé PDF
            </a>
          </div>
        </div>
        <p className="footer-note">Ava Frohna · Sydney, Australia · 2026</p>
      </footer>
    </main>
  );
}
