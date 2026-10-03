import "./SpendWise.css";

import spendwiseImage from "../assets/projects/spendwise/spendwise.png";

function SpendWise() {
  return (
    <main className="spendwise-page">

      {/* HERO */}

      <section className="spendwise-hero">

        <p className="spendwise-label">
          PROJECT 03 / CASE STUDY
        </p>

        <h1>
          Spend
          <br />
          <span>Wise.</span>
        </h1>

        <p className="spendwise-intro">
          A smart desktop expense analyzer designed to help
          users track income, manage expenses, organize spending
          categories, and understand their financial activity
          through graphical reports.
        </p>

      </section>


      {/* MAIN IMAGE */}

      <section className="spendwise-main-image">

        <img
          src={spendwiseImage}
          alt="SpendWise project"
        />

      </section>


      {/* OVERVIEW */}

      <section className="spendwise-section">

        <div className="spendwise-section-label">
          01 / OVERVIEW
        </div>

        <div className="spendwise-section-content">

          <h2>
            Understand where
            <br />
            your money <span>goes.</span>
          </h2>

          <p>
            SpendWise is a Java-based desktop application
            created to provide a structured way of recording
            and analyzing personal financial activity.
          </p>

          <p>
            Users can manage income and expenses, organize
            transactions into categories, and view graphical
            reports to better understand their spending patterns.
          </p>

        </div>

      </section>


      {/* PROBLEM */}

      <section className="spendwise-section spendwise-problem">

        <div className="spendwise-section-label">
          02 / PROBLEM
        </div>

        <div className="spendwise-section-content">

          <h2>
            Financial tracking
            <br />
            can become <span>messy.</span>
          </h2>

          <p>
            Tracking expenses manually can make it difficult to
            understand where money is being spent. Without
            categorization and visual summaries, identifying
            spending patterns can take additional effort.
          </p>

        </div>

      </section>


      {/* SOLUTION */}

      <section className="spendwise-section">

        <div className="spendwise-section-label">
          03 / SOLUTION
        </div>

        <div className="spendwise-section-content">

          <h2>
            Record.
            <br />
            Analyze.
            <br />
            <span>Understand.</span>
          </h2>

          <p>
            SpendWise combines transaction management with
            category-based analysis and graphical reporting
            in one desktop application.
          </p>

          <div className="spendwise-features">

            <div>
              <strong>01</strong>
              <h3>Expense Tracking</h3>
              <p>
                Record and manage day-to-day expenses in a
                structured format.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Income Management</h3>
              <p>
                Maintain income information alongside
                recorded expenses.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Category Analysis</h3>
              <p>
                Organize transactions into categories to
                understand spending distribution.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Graphical Reports</h3>
              <p>
                Visual reports make financial patterns
                easier to interpret.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* WORKFLOW */}

      <section className="spendwise-section spendwise-workflow">

        <div className="spendwise-section-label">
          04 / WORKFLOW
        </div>

        <div className="spendwise-section-content">

          <h2>
            From transaction
            <br />
            to <span>insight.</span>
          </h2>

          <div className="spendwise-flow">

            <div className="spendwise-flow-step">
              <span>01</span>
              <h3>Record</h3>
              <p>
                Enter income or expense information.
              </p>
            </div>

            <div className="spendwise-flow-arrow">
              →
            </div>

            <div className="spendwise-flow-step">
              <span>02</span>
              <h3>Categorize</h3>
              <p>
                Organize transactions into categories.
              </p>
            </div>

            <div className="spendwise-flow-arrow">
              →
            </div>

            <div className="spendwise-flow-step">
              <span>03</span>
              <h3>Store</h3>
              <p>
                Store financial records using MySQL.
              </p>
            </div>

            <div className="spendwise-flow-arrow">
              →
            </div>

            <div className="spendwise-flow-step">
              <span>04</span>
              <h3>Analyze</h3>
              <p>
                Generate graphical financial reports.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* TECHNOLOGY */}

      <section className="spendwise-section">

        <div className="spendwise-section-label">
          05 / TECHNOLOGY
        </div>

        <div className="spendwise-section-content">

          <h2>
            Built with
            <br />
            <span>Java technologies.</span>
          </h2>

          <div className="spendwise-tech-stack">

            <span>Java</span>
            <span>Java Swing</span>
            <span>MySQL</span>
            <span>JDBC</span>

          </div>

        </div>

      </section>


      {/* FUTURE */}

      <section className="spendwise-section">

        <div className="spendwise-section-label">
          06 / FUTURE
        </div>

        <div className="spendwise-section-content">

          <h2>
            More data.
            <br />
            Better <span>insights.</span>
          </h2>

          <p>
            Future improvements can include advanced spending
            analytics, budget tracking, recurring transactions,
            improved visual dashboards, exportable reports, and
            additional financial insights.
          </p>

        </div>

      </section>


      {/* CLOSING */}

      <section className="spendwise-closing">

        <p>
          SPENDWISE
        </p>

        <h2>
          Track.
          <br />
          Analyze.
          <br />
          <span>Spend wisely.</span>
        </h2>

        <a href="/projects">
          ← Back to Projects
        </a>

      </section>

    </main>
  );
}

export default SpendWise;