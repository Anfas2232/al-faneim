import { useEffect, useState } from "react";

import {
  ShieldCheck,
  MapPin,
  PackageCheck,
  Heart,
} from "lucide-react";


function AnimatedNumber({ value, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1400;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        start = value;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}


function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      number: 25,
      suffix: "+",
      title: "Years of Trust",
      description:
        "Serving families with quality products and everyday value.",
    },
    {
      icon: MapPin,
      number: 6,
      suffix: "",
      title: "UAE Locations",
      description:
        "Convenient stores across major cities in the UAE.",
    },
    {
      icon: PackageCheck,
      number: 1000,
      suffix: "+",
      title: "Products",
      description:
        "Fashion, footwear and everyday essentials for everyone.",
    },
    {
      icon: Heart,
      number: 1,
      suffix: "",
      title: "Family First",
      description:
        "A shopping experience designed around families and their needs.",
    },
  ];


  return (
    <section
      className="why-section"
      id="why-us"
      aria-labelledby="why-section-title"
    >

      <div className="why-container">

        {/* =========================
            HEADER
        ========================== */}

        <div className="why-header">

          <div className="why-heading">

            <span className="section-label">
              WHY AL FAN EMIRATES
            </span>

            <h2 id="why-section-title">
              More Than
              <br />
              <span>Shopping.</span>
            </h2>

          </div>


          <div className="why-header-content">

            <p>
              We bring together quality, value and
              convenience to make everyday shopping
              better for families across the UAE.
            </p>

            <span className="why-header-note">
              QUALITY • VALUE • FAMILY
            </span>

          </div>

        </div>


        {/* =========================
            FEATURES
        ========================== */}

        <div className="why-grid">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <article
                className="why-card"
                key={feature.title}
              >

                {/* NUMBER */}

                <span
                  className="why-card-number"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>


                {/* ICON */}

                <div
                  className="why-icon"
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>


                {/* STAT */}

                <div className="why-number">
                  <AnimatedNumber
                    value={feature.number}
                    suffix={feature.suffix}
                  />
                </div>


                {/* TITLE */}

                <h3>
                  {feature.title}
                </h3>


                {/* DESCRIPTION */}

                <p>
                  {feature.description}
                </p>


                {/* BOTTOM LINE */}

                <div
                  className="why-card-line"
                  aria-hidden="true"
                />

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
}


export default WhyChooseUs;


