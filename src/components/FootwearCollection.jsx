import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Tag,
} from "lucide-react";

function FootwearCollection() {
  const products = [

    // =====================================
    // MEN'S FOOTWEAR - 10
    // =====================================

    {
      name: "Men's Classic Sneakers",
      category: "MEN",
      type: "SNEAKERS",
      price: "Everyday Style",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Casual Sneakers",
      category: "MEN",
      type: "SNEAKERS",
      price: "New Arrival",
      image:
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Sport Shoes",
      category: "MEN",
      type: "SPORTS",
      price: "Active Lifestyle",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Running Shoes",
      category: "MEN",
      type: "SPORTS",
      price: "Performance Style",
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Formal Shoes",
      category: "MEN",
      type: "FORMAL",
      price: "Smart Collection",
      image:
        "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Leather Loafers",
      category: "MEN",
      type: "LOAFERS",
      price: "Premium Style",
      image:
        "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Casual Loafers",
      category: "MEN",
      type: "LOAFERS",
      price: "Everyday Essential",
      image:
        "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Summer Sandals",
      category: "MEN",
      type: "SANDALS",
      price: "Summer Collection",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Comfort Slippers",
      category: "MEN",
      type: "SLIPPERS",
      price: "Comfort Collection",
      image:
        "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Lifestyle Shoes",
      category: "MEN",
      type: "CASUAL",
      price: "Latest Collection",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // WOMEN'S FOOTWEAR - 10
    // =====================================

    {
      name: "Women's Casual Sneakers",
      category: "WOMEN",
      type: "SNEAKERS",
      price: "Everyday Style",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Lifestyle Sneakers",
      category: "WOMEN",
      type: "SNEAKERS",
      price: "New Arrival",
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Running Shoes",
      category: "WOMEN",
      type: "SPORTS",
      price: "Active Collection",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Elegant Heels",
      category: "WOMEN",
      type: "HEELS",
      price: "Elegant Style",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Classic Pumps",
      category: "WOMEN",
      type: "HEELS",
      price: "Classic Collection",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Flat Shoes",
      category: "WOMEN",
      type: "FLATS",
      price: "Everyday Essential",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Summer Sandals",
      category: "WOMEN",
      type: "SANDALS",
      price: "Summer Collection",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Platform Sandals",
      category: "WOMEN",
      type: "SANDALS",
      price: "Modern Style",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Comfort Slippers",
      category: "WOMEN",
      type: "SLIPPERS",
      price: "Comfort Collection",
      image:
        "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Premium Shoes",
      category: "WOMEN",
      type: "PREMIUM",
      price: "Premium Collection",
      image:
        "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // KIDS FOOTWEAR - 10
    // =====================================

    {
      name: "Kids Casual Sneakers",
      category: "KIDS",
      type: "SNEAKERS",
      price: "Everyday Style",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Sport Sneakers",
      category: "KIDS",
      type: "SPORTS",
      price: "Active Collection",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Running Shoes",
      category: "KIDS",
      type: "SPORTS",
      price: "Active Lifestyle",
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids School Shoes",
      category: "KIDS",
      type: "SCHOOL",
      price: "School Essential",
      image:
        "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Everyday Shoes",
      category: "KIDS",
      type: "CASUAL",
      price: "Everyday Essential",
      image:
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Summer Sandals",
      category: "KIDS",
      type: "SANDALS",
      price: "Summer Collection",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Comfort Sandals",
      category: "KIDS",
      type: "SANDALS",
      price: "Comfort Style",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Casual Slippers",
      category: "KIDS",
      type: "SLIPPERS",
      price: "Everyday Comfort",
      image:
        "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids School Sneakers",
      category: "KIDS",
      type: "SCHOOL",
      price: "Daily Essential",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Lifestyle Shoes",
      category: "KIDS",
      type: "CASUAL",
      price: "Latest Collection",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // SPORTS & ACTIVE - 5
    // =====================================

    {
      name: "Performance Running Shoes",
      category: "SPORTS",
      type: "RUNNING",
      price: "Performance Collection",
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Training Sneakers",
      category: "SPORTS",
      type: "TRAINING",
      price: "Active Lifestyle",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Classic Sports Shoes",
      category: "SPORTS",
      type: "SPORTS",
      price: "Everyday Performance",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Lifestyle Trainers",
      category: "SPORTS",
      type: "TRAINERS",
      price: "Modern Collection",
      image:
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Everyday Active Shoes",
      category: "SPORTS",
      type: "ACTIVE",
      price: "New Arrival",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // SANDALS & SLIPPERS - 5
    // =====================================

    {
      name: "Classic Everyday Sandals",
      category: "SANDALS",
      type: "SANDALS",
      price: "Everyday Essential",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Comfort Walking Sandals",
      category: "SANDALS",
      type: "SANDALS",
      price: "Comfort Collection",
      image:
        "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Summer Casual Slippers",
      category: "SLIPPERS",
      type: "SLIPPERS",
      price: "Summer Essential",
      image:
        "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Premium Comfort Sandals",
      category: "SANDALS",
      type: "SANDALS",
      price: "Premium Style",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Everyday Comfort Slippers",
      category: "SLIPPERS",
      type: "SLIPPERS",
      price: "Everyday Comfort",
      image:
        "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // FORMAL & PREMIUM - 5
    // =====================================

    {
      name: "Classic Formal Shoes",
      category: "FORMAL",
      type: "FORMAL",
      price: "Classic Collection",
      image:
        "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Premium Leather Shoes",
      category: "FORMAL",
      type: "LEATHER",
      price: "Premium Collection",
      image:
        "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Elegant Loafers",
      category: "FORMAL",
      type: "LOAFERS",
      price: "Smart Style",
      image:
        "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Classic Office Shoes",
      category: "FORMAL",
      type: "OFFICE",
      price: "Professional Style",
      image:
        "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Premium Everyday Shoes",
      category: "PREMIUM",
      type: "PREMIUM",
      price: "Premium Everyday",
      image:
        "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // EXTRA COLLECTION - 1
    // =====================================

    {
      name: "Family Lifestyle Sneakers",
      category: "LIFESTYLE",
      type: "LIFESTYLE",
      price: "Family Collection",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="mens-collection-page">

      {/* HERO */}

      <div className="mens-page-hero">

        <div className="mens-page-content">

          <span className="section-label">
            AL FAN EMIRATES
          </span>

          <h1>
            Footwear
            <br />
            <span>Collection.</span>
          </h1>

          <p>
            Step into everyday comfort, modern style
            and footwear for the whole family.
          </p>

          <a
            href="/offers"
            className="mens-back-btn"
          >
            <ArrowLeft size={17} />
            Back to Offers
          </a>

        </div>

        <div className="mens-hero-badge">

          <span>
            FOOTWEAR
          </span>

          <strong>
            STYLE
          </strong>

          <small>
            EVERYDAY
          </small>

        </div>

      </div>


      {/* COLLECTION */}

      <div className="mens-collection-container">

        <div className="mens-collection-header">

          <div>

            <span className="section-label">
              FOOTWEAR COLLECTION
            </span>

            <h2>
              Step Into
              <span> Style</span>
            </h2>

          </div>

          <p>
            Explore sneakers, sports shoes, formal shoes,
            sandals and everyday footwear for everyone.
          </p>

        </div>


        {/* PRODUCTS */}

        <div className="mens-product-grid">

          {products.map((product) => (

            <article
              className="mens-product-card"
              key={product.name}
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
                  <ShoppingBag size={17} />
                </button>

              </div>


              <div className="mens-product-content">

                <span>
                  {product.type}
                </span>

                <h3>
                  {product.name}
                </h3>

                <button
                  type="button"
                  className="mens-explore-btn"
                  aria-label={`Explore ${product.name}`}
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

            <span className="section-label">
              FOOTWEAR SPECIAL
            </span>

            <h2>
              Walk With
              <span> Confidence.</span>
            </h2>

            <p>
              Everyday footwear, family styles and
              selected new arrivals at Al Fan Emirates.
            </p>

          </div>


          <div className="mens-offer-badge">

            <Tag size={18} />

            <span>
              NEW
            </span>

            <strong>
              ARRIVALS
            </strong>

            <small>
              UAE STORES
            </small>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FootwearCollection;

