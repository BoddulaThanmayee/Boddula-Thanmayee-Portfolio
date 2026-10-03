import "./CivicFix.css";

import civicfixImage from "../assets/projects/civicfix/civicfix.jpeg";

function CivicFix() {
  return (
    <main className="civicfix-page">

      {/* HERO */}

      <section className="civicfix-hero">

        <p className="civicfix-label">
          PROJECT 01 / CASE STUDY
        </p>

        <h1>
          CivicFix
          <br />
          <span>AI</span>
        </h1>

        <p className="civicfix-intro">
          A camera-first civic issue reporting system that uses
          computer vision to identify infrastructure problems
          and help route them for action.
        </p>

      </section>


      {/* HERO IMAGE */}

      <section className="civicfix-main-image">

        <img
          src={civicfixImage}
          alt="CivicFix AI"
        />

      </section>


      {/* OVERVIEW */}

      <section className="civicfix-section">

        <div className="civicfix-section-label">
          01 / OVERVIEW
        </div>

        <div className="civicfix-section-content">

          <h2>
            Turning civic problems
            <br />
            into <span>actionable reports.</span>
          </h2>

          <p>
            CivicFix AI is designed to simplify the process of
            reporting everyday civic infrastructure problems.
            Instead of manually describing an issue, the user
            can use the camera and let the AI analyze what is
            visible.
          </p>

          <p>
            The system can identify issues such as potholes,
            garbage, damaged roads, water leakage, and broken
            streetlights, while connecting the detected issue
            with its location.
          </p>

        </div>

      </section>


      {/* PROBLEM */}

      <section className="civicfix-section civicfix-problem">

        <div className="civicfix-section-label">
          02 / PROBLEM
        </div>

        <div className="civicfix-section-content">

          <h2>
            Reporting infrastructure
            <br />
            problems can be <span>slow.</span>
          </h2>

          <p>
            Many civic problems remain unnoticed or take time
            to reach the appropriate department. Traditional
            reporting often depends on users identifying the
            problem, describing it correctly, and providing
            sufficient location information.
          </p>

        </div>

      </section>


      {/* SOLUTION */}

      <section className="civicfix-section">

        <div className="civicfix-section-label">
          03 / SOLUTION
        </div>

        <div className="civicfix-section-content">

          <h2>
            Camera.
            <br />
            AI.
            <br />
            <span>Action.</span>
          </h2>

          <p>
            CivicFix AI combines camera input, computer vision,
            location services, and a backend API into one
            workflow.
          </p>

          <div className="civicfix-features">

            <div>
              <strong>01</strong>
              <h3>Automatic Detection</h3>
              <p>
                YOLO and OpenCV analyze the captured scene and
                identify supported civic issues.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Severity Analysis</h3>
              <p>
                Detected issues can be categorized based on
                their observed severity.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Location</h3>
              <p>
                Browser geolocation provides the location
                associated with the reported issue.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Report Processing</h3>
              <p>
                The frontend communicates with the FastAPI
                backend through REST APIs.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* WORKFLOW */}

      <section className="civicfix-section civicfix-workflow">

        <div className="civicfix-section-label">
          04 / WORKFLOW
        </div>

        <div className="civicfix-section-content">

          <h2>
            From camera
            <br />
            to <span>civic report.</span>
          </h2>

          <div className="civicfix-flow">

            <div className="flow-step">
              <span>01</span>
              <h3>Camera</h3>
              <p>Capture the civic environment.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step">
              <span>02</span>
              <h3>AI Detection</h3>
              <p>YOLO identifies the issue.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step">
              <span>03</span>
              <h3>Location</h3>
              <p>Geolocation associates the issue with a place.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-step">
              <span>04</span>
              <h3>Report</h3>
              <p>The backend processes the report.</p>
            </div>

          </div>

        </div>

      </section>


      {/* TECH STACK */}

      <section className="civicfix-section">

        <div className="civicfix-section-label">
          05 / TECHNOLOGY
        </div>

        <div className="civicfix-section-content">

          <h2>
            Built with
            <br />
            <span>modern tools.</span>
          </h2>

          <div className="civicfix-tech-stack">

            <span>React.js</span>
            <span>Vite</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Python</span>
            <span>YOLO / Ultralytics</span>
            <span>OpenCV</span>
            <span>FastAPI</span>
            <span>REST API</span>
            <span>Uvicorn</span>
            <span>SQLite</span>
            <span>SQLAlchemy</span>
            <span>Axios</span>
            <span>Geolocation API</span>

          </div>

        </div>

      </section>


      {/* FUTURE */}

      <section className="civicfix-section">

        <div className="civicfix-section-label">
          06 / FUTURE
        </div>

        <div className="civicfix-section-content">

          <h2>
            Built to
            <br />
            <span>grow.</span>
          </h2>

          <p>
            Future improvements can include broader issue
            detection, improved location intelligence, richer
            analytics, department-specific dashboards, and
            expanded civic infrastructure categories.
          </p>

        </div>

      </section>


      {/* CLOSING */}

      <section className="civicfix-closing">

        <p>
          CIVICFIX AI
        </p>

        <h2>
          Technology
          <br />
          for better
          <br />
          <span>communities.</span>
        </h2>

        <a href="/projects">
          ← Back to Projects
        </a>

      </section>

    </main>
  );
}

export default CivicFix;