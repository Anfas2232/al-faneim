
// import { ArrowRight } from "lucide-react";

// function FeaturedCollection() {
//   return (
//     <section className="featured-section">

//       <div className="featured-container">

//         <div className="featured-image">
//           <div className="featured-image-content">
//             <span>AL FAN EMIRATES</span>




//             <h3>
//               Everyday
//               <br />
//               <strong>Style.</strong>
//             </h3>
//           </div>
//         </div>

//         <div className="featured-content">

//           <span className="section-label">
//             FEATURED COLLECTION
//           </span>

//           <h2>
//             Made for
//             <br />
//             <span>Everyday.</span>
//           </h2>

//           <p>
//             Discover clothing, footwear and everyday essentials
//             designed for the whole family. Explore styles that
//             combine comfort, quality and value.
//           </p>

//           <div className="featured-points">
//             <span>01 — Men</span>
//             <span>02 — Women</span>
//             <span>03 — Kids</span>
//             <span>04 — Footwear</span>
//           </div>

//           <button className="featured-btn">
//             Explore Collection
//             <ArrowRight size={18} />
//           </button>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default FeaturedCollection;



import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FeaturedCollection() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/mens-collection");
  };

  return (
    <section className="featured-section">

      <div className="featured-container">

        {/* IMAGE */}

        <div className="featured-image">

          <div className="featured-image-content">

            <span>
              AL FAN EMIRATES
            </span>

            <h3>
              Everyday
              <br />
              <strong>Style.</strong>
            </h3>

          </div>

        </div>


        {/* CONTENT */}

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


          {/* COLLECTION POINTS */}

          <div className="featured-points">

            <span>
              <b>01</b> — Men
            </span>

            <span>
              <b>02</b> — Women
            </span>

            <span>
              <b>03</b> — Kids
            </span>

            <span>
              <b>04</b> — Footwear
            </span>

          </div>


          {/* BUTTON */}

          <button
            type="button"
            className="featured-btn"
            onClick={handleExplore}
          >
            <span>
              Explore Collection
            </span>

            <ArrowRight size={18} />
          </button>

        </div>

      </div>

    </section>
  );
}

export default FeaturedCollection;

