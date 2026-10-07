
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

//       {/* Background Video */}
//       <video
//         className="hero-video"
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="auto"
//       >
//         <source src="/videos/hero.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Dark cinematic overlay */}
//       <div className="hero-overlay"></div>

//       {/* Gold light effect */}
//       <div className="gold-light"></div>

//       {/* Floating particles */}
//       <div className="particles">
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       {/* Hero Content */}
//       <div className="hero-content">

//         <div className="brand-line">
//           <span></span>
//           AL FAN EMIRATES
//           <span></span>
//         </div>

//         <h1>
//           STYLE
//           <br />
//           <span>FOR EVERYONE.</span>
//         </h1>

//         <p>
//           Discover fashion, essentials and everyday value
//           <br />
//           for the whole family.
//         </p>

//         <div className="hero-buttons">
//           <a href="#collections" className="hero-btn primary">
//             Explore Collections
//             <span>→</span>
//           </a>

//           <a href="#branches" className="hero-btn secondary">
//             Find Your Store
//           </a>
//         </div>

//       </div>

//       {/* Scroll indicator */}
//       <a href="#collections" className="scroll-indicator">
//         <span className="scroll-line"></span>
//         <span>SCROLL TO EXPLORE</span>
//       </a>

//     </section>
//   );
// }

// export default Hero;


import { useEffect, useRef } from "react";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      const x = (clientX / window.innerWidth - 0.5) * 2;
      const y = (clientY / window.innerHeight - 0.5) * 2;

      hero.style.setProperty("--mouse-x", `${x}`);
      hero.style.setProperty("--mouse-y", `${y}`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToCollections = () => {
    const section = document.getElementById("collections");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const scrollToBranches = () => {
    const section = document.getElementById("branches");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={heroRef}
      className="hero-video-section"
      id="home"
    >
      {/* =================================
          BACKGROUND VIDEO
      ================================= */}

      <div className="hero-video-wrapper">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/al-fan-hero.png"
        >
          <source
            src="/videos/hero.mp4"
            type="video/mp4"
          />

          Your browser does not support HTML5 video.
        </video>
      </div>


      {/* =================================
          CINEMATIC OVERLAY
      ================================= */}

      <div className="hero-dark-overlay"></div>

      <div className="hero-gradient-overlay"></div>


      {/* =================================
          GOLD LIGHT EFFECT
      ================================= */}

      <div className="hero-gold-light"></div>


      {/* =================================
          FLOATING PARTICLES
      ================================= */}

      <div className="hero-particles" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>


      {/* =================================
          HERO CONTENT
      ================================= */}

      <div className="hero-video-container">

        <div className="hero-video-content">

          {/* EYEBROW */}

          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line"></span>

            <span>
              WELCOME TO AL FAN EMIRATES
            </span>

            <span className="hero-eyebrow-line"></span>
          </div>


          {/* HEADING */}

          <h1 className="hero-video-title">

            <span className="hero-title-line hero-title-small">
              STYLE
            </span>

            <span className="hero-title-line">
              FOR
            </span>

            <span className="hero-title-line hero-title-gold">
              EVERYONE.
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p className="hero-video-description">
            Discover fashion, footwear and everyday
            essentials made for the whole family.
          </p>


          {/* CTA BUTTONS */}

          <div className="hero-video-actions">

            <button
              type="button"
              className="hero-primary-btn"
              onClick={scrollToCollections}
            >
              <span>
                Explore Collections
              </span>

              <ArrowRight size={18} />
            </button>


            <button
              type="button"
              className="hero-secondary-btn"
              onClick={scrollToBranches}
            >
              <MapPin size={18} />

              <span>
                Find Your Store
              </span>
            </button>

          </div>


          {/* BOTTOM STATS */}

          <div className="hero-video-meta">

            <div className="hero-meta-item">
              <strong>25+</strong>
              <span>Years of Trust</span>
            </div>

            <div className="hero-meta-divider"></div>

            <div className="hero-meta-item">
              <strong>6</strong>
              <span>UAE Locations</span>
            </div>

            <div className="hero-meta-divider"></div>

            <div className="hero-meta-item">
              <strong>1000+</strong>
              <span>Products</span>
            </div>

          </div>

        </div>

      </div>


      {/* =================================
          SCROLL INDICATOR
      ================================= */}

      <button
        type="button"
        className="hero-scroll-indicator"
        onClick={scrollToCollections}
        aria-label="Scroll to collections"
      >
        <span className="hero-scroll-text">
          SCROLL TO EXPLORE
        </span>

        <span className="hero-scroll-icon">
          <ChevronDown size={18} />
        </span>
      </button>


      {/* =================================
          SIDE LABEL
      ================================= */}

      <div className="hero-side-label">
        AL FAN EMIRATES
      </div>

    </section>
  );
}

export default Hero;

