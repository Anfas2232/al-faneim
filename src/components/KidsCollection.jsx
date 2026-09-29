
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBag,
  Tag,
} from "lucide-react";

function KidsCollection() {
  const products = [

    // =====================================
    // BOYS FASHION - 5
    // =====================================

    {
      name: "Boys Printed T-Shirt",
      category: "BOYS",
      type: "T-SHIRTS",
      price: "Everyday Style",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Boys Casual Shirt",
      category: "BOYS",
      type: "SHIRTS",
      price: "Smart Casual",
      image:
        "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Boys Denim Jeans",
      category: "BOYS",
      type: "JEANS",
      price: "Everyday Denim",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Boys Casual Shorts",
      category: "BOYS",
      type: "SHORTS",
      price: "Summer Collection",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Boys Premium Outfit",
      category: "BOYS",
      type: "OUTFITS",
      price: "Premium Collection",
      image:
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // GIRLS FASHION - 5
    // =====================================

    {
      name: "Girls Floral Dress",
      category: "GIRLS",
      type: "DRESSES",
      price: "Summer Collection",
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Girls Casual Top",
      category: "GIRLS",
      type: "TOPS",
      price: "Everyday Style",
      image:
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Girls Denim Jeans",
      category: "GIRLS",
      type: "JEANS",
      price: "Modern Denim",
      image:
        "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Girls Skirt",
      category: "GIRLS",
      type: "SKIRTS",
      price: "New Style",
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Girls Party Outfit",
      category: "GIRLS",
      type: "PARTY WEAR",
      price: "Special Collection",
      image:
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // BABY BOYS - 5
    // =====================================

    {
      name: "Baby Boy Cotton Set",
      category: "BABY BOYS",
      type: "BABY WEAR",
      price: "Soft Cotton",
      image:
        "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Baby Boy Romper",
      category: "BABY BOYS",
      type: "ROMPERS",
      price: "Comfort Wear",
      image:
        "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Baby Boy T-Shirt",
      category: "BABY BOYS",
      type: "T-SHIRTS",
      price: "Everyday Essential",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Baby Boy Casual Set",
      category: "BABY BOYS",
      type: "SETS",
      price: "Daily Collection",
      image:
        "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Baby Boy Party Set",
      category: "BABY BOYS",
      type: "PARTY WEAR",
      price: "Special Occasion",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // BABY GIRLS - 5
    // =====================================

    {
      name: "Baby Girl Floral Dress",
      category: "BABY GIRLS",
      type: "DRESSES",
      price: "Cute Collection",
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Baby Girl Romper",
      category: "BABY GIRLS",
      type: "ROMPERS",
      price: "Comfort Wear",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Baby Girl Cotton Set",
      category: "BABY GIRLS",
      type: "SETS",
      price: "Soft Cotton",
      image:
        "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Baby Girl Party Dress",
      category: "BABY GIRLS",
      type: "PARTY WEAR",
      price: "Special Collection",
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Baby Girl Summer Outfit",
      category: "BABY GIRLS",
      type: "SUMMER WEAR",
      price: "Summer Style",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // SCHOOL WEAR - 5
    // =====================================

    {
      name: "Kids School Shirt",
      category: "SCHOOL",
      type: "SCHOOL WEAR",
      price: "School Essential",
      image:
        "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids School Trousers",
      category: "SCHOOL",
      type: "SCHOOL WEAR",
      price: "Daily Uniform",
      image:
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids School Skirt",
      category: "SCHOOL",
      type: "SCHOOL WEAR",
      price: "School Essential",
      image:
        "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids School Shoes",
      category: "SCHOOL",
      type: "FOOTWEAR",
      price: "School Essential",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids School Backpack",
      category: "SCHOOL",
      type: "BAGS",
      price: "School Essential",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // SPORTSWEAR - 5
    // =====================================

    {
      name: "Kids Sports T-Shirt",
      category: "SPORTSWEAR",
      type: "SPORTS",
      price: "Active Collection",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Sports Shorts",
      category: "SPORTSWEAR",
      type: "SPORTS",
      price: "Active Style",
      image:
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Tracksuit",
      category: "SPORTSWEAR",
      type: "TRACKSUITS",
      price: "Active Collection",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Sports Shoes",
      category: "SPORTSWEAR",
      type: "FOOTWEAR",
      price: "Sports Essential",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Training Set",
      category: "SPORTSWEAR",
      type: "SETS",
      price: "Active Lifestyle",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // NIGHTWEAR - 4
    // =====================================

    {
      name: "Kids Cotton Pajama Set",
      category: "NIGHTWEAR",
      type: "PAJAMAS",
      price: "Soft Cotton",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Sleepwear Set",
      category: "NIGHTWEAR",
      type: "SLEEPWEAR",
      price: "Comfort Collection",
      image:
        "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Night T-Shirt",
      category: "NIGHTWEAR",
      type: "SLEEPWEAR",
      price: "Everyday Comfort",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Comfortable Pajamas",
      category: "NIGHTWEAR",
      type: "PAJAMAS",
      price: "Comfort Style",
      image:
        "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // FOOTWEAR - 4
    // =====================================

    {
      name: "Kids Casual Sneakers",
      category: "FOOTWEAR",
      type: "SNEAKERS",
      price: "New Arrivals",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Everyday Shoes",
      category: "FOOTWEAR",
      type: "SHOES",
      price: "Everyday Essential",
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Summer Sandals",
      category: "FOOTWEAR",
      type: "SANDALS",
      price: "Summer Collection",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Sport Sneakers",
      category: "FOOTWEAR",
      type: "SPORTS SHOES",
      price: "Active Lifestyle",
      image:
        "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // BAGS & ACCESSORIES - 4
    // =====================================

    {
      name: "Kids School Backpack",
      category: "ACCESSORIES",
      type: "BAGS",
      price: "School Essential",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Casual Backpack",
      category: "ACCESSORIES",
      type: "BAGS",
      price: "Everyday Essential",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Baseball Cap",
      category: "ACCESSORIES",
      type: "CAPS",
      price: "Everyday Accessory",
      image:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Fashion Accessories",
      category: "ACCESSORIES",
      type: "ACCESSORIES",
      price: "Kids Essentials",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    },

    // =====================================
    // TOYS & ESSENTIALS - 4
    // =====================================

    {
      name: "Kids Soft Toy",
      category: "TOYS",
      type: "SOFT TOYS",
      price: "Fun For Kids",
      image:
        "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Educational Toy",
      category: "TOYS",
      type: "EDUCATIONAL",
      price: "Learning & Fun",
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Building Blocks",
      category: "TOYS",
      type: "BUILDING TOYS",
      price: "Creative Play",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Kids Outdoor Toy",
      category: "TOYS",
      type: "OUTDOOR PLAY",
      price: "Fun Collection",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=900&q=80",
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
            Kids
            <br />
            <span>Collection.</span>
          </h1>

          <p>
            Discover fashion, school essentials,
            sportswear, footwear and fun collections
            for kids of every age.
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
            KIDS
          </span>

          <strong>
            COLLECTION
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
              KIDS COLLECTION
            </span>

            <h2>
              Explore
              <span> Kids Style</span>
            </h2>

          </div>

          <p>
            From everyday fashion to school wear,
            sportswear, footwear, accessories and toys.
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


        {/* BOTTOM OFFER */}

        <div className="mens-bottom-banner">

          <div>

            <span className="section-label">
              SPECIAL OFFERS
            </span>

            <h2>
              Little Styles.
              <span> Big Smiles.</span>
            </h2>

            <p>
              Discover everyday value across our
              kids fashion, school and lifestyle collections.
            </p>

          </div>


          <div className="mens-offer-badge">

            <Tag size={18} />

            <span>
              KIDS
            </span>

            <strong>
              COLLECTION
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

export default KidsCollection;

