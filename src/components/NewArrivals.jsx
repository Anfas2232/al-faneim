
import { ArrowRight, Heart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewArrivals() {
  const navigate = useNavigate();
  const [favourites, setFavourites] = useState([]);

  const products = [
    {
      category: "MEN",
      name: "Everyday Essentials",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
      route: "/mens-collection",
    },
    {
      category: "WOMEN",
      name: "New Season Style",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",
      route: "/womens-collection",
    },
    {
      category: "KIDS",
      name: "Kids Collection",
      image:
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85",
      route: "/kids-collection",
    },
    {
      category: "FOOTWEAR",
      name: "Step Into Style",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
      route: "/footwear-collection",
    },
  ];

  const handleFavourite = (index) => {
    setFavourites((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  const handleExplore = (route) => {
    navigate(route);
  };

  return (
    <section className="arrivals-section" id="new-arrivals">
      <div className="arrivals-container">

        {/* HEADER */}

        <div className="arrivals-header">

          <div className="arrivals-heading">

            <span className="section-label">
              JUST IN
            </span>

            <h2>
              New <span>Arrivals.</span>
            </h2>

          </div>

          <button
            type="button"
            className="arrivals-view-btn"
            onClick={() => navigate("/mens-collection")}
          >
            <span>View Collection</span>
            <ArrowRight size={18} />
          </button>

        </div>


        {/* PRODUCTS */}

        <div className="arrivals-grid">

          {products.map((product, index) => (

            <article
              className="arrival-card"
              key={product.category}
            >

              {/* IMAGE */}

              <div className="arrival-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                {/* NUMBER */}

                <span className="arrival-number">
                  0{index + 1}
                </span>


                {/* FAVOURITE */}

                <button
                  type="button"
                  className={`arrival-heart ${
                    favourites.includes(index)
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleFavourite(index)
                  }
                  aria-label={
                    favourites.includes(index)
                      ? `Remove ${product.name} from favourites`
                      : `Add ${product.name} to favourites`
                  }
                >
                  <Heart
                    size={18}
                    fill={
                      favourites.includes(index)
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>


                {/* CATEGORY */}

                <div className="arrival-category">
                  {product.category}
                </div>

              </div>


              {/* INFO */}

              <div className="arrival-info">

                <div>

                  <span className="arrival-small-label">
                    NEW COLLECTION
                  </span>

                  <h3>
                    {product.name}
                  </h3>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleExplore(product.route)
                  }
                  aria-label={`Explore ${product.name}`}
                >
                  <span>Explore</span>
                  <ArrowRight size={15} />
                </button>

              </div>

            </article>

          ))}

        </div>


        {/* FOOTER */}

        <div className="arrivals-footer">

          <span>
            FASHION&nbsp;&nbsp;•&nbsp;&nbsp;FAMILY&nbsp;&nbsp;•&nbsp;&nbsp;VALUE
          </span>

          <button
            type="button"
            onClick={() => navigate("/mens-collection")}
          >
            Explore All Collections
            <ArrowRight size={16} />
          </button>

        </div>

      </div>
    </section>
  );
}

export default NewArrivals;

