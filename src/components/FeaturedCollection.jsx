
import { ArrowRight } from "lucide-react";

function FeaturedCollection() {
  return (
    <section className="featured-section">

      <div className="featured-container">

        <div className="featured-image">
          <div className="featured-image-content">
            <span>AL FAN EMIRATES</span>

            <h3>
              Everyday
              <br />
              <strong>Style.</strong>
            </h3>
          </div>
        </div>

        <div className="featured-content">

          <span className="section-label">
            FEATURED COLLECTION
          </span>

          <h2>
            Made for
            <br />
            <span>Everyday.</span>
          </h2>

          <p>
            Discover clothing, footwear and everyday essentials
            designed for the whole family. Explore styles that
            combine comfort, quality and value.
          </p>

          <div className="featured-points">
            <span>01 — Men</span>
            <span>02 — Women</span>
            <span>03 — Kids</span>
            <span>04 — Footwear</span>
          </div>

          <button className="featured-btn">
            Explore Collection
            <ArrowRight size={18} />
          </button>

        </div>

      </div>

    </section>
  );
}

export default FeaturedCollection;

