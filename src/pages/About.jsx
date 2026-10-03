import "./About.css";

function About() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <div className="about-number">01 / ABOUT</div>

        <div className="about-title">
          <h1>
            More than
            <br />
            <span>just code.</span>
          </h1>
        </div>

        <div className="about-intro">
          <p>
            I'm Boddula Thanmayee, a Computer Science Engineering
            student who enjoys turning ideas into useful software.
          </p>

          <p>
            I like exploring software development, artificial
            intelligence, and practical technologies that can solve
            real-world problems.
          </p>
        </div>
      </section>

      <section className="about-story">

        <div className="story-label">
          <span>02</span>
          <p>MY JOURNEY</p>
        </div>

        <div className="story-content">
          <h2>
            Learning.
            <br />
            Building.
            <br />
            <span>Improving.</span>
          </h2>

          <p>
            My engineering journey has given me opportunities to
            work on projects across software development, mobile
            applications, data, and AI.
          </p>

          <p>
            Through projects and hackathons, I've learned that
            building a solution is not only about writing code.
            It is about understanding the problem, experimenting
            with ideas, and creating something people can actually use.
          </p>
        </div>

      </section>

      <section className="education-section">

        <div className="education-heading">
          <span>03</span>
          <h2>Education</h2>
        </div>

        <div className="education-card">

          <div className="education-year">
            2024 — 2028
          </div>

          <div>
            <h3>
              B.Tech — Computer Science & Engineering
            </h3>

            <p>
              Lendi Institute of Engineering and Technology
            </p>

            <p className="education-location">
              Jonnada
            </p>
          </div>

          <div className="cgpa">
            <strong>9.31</strong>
            <span>CGPA / 10</span>
          </div>

        </div>

      </section>

      <section className="about-facts">

        <div className="fact">
          <strong>03</strong>
          <span>PROJECTS</span>
        </div>

        <div className="fact">
          <strong>9.31</strong>
          <span>CGPA / 10</span>
        </div>

        <div className="fact">
          <strong>2028</strong>
          <span>GRADUATION</span>
        </div>

        <div className="fact">
          <strong>01</strong>
          <span>MAIN FOCUS</span>
        </div>

      </section>

      <section className="about-closing">

        <p>WHAT I AM WORKING TOWARDS</p>

        <h2>
          Becoming a
          <br />
          <span>software engineer.</span>
        </h2>

      </section>

    </main>
  );
}

export default About;