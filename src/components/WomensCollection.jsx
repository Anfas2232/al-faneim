    import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Tag,
} from "lucide-react";

function WomensCollection() {
  const products = [
    // ==============================
    // CASUAL WEAR - 10
    // ==============================

    {
      name: "Women's Casual Dress",
      category: "CASUAL",
      price: "Everyday Style",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Summer Outfit",
      category: "CASUAL",
      price: "Summer Collection",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Everyday Look",
      category: "CASUAL",
      price: "Daily Essentials",
      image:
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Casual Outfit",
      category: "CASUAL",
      price: "Modern Collection",
      image:
        "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Relaxed Women's Style",
      category: "CASUAL",
      price: "Comfort Style",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Weekend Look",
      category: "CASUAL",
      price: "Weekend Collection",
      image:
        "https://images.unsplash.com/photo-1506629905607-d9b1e4d0c2c8?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Modern Outfit",
      category: "CASUAL",
      price: "New Style",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Street Style",
      category: "CASUAL",
      price: "Street Collection",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Casual Top",
      category: "CASUAL",
      price: "Everyday Collection",
      image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Premium Casual Look",
      category: "CASUAL",
      price: "Premium Collection",
      image:
        "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?auto=format&fit=crop&w=900&q=80",
    },

    // ==============================
    // DRESSES - 8
    // ==============================

    {
      name: "Elegant Midi Dress",
      category: "DRESSES",
      price: "Elegant Collection",
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Floral Summer Dress",
      category: "DRESSES",
      price: "Summer Style",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Classic Black Dress",
      category: "DRESSES",
      price: "Classic Style",
      image:
        "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Modern Evening Dress",
      category: "DRESSES",
      price: "Evening Collection",
      image:
        "https://images.unsplash.com/photo-1566479179817-c0c1c4e3e6a0?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Party Dress",
      category: "DRESSES",
      price: "Party Collection",
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Elegant Maxi Dress",
      category: "DRESSES",
      price: "Premium Style",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Printed Midi Dress",
      category: "DRESSES",
      price: "New Arrival",
      image:
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Occasion Dress",
      category: "DRESSES",
      price: "Special Collection",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
    },

    // ==============================
    // TOPS & BLOUSES - 8
    // ==============================

    {
      name: "Classic Women's Top",
      category: "TOPS",
      price: "Everyday Essential",
      image:
        "https://images.unsplash.com/photo-1564257577054-8e3f9c4f3c0b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Elegant Blouse",
      category: "BLOUSES",
      price: "Smart Collection",
      image:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Cotton Top",
      category: "TOPS",
      price: "Comfort Collection",
      image:
        "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Printed Blouse",
      category: "BLOUSES",
      price: "New Style",
      image:
        "https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Premium Women's Top",
      category: "TOPS",
      price: "Premium Collection",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Linen Top",
      category: "TOPS",
      price: "Summer Essential",
      image:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Office Blouse",
      category: "BLOUSES",
      price: "Office Style",
      image:
        "https://images.unsplash.com/photo-1564257577054-8e3f9c4f3c0b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Casual Blouse",
      category: "BLOUSES",
      price: "Casual Collection",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80",
    },

    // ==============================
    // JEANS & TROUSERS - 7
    // ==============================

    {
      name: "Women's Blue Jeans",
      category: "JEANS",
      price: "Everyday Denim",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Slim Jeans",
      category: "JEANS",
      price: "Modern Fit",
      image:
        "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Straight Jeans",
      category: "JEANS",
      price: "Classic Denim",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Wide Leg Jeans",
      category: "JEANS",
      price: "Modern Collection",
      image:
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Casual Trousers",
      category: "TROUSERS",
      price: "Everyday Style",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Smart Trousers",
      category: "TROUSERS",
      price: "Smart Collection",
      image:
        "https://images.unsplash.com/photo-1506629905607-d9b1e4d0c2c8?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Wide Leg Pants",
      category: "TROUSERS",
      price: "New Arrival",
      image:
        "https://images.unsplash.com/photo-1506629905607-d9b1e4d0c2c8?auto=format&fit=crop&w=900&q=80",
    },

    // ==============================
    // FOOTWEAR - 5
    // ==============================

    {
      name: "Women's Casual Sneakers",
      category: "FOOTWEAR",
      price: "New Arrivals",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Everyday Shoes",
      category: "FOOTWEAR",
      price: "Comfort Collection",
      image:
        "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Sandals",
      category: "FOOTWEAR",
      price: "Summer Collection",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Heels",
      category: "FOOTWEAR",
      price: "Elegant Style",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Lifestyle Sneakers",
      category: "FOOTWEAR",
      price: "Latest Collection",
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
    },

    // ==============================
    // ACCESSORIES - 5
    // ==============================

    {
      name: "Women's Handbag",
      category: "ACCESSORIES",
      price: "Everyday Accessory",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Shoulder Bag",
      category: "ACCESSORIES",
      price: "Modern Collection",
      image:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Sunglasses",
      category: "ACCESSORIES",
      price: "Summer Essential",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Watch",
      category: "ACCESSORIES",
      price: "Elegant Accessory",
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Women's Fashion Bag",
      category: "ACCESSORIES",
      price: "Latest Collection",
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80",
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
            Women's
            <br />
            <span>Collection.</span>
          </h1>

          <p>
            Discover elegant fashion, everyday styles and
            beautiful essentials designed for modern women.
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
            WOMEN'S
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
              WOMEN'S COLLECTION
            </span>

            <h2>
              Explore
              <span> Women's Style</span>
            </h2>

          </div>

          <p>
            From everyday fashion to elegant occasion wear,
            explore our women's collection.
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
              Discover selected women's styles and
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

export default WomensCollection;