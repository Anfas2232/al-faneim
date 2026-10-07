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

import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { useNavigate } from "react-router-dom";


function Footer() {
  const navigate = useNavigate();

  const quickLinks = [
    ["Home", "/"],
    ["Collections", "/#collections"],
    ["Offers", "/#offers"],
    ["Branches", "/#branches"],
    ["Why Us", "/#why-us"],
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
      className: "social-whatsapp",
    },
    {
      name: "TikTok",
      icon: faTiktok,
      url: "https://www.tiktok.com/@alfaneim_official?is_from_webapp=1&sender_device=pc",
      className: "social-tiktok",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      url: "https://share.google/bzREidPOEs1wyAkvu",
      className: "social-instagram",
    },
    {
      name: "Facebook",
      icon: faFacebookF,
      url: "https://share.google/p9mu03kATDsQXUj5g",
      className: "social-facebook",
    },
    {
      name: "YouTube",
      icon: faYoutube,
      url: "https://share.google/5RYcavykQynE24ocX",
      className: "social-youtube",
    },
    {
      name: "LinkedIn",
      icon: faLinkedinIn,
      url: "https://share.google/W13m74ezVGwIud9SS",
      className: "social-linkedin",
    },
    {
      name: "X",
      icon: faXTwitter,
      url: "https://share.google/DnDdZsWzUIOoHpuvq",
      className: "social-x",
    },
  ];


  const handleQuickLink = (link) => {
    if (link === "/") {
      navigate("/");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    if (link.startsWith("/#")) {
      const sectionId = link.replace("/#", "");

      if (window.location.pathname === "/") {
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

      navigate(link);
    }
  };


  const handleLocation = () => {
    if (window.location.pathname === "/") {
      const section =
        document.getElementById("branches");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    navigate("/#branches");
  };


  return (
    <footer className="footer">

      {/* GOLD TOP LINE */}

      <div className="footer-gold-line"></div>


      <div className="footer-container">

        {/* =========================
            BRAND
        ========================== */}

        <div className="footer-brand">

          <button
            type="button"
            className="footer-logo"
            onClick={() =>
              handleQuickLink("/")
            }
            aria-label="Go to Al Fan Emirates home"
          >

            <span className="footer-logo-main">
              AL FAN
            </span>

            <span className="footer-logo-sub">
              EMIRATES
            </span>

          </button>


          <p className="footer-description">
            Everyday fashion, footwear and
            essentials made for the whole family
            across the UAE.
          </p>


          <div className="footer-brand-meta">

            <span>
              QUALITY
            </span>

            <span>•</span>

            <span>
              VALUE
            </span>

            <span>•</span>

            <span>
              FAMILY
            </span>

          </div>


          {/* SOCIAL */}

          <div className="footer-socials">

            {socialLinks.map((social) => (

              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`footer-social ${social.className}`}
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


        {/* =========================
            QUICK LINKS
        ========================== */}

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

                <button
                  type="button"
                  key={label}
                  onClick={() =>
                    handleQuickLink(link)
                  }
                >

                  <span>
                    {label}
                  </span>

                  <ArrowRight
                    size={14}
                    className="footer-arrow"
                  />

                </button>

              )
            )}

          </div>

        </div>


        {/* =========================
            LOCATIONS
        ========================== */}

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

                <button
                  type="button"
                  key={location}
                  onClick={handleLocation}
                >

                  <span className="footer-location">

                    <MapPin
                      size={13}
                    />

                    {location}

                  </span>

                  <ArrowRight
                    size={13}
                    className="footer-arrow"
                  />

                </button>

              )
            )}

          </div>

        </div>


        {/* =========================
            CONTACT
        ========================== */}

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
                <Phone size={15} />
              </span>

              <span>
                +971 56 595 3837
              </span>

            </a>


            <a href="mailto:info@alfanemirates.com">

              <span className="contact-icon">
                <Mail size={15} />
              </span>

              <span>
                info@alfanemirates.com
              </span>

            </a>

          </div>


          {/* WHATSAPP CTA */}

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

            <ArrowUpRight
              size={16}
              className="whatsapp-arrow"
            />

          </a>

        </div>

      </div>


      {/* =========================
          BOTTOM
      ========================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-inner">

          <p>
            © 2026{" "}
            <strong>
              Al Fan Emirates
            </strong>
            . All rights reserved.
          </p>


          <div className="footer-bottom-links">

            <button type="button">
              Privacy
            </button>

            <span>•</span>

            <button type="button">
              Terms
            </button>

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

