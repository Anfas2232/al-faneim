import { ArrowLeft, ArrowRight, Dumbbell } from "lucide-react";

function SportswearCollection() {
  const products = [
    // Men's Sportswear
    {
      name: "Performance Training T-Shirt",
      category: "Men's Sportswear",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Classic Running T-Shirt",
      category: "Men's Sportswear",
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Active Training Shorts",
      category: "Men's Sportswear",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Performance Joggers",
      category: "Men's Sportswear",
      image:
        "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Sports Hoodie",
      category: "Men's Sportswear",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Athletic Track Jacket",
      category: "Men's Sportswear",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Training Tracksuit",
      category: "Men's Sportswear",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Lightweight Sports Top",
      category: "Men's Sportswear",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85",
    },

    // Women's Sportswear
    {
      name: "Women's Active T-Shirt",
      category: "Women's Sportswear",
      image:
        "https://images.unsplash.com/photo-1506629905607-d9c297d5b3a1?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Women's Training Leggings",
      category: "Women's Sportswear",
      image:
        "https://images.unsplash.com/photo-1506629905607-d9c297d5b3a1?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Women's Running Top",
      category: "Women's Sportswear",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Women's Sports Bra",
      category: "Women's Sportswear",
      image:
        "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Women's Training Shorts",
      category: "Women's Sportswear",
      image:
        "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Women's Active Hoodie",
      category: "Women's Sportswear",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Women's Training Set",
      category: "Women's Sportswear",
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Women's Fitness Jacket",
      category: "Women's Sportswear",
      image:
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85",
    },

    // Kids Sportswear
    {
      name: "Kids Football Jersey",
      category: "Kids Sportswear",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Training T-Shirt",
      category: "Kids Sportswear",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Sports Shorts",
      category: "Kids Sportswear",
      image:
        "https://images.unsplash.com/photo-1506629905607-d9c297d5b3a1?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Tracksuit",
      category: "Kids Sportswear",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Active Hoodie",
      category: "Kids Sportswear",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Running Set",
      category: "Kids Sportswear",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Basketball Jersey",
      category: "Kids Sportswear",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=85",
    },

    // Running
    {
      name: "Lightweight Running Tee",
      category: "Running",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Performance Running Shorts",
      category: "Running",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Running Windbreaker",
      category: "Running",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Reflective Running Jacket",
      category: "Running",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Performance Running Set",
      category: "Running",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85",
    },

    // Gym & Training
    {
      name: "Gym Training Top",
      category: "Gym & Training",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Training Joggers",
      category: "Gym & Training",
      image:
        "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Workout Tank Top",
      category: "Gym & Training",
      image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Gym Shorts",
      category: "Gym & Training",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Training Sweatshirt",
      category: "Gym & Training",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Fitness Tracksuit",
      category: "Gym & Training",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
    },

    // Football
    {
      name: "Classic Football Jersey",
      category: "Football",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Football Training Shorts",
      category: "Football",
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Football Training Set",
      category: "Football",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Football Goalkeeper Jersey",
      category: "Football",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Football Track Jacket",
      category: "Football",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
    },

    // Activewear
    {
      name: "Everyday Active T-Shirt",
      category: "Activewear",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Comfort Active Joggers",
      category: "Activewear",
      image:
        "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Active Lifestyle Hoodie",
      category: "Activewear",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Performance Active Set",
      category: "Activewear",
      image:
        "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Lightweight Active Jacket",
      category: "Activewear",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85",
    },

    // Sports Accessories
    {
      name: "Training Sports Bag",
      category: "Sports Accessories",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Performance Sports Cap",
      category: "Sports Accessories",
      image:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Sports Water Bottle",
      category: "Sports Accessories",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Training Gym Bag",
      category: "Sports Accessories",
      image:
        "https://images.unsplash.com/photo-1580086319619-3ed498161c77?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Everyday Sports Backpack",
      category: "Sports Accessories",
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=85",
    },

    // Extra Collection
    {
      name: "Premium Performance Set",
      category: "Collection",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Classic Active Hoodie",
      category: "Collection",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Modern Training Outfit",
      category: "Collection",
      image:
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Everyday Sportswear",
      category: "Collection",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Ultimate Active Set",
      category: "Collection",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <section className="mens-collection-page">
      {/* HERO */}
      <div className="mens-page-hero">
        <div className="mens-page-content">
          <a href="/" className="mens-back-btn">
            <ArrowLeft size={17} />
            Back to Home
          </a>

          <span className="mens-hero-badge">
            AL FAN EMIRATES • SPORTSWEAR
          </span>

          <h1>
            Sportswear <span>Collection.</span>
          </h1>

          <p>
            Discover comfortable sportswear for training,
            running, football and an active everyday lifestyle.
          </p>
        </div>
      </div>

      {/* COLLECTION */}
      <div className="mens-collection-container">
        <div className="mens-collection-header">
          <div>
            <span className="section-label">
              AL FAN EMIRATES
            </span>

            <h2>
              Move With
              <span> Style.</span>
            </h2>
          </div>

          <p>
            Explore active styles designed for comfort,
            movement and everyday performance.
          </p>
        </div>

        <div className="mens-product-grid">
          {products.map((product, index) => (
            <article
              className="mens-product-card"
              key={`${product.name}-${index}`}
            >
              <div className="mens-product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="mens-product-category">
                  {product.category}
                </span>

                <button
                  type="button"
                  className="mens-shop-btn"
                  aria-label={`Shop ${product.name}`}
                >
                  <Dumbbell size={18} />
                </button>
              </div>

              <div className="mens-product-content">
                <h3>{product.name}</h3>

                <button
                  type="button"
                  className="mens-explore-btn"
                >
                  Explore
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM BANNER */}
        <div className="mens-bottom-banner">
          <div>
            <span className="mens-offer-badge">
              AL FAN EMIRATES
            </span>

            <h2>
              Stay Active.
              <br />
              <span>Stay Stylish.</span>
            </h2>

            <p>
              Everyday sportswear made for movement,
              comfort and confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SportswearCollection;

