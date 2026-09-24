import { useState } from "react";

import {
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import UAEMap from "./UAEMap";

function BranchFinder() {
  const [selectedLocation, setSelectedLocation] =
    useState("All");

  const branches = [
    {
      name: "Ajman Branch ",
      city: "Ajman",
      location: "Ajman, UAE",
      hours: "Open Daily • 08:00 AM - 01:00 AM",
      phone: "+971 56 595 3837",
      mapQuery: "Al Fan Emirates Ajman UAE",
      openHour: 9,
      closeHour: 24,
    },
    // {
    //   name: "Ajman Branch 2",
    //   city: "Ajman",
    //   location: "Ajman, UAE",
    //   hours: "Open Daily • 08:00 AM - 01:00 AM",
    //   phone: "+971 56 595 3837",
    //   mapQuery: "Al Fan Emirates Ajman UAE",
    //   openHour: 9,
    //   closeHour: 24,
    // },
    {
      name: "Sharjah Branch",
      city: "Sharjah",
      location: "Sharjah, UAE",
      hours: "Open Daily • 08:00 AM - 01:00 AM",
      phone: "+971 56 595 3837",
      mapQuery: "Al Fan Emirates Sharjah UAE",
      openHour: 9,
      closeHour: 24,
    },
    {
      name: "Abu Dhabi Branch",
      city: "Abu Dhabi",
      location: "Abu Dhabi, UAE",
      hours: "Open Daily • 08:00 AM - 01:00 AM",
      phone: "+971 56 595 3837",
      mapQuery: "Al Fan Emirates Abu Dhabi UAE",
      openHour: 9,
      closeHour: 24,
    },
    {
      name: "Al Ain Branch",
      city: "Al Ain",
      location: "Al Ain, UAE",
      hours: "Open Daily • 08:00 AM - 01:00 AM",
      phone: "+971 56 595 3837",
      mapQuery: "Al Fan Emirates Al Ain UAE",
      openHour: 9,
      closeHour: 24,
    },
    {
      name: "Fujairah Branch",
      city: "Fujairah",
      location: "Fujairah, UAE",
      hours: "Open Daily • 08:00 AM - 01:00 AM",
      phone: "+971 56 595 3837",
      mapQuery: "Al Fan Emirates Fujairah  UAE",
      openHour: 9,
      closeHour: 24,
    },
    {
      name: "Dubai Branch",
      city: "Dubai",
      location: "Dubai, UAE",
      hours: "Open Daily • 08:00 AM - 01:00 AM",
      phone: "+971 56 595 3837",
      mapQuery: "Al Fan Emirates Dubai UAE",
      openHour: 9,
      closeHour: 24,
    },
  ];

  const locations = [
    "All",
    "Ajman",
    "Sharjah",
    "Dubai",
    "Abu Dhabi",
    "Al Ain",
    "Fujairah",
  ];

  const filteredBranches =
    selectedLocation === "All"
      ? branches
      : branches.filter(
          (branch) =>
            branch.city === selectedLocation
        );

  const isBranchOpen = (branch) => {
    const now = new Date();

    const currentHour =
      now.getHours() + now.getMinutes() / 60;

    return (
      currentHour >= branch.openHour &&
      currentHour < branch.closeHour
    );
  };

  const handleViewBranch = (mapQuery) => {
    const url =
      `https://www.google.com/maps/search/?api=1&query=` +
      encodeURIComponent(mapQuery);

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleCall = (phone) => {
    window.location.href = `tel:${phone.replace(
      /\s/g,
      ""
    )}`;
  };

  const handleWhatsApp = (
    phone,
    branchName
  ) => {
    const cleanPhone = phone.replace(
      /\D/g,
      ""
    );

    const message = encodeURIComponent(
      `Hello Al Fan Emirates, I would like to know more about ${branchName}.`
    );

    window.open(
      `https://wa.me/${cleanPhone}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className="branch-section"
      id="branches"
      aria-labelledby="branch-section-title"
    >
      <div className="branch-container">

        {/* HEADER */}

        <div className="branch-header">

          <div>
            <span className="section-label">
              OUR LOCATIONS
            </span>

            <h2 id="branch-section-title">
              Find Your
              <br />
              <span>Nearest Store.</span>
            </h2>
          </div>``

          <p>
            Visit your nearest Al Fan Emirates
            branch and explore our latest
            collections, everyday essentials
            and special offers.
          </p>

        </div>


        {/* FILTER */}

        <div className="branch-filter">

          {locations.map((location) => (

            <button
              type="button"
              key={location}
              className={
                selectedLocation === location
                  ? "filter-btn active"
                  : "filter-btn"
              }
              onClick={() =>
                setSelectedLocation(location)
              }
              aria-pressed={
                selectedLocation === location
              }
            >
              {location === "All"
                ? "All Locations"
                : location}
            </button>

          ))}

        </div>


        {/* MAP */}

        <UAEMap
          onLocationSelect={setSelectedLocation}
          selectedLocation={selectedLocation}
        />


        {/* BRANCH CARDS */}

        <div className="branch-grid">

          {filteredBranches.map(
            (branch, index) => {

              const branchOpen =
                isBranchOpen(branch);

              return (
                <article
                  className="branch-card"
                  key={branch.name}
                  aria-labelledby={`branch-title-${index}`}
                >

                  <div
                    className="branch-number"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>


                  <div className="branch-card-content">

                    {/* STATUS */}

                    <div
                      className={
                        branchOpen
                          ? "branch-status"
                          : "branch-status closed"
                      }
                    >
                      <span className="status-dot"></span>

                      {branchOpen
                        ? "OPEN NOW"
                        : "CLOSED"}
                    </div>


                    <h3
                      id={`branch-title-${index}`}
                    >
                      {branch.name}
                    </h3>


                    {/* LOCATION */}

                    <div className="branch-detail">

                      <MapPin
                        size={16}
                        aria-hidden="true"
                      />

                      <span>
                        {branch.location}
                      </span>

                    </div>


                    {/* HOURS */}

                    <div className="branch-detail">

                      <Clock
                        size={16}
                        aria-hidden="true"
                      />

                      <span>
                        {branch.hours}
                      </span>

                    </div>


                    {/* PHONE */}

                    <button
                      type="button"
                      className="branch-contact"
                      onClick={() =>
                        handleCall(branch.phone)
                      }
                      aria-label={`Call ${branch.name} at ${branch.phone}`}
                    >

                      <Phone
                        size={16}
                        aria-hidden="true"
                      />

                      <span>
                        {branch.phone}
                      </span>

                    </button>

                  </div>


                  {/* ACTIONS */}

                  <div className="branch-actions">

                    <button
                      type="button"
                      className="branch-btn"
                      onClick={() =>
                        handleViewBranch(
                          branch.mapQuery
                        )
                      }
                      aria-label={`View ${branch.name} on Google Maps`}
                    >
                      <span>
                        View Branch
                      </span>

                      <ArrowRight
                        size={17}
                        aria-hidden="true"
                      />
                    </button>


                    <button
                      type="button"
                      className="branch-whatsapp"
                      onClick={() =>
                        handleWhatsApp(
                          branch.phone,
                          branch.name
                        )
                      }
                      aria-label={`Contact ${branch.name} on WhatsApp`}
                      title={`WhatsApp ${branch.name}`}
                    >
                      <MessageCircle
                        size={18}
                        aria-hidden="true"
                      />
                    </button>

                  </div>

                </article>
              );
            }
          )}

        </div>

      </div>
    </section>
  );
}

export default BranchFinder;