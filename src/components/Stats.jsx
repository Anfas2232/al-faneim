function Stats() {
  const stats = [
    {
      number: "2006",
      label: "Established Since",
    },
    {
      number: "06+",
      label: "Locations",
    },
    {
      number: "15+",
      label: "Categories",
    },
    {
      number: "1000+",
      label: "Everyday Essentials",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;

