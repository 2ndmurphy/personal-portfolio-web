import { profile } from '../../content/profile'
import { ScrollIcon } from '../ui/ScrollIcon'
import { SocialIcon, type SocialNetwork } from '../ui/SocialIcon'

const socialNetworks: { network: SocialNetwork; label: string }[] = [
  { network: 'linkedin', label: 'LinkedIn' },
  { network: 'github', label: 'GitHub' },
  { network: 'dribbble', label: 'Dribbble' },
]

export function SiteFooter() {
  return (
    <footer className="site-footer container-shell">
      <div className="footer-columns">
        <div className="footer-introduction">
          <h2>Let’s work together.</h2>
          <p className="footer-description">
            Working with APIs, databases, and business logic to turn
            requirements into useful software.
          </p>
          <div className="footer-socials" aria-label="Social profiles">
            {socialNetworks.map(({ network, label }) => {
              const href = profile.socials[network]
              return href ? (
                <a
                  key={network}
                  href={href}
                  className="footer-social-link"
                  aria-label={label}
                >
                  <SocialIcon network={network} />
                </a>
              ) : (
                <span
                  key={network}
                  className="footer-social-placeholder"
                  role="img"
                  aria-label={`${label} profile not added yet`}
                  title={`${label} profile not added yet`}
                >
                  <SocialIcon network={network} />
                </span>
              )
            })}
          </div>
          {!Object.values(profile.socials).some(Boolean) && (
            <p className="footer-social-note">
              Social profile links not added yet.
            </p>
          )}
          <div className="footer-meta">
            <span>
              © {new Date().getFullYear()} {profile.displayName} · Muhamad
              Jibril Muqodas
            </span>
          </div>
        </div>
        <div className="footer-link-columns">
          <nav className="footer-navigation" aria-label="Footer navigation">
            <h2>Site</h2>
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div
            className="footer-contact"
            aria-labelledby="footer-contact-title"
          >
            <h2 id="footer-contact-title">Contact</h2>
            <dl className="footer-contact-list">
              <div>
                <dt>Email</dt>
                <dd>
                  {profile.email ? (
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  ) : (
                    <span className="footer-pending">
                      Contact email not published yet.
                    </span>
                  )}
                </dd>
              </div>
              <div>
                <dt>Résumé</dt>
                <dd>
                  {profile.resume ? (
                    <a href={profile.resume.href}>
                      Download résumé
                      <span className="footer-file-type">
                        PDF · {profile.resume.sizeLabel}
                      </span>
                    </a>
                  ) : (
                    <span className="footer-pending">Not published yet.</span>
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <svg
        className="footer-wordmark"
        viewBox="0 0 1000 270"
        aria-hidden="true"
        focusable="false"
      >
        <text x="0" y="200" textLength="1000" lengthAdjust="spacingAndGlyphs">
          {profile.displayName}
        </text>
      </svg>
      <div className="footer-action">
        <a className="primary-link" href="#home">
          Back to the Top
          <span className="cta-icon">
            <span className="footer-top-icon">
              <ScrollIcon />
            </span>
          </span>
        </a>
      </div>
    </footer>
  )
}
