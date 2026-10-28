import {
  technologyGroups,
  technologyEvidence,
} from '../../content/technologies'
import { TechnologyIcon } from '../ui/TechnologyIcon'

export function TechStackSection() {
  return (
    <section
      id="technologies"
      className="technology-section section-space"
      aria-labelledby="technology-title"
    >
      <div className="technology-heading">
        <div>
          <p className="section-index">Tech stack</p>
          <h2 id="technology-title">Technologies I work with.</h2>
        </div>
        <p className="technology-introduction">
          The languages, frameworks, and tools I use across software
          development, from interfaces to APIs and data.
        </p>
      </div>

      <div className="technology-groups">
        {technologyGroups.map((group) => (
          <div className="technology-group" key={group.id}>
            <h3>{group.title}</h3>
            <ul className="technology-items">
              {group.items.map((technology) => (
                <li className="technology-item" key={technology.id}>
                  <div className="technology-marks">
                    {technology.icons.map((icon) => (
                      <TechnologyIcon key={icon.slug} {...icon} />
                    ))}
                  </div>
                  <div>
                    <p className="technology-name">{technology.name}</p>
                    <p className="technology-description">
                      {technology.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="technology-proof">
        <h3>In practice</h3>
        {technologyEvidence.length ? (
          <ul>
            {technologyEvidence.map((evidence) => (
              <li key={evidence.href}>
                <a href={evidence.href}>{evidence.label}</a>
                <span>{evidence.provenance}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            Case studies and technical examples are being prepared to show where
            I used these tools and what I contributed.
          </p>
        )}
      </div>

    </section>
  )
}
