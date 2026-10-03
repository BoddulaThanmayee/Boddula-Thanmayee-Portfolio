import "./Leadership.css";

function Leadership() {
  const experiences = [
    {
      number: "01",
      role: "Hackathon Team Leader",
      event: "LNIT Summit",
      category: "LEADERSHIP • HACKATHON",
      description:
        "Led and coordinated a hackathon team by distributing tasks, supporting project development, and helping the team complete the project within the given timeline.",
      highlights: [
        "Team coordination",
        "Task distribution",
        "Project development",
        "Timely completion",
      ],
    },

    {
      number: "02",
      role: "Hackathon Participant",
      event: "NSRIT – Hackayatra",
      category: "COLLABORATION • HACKATHON",
      description:
        "Participated in a hackathon focused on collaborative problem solving, project development, and creating a solution for a real-world problem.",
      highlights: [
        "Team collaboration",
        "Problem solving",
        "Project development",
        "Real-world problem solving",
      ],
    },
  ];

  return (
    <main className="leadership-page">

      {/* HERO */}

      <section className="leadership-hero">

        <div className="leadership-label">
          05 / LEADERSHIP
        </div>

        <div>

          <h1>
            Leading
            <br />
            <span>by building.</span>
          </h1>

          <p>
            Experiences where collaboration, responsibility,
            communication, and problem solving became part of
            the development process.
          </p>

        </div>

      </section>


      {/* EXPERIENCE LIST */}

      <section className="leadership-list">

        {experiences.map((experience) => (

          <article
            className="leadership-card"
            key={experience.number}
          >

            <div className="leadership-number">
              {experience.number}
            </div>

            <div className="leadership-content">

              <div className="leadership-info">

                <p className="leadership-category">
                  {experience.category}
                </p>

                <h2>
                  {experience.role}
                </h2>

                <h3>
                  {experience.event}
                </h3>

                <p className="leadership-description">
                  {experience.description}
                </p>

              </div>


              <div className="leadership-highlights">

                {experience.highlights.map((highlight, index) => (

                  <div
                    className="leadership-highlight"
                    key={index}
                  >

                    <span>
                      0{index + 1}
                    </span>

                    <p>
                      {highlight}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </article>

        ))}

      </section>


      {/* APPROACH */}

      <section className="leadership-approach">

        <p>
          MY APPROACH
        </p>

        <h2>
          Listen.
          <br />
          Collaborate.
          <br />
          <span>Build.</span>
        </h2>

      </section>


      {/* CLOSING */}

      <section className="leadership-closing">

        <p>
          LEADERSHIP IS PART OF THE PROCESS
        </p>

        <h2>
          Good ideas
          <br />
          become better
          <br />
          <span>together.</span>
        </h2>

      </section>

    </main>
  );
}

export default Leadership;