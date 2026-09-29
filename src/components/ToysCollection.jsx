import {
  ArrowLeft,
  ArrowRight,
  Gamepad2,
} from "lucide-react";

function ToysCollection() {
  const products = [
    // EDUCATIONAL TOYS
    {
      name: "Kids Learning Tablet",
      category: "Educational Toys",
      price: "AED 49",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Alphabet Learning Set",
      category: "Educational Toys",
      price: "AED 29",
      image:
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Math Learning Game",
      category: "Educational Toys",
      price: "AED 35",
      image:
        "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Color & Shape Puzzle",
      category: "Educational Toys",
      price: "AED 25",
      image:
        "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Science Kit",
      category: "Educational Toys",
      price: "AED 59",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=85",
    },

    // PRETEND PLAY
    {
      name: "Kids Kitchen Play Set",
      category: "Pretend Play",
      price: "AED 69",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Doctor Play Set",
      category: "Pretend Play",
      price: "AED 45",
      image:
        "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Tool Set",
      category: "Pretend Play",
      price: "AED 55",
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Beauty & Makeup Play Set",
      category: "Pretend Play",
      price: "AED 39",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Supermarket Play Set",
      category: "Pretend Play",
      price: "AED 59",
      image:
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=85",
    },

    // VEHICLES
    {
      name: "Remote Control Racing Car",
      category: "Vehicles",
      price: "AED 79",
      image:
        "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Mini Construction Truck",
      category: "Vehicles",
      price: "AED 35",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Toy Police Car",
      category: "Vehicles",
      price: "AED 29",
      image:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Toy Fire Truck",
      category: "Vehicles",
      price: "AED 35",
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Train Set",
      category: "Vehicles",
      price: "AED 65",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85",
    },

    // DOLLS & PLUSH
    {
      name: "Fashion Doll Set",
      category: "Dolls & Plush",
      price: "AED 45",
      image:
        "https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Cute Teddy Bear",
      category: "Dolls & Plush",
      price: "AED 39",
      image:
        "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Soft Bunny Plush",
      category: "Dolls & Plush",
      price: "AED 35",
      image:
        "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Baby Doll Set",
      category: "Dolls & Plush",
      price: "AED 49",
      image:
        "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Animal Plush Collection",
      category: "Dolls & Plush",
      price: "AED 55",
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=900&q=85",
    },

    // BUILDING & BLOCKS
    {
      name: "Creative Building Blocks",
      category: "Building & Blocks",
      price: "AED 45",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Color Building Bricks",
      category: "Building & Blocks",
      price: "AED 39",
      image:
        "https://images.unsplash.com/photo-1560961911-ba7ef651a56c?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Magnetic Building Tiles",
      category: "Building & Blocks",
      price: "AED 69",
      image:
        "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Construction Blocks",
      category: "Building & Blocks",
      price: "AED 55",
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Creative Builder Set",
      category: "Building & Blocks",
      price: "AED 75",
      image:
        "https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=900&q=85",
    },

    // OUTDOOR TOYS
    {
      name: "Kids Football",
      category: "Outdoor Toys",
      price: "AED 25",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Basketball Set",
      category: "Outdoor Toys",
      price: "AED 49",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Scooter",
      category: "Outdoor Toys",
      price: "AED 89",
      image:
        "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Beach Sand Toy Set",
      category: "Outdoor Toys",
      price: "AED 29",
      image:
        "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Bubble Fun Set",
      category: "Outdoor Toys",
      price: "AED 19",
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=85",
    },

    // GAMES & PUZZLES
    {
      name: "Family Board Game",
      category: "Games & Puzzles",
      price: "AED 39",
      image:
        "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Jigsaw Puzzle 500 Pieces",
      category: "Games & Puzzles",
      price: "AED 35",
      image:
        "https://images.unsplash.com/photo-1606503153255-59d8b8b821a6?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Memory Game",
      category: "Games & Puzzles",
      price: "AED 25",
      image:
        "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Chess & Checkers Set",
      category: "Games & Puzzles",
      price: "AED 45",
      image:
        "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Card Game",
      category: "Games & Puzzles",
      price: "AED 20",
      image:
        "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&w=900&q=85",
    },

    // BABY TOYS
    {
      name: "Baby Rattle Set",
      category: "Baby Toys",
      price: "AED 19",
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Soft Baby Activity Toy",
      category: "Baby Toys",
      price: "AED 35",
      image:
        "https://images.unsplash.com/photo-1584839404042-8bc21d240e85?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Baby Musical Toy",
      category: "Baby Toys",
      price: "AED 29",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Baby Stacking Rings",
      category: "Baby Toys",
      price: "AED 22",
      image:
        "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Soft Sensory Ball",
      category: "Baby Toys",
      price: "AED 18",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85",
    },

    // COLLECTION
    {
      name: "Premium Kids Gift Box",
      category: "Collection",
      price: "AED 89",
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Birthday Party Toy Set",
      category: "Collection",
      price: "AED 59",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Activity Box",
      category: "Collection",
      price: "AED 69",
      image:
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Fun Weekend Toy Pack",
      category: "Collection",
      price: "AED 79",
      image:
        "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Kids Surprise Gift Set",
      category: "Collection",
      price: "AED 99",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <div className="mens-collection-page">

      {/* HERO */}

      <section className="mens-page-hero">

        <div className="mens-page-content">

          <a
            href="/#collections"
            className="mens-back-btn"
          >
            <ArrowLeft size={18} />
            Back to Collections
          </a>

          <span className="mens-hero-badge">
            TOYS & FUN
          </span>

          <h1>
            Toys
            <br />
            <span>Collection.</span>
          </h1>

          <p>
            Discover fun, creative and exciting toys
            for every age. From learning and building
            to games, outdoor fun and cuddly friends.
          </p>

          <div className="mens-hero-meta">
            <span>FUN</span>
            <span>LEARN</span>
            <span>PLAY</span>
          </div>

        </div>

        <div className="mens-page-circle">
          <Gamepad2 size={170} strokeWidth={1} />
        </div>

      </section>


      {/* COLLECTION */}

      <section className="mens-collection-container">

        <div className="mens-collection-header">

          <div>
            <span className="section-label">
              AL FAN EMIRATES
            </span>

            <h2>
              Play.
              <br />
              <span>Learn. Explore.</span>
            </h2>
          </div>

          <p>
            Explore our collection of educational
            toys, games, building sets, dolls,
            vehicles and outdoor fun for kids.
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
                  Shop
                </button>

              </div>


              <div className="mens-product-content">

                <h3>
                  {product.name}
                </h3>

                <span>
                  {product.price}
                </span>

              </div>

              <a
                href="/#collections"
                className="mens-explore-btn"
              >
                Explore
                <ArrowRight size={16} />
              </a>

            </article>

          ))}

        </div>

      </section>


      {/* BOTTOM BANNER */}

      <section className="mens-bottom-banner">

        <div>

          <span className="mens-offer-badge">
            PLAY • LEARN • GROW
          </span>

          <h2>
            Big Fun.
            <br />
            <span>Little Smiles.</span>
          </h2>

          <p>
            Bring home something special
            for every little explorer.
          </p>

        </div>

      </section>

    </div>
  );
}

export default ToysCollection;

