import "./Projects.css";

import civicfixImage from "../assets/projects/civicfix/civicfix.jpeg";
import smartcartImage from "../assets/projects/smartcart/smartcart.png";
import spendwiseImage from "../assets/projects/spendwise/spendwise.png";

function Projects() {
  return (
    <main className="projects-page">

      {/* =========================
          PROJECTS HERO
      ========================= */}

      <section className="projects-hero">

        <div className="projects-label">
          03 / PROJECTS
        </div>

        <div>
          <h1>
            Things I've
            <br />
            <span>built.</span>
          </h1>

          <p>
            A collection of software projects where I turn ideas,
            problems, and experiments into working solutions.
          </p>
        </div>

      </section>


      {/* =========================
          PROJECTS LIST
      ========================= */}

      <section className="projects-list">

        {/* =========================
            CIVICFIX AI
        ========================= */}

        <article className="project-card project-featured">

          <div className="project-card-number">
            01
          </div>

          <div className="project-card-content">

            <div className="project-card-info">

              <p className="project-category">
                AI • COMPUTER VISION • CIVIC TECHNOLOGY
              </p>

              <h2>
                CivicFix AI
              </h2>

              <p>
                A camera-first civic issue reporting system that
                uses AI to identify problems such as potholes,
                garbage, damaged roads, water leakage, and
                broken streetlights.
              </p>

              <div className="project-tech">
                <span>React.js</span>
                <span>Python</span>
                <span>YOLO</span>
                <span>FastAPI</span>
                <span>SQLite</span>
              </div>

              <div className="project-actions">

                <a href="/projects/civicfix-ai">
                  View Case Study ↗
                </a>

                <a
                  href="https://github.com/BoddulaThanmayee/CivicFix-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub Repo ↗
                </a>

              </div>

            </div>


            {/* CIVICFIX IMAGE */}

            <div className="project-card-image">

              <img
                src={civicfixImage}
                alt="CivicFix AI project"
              />

            </div>

          </div>

        </article>


        {/* =========================
            SMARTCART
        ========================= */}

        <article className="project-card">

          <div className="project-card-number">
            02
          </div>

          <div className="project-card-content">

            <div className="project-card-info">

              <p className="project-category">
                MOBILE • E-COMMERCE • FIREBASE
              </p>

              <h2>
                SmartCart
              </h2>

              <p>
                A smart supermarket self-checkout application
                designed to simplify shopping with barcode
                scanning, cart management, authentication,
                and digital payments.
              </p>

              <div className="project-tech">
                <span>Flutter</span>
                <span>Dart</span>
                <span>Firebase</span>
                <span>Firestore</span>
                <span>Razorpay</span>
              </div>

              <div className="project-actions">

                <a href="/projects/smartcart">
                  View Case Study ↗
                </a>

                <a
                  href="https://github.com/BoddulaThanmayee/smartcart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub Repo ↗
                </a>

              </div>

            </div>


            {/* SMARTCART IMAGE */}

            <div className="project-card-image">

              <img
                src={smartcartImage}
                alt="SmartCart project"
              />

            </div>

          </div>

        </article>


        {/* =========================
            SPENDWISE
        ========================= */}

        <article className="project-card">

          <div className="project-card-number">
            03
          </div>

          <div className="project-card-content">

            <div className="project-card-info">

              <p className="project-category">
                JAVA • DESKTOP • DATA MANAGEMENT
              </p>

              <h2>
                SpendWise
              </h2>

              <p>
                A smart expense analyzer for tracking income,
                expenses, categories, and graphical financial
                reports.
              </p>

              <div className="project-tech">
                <span>Java</span>
                <span>Java Swing</span>
                <span>MySQL</span>
                <span>JDBC</span>
              </div>

              <div className="project-actions">

                <a href="/projects/spendwise">
                  View Case Study ↗
                </a>

                <a
                  href="https://github.com/BoddulaThanmayee/SpendWise-Smart-Expense-Analyzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  GitHub Repo ↗
                </a>

              </div>

            </div>


            {/* SPENDWISE IMAGE */}

            <div className="project-card-image">

              <img
                src={spendwiseImage}
                alt="SpendWise project"
              />

            </div>

          </div>

        </article>

      </section>


      {/* =========================
          CLOSING SECTION
      ========================= */}

      <section className="projects-closing">

        <p>
          FROM IDEA TO IMPLEMENTATION
        </p>

        <h2>
          Build.
          <br />
          Test.
          <br />
          <span>Improve.</span>
        </h2>

      </section>

    </main>
  );
}

export default Projects;