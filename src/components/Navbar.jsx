// import { useState, useEffect } from "react";
// import {
//   Search,
//   MapPin,
//   Menu,
//   X,
// } from "lucide-react";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchText, setSearchText] = useState("");
//   const [activeSection, setActiveSection] = useState("home");

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   const closeSearch = () => {
//     setSearchOpen(false);
//     setSearchText("");
//   };

//   /* ACTIVE SECTION */

//   useEffect(() => {
//     const sections = [
//       "home",
//       "collections",
//       "offers",
//       "branches",
//       "why-us",
//     ];

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + 150;

//       let currentSection = "home";

//       sections.forEach((sectionId) => {
//         const section =
//           document.getElementById(sectionId);

//         if (
//           section &&
//           scrollPosition >= section.offsetTop
//         ) {
//           currentSection = sectionId;
//         }
//       });

//       setActiveSection(currentSection);
//     };

//     window.addEventListener(
//       "scroll",
//       handleScroll
//     );

//     handleScroll();

//     return () => {
//       window.removeEventListener(
//         "scroll",
//         handleScroll
//       );
//     };
//   }, []);

//   /* ESC KEY */

//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === "Escape") {
//         setSearchOpen(false);
//         setSearchText("");
//         setMenuOpen(false);
//       }
//     };

//     document.addEventListener(
//       "keydown",
//       handleEscape
//     );

//     return () => {
//       document.removeEventListener(
//         "keydown",
//         handleEscape
//       );
//     };
//   }, []);

//   const navLinks = [
//     {
//       label: "Home",
//       link: "#home",
//       section: "home",
//     },
//     {
//       label: "Collections",
//       link: "#collections",
//       section: "collections",
//     },
//     {
//       label: "Offers",
//       link: "#offers",
//       section: "offers",
//     },
//     {
//       label: "Branches",
//       link: "#branches",
//       section: "branches",
//     },
//     {
//       label: "Why Us",
//       link: "#why-us",
//       section: "why-us",
//     },
//   ];

//   const popularSearches = [
//     "Men",
//     "Women",
//     "Kids",
//     "Footwear",
//     "Offers",
//   ];

//   const handlePopularSearch = (item) => {
//     setSearchText(item);
//   };

//   return (
//     <>
//       <header className="navbar">

//         <div className="nav-container">

//           {/* LOGO */}

//           <a
//             href="#home"
//             className="logo"
//             onClick={closeMenu}
//           >
//             <span>AL FAN</span>
//             <small>EMIRATES</small>
//           </a>


//           {/* NAV LINKS */}

//           <nav className="nav-links">

//             {navLinks.map((item) => (
//               <a
//                 key={item.section}
//                 href={item.link}
//                 className={
//                   activeSection === item.section
//                     ? "active"
//                     : ""
//                 }
//               >
//                 {item.label}
//               </a>
//             ))}

//           </nav>


//           {/* ACTIONS */}

//           <div className="nav-actions">

//             {/* SEARCH */}

//             <button
//               type="button"
//               className="icon-btn"
//               aria-label="Open search"
//               onClick={() => {
//                 setSearchOpen(true);
//                 setMenuOpen(false);
//               }}
//             >
//               <Search size={20} />
//             </button>


//             {/* LANGUAGE */}

//             <button
//               type="button"
//               className="language-btn"
//             >
//               EN
//             </button>


//             {/* STORE */}

//             <a
//               href="#branches"
//               className="store-btn"
//             >
//               <MapPin size={17} />
//               Find Store
//             </a>


//             {/* MOBILE MENU */}

//             <button
//               type="button"
//               className="mobile-menu"
//               onClick={() =>
//                 setMenuOpen(!menuOpen)
//               }
//               aria-label={
//                 menuOpen
//                   ? "Close menu"
//                   : "Open menu"
//               }
//               aria-expanded={menuOpen}
//             >
//               {menuOpen ? (
//                 <X size={22} />
//               ) : (
//                 <Menu size={22} />
//               )}
//             </button>

//           </div>

//         </div>


//         {/* MOBILE NAV */}

//         <div
//           className={
//             menuOpen
//               ? "mobile-nav open"
//               : "mobile-nav"
//           }
//         >

//           {navLinks.map((item) => (
//             <a
//               key={item.section}
//               href={item.link}
//               className={
//                 activeSection === item.section
//                   ? "active"
//                   : ""
//               }
//               onClick={closeMenu}
//             >
//               {item.label}
//             </a>
//           ))}

//           <a
//             href="#branches"
//             className="mobile-store-btn"
//             onClick={closeMenu}
//           >
//             <MapPin size={17} />
//             Find Your Store
//           </a>

//         </div>

//       </header>


//       {/* SEARCH OVERLAY */}

//       {searchOpen && (
//         <div
//           className="search-overlay"
//           onClick={closeSearch}
//         >

//           <div
//             className="search-box"
//             onClick={(event) =>
//               event.stopPropagation()
//             }
//           >

//             <div className="search-header">

//               <div className="search-input-wrapper">

//                 <Search size={20} />

//                 <input
//                   type="text"
//                   value={searchText}
//                   onChange={(event) =>
//                     setSearchText(
//                       event.target.value
//                     )
//                   }
//                   placeholder="Search Al Fan Emirates..."
//                   autoFocus
//                 />

//               </div>

//               <button
//                 type="button"
//                 className="search-close"
//                 onClick={closeSearch}
//                 aria-label="Close search"
//               >
//                 <X size={22} />
//               </button>

//             </div>


//             {/* POPULAR SEARCHES */}

//             <div className="popular-searches">

//               <p>POPULAR SEARCHES</p>

//               <div className="popular-list">

//                 {popularSearches.map(
//                   (item) => (
//                     <button
//                       type="button"
//                       key={item}
//                       onClick={() =>
//                         handlePopularSearch(
//                           item
//                         )
//                       }
//                     >
//                       {item}
//                     </button>
//                   )
//                 )}

//               </div>

//             </div>


//             {/* SEARCH MESSAGE */}

//             {searchText && (
//               <div className="search-message">

//                 <span>
//                   Searching for:
//                 </span>

//                 <strong>
//                   {searchText}
//                 </strong>

//               </div>
//             )}

//           </div>

//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;



import { useState, useEffect } from "react";
import {
  Search,
  MapPin,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchText("");
  };

  /* =========================
     ACTIVE SECTION ON SCROLL
  ========================= */

  useEffect(() => {
    const sections = [
      "home",
      "collections",
      "offers",
      "branches",
      "why-us",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (
          section &&
          scrollPosition >= section.offsetTop
        ) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================
     ESC KEY
  ========================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setSearchText("");
        setMenuOpen(false);
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
      label: "Home",
      link: "#home",
      section: "home",
    },
    {
      label: "Collections",
      link: "#collections",
      section: "collections",
    },
    {
      label: "Offers",
      link: "#offers",
      section: "offers",
    },
    {
      label: "Branches",
      link: "#branches",
      section: "branches",
    },
    {
      label: "Why Us",
      link: "#why-us",
      section: "why-us",
    },
  ];

  /* =========================
     POPULAR SEARCHES
  ========================= */

  const popularSearches = [
    "Men",
    "Women",
    "Kids",
    "Footwear",
    "Offers",
  ];

  const handlePopularSearch = (item) => {
    setSearchText(item);
  };

  return (
    <>
      {/* =================================
          NAVBAR
      ================================= */}

      <header className="navbar">

        <div className="nav-container">

          {/* =============================
              LOGO
          ============================= */}

          <a
            href="#home"
            className="logo"
            onClick={closeMenu}
          >
            <img
              src="https://i0.wp.com/alfaneim.com/wp-content/uploads/2021/05/AL-FAN-LOGO.png?w=540&ssl=1"
              alt="Al Fan Emirates"
              className="logo-image"
            />
          </a>

          {/* =============================
              DESKTOP NAV LINKS
          ============================= */}

          <nav className="nav-links">

            {navLinks.map((item) => (
              <a
                key={item.section}
                href={item.link}
                className={
                  activeSection === item.section
                    ? "active"
                    : ""
                }
              >
                {item.label}
              </a>
            ))}

          </nav>

          {/* =============================
              NAV ACTIONS
          ============================= */}

          <div className="nav-actions">

            {/* SEARCH */}

            <button
              type="button"
              className="icon-btn"
              aria-label="Open search"
              onClick={() => {
                setSearchOpen(true);
                setMenuOpen(false);
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

            <a
              href="#branches"
              className="store-btn"
              onClick={closeMenu}
            >
              <MapPin size={17} />
              <span>Find Store</span>
            </a>

            {/* MOBILE MENU */}

            <button
              type="button"
              className="mobile-menu"
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
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
            MOBILE NAVIGATION
        ================================= */}

        <div
          className={
            menuOpen
              ? "mobile-nav open"
              : "mobile-nav"
          }
        >

          {navLinks.map((item) => (
            <a
              key={item.section}
              href={item.link}
              className={
                activeSection === item.section
                  ? "active"
                  : ""
              }
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <a
            href="#branches"
            className="mobile-store-btn"
            onClick={closeMenu}
          >
            <MapPin size={17} />
            Find Your Store
          </a>

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

              <div className="search-input-wrapper">

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
                />

              </div>

              <button
                type="button"
                className="search-close"
                onClick={closeSearch}
                aria-label="Close search"
              >
                <X size={22} />
              </button>

            </div>

            {/* =============================
                POPULAR SEARCHES
            ============================= */}

            <div className="popular-searches">

              <p>POPULAR SEARCHES</p>

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

            {/* =============================
                SEARCH MESSAGE
            ============================= */}

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