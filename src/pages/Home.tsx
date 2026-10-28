import { profile, publishedWork } from "../content/profile";
import { ScrollIcon } from "../components/ui/ScrollIcon";
import { TechStackSection } from '../components/portfolio/TechStackSection'

export function Home() {
  return (
    <div className="container-shell">
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="hero-keywords">
            Backend development · APIs · Business logic
          </p>
          <h1 id="hero-title">
            Practical software.
            <br />
            Built from
            <br />
            <span>the backend.</span>
          </h1>
        </div>
        <figure className="portrait-card">
          <div className="portrait-topline">
            <span>A little more human</span>
            <span>01 / Profile</span>
          </div>
          <div className="portrait-stage">
            <svg
              className="portrait-shape"
              viewBox="0 0 480 420"
              preserveAspectRatio="none"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M284 26H438Q466 26 466 54V72Q466 98 440 98H356C320 98 300 120 300 150S320 202 356 202H430Q458 202 458 230V370Q458 402 426 402H48Q16 402 16 370V160Q16 132 44 132H220Q252 132 252 100V58Q252 26 284 26Z" />
            </svg>
            {profile.portrait ? (
              <img
                className="portrait-image"
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                width="480"
                height="600"
              />
            ) : (
              <div className="portrait-placeholder">
                <p>
                  Your photo
                  <br />
                  goes here<span>Portrait placeholder</span>
                </p>
              </div>
            )}
          </div>
          <figcaption>
            <span>Muhamad Jibril Muqodas</span>
            <span>{profile.role}</span>
          </figcaption>
        </figure>
        <div className="hero-action">
          <a className="primary-link" href="#work">
            View my work
            <span className="cta-icon">
              <ScrollIcon />
            </span>
          </a>
        </div>
      </section>

      <section
        id="work"
        className="work-section section-space"
        aria-labelledby="work-title"
      >
        <div className="work-introduction">
          <h2 id="work-title" className="section-index">
            01 / Work
          </h2>
          <p>{profile.introduction}</p>
        </div>
        {publishedWork.length ? (
          <div className="work-grid">
            {publishedWork.map((work) => (
              <article className="work-entry" key={work.slug}>
                <p className="small-label">
                  {work.workType} work · {work.evidenceLabel}
                </p>
                <h3>{work.title}</h3>
                <p>{work.summary}</p>
                <p>{work.contribution}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="work-grid">
            <article className="work-placeholder professional-work">
              <div className="work-placeholder-top">
                <span>Professional experience</span>
                <span>01</span>
              </div>
              <h3>
                Company work.
                <br />
                My contribution.
                <br />
                <span>Clearly explained.</span>
              </h3>
              <div className="work-placeholder-bottom">
                <p>Case studies in preparation</p>
                <span aria-hidden="true">↳</span>
              </div>
            </article>
            <article className="work-placeholder personal-work">
              <div className="work-placeholder-top">
                <span>Personal projects</span>
                <span>02</span>
              </div>
              <div className="personal-work-copy">
                <h3>
                  Room for
                  <br />
                  what comes next.
                </h3>
                <p>
                  Public projects will appear here when there’s an
                  implementation and evidence to share.
                </p>
              </div>
              <p className="work-placeholder-bottom">
                No published projects yet
              </p>
            </article>
          </div>
        )}
        <div className="work-note">
          <span className="small-label">A note on confidentiality</span>
          <p>
            Some of my experience comes from company projects. Case studies will
            explain my role using permitted material and clearly labeled
            conceptual examples, while keeping proprietary details private.
          </p>
        </div>
      </section>

      <TechStackSection />

      <section
        id="about"
        className="about-section section-space"
        aria-labelledby="about-title"
      >
        <div className="about-introduction">
          <p className="section-index">02 / About</p>
          <div>
            <h2 id="about-title">
              A practical start.
              <br />A growing perspective.
            </h2>
            <p>
              From vocational education to a nine-month internship and
              professional employment, my experience has grown through hands-on
              software development.
            </p>
            <p>
              I’m interested in what happens behind an interface: how requests
              are handled, how data fits together, and how business rules become
              working software.
            </p>
          </div>
        </div>
        <ol className="experience-list">
          {profile.experience.map((experience) => (
            <li key={experience.label}>
              <span className="small-label">{experience.label}</span>
              <div>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="contact"
        className="contact-section section-space"
        aria-labelledby="contact-title"
      >
        <p className="section-index">03 / Contact</p>
        <div className="contact-copy">
          <h2 id="contact-title">
            Have a backend role
            <br />
            in mind?
          </h2>
          <p>
            I’m interested in conversations about practical software development
            and the problems your team is working on.
          </p>
          {profile.email ? (
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          ) : (
            <p className="contact-pending">
              Contact details will be added before launch.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
