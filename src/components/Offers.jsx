
import { ArrowRight, Clock3, MapPin, Tag } from "lucide-react";

function Offers() {
  const offers = [
    {
      badge: "HOT DEAL",
      title: "Men's Collection",
      discount: "UP TO 50% OFF",
      description: "Fresh styles and everyday essentials.",
      branch: "Available at selected branches",
    },
    {
      badge: "NEW",
      title: "Kids Collection",
      discount: "SPECIAL PRICES",
      description: "Fun, comfortable styles for little ones.",
      branch: "Available across selected stores",
    },
    {
      badge: "LIMITED",
      title: "Footwear",
      discount: "NEW ARRIVALS",
      description: "Step into the latest everyday styles.",
      branch: "Check your nearest branch",
    },
  ];

  return (
    <section className="offers-section" id="offers">

      <div className="offers-container">

        {/* HEADER */}

        <div className="offers-header">

          <div>
            <span className="section-label">
              DON'T MISS OUT
            </span>

            <h2>
              Hot <span>Offers</span>
            </h2>
          </div>

          <button className="view-offers-btn">
            View All Offers
            <ArrowRight size={18} />
          </button>

        </div>


        {/* FEATURED OFFER */}

        <div className="featured-offer">

          <div className="featured-offer-content">

            <div className="offer-badge">
              <Tag size={15} />
              SPECIAL OFFER
            </div>

            <h3>
              Something
              <br />
              <span>Special</span>
              <br />
              for Everyone.
            </h3>

            <p>
              Discover great value across fashion,
              footwear and everyday essentials.
            </p>

            <button className="offer-main-btn">
              Explore Offers
              <ArrowRight size={18} />
            </button>

          </div>


          <div className="featured-offer-shape">

            <div className="sale-circle">
              <span>UP TO</span>
              <strong>50%</strong>
              <small>OFF</small>
            </div>

          </div>

        </div>


        {/* OFFER CARDS */}

        <div className="offers-grid">

          {offers.map((offer, index) => (

            <div className="offer-card" key={index}>

              <div className="offer-card-top">

                <span className="offer-small-badge">
                  {offer.badge}
                </span>

                <div className="offer-icon">
                  <Tag size={20} />
                </div>

              </div>

              <div className="offer-card-content">

                <h3>{offer.title}</h3>

                <strong>{offer.discount}</strong>

                <p>{offer.description}</p>

              </div>

              <div className="offer-card-footer">

                <span>
                  <MapPin size={14} />
                  {offer.branch}
                </span>

                <button>
                  <ArrowRight size={17} />
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* OFFER NOTE */}

        <div className="offers-note">

          <Clock3 size={17} />

          <span>
            Offers may vary by branch. Visit your nearest
            Al Fan Emirates store for availability.
          </span>

        </div>

      </div>

    </section>
  );
}

export default Offers;

