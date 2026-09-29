
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";

function BagsCollection() {
  const products = [
    // Women's Bags
    {
      name: "Classic Shoulder Bag",
      category: "Women's Bags",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Elegant Handbag",
      category: "Women's Bags",
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Premium Tote Bag",
      category: "Women's Bags",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Mini Crossbody Bag",
      category: "Women's Bags",
      image:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Everyday Fashion Bag",
      category: "Women's Bags",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Luxury Style Bag",
      category: "Women's Bags",
      image:
        "https://images.unsplash.com/photo-1585488439732-9f9a9d8c6b8d?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Structured Handbag",
      category: "Women's Bags",
      image:
        "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Soft Leather Bag",
      category: "Women's Bags",
      image:
        "https://images.unsplash.com/photo-1564222255856-0c6d3e7a0f5a?auto=format&fit=crop&w=900&q=85",
    },

    // Backpacks
    {
      name: "Classic Everyday Backpack",
      category: "Backpacks",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Urban Travel Backpack",
      category: "Backpacks",
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Premium School Backpack",
      category: "Backpacks",
      image:
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Casual Daypack",
      category: "Backpacks",
      image:
        "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Minimal Travel Backpack",
      category: "Backpacks",
      image:
        "https://images.unsplash.com/photo-1556306535-38febf6782e7?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Multi Pocket Backpack",
      category: "Backpacks",
      image:
        "https://images.unsplash.com/photo-1622260614153-03223fb72052?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Lightweight Backpack",
      category: "Backpacks",
      image:
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
    },

    // Office Bags
    {
      name: "Professional Laptop Bag",
      category: "Office Bags",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Business Briefcase",
      category: "Office Bags",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Executive Work Bag",
      category: "Office Bags",
      image:
        "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Laptop Shoulder Bag",
      category: "Office Bags",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Slim Office Briefcase",
      category: "Office Bags",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Work Essentials Bag",
      category: "Office Bags",
      image:
        "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=900&q=85",
    },

    // Travel & Luggage
    {
      name: "Travel Carry Bag",
      category: "Travel & Luggage",
      image:
        "https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Premium Travel Duffel",
      category: "Travel & Luggage",
      image:
        "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Weekend Travel Bag",
      category: "Travel & Luggage",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Large Travel Luggage",
      category: "Travel & Luggage",
      image:
        "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Compact Cabin Bag",
      category: "Travel & Luggage",
      image:
        "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Rolling Travel Case",
      category: "Travel & Luggage",
      image:
        "https://images.unsplash.com/photo-1566371486179-4c8f6c0f3e7a?auto=format&fit=crop&w=900&q=85",
    },

    // Kids Bags
    {
      name: "Kids School Backpack",
      category: "Kids Bags",
      image:
        "https://images.unsplash.com/photo-1577741314755-048d8525d31e?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Cute Kids Backpack",
      category: "Kids Bags",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Mini Backpack",
      category: "Kids Bags",
      image:
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "School Essentials Bag",
      category: "Kids Bags",
      image:
        "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Shoulder Bag",
      category: "Kids Bags",
      image:
        "https://images.unsplash.com/photo-1618354691551-44de113f0164?auto=format&fit=crop&w=900&q=85",
    },

    // Sports Bags
    {
      name: "Classic Sports Duffel",
      category: "Sports Bags",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Gym Training Bag",
      category: "Sports Bags",
      image:
        "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Active Sports Backpack",
      category: "Sports Bags",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Fitness Carry Bag",
      category: "Sports Bags",
      image:
        "https://images.unsplash.com/photo-1580086319619-3ed498161c77?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Training Essentials Bag",
      category: "Sports Bags",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    },

    // Wallets & Accessories
    {
      name: "Classic Leather Wallet",
      category: "Wallets & Accessories",
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Compact Card Holder",
      category: "Wallets & Accessories",
      image:
        "https://images.unsplash.com/photo-1606503825008-6e3b1c3b1f50?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Fashion Purse",
      category: "Wallets & Accessories",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Travel Organizer",
      category: "Wallets & Accessories",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Everyday Wallet",
      category: "Wallets & Accessories",
      image:
        "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=900&q=85",
    },

    // Extra Collection
    {
      name: "Premium Crossbody Bag",
      category: "Collection",
      image:
        "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Everyday Shopper Bag",
      category: "Collection",
      image:
        "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Modern Travel Backpack",
      category: "Collection",
      image:
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Classic Fashion Purse",
      category: "Collection",
      image:
        "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85",
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
            AL FAN EMIRATES • BAGS
          </span>

          <h1>
            Bags <span>Collection.</span>
          </h1>

          <p>
            Discover stylish bags, backpacks, travel essentials
            and everyday accessories for the whole family.
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
              Carry Your
              <span> Style.</span>
            </h2>
          </div>

          <p>
            Explore our collection of everyday bags,
            travel essentials and accessories.
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
                  <ShoppingBag size={18} />
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
              Carry More.
              <br />
              <span>Live More.</span>
            </h2>

            <p>
              Everyday bags designed for style,
              comfort and convenience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BagsCollection;

