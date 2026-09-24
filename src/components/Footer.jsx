

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faWhatsapp,
  faTiktok,
  faInstagram,
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";


function Footer() {
  const quickLinks = [
    ["Home", "#home"],
    ["Collections", "#collections"],
    ["Offers", "#offers"],
    ["Branches", "#branches"],
    ["Why Us", "#why-us"],
  ];


  const locations = [
    "Ajman",
    "Sharjah",
    "Dubai",
    "Abu Dhabi",
    "Al Ain",
    "Fujairah",
  ];


  const socialLinks = [
    {
      name: "WhatsApp",
      icon: faWhatsapp,
      url: "https://wa.me/971565953837",
    },
    {
      name: "TikTok",
      icon: faTiktok,
      url: "https://www.tiktok.com/@alfaneim_official?is_from_webapp=1&sender_device=pc",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      url: "https://share.google/bzREidPOEs1wyAkvu",
    },
    {
      name: "Facebook",
      icon: faFacebookF,
      url: "https://share.google/p9mu03kATDsQXUj5g",
    },
    {
      name: "YouTube",
      icon: faYoutube,
      url: "https://share.google/5RYcavykQynE24ocX",
    },
    {
      name: "LinkedIn",
      icon: faLinkedinIn,
      url: "https://share.google/W13m74ezVGwIud9SS",
    },
    {
      name: "X",
      icon: faXTwitter,
      url: "https://share.google/DnDdZsWzUIOoHpuvq",
    },
  ];


  return (
    <footer className="footer">

      {/* TOP GOLD LINE */}
      <div className="footer-gold-line"></div>


      <div className="footer-container">


        {/* ================= BRAND ================= */}

        <div className="footer-brand">

          <a
            href="#home"
            className="footer-logo"
          >

            <span className="footer-logo-main">
              AL FAN
            </span>

            <span className="footer-logo-sub">
              EMIRATES
            </span>

          </a>


          <p className="footer-description">
            Everyday fashion, footwear and essentials
            made for the whole family across the UAE.
          </p>


          {/* SOCIAL */}

          <div className="footer-socials">

            {socialLinks.map((social) => (

              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-${social.name.toLowerCase()}`}
                aria-label={social.name}
                title={social.name}
              >

                <FontAwesomeIcon
                  icon={social.icon}
                />

              </a>

            ))}

          </div>

        </div>


        {/* ================= QUICK LINKS ================= */}

        <div className="footer-column">

          <span className="footer-column-label">
            EXPLORE
          </span>

          <h3>
            Quick Links
          </h3>


          <div className="footer-links">

            {quickLinks.map(
              ([label, link]) => (

                <a
                  href={link}
                  key={label}
                >

                  <span>
                    {label}
                  </span>

                  <span className="footer-arrow">
                    →
                  </span>

                </a>

              )
            )}

          </div>

        </div>


        {/* ================= LOCATIONS ================= */}

        <div className="footer-column">

          <span className="footer-column-label">
            VISIT US
          </span>

          <h3>
            Our Locations
          </h3>


          <div className="footer-links">

            {locations.map(
              (location) => (

                <a
                  href="#branches"
                  key={location}
                >

                  <span className="footer-location">

                    <span className="location-dot">
                      •
                    </span>

                    {location}

                  </span>

                </a>

              )
            )}

          </div>

        </div>


        {/* ================= CONTACT ================= */}

        <div className="footer-column">

          <span className="footer-column-label">
            GET IN TOUCH
          </span>

          <h3>
            Contact Us
          </h3>


          <div className="footer-contact">


            <a href="tel:+971565953837">

              <span className="contact-icon">
                ☎
              </span>

              <span>
                +971 56 595 3837
              </span>

            </a>


            <a href="mailto:info@alfanemirates.com">

              <span className="contact-icon">
                @
              </span>

              <span>
                info@alfanemirates.com
              </span>

            </a>


          </div>


          <a
            href="https://wa.me/971565953837"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >

            <FontAwesomeIcon
              icon={faWhatsapp}
            />

            <span>
              Chat on WhatsApp
            </span>

            <span className="whatsapp-arrow">
              ↗
            </span>

          </a>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-inner">

          <p>
            © 2026 <strong>Al Fan Emirates</strong>.
            All rights reserved.
          </p>


          <div className="footer-bottom-links">

            <a href="#home">
              Privacy
            </a>

            <span>•</span>

            <a href="#home">
              Terms
            </a>

          </div>


          <p className="footer-made">
            Made for families across the UAE
            <span>♥</span>
          </p>

        </div>

      </div>

    </footer>
  );
}


export default Footer;

