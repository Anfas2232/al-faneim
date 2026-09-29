
import { ArrowRight, MapPin, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Offers() {
  const navigate = useNavigate();

  const offers = [
    {
      number: "01",
      badge: "HOT DEAL",
      title: "Men's Collection",
      discount: "UP TO 50% OFF",
      description:
        "Discover refined everyday styles, modern essentials and timeless pieces.",
      branch: "Available at selected branches",
    },
    {
      number: "02",
      badge: "NEW SEASON",
      title: "Kids Collection",
      discount: "SPECIAL PRICES",
      description:
        "Comfortable, stylish and playful pieces designed for every little moment.",
      branch: "Available across selected stores",
    },
    {
      number: "03",
      badge: "JUST IN",
      title: "Footwear",
      discount: "NEW ARRIVALS",
      description:
        "Complete your everyday look with fresh footwear made for every occasion.",
      branch: "Check your nearest branch",
    },
  ];

  const goToOffers = () => {
    navigate("/offers");
  };

  return (
    <section className="offers-section" id="offers">

      <div className="offers-container">

        {/* HEADER */}

        <div className="offers-header">

          <div className="offers-heading">

            <span className="section-label">
              EXCLUSIVE OFFERS
            </span>

            <h2>
              Discover
              <br />
              <span>What's New.</span>
            </h2>

          </div>

          <div className="offers-header-right">

            <p>
              Explore our latest offers, new arrivals
              and everyday styles for the whole family.
            </p>

            <button
              type="button"
              className="offers-view-all"
              onClick={goToOffers}
            >
              <span>View All Offers</span>
              <ArrowRight size={17} />
            </button>

          </div>

        </div>


        {/* OFFER CARDS */}

        <div className="offers-grid">

          {offers.map((offer) => (

            <article
              className="offer-card"
              key={offer.title}
            >

              {/* TOP */}

              <div className="offer-card-top">

                <span className="offer-number">
                  {offer.number}
                </span>

                <span className="offer-badge">
                  <Tag size={12} />
                  {offer.badge}
                </span>

              </div>


              {/* DISCOUNT */}

              <div className="offer-discount-wrap">

                <span className="offer-discount-label">
                  SPECIAL OFFER
                </span>

                <strong className="offer-discount">
                  {offer.discount}
                </strong>

              </div>


              {/* CONTENT */}

              <div className="offer-card-content">

                <h3>
                  {offer.title}
                </h3>

                <p>
                  {offer.description}
                </p>

                <div className="offer-branch">

                  <MapPin size={14} />

                  <span>
                    {offer.branch}
                  </span>

                </div>

              </div>


              {/* ACTION */}

              <button
                type="button"
                className="offer-explore"
                onClick={goToOffers}
                aria-label={`Explore ${offer.title}`}
              >
                <span>Explore Collection</span>

                <span className="offer-arrow">
                  <ArrowRight size={16} />
                </span>
              </button>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Offers;

