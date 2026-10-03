import "./Certifications.css";

function Certifications() {
  const certifications = [
  {
    number: "01",
    title: "Data Analytics with Python",
    organization: "NPTEL",
    date: "04 / 2026",
    category: "DATA • PYTHON • ANALYTICS",
    file: "/certificates/data%20analytics%20with%20python.pdf",
  },

  {
    number: "02",
    title: "Deloitte Data Analytics Job Simulation",
    organization: "Deloitte / Forage",
    date: "05 / 2026",
    category: "DATA ANALYTICS • SIMULATION",
    file: "/certificates/Deloitte%20analytics%20cert.pdf",
  },

  {
    number: "03",
    title:
      "AWS Academy Graduate – Machine Learning for Natural Language Processing – Training Badge",
    organization: "AWS Academy",
    date: "12 / 2025",
    category: "AWS • MACHINE LEARNING",
    file: "/certificates/AWS_ML%20certificate.pdf",
  },

  {
    number: "04",
    title: "Quantum Computing Virtual Internship",
    organization: "AICTE – EduSkills",
    date: "03 / 2026",
    category: "QUANTUM • INTERNSHIP",
    file: "/certificates/Quantum%20Computing.pdf",
  },
];

  return (
    <main className="certifications-page">

      {/* HERO */}

      <section className="certifications-hero">

        <div className="certifications-label">
          04 / CERTIFICATIONS
        </div>

        <div>
          <h1>
            Learning
            <br />
            <span>in progress.</span>
          </h1>

          <p>
            Certifications and learning experiences that reflect
            my continuous growth across software, data,
            cloud, and emerging technologies.
          </p>
        </div>

      </section>


      {/* CERTIFICATION LIST */}

      <section className="certifications-list">

        {certifications.map((certificate) => (

          <article
            className="certificate-card"
            key={certificate.number}
          >

            <div className="certificate-number">
              {certificate.number}
            </div>

            <div className="certificate-content">

              {/* CERTIFICATE INFORMATION */}

              <div className="certificate-info">

                <p className="certificate-category">
                  {certificate.category}
                </p>

                <h2>
                  {certificate.title}
                </h2>

                <p className="certificate-organization">
                  {certificate.organization}
                </p>

                <p className="certificate-date">
                  {certificate.date}
                </p>

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Certificate ↗
                </a>

              </div>


              {/* ACTUAL CERTIFICATE PDF */}

              <div className="certificate-visual">

                <iframe
                  src={certificate.file}
                  title={`${certificate.title} certificate`}
                />

              </div>

            </div>

          </article>

        ))}

      </section>


      {/* CLOSING */}

      <section className="certifications-closing">

        <p>
          KEEP LEARNING • KEEP BUILDING
        </p>

        <h2>
          Knowledge
          <br />
          becomes
          <br />
          <span>practice.</span>
        </h2>

      </section>

    </main>
  );
}

export default Certifications;