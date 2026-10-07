import { MapPin, ExternalLink } from "lucide-react";

function UAEMap({
  onLocationSelect,
  selectedLocation,
}) {
  const locations = [
    {
      name: "Ajman",
      query: "Al Fan Emirates Ajman UAE",
    },
    {
      name: "Sharjah",
      query: "Al Fan Emirates Sharjah UAE",
    },
    {
      name: "Dubai",
      query: "Al Fan Emirates Dubai UAE",
    },
    {
      name: "Abu Dhabi",
      query: "Al Fan Emirates Abu Dhabi UAE",
    },
    {
      name: "Al Ain",
      query: "Al Fan Emirates Al Ain UAE",
    },
    {
      name: "Fujairah",
      query: "Al Fan Emirates Fujairah  UAE",
    } 
  ];

  const mapQuery =
    selectedLocation === "All"
      ? "Al Fan Emirates UAE"
      : `Al Fan Emirates ${selectedLocation} UAE`;

  const mapUrl =
    `https://www.google.com/maps/search/?api=1&query=` +
    encodeURIComponent(mapQuery);

  const embedUrl =
    `https://www.google.com/maps?q=` +
    encodeURIComponent(mapQuery) +
    `&output=embed`;

  return (
    <div className="real-uae-map">

      {/* HEADER */}

      <div className="real-map-header">

        <div>
          <span className="real-map-label">
            AL FAN EMIRATES
          </span>

          <h3>
            Find Us Across UAE
          </h3>
        </div>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="real-map-button"
        >
          Open Google Maps
          <ExternalLink size={16} />
        </a>

      </div>


      {/* LOCATION FILTER */}


      <div className="real-map-locations">

        {locations.map((location) => (

          <button
            type="button"
            key={location.name}
            className={
              selectedLocation === location.name
                ? "real-location-btn active"
                : "real-location-btn"
            }
            onClick={() =>
              onLocationSelect(location.name)
            }
          >
            <MapPin size={15} />

            {location.name}

          </button>

        ))}

      </div>


      {/* REAL GOOGLE MAP */}

      <div className="google-map-wrapper">

        <iframe
          title="Al Fan Emirates UAE Locations"
          src={embedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

      </div>


      {/* FOOTER */}

      <div className="real-map-footer">

        <div className="real-map-status">

          <span className="map-live-dot"></span>

          <span>
            {selectedLocation === "All"
              ? "Showing Al Fan Emirates locations across UAE"
              : `Showing ${selectedLocation} location`}
          </span>

        </div>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions →
        </a>

      </div>

    </div>
  );
}

export default UAEMap;

