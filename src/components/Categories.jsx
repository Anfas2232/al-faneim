import {
  Shirt,
  Baby,
  Footprints,
  ShoppingBag,
  Sparkles,
  Dumbbell,
  Gamepad2,
} from "lucide-react";

function Categories() {
  const categories = [
    {
      name: "Men",
      description: "Fashion & Essentials",
      icon: Shirt,
      image:
        "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=85",
      link: "/mens-collection",
    },

    {
      name: "Women",
      description: "Style & Collection",
      icon: Sparkles,
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85",
      link: "/womens-collection",
    },

    {
      name: "Boys",
      description: "Kids Fashion",
      icon: Shirt,
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1200&q=85",
      link: "/kids-collection",
    },

    {
      name: "Girls",
      description: "Kids Collection",
      icon: Baby,
      image:
        "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=1200&q=85",
      link: "/kids-collection",
    },

    {
      name: "Footwear",
      description: "Shoes & Sandals",
      icon: Footprints,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85",
      link: "/footwear-collection",
    },

    {
      name: "Bags",
      description: "Bags & Luggage",
      icon: ShoppingBag,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=85",
      link: "/bags-collection",
    },

    {
      name: "Sportswear",
      description: "Active Lifestyle",
      icon: Dumbbell,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85",
      link: "/sportswear-collection",
    },

    {
      name: "Toys",
      description: "Fun For Kids",
      icon: Gamepad2,
      image:
        "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=1200&q=85",
      link: "/toys-collection",
    },
  ];

  return (
    <section
      className="categories-section"
      id="collections"
    >

      {/* Section Header */}

      <div className="section-header">

        <div>

          <span className="section-label">
            AL FAN EMIRATES
          </span>

          <h2>
            Shop Your <span>Style</span>
          </h2>

        </div>

        <p>
          Discover fashion, footwear and everyday
          essentials for the whole family.
        </p>

      </div>


      {/* Categories */}

      <div className="categories-grid">

        {categories.map((category) => {

          const Icon = category.icon;

          return (
            <a
              href={category.link}
              className="category-card"
              key={category.name}
            >

              {/* Background Image */}

              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />


              {/* Dark Overlay */}

              <div className="category-overlay"></div>


              {/* Top Icon */}

              <div className="category-icon">

                <Icon
                  size={30}
                  strokeWidth={1.6}
                />

              </div>


              {/* Content */}

              <div className="category-info">

                <h3>
                  {category.name}
                </h3>

                <p>
                  {category.description}
                </p>

                <span className="category-arrow">

                  Explore Collection

                  <span className="arrow-icon">
                    →
                  </span>

                </span>

              </div>

            </a>
          );
        })}

      </div>

    </section>
  );
}

export default Categories;



