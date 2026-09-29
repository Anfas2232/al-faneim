import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Tag,
} from "lucide-react";

import { useNavigate } from "react-router-dom";


function OffersCollection() {

  const navigate = useNavigate();


  const offers = [
    {
      category: "MEN",
      title: "Men's Fashion",
      discount: "UP TO 50% OFF",
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=80",
      route: "/mens-collection",
    },

    {
      category: "WOMEN",
      title: "Women's Collection",
      discount: "SPECIAL PRICES",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
      route: "/womens-collection",
    },

    {
      category: "KIDS",
      title: "Kids Collection",
      discount: "NEW OFFERS",
      image:
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=80",
      route: "/kids-collection",
    },

    {
      category: "FOOTWEAR",
      title: "Shoes & Sandals",
      discount: "NEW ARRIVALS",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
      route: "/footwear-collection",
    },
  ];


  const handleExplore = (route) => {
    navigate(route);
  };


  return (
    <section className="offers-collection-page">


      {/* =====================================
          HERO
      ===================================== */}

      <div className="offers-page-hero">

        <div className="offers-page-hero-content">

          <span className="section-label">
            AL FAN EMIRATES
          </span>


          <h1>
            Special
            <br />
            <span>Offers.</span>
          </h1>


          <p>
            Discover our latest collections, special
            prices and everyday value for the whole family.
          </p>


          {/* BACK TO HOME OFFERS */}

          <a
            href="/#offers"
            className="offers-back-btn"
          >
            <ArrowLeft size={17} />

            Back to Offers
          </a>

        </div>


        {/* DISCOUNT CIRCLE */}

        <div className="offers-page-circle">

          <span>
            UP TO
          </span>

          <strong>
            50%
          </strong>

          <small>
            OFF
          </small>

        </div>

      </div>



      {/* =====================================
          COLLECTION SECTION
      ===================================== */}

      <div className="offers-collection-container">


        {/* HEADER */}

        <div className="offers-collection-header">

          <div>

            <span className="section-label">
              LATEST DEALS
            </span>


            <h2>
              Shop Our
              <span> Offers</span>
            </h2>

          </div>


          <p>
            Explore selected collections and discover
            great value across Al Fan Emirates stores.
          </p>

        </div>



        {/* =====================================
            OFFER CARDS
        ===================================== */}

        <div className="offers-collection-grid">


          {offers.map((offer) => (

            <article
              className="offers-collection-card"
              key={offer.title}
            >


              {/* IMAGE */}

              <div className="offers-card-image">

                <img
                  src={offer.image}
                  alt={offer.title}
                />


                {/* CATEGORY BADGE */}

                <span className="offers-image-badge">
                  {offer.category}
                </span>


                {/* DISCOUNT */}

                <div className="offers-discount">

                  <Tag size={14} />

                  {offer.discount}

                </div>

              </div>



              {/* CONTENT */}

              <div className="offers-collection-card-content">


                <h3>
                  {offer.title}
                </h3>


                <p>
                  Discover the latest styles and
                  special offers available at Al Fan Emirates.
                </p>



                {/* CARD BOTTOM */}

                <div className="offers-card-bottom">


                  <span>

                    <MapPin size={14} />

                    UAE Stores

                  </span>



                  <button
                    type="button"
                    onClick={() =>
                      handleExplore(offer.route)
                    }
                    aria-label={`Explore ${offer.title}`}
                  >

                    <ArrowRight size={17} />

                  </button>


                </div>

              </div>


            </article>

          ))}


        </div>

      </div>


    </section>
  );
}


export default OffersCollection;