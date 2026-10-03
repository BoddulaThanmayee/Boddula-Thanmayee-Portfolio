import "./SmartCart.css";

import smartcartImage from "../assets/projects/smartcart/smartcart.png";

function SmartCart() {
  return (
    <main className="smartcart-page">

      {/* HERO */}

      <section className="smartcart-hero">

        <p className="smartcart-label">
          PROJECT 02 / CASE STUDY
        </p>

        <h1>
          Smart
          <br />
          <span>Cart.</span>
        </h1>

        <p className="smartcart-intro">
          A smart supermarket self-checkout application designed
          to make shopping faster, simpler, and more convenient
          through barcode scanning, cart management, authentication,
          and digital payments.
        </p>

      </section>


      {/* MAIN IMAGE */}

      <section className="smartcart-main-image">

        <img
          src={smartcartImage}
          alt="SmartCart project"
        />

      </section>


      {/* OVERVIEW */}

      <section className="smartcart-section">

        <div className="smartcart-section-label">
          01 / OVERVIEW
        </div>

        <div className="smartcart-section-content">

          <h2>
            A simpler way
            <br />
            to <span>shop.</span>
          </h2>

          <p>
            SmartCart is a mobile self-checkout application
            designed to reduce the time customers spend waiting
            at traditional billing counters.
          </p>

          <p>
            Customers can scan products, manage their cart,
            authenticate their account, and complete their
            purchase through a digital payment flow.
          </p>

        </div>

      </section>


      {/* PROBLEM */}

      <section className="smartcart-section smartcart-problem">

        <div className="smartcart-section-label">
          02 / PROBLEM
        </div>

        <div className="smartcart-section-content">

          <h2>
            Traditional checkout
            <br />
            can be <span>time-consuming.</span>
          </h2>

          <p>
            Supermarket customers often have to wait in billing
            queues after completing their shopping. Manual
            product entry and checkout processes can make the
            experience slower, especially during busy periods.
          </p>

        </div>

      </section>


      {/* SOLUTION */}

      <section className="smartcart-section">

        <div className="smartcart-section-label">
          03 / SOLUTION
        </div>

        <div className="smartcart-section-content">

          <h2>
            Scan.
            <br />
            Manage.
            <br />
            <span>Pay.</span>
          </h2>

          <p>
            SmartCart brings the major steps of supermarket
            self-checkout into one mobile application.
          </p>

          <div className="smartcart-features">

            <div>
              <strong>01</strong>
              <h3>Barcode Scanning</h3>
              <p>
                Products can be scanned and added to the
                shopping cart.
              </p>
            </div>

            <div>
              <strong>02</strong>
              <h3>Cart Management</h3>
              <p>
                Users can view and manage the products in
                their digital shopping cart.
              </p>
            </div>

            <div>
              <strong>03</strong>
              <h3>Authentication</h3>
              <p>
                Firebase Authentication provides user
                account management.
              </p>
            </div>

            <div>
              <strong>04</strong>
              <h3>Digital Payments</h3>
              <p>
                Razorpay is integrated for digital payment
                processing.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* WORKFLOW */}

      <section className="smartcart-section smartcart-workflow">

        <div className="smartcart-section-label">
          04 / WORKFLOW
        </div>

        <div className="smartcart-section-content">

          <h2>
            From product
            <br />
            to <span>payment.</span>
          </h2>

          <div className="smartcart-flow">

            <div className="smartcart-flow-step">
              <span>01</span>
              <h3>Scan</h3>
              <p>
                Scan the product barcode.
              </p>
            </div>

            <div className="smartcart-flow-arrow">
              →
            </div>

            <div className="smartcart-flow-step">
              <span>02</span>
              <h3>Add to Cart</h3>
              <p>
                Add and manage selected products.
              </p>
            </div>

            <div className="smartcart-flow-arrow">
              →
            </div>

            <div className="smartcart-flow-step">
              <span>03</span>
              <h3>Checkout</h3>
              <p>
                Review the final shopping cart.
              </p>
            </div>

            <div className="smartcart-flow-arrow">
              →
            </div>

            <div className="smartcart-flow-step">
              <span>04</span>
              <h3>Pay</h3>
              <p>
                Complete the purchase digitally.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* TECHNOLOGY */}

      <section className="smartcart-section">

        <div className="smartcart-section-label">
          05 / TECHNOLOGY
        </div>

        <div className="smartcart-section-content">

          <h2>
            Built with
            <br />
            <span>connected technologies.</span>
          </h2>

          <div className="smartcart-tech-stack">

            <span>Flutter</span>
            <span>Dart</span>
            <span>Firebase</span>
            <span>Firebase Authentication</span>
            <span>Cloud Firestore</span>
            <span>Razorpay</span>

          </div>

        </div>

      </section>


      {/* FUTURE */}

      <section className="smartcart-section">

        <div className="smartcart-section-label">
          06 / FUTURE
        </div>

        <div className="smartcart-section-content">

          <h2>
            Designed to
            <br />
            <span>scale.</span>
          </h2>

          <p>
            Future improvements can include real-time inventory
            synchronization, personalized recommendations,
            digital receipts, loyalty features, and expanded
            supermarket management capabilities.
          </p>

        </div>

      </section>


      {/* CLOSING */}

      <section className="smartcart-closing">

        <p>
          SMARTCART
        </p>

        <h2>
          A smarter
          <br />
          way to
          <br />
          <span>shop.</span>
        </h2>

        <a href="/projects">
          ← Back to Projects
        </a>

      </section>

    </main>
  );
}

export default SmartCart;