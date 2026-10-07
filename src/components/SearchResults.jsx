import { useSearchParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Search,
  ShoppingBag,
  Dumbbell,
  Gamepad2,
  Footprints,
  Sparkles,
} from "lucide-react";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query =
    searchParams.get("q")?.trim() || "";

  const searchTerm = query.toLowerCase();

  const collections = [
    {
      title: "Men's Collection",
      description:
        "Discover men's fashion, shirts, T-shirts, jeans, trousers and everyday essentials.",
      icon: ShoppingBag,
      path: "/mens-collection",
      keywords: [
        "men",
        "mens",
        "man",
        "shirt",
        "tshirt",
        "jeans",
        "trousers",
        "formal",
      ],
    },

    {
      title: "Women's Collection",
      description:
        "Explore women's fashion, dresses, tops, jeans, footwear and accessories.",
      icon: Sparkles,
      path: "/womens-collection",
      keywords: [
        "women",
        "womens",
        "woman",
        "dress",
        "tops",
        "blouse",
        "ladies",
      ],
    },

    {
      title: "Kids Collection",
      description:
        "Shop boys, girls, baby fashion, school wear, toys and kids essentials.",
      icon: Gamepad2,
      path: "/kids-collection",
      keywords: [
        "kids",
        "kid",
        "boys",
        "girls",
        "baby",
        "children",
        "school",
        "toys",
      ],
    },

    {
      title: "Footwear Collection",
      description:
        "Find men's, women's and kids footwear, sandals, slippers and sports shoes.",
      icon: Footprints,
      path: "/footwear-collection",
      keywords: [
        "footwear",
        "shoes",
        "shoe",
        "sandals",
        "slippers",
        "sneakers",
      ],
    },

    {
      title: "Bags Collection",
      description:
        "Explore backpacks, handbags, office bags, travel bags and accessories.",
      icon: ShoppingBag,
      path: "/bags-collection",
      keywords: [
        "bags",
        "bag",
        "backpack",
        "handbag",
        "luggage",
        "wallet",
        "travel",
      ],
    },

    {
      title: "Sportswear Collection",
      description:
        "Discover sportswear for men, women and kids including running and gym wear.",
      icon: Dumbbell,
      path: "/sportswear-collection",
      keywords: [
        "sportswear",
        "sports",
        "gym",
        "running",
        "football",
        "activewear",
        "training",
      ],
    },

    {
      title: "Toys Collection",
      description:
        "Find educational toys, games, puzzles, vehicles, dolls and building toys.",
      icon: Gamepad2,
      path: "/toys-collection",
      keywords: [
        "toys",
        "toy",
        "games",
        "puzzles",
        "dolls",
        "vehicles",
        "blocks",
        "educational",
      ],
    },

    {
      title: "Special Offers",
      description:
        "Check the latest Al Fan Emirates offers, special prices and new arrivals.",
      icon: Sparkles,
      path: "/offers",
      keywords: [
        "offers",
        "offer",
        "sale",
        "discount",
        "special",
        "deals",
        "new arrivals",
      ],
    },
  ];

  const results = query
    ? collections.filter((collection) =>
        collection.keywords.some((keyword) =>
          keyword.includes(searchTerm) ||
          searchTerm.includes(keyword)
        )
      )
    : [];

  return (
    <section className="search-results-page">

      {/* =========================
          HERO
      ========================= */}

      <div className="search-results-hero">

        <div className="search-results-hero-content">

          <button
            type="button"
            className="search-back-btn"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={17} />
            Back to Home
          </button>

          <span className="search-results-label">
            AL FAN EMIRATES
          </span>

          <h1>
            Search
            <br />
            <span>Results.</span>
          </h1>

          <p>
            Find your favourite collections
            and explore Al Fan Emirates.
          </p>

        </div>

      </div>


      {/* =========================
          RESULTS
      ========================= */}

      <div className="search-results-container">

        <div className="search-results-header">

          <div>

            <span>
              SEARCH RESULTS
            </span>

            <h2>
              {query
                ? `Results for "${query}"`
                : "What are you looking for?"}
            </h2>

          </div>

          <div className="search-results-count">
            {results.length}{" "}
            {results.length === 1
              ? "Result"
              : "Results"}
          </div>

        </div>


        {/* =========================
            RESULTS GRID
        ========================= */}

        {results.length > 0 ? (

          <div className="search-results-grid">

            {results.map((collection) => {

              const Icon =
                collection.icon;

              return (
                <article
                  className="search-result-card"
                  key={collection.title}
                >

                  <div className="search-result-icon">
                    <Icon size={28} />
                  </div>

                  <div className="search-result-content">

                    <span>
                      COLLECTION
                    </span>

                    <h3>
                      {collection.title}
                    </h3>

                    <p>
                      {collection.description}
                    </p>

                    <button
                      type="button"
                      className="search-explore-btn"
                      onClick={() =>
                        navigate(
                          collection.path
                        )
                      }
                    >
                      Explore Collection
                      <ArrowRight size={17} />
                    </button>

                  </div>

                </article>
              );
            })}

          </div>

        ) : (

          /* =========================
             NO RESULTS
          ========================= */

          <div className="search-no-results">

            <div className="search-no-results-icon">
              <Search size={32} />
            </div>

            <h3>
              No results found
            </h3>

            <p>
              We couldn't find a collection
              matching{" "}
              <strong>
                "{query}"
              </strong>
              .
            </p>

            <button
              type="button"
              onClick={() => navigate("/")}
            >
              Explore All Collections
              <ArrowRight size={17} />
            </button>

          </div>

        )}

      </div>

    </section>
  );
}

export default SearchResults;

