
import { ArrowRight, Heart } from "lucide-react";

function NewArrivals() {
  const products = [
    {
      category: "MEN",
      name: "Everyday Essentials",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      category: "WOMEN",
      name: "New Season Style",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    },
    {
      category: "KIDS",
      name: "Kids Collection",
      image:
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4",
    },
    {
      category: "FOOTWEAR",
      name: "Step Into Style",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ];

  return (
    <section className="arrivals-section">

      <div className="arrivals-container">

        {/* HEADER */}

        <div className="arrivals-header">

          <div>
            <span className="section-label">
              JUST IN
            </span>

            <h2>
              New <span>Arrivals</span>
            </h2>
          </div>

          <button className="arrivals-view-btn">
            View Collection
            <ArrowRight size={18} />
          </button>

        </div>


        {/* PRODUCTS */}

        <div className="arrivals-grid">

          {products.map((product, index) => (

            <div
              className="arrival-card"
              key={index}
            >

              <div className="arrival-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <button
                  className="arrival-heart"
                  aria-label="Add to favourites"
                >
                  <Heart size={18} />
                </button>

                <div className="arrival-category">
                  {product.category}
                </div>

              </div>


              <div className="arrival-info">

                <h3>{product.name}</h3>

                <button>
                  Explore
                  <ArrowRight size={15} />
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default NewArrivals;
