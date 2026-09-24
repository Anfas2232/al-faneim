
// import React from "react";


// function Hero() {
//   const categories = [
//     {
//       icon: "👕",
//       title: "MEN",
//       subtitle: "Fashion & Essentials",
//     },
//     {
//       icon: "✨",
//       title: "WOMEN",
//       subtitle: "Style & Collection",
//     },
//     {
//       icon: "👦",
//       title: "BOYS",
//       subtitle:
//        "Kids Fashion",
//     },
//     {
//       icon: "👧",
//       title: "GIRLS",
//       subtitle: "Kids Collection",
//     },
//     {
//       icon: "👞",
//       title: "FOOTWEAR",
//       subtitle: "Shoes & Sandals",
//     },
//     {
//       icon: "👜",
//       title: "BAGS",
//       subtitle: "Bags & Luggage",
//     },
//     {
//       icon: "🏋️",
//       title: "SPORTSWEAR",
//       subtitle: "Active Lifestyle",
//     },
//     {
//       icon: "🎮",
//       title: "TOYS",
//       subtitle: "Fun For Kids",
//     },
//   ];

//   return (
//     <section className="hero" id="home">

//       {/* IMAGE ONLY */}
//       <div className="hero-image"></div>

//       {/* DARK OVERLAY */}
//       <div className="hero-overlay"></div>

//       {/* REACT TEXT CONTENT */}
//       <div className="hero-content">

//         <p className="hero-tag">
//           WELCOME TO AL FAN EMIRATES
//         </p>

//         <div className="hero-line"></div>

//         <h1 className="hero-title">
//           STYLE FOR
//           <br />
//           <span>EVERYONE.</span>
//         </h1>

//         <p className="hero-description">
//           Discover fashion, essentials and everyday value
//           <br className="desktop-break" />
//           for the whole family.
//         </p>

//         <div className="hero-buttons">

//           {/* COLLECTION BUTTON */}
//           <a
//             href="#collections"
//             className="primary-btn"
//           >
//             <span>Explore Collections</span>

//             <span className="button-arrow">
//               →
//             </span>
//           </a>

//           {/* STORE BUTTON */}
//           <a
//             href="#branches"
//             className="secondary-btn"
//           >
//             <span className="store-icon">
//               <img src="/location-icon.gif" alt="Location" />
//             </span>

//             <span>Find Your Store</span>
//           </a>

//         </div>

//         {/* BOTTOM HERO LABELS */}
//         <div className="hero-bottom">

//           <span>FASHION</span>

//           <span className="dot">•</span>

//           <span>FAMILY</span>

//           <span className="dot">•</span>

//           <span>VALUE</span>

//         </div>

//       </div>

//       {/* CATEGORY SECTION */}
//       <div className="category-wrapper">

//         <div className="category-container">

//           {categories.map((category, index) => (
//             <React.Fragment key={category.title}>

//               <div className="category-item">

//                 <div className="category-icon">
//                   {category.icon}
//                 </div>

//                 <h3>
//                   {category.title}
//                 </h3>

//                 <p>
//                   {category.subtitle}
//                 </p>

//               </div>

//               {index !== categories.length - 1 && (
//                 <div className="category-divider"></div>
//               )}

//             </React.Fragment>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default Hero;

import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* FULL BACKGROUND IMAGE */}
      <div className="hero-image"></div>

      {/* PREMIUM DARK OVERLAY */}
      <div className="hero-overlay"></div>

      {/* HERO CONTENT */}
      <div className="hero-content">

        <p className="hero-tag">
          WELCOME TO AL FAN EMIRATES
        </p>

        <div className="hero-line"></div>

        <h1 className="hero-title">
          STYLE FOR
          <br />
          <span>EVERYONE.</span>
        </h1>

        <p className="hero-description">
          Discover fashion, essentials and everyday value
          <br className="desktop-break" />
          for the whole family.
        </p>

        <div className="hero-buttons">

          {/* COLLECTION BUTTON */}
          <a
            href="#collections"
            className="primary-btn"
          >
            <span>Explore Collections</span>

            <span className="button-arrow">
              →
            </span>
          </a>

          {/* STORE BUTTON */}
          <a
            href="#branches"
            className="secondary-btn"
          >
            <span className="store-icon">
              <img
                src="/location-icon.gif"
                alt="Location"
              />
            </span>

            <span>Find Your Store</span>
          </a>

        </div>

        {/* BOTTOM LABELS */}
        <div className="hero-bottom">

          <span>FASHION</span>

          <span className="dot">•</span>

          <span>FAMILY</span>

          <span className="dot">•</span>

          <span>VALUE</span>

        </div>

      </div>

    </section>
  );
}

export default Hero;