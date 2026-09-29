import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Tag,
} from "lucide-react";

function MensCollection() {
  const products = [
    // ==============================
    // CASUAL WEAR - 10
    // ==============================

    {
      name: "Classic Casual Shirt",
      category: "CASUAL",
      price: "Everyday Style",
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Casual Outfit",
      category: "CASUAL",
      price: "Modern Collection",
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Summer Casual Wear",
      category: "CASUAL",
      price: "Summer Style",
      image:
        "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Everyday Casual Look",
      category: "CASUAL",
      price: "Daily Essentials",
      image:
        "https://images.unsplash.com/photo-1529378438673-4b8d0b2e8b4e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Casual Polo Style",
      category: "CASUAL",
      price: "Smart Casual",
      image:
        "https://images.unsplash.com/photo-1625910513413-5fc45b8c2b0e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Weekend Casual Wear",
      category: "CASUAL",
      price: "Weekend Collection",
      image:
        "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Relaxed Fit Shirt",
      category: "CASUAL",
      price: "Comfort Style",
      image:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Casual Street Look",
      category: "CASUAL",
      price: "Street Collection",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Modern Casual Outfit",
      category: "CASUAL",
      price: "New Style",
      image:
        "https://images.unsplash.com/photo-1506629905607-d9b1e4d0c2c8?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Premium Casual Look",
      category: "CASUAL",
      price: "Premium Collection",
      image:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=80",
    },

    // ==============================
    // FORMAL WEAR - 8
    // ==============================

    {
      name: "Classic Formal Suit",
      category: "FORMAL",
      price: "Smart Collection",
      image:
        "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Business Formal Look",
      category: "FORMAL",
      price: "Office Style",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Premium Blazer",
      category: "FORMAL",
      price: "Premium Style",
      image:
        "https://images.unsplash.com/photo-1555069519-127aadedf1ee?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Modern Classic Suit",
      category: "FORMAL",
      price: "Classic Collection",
      image:
        "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Business Blazer",
      category: "FORMAL",
      price: "Business Collection",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Formal Office Shirt",
      category: "FORMAL",
      price: "Office Essentials",
      image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Executive Suit",
      category: "FORMAL",
      price: "Executive Style",
      image:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Classic Business Wear",
      category: "FORMAL",
      price: "Smart Essentials",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80",
    },

    // ==============================
    // SHIRTS - 8
    // ==============================

    {
      name: "Classic Cotton Shirt",
      category: "SHIRTS",
      price: "Latest Styles",
      image:
        "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "White Essential Shirt",
      category: "SHIRTS",
      price: "Essential Wear",
      image:
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Linen Summer Shirt",
      category: "SHIRTS",
      price: "Summer Collection",
      image:
        "https://images.unsplash.com/photo-1604695573706-53170668f6a6?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Printed Casual Shirt",
      category: "SHIRTS",
      price: "New Arrival",
      image:
        "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Oxford Shirt",
      category: "SHIRTS",
      price: "Smart Essential",
      image:
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Checked Casual Shirt",
      category: "SHIRTS",
      price: "Everyday Collection",
      image:
        "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Denim Shirt",
      category: "SHIRTS",
      price: "Denim Collection",
      image:
        "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Premium Dress Shirt",
      category: "SHIRTS",
      price: "Premium Wear",
      image:
        "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=900&q=80",
    },

    // ==============================
    // T-SHIRTS - 7
    // ==============================

    {
      name: "Classic Men's T-Shirt",
      category: "T-SHIRTS",
      price: "Everyday Essential",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Polo T-Shirt",
      category: "T-SHIRTS",
      price: "Smart Casual",
      image:
        "https://images.unsplash.com/photo-1625910513413-5fc45b8c2b0e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Graphic T-Shirt",
      category: "T-SHIRTS",
      price: "Modern Style",
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Basic Cotton T-Shirt",
      category: "T-SHIRTS",
      price: "Daily Wear",
      image:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Premium Polo",
      category: "T-SHIRTS",
      price: "Premium Collection",
      image:
        "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Oversized T-Shirt",
      category: "T-SHIRTS",
      price: "Street Style",
      image:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Sport T-Shirt",
      category: "T-SHIRTS",
      price: "Active Lifestyle",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=80",
    },

    // ==============================
    // JEANS & TROUSERS - 7
    // ==============================

    {
      name: "Classic Blue Jeans",
      category: "JEANS",
      price: "Everyday Denim",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Slim Fit Jeans",
      category: "JEANS",
      price: "Modern Fit",
      image:
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Straight Fit Jeans",
      category: "JEANS",
      price: "Classic Denim",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Dark Wash Jeans",
      category: "JEANS",
      price: "Premium Denim",
      image:
        "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Classic Cotton Trousers",
      category: "TROUSERS",
      price: "Smart Essentials",
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Slim Formal Trousers",
      category: "TROUSERS",
      price: "Formal Style",
      image:
        "https://images.unsplash.com/photo-1506629905607-d9b1e4d0c2c8?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Casual Chinos",
      category: "TROUSERS",
      price: "Casual Collection",
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=900&q=80",
    },

    // ==============================
    // FOOTWEAR - 5
    // ==============================

    {
      name: "Classic Casual Sneakers",
      category: "FOOTWEAR",
      price: "New Arrivals",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Everyday Men's Shoes",
      category: "FOOTWEAR",
      price: "Comfort Collection",
      image:
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Classic Formal Shoes",
      category: "FOOTWEAR",
      price: "Formal Collection",
      image:
        "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Running Shoes",
      category: "FOOTWEAR",
      price: "Active Lifestyle",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Lifestyle Sneakers",
      category: "FOOTWEAR",
      price: "Latest Collection",
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
    },

    // ==============================
    // ACCESSORIES - 5
    // ==============================

    {
      name: "Classic Men's Watch",
      category: "ACCESSORIES",
      price: "Everyday Accessory",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Leather Belt",
      category: "ACCESSORIES",
      price: "Essential Accessory",
      image:
        "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Sunglasses",
      category: "ACCESSORIES",
      price: "Summer Essential",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Classic Wallet",
      category: "ACCESSORIES",
      price: "Everyday Essential",
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Men's Backpack",
      category: "ACCESSORIES",
      price: "Daily Collection",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
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
            Men's
            <br />
            <span>Collection.</span>
          </h1>

          <p>
            Discover everyday fashion, smart styles and
            comfortable essentials designed for modern men.
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
            MEN'S
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
              MEN'S COLLECTION
            </span>

            <h2>
              Explore
              <span> Men's Style</span>
            </h2>

          </div>

          <p>
            From casual everyday looks to smart essentials,
            explore our men's fashion collection.
          </p>

        </div>


        {/* 50 PRODUCTS */}

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
                  {product.price}
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


        {/* BOTTOM OFFER */}

        <div className="mens-bottom-banner">

          <div>

            <span className="section-label">
              SPECIAL OFFERS
            </span>

            <h2>
              Everyday Style.
              <span> Better Value.</span>
            </h2>

            <p>
              Discover selected men's styles and
              special offers at Al Fan Emirates.
            </p>

          </div>


          <div className="mens-offer-badge">

            <Tag size={18} />

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

      </div>

    </section>
  );
}

export default MensCollection;