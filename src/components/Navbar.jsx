
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Search,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Shirt,
  Sparkles,
  Baby,
  Footprints,
  ShoppingBag,
  Dumbbell,
  Gamepad2,
} from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [activeSection, setActiveSection] = useState("home");


  /* =========================
     CLOSE MENU
  ========================= */

  const closeMenu = () => {
    setMenuOpen(false);
    setCollectionsOpen(false);
  };


  /* =========================
     CLOSE SEARCH
  ========================= */

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchText("");
  };


  /* =========================
     GO TO HOMEPAGE SECTION
  ========================= */

  const goToSection = (sectionId) => {
    closeMenu();
    closeSearch();

    if (location.pathname === "/") {
      const section =
        document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate(`/#${sectionId}`);
  };


  /* =========================
     ACTIVE SECTION
  ========================= */

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const sections = [
      "home",
      "collections",
      "offers",
      "branches",
      "why-us",
    ];

    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 150;

      let currentSection = "home";

      sections.forEach((sectionId) => {
        const section =
          document.getElementById(sectionId);

        if (
          section &&
          scrollPosition >= section.offsetTop
        ) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [location.pathname]);


  /* =========================
     ESC KEY
  ========================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setSearchText("");
        setMenuOpen(false);
        setCollectionsOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);


  /* =========================
     NAVIGATION LINKS
  ========================= */

  const navLinks = [
    {
      label: "Offers",
      section: "offers",
    },
    {
      label: "Branches",
      section: "branches",
    },
    {
      label: "Why Us",
      section: "why-us",
    },
  ];


  /* =========================
     COLLECTIONS
  ========================= */

  const collections = [
    {
      name: "Men",
      description: "Fashion & Essentials",
      icon: Shirt,
      route: "/mens-collection",
    },
    {
      name: "Women",
      description: "Style & Collection",
      icon: Sparkles,
      route: "/womens-collection",
    },
    {
      name: "Kids",
      description: "Kids Fashion",
      icon: Baby,
      route: "/kids-collection",
    },
    {
      name: "Footwear",
      description: "Shoes & Sandals",
      icon: Footprints,
      route: "/footwear-collection",
    },
    {
      name: "Bags",
      description: "Bags & Luggage",
      icon: ShoppingBag,
      route: "/bags-collection",
    },
    {
      name: "Sportswear",
      description: "Active Lifestyle",
      icon: Dumbbell,
      route: "/sportswear-collection",
    },
    {
      name: "Toys",
      description: "Fun For Kids",
      icon: Gamepad2,
      route: "/toys-collection",
    },
  ];


  /* =========================
     COLLECTION CLICK
  ========================= */

  const handleCollectionClick = (route) => {
    closeMenu();

    navigate(route);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  /* =========================
     POPULAR SEARCHES
  ========================= */

  const popularSearches = [
    "Men",
    "Women",
    "Kids",
    "Footwear",
    "Bags",
    "Sportswear",
    "Toys",
    "Offers",
  ];


  /* =========================
     SEARCH NAVIGATION
  ========================= */

  const handleSearchNavigation = (query) => {
    const search =
      query.trim().toLowerCase();

    if (!search) {
      return;
    }


    /* MEN */

    if (
      search === "men" ||
      search === "mens" ||
      search === "man" ||
      search.includes("shirt") ||
      search.includes("jeans") ||
      search.includes("trousers")
    ) {
      navigate("/mens-collection");
      return;
    }


    /* WOMEN */

    if (
      search === "women" ||
      search === "womens" ||
      search === "woman" ||
      search === "ladies" ||
      search.includes("dress") ||
      search.includes("blouse")
    ) {
      navigate("/womens-collection");
      return;
    }


    /* KIDS */

    if (
      search === "kids" ||
      search === "kid" ||
      search === "boys" ||
      search === "girls" ||
      search === "baby" ||
      search === "children" ||
      search.includes("school")
    ) {
      navigate("/kids-collection");
      return;
    }


    /* FOOTWEAR */

    if (
      search === "footwear" ||
      search === "shoes" ||
      search === "shoe" ||
      search === "sandals" ||
      search === "slippers" ||
      search === "sneakers"
    ) {
      navigate("/footwear-collection");
      return;
    }


    /* BAGS */

    if (
      search === "bags" ||
      search === "bag" ||
      search === "backpack" ||
      search === "handbag" ||
      search === "luggage" ||
      search === "wallet"
    ) {
      navigate("/bags-collection");
      return;
    }


    /* SPORTSWEAR */

    if (
      search === "sportswear" ||
      search === "sports" ||
      search === "gym" ||
      search === "running" ||
      search === "football" ||
      search === "activewear" ||
      search === "training"
    ) {
      navigate("/sportswear-collection");
      return;
    }


    /* TOYS */

    if (
      search === "toys" ||
      search === "toy" ||
      search === "games" ||
      search === "puzzles" ||
      search === "dolls"
    ) {
      navigate("/toys-collection");
      return;
    }


    /* OFFERS */

    if (
      search === "offers" ||
      search === "offer" ||
      search === "sale" ||
      search === "discount" ||
      search === "deals"
    ) {
      goToSection("offers");
      return;
    }


    /* DEFAULT */

    navigate("/");
  };


  /* =========================
     SEARCH SUBMIT
  ========================= */

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const query =
      searchText.trim();

    if (!query) {
      return;
    }

    setSearchOpen(false);
    setSearchText("");
    setMenuOpen(false);

    handleSearchNavigation(query);
  };


  /* =========================
     POPULAR SEARCH CLICK
  ========================= */

  const handlePopularSearch = (item) => {
    setSearchOpen(false);
    setSearchText("");
    setMenuOpen(false);

    handleSearchNavigation(item);
  };


  return (
    <>
      {/* =================================
          NAVBAR
      ================================= */}

      <header className="navbar">

        <div className="nav-container">

          {/* LOGO */}

          <button
            type="button"
            className="logo"
            onClick={() =>
              goToSection("home")
            }
            aria-label="Al Fan Emirates Home"
          >
            <img
              src="https://i0.wp.com/alfaneim.com/wp-content/uploads/2021/05/AL-FAN-LOGO.png?w=540&ssl=1"
              alt="Al Fan Emirates"
              className="logo-image"
            />
          </button>


          {/* DESKTOP NAV */}

          <nav className="nav-links">

            {/* HOME */}

            <button
              type="button"
              className={
                activeSection === "home"
                  ? "active"
                  : ""
              }
              onClick={() =>
                goToSection("home")
              }
            >
              Home
            </button>


            {/* COLLECTIONS */}

            <div
              className="nav-collections"
              onMouseEnter={() =>
                setCollectionsOpen(true)
              }
              onMouseLeave={() =>
                setCollectionsOpen(false)
              }
            >

              <button
                type="button"
                className={
                  activeSection ===
                  "collections"
                    ? "active collections-nav-btn"
                    : "collections-nav-btn"
                }
                onClick={() =>
                  setCollectionsOpen(
                    !collectionsOpen
                  )
                }
              >
                Collections

                <ChevronDown
                  size={15}
                  className={
                    collectionsOpen
                      ? "rotate"
                      : ""
                  }
                />
              </button>


              {/* MEGA MENU */}

              {collectionsOpen && (

                <div className="collections-mega-menu">

                  <div className="mega-menu-header">

                    <span>
                      AL FAN EMIRATES
                    </span>

                    <h3>
                      Explore Our Collections
                    </h3>

                    <p>
                      Fashion, footwear and
                      everyday essentials for
                      the whole family.
                    </p>

                  </div>


                  <div className="mega-menu-grid">

                    {collections.map(
                      (collection) => {

                        const Icon =
                          collection.icon;

                        return (
                          <button
                            type="button"
                            key={
                              collection.name
                            }
                            className="mega-menu-item"
                            onClick={() =>
                              handleCollectionClick(
                                collection.route
                              )
                            }
                          >

                            <div className="mega-menu-icon">
                              <Icon
                                size={23}
                                strokeWidth={1.6}
                              />
                            </div>

                            <div className="mega-menu-text">

                              <strong>
                                {
                                  collection.name
                                }
                              </strong>

                              <span>
                                {
                                  collection.description
                                }
                              </span>

                            </div>

                            <span className="mega-menu-arrow">
                              →
                            </span>

                          </button>
                        );
                      }
                    )}

                  </div>

                </div>

              )}

            </div>


            {/* OFFERS / BRANCHES / WHY US */}

            {navLinks.map((item) => (
              <button
                type="button"
                key={item.section}
                className={
                  activeSection ===
                  item.section
                    ? "active"
                    : ""
                }
                onClick={() =>
                  goToSection(
                    item.section
                  )
                }
              >
                {item.label}
              </button>
            ))}

          </nav>


          {/* NAV ACTIONS */}

          <div className="nav-actions">

            {/* SEARCH */}

            <button
              type="button"
              className="icon-btn"
              aria-label="Open search"
              onClick={() => {
                setSearchOpen(true);
                setMenuOpen(false);
                setCollectionsOpen(false);
              }}
            >
              <Search size={20} />
            </button>


            {/* LANGUAGE */}

            <button
              type="button"
              className="language-btn"
            >
              EN
            </button>


            {/* FIND STORE */}

            <button
              type="button"
              className="store-btn"
              onClick={() =>
                goToSection("branches")
              }
            >
              <MapPin size={17} />

              <span>
                Find Store
              </span>
            </button>


            {/* MOBILE MENU */}

            <button
              type="button"
              className="mobile-menu"
              onClick={() => {
                setMenuOpen(!menuOpen);
                setCollectionsOpen(false);
              }}
              aria-label={
                menuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>

        </div>


        {/* =================================
            MOBILE NAV
        ================================= */}

        <div
          className={
            menuOpen
              ? "mobile-nav open"
              : "mobile-nav"
          }
        >

          {/* HOME */}

          <button
            type="button"
            className={
              activeSection === "home"
                ? "active"
                : ""
            }
            onClick={() =>
              goToSection("home")
            }
          >
            Home
          </button>


          {/* OFFERS / BRANCHES / WHY US */}

          {navLinks.map((item) => (
            <button
              type="button"
              key={item.section}
              className={
                activeSection ===
                item.section
                  ? "active"
                  : ""
              }
              onClick={() =>
                goToSection(
                  item.section
                )
              }
            >
              {item.label}
            </button>
          ))}


          {/* MOBILE COLLECTIONS */}

          <div className="mobile-collections">

            <div className="mobile-collections-title">

              <span>
                Collections
              </span>

              <ChevronDown size={16} />

            </div>


            <div className="mobile-collections-list">

              {collections.map(
                (collection) => {

                  const Icon =
                    collection.icon;

                  return (
                    <button
                      type="button"
                      key={
                        collection.name
                      }
                      onClick={() =>
                        handleCollectionClick(
                          collection.route
                        )
                      }
                    >

                      <Icon
                        size={18}
                        strokeWidth={1.7}
                      />

                      <span>
                        {
                          collection.name
                        }
                      </span>

                    </button>
                  );
                }
              )}

            </div>

          </div>


          {/* MOBILE STORE */}

          <button
            type="button"
            className="mobile-store-btn"
            onClick={() =>
              goToSection("branches")
            }
          >
            <MapPin size={17} />

            Find Your Store
          </button>

        </div>

      </header>


      {/* =================================
          SEARCH OVERLAY
      ================================= */}

      {searchOpen && (

        <div
          className="search-overlay"
          onClick={closeSearch}
        >

          <div
            className="search-box"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* SEARCH HEADER */}

            <div className="search-header">

              <form
                className="search-input-wrapper"
                onSubmit={
                  handleSearchSubmit
                }
              >

                <Search size={20} />

                <input
                  type="text"
                  value={searchText}
                  onChange={(event) =>
                    setSearchText(
                      event.target.value
                    )
                  }
                  placeholder="Search Al Fan Emirates..."
                  autoFocus
                  aria-label="Search Al Fan Emirates"
                />

                <button
                  type="submit"
                  className="search-submit"
                  aria-label="Submit search"
                >
                  →
                </button>

              </form>


              {/* CLOSE */}

              <button
                type="button"
                className="search-close"
                onClick={closeSearch}
                aria-label="Close search"
              >
                <X size={22} />
              </button>

            </div>


            {/* POPULAR SEARCHES */}

            <div className="popular-searches">

              <p>
                POPULAR SEARCHES
              </p>

              <div className="popular-list">

                {popularSearches.map(
                  (item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() =>
                        handlePopularSearch(
                          item
                        )
                      }
                    >
                      {item}
                    </button>
                  )
                )}

              </div>

            </div>


            {/* SEARCH MESSAGE */}

            {searchText && (

              <div className="search-message">

                <span>
                  Searching for:
                </span>

                <strong>
                  {searchText}
                </strong>

              </div>

            )}

          </div>

        </div>

      )}

    </>
  );
}

export default Navbar;

