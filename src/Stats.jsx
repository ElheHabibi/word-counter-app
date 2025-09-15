function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfChar} label="CHARACTERS" />
      <Stat number={stats.numberOfWords} label="WORDS" />
      <Stat number={stats.instagramLeft} label="INSTAGRAM" />
      <Stat number={stats.threadsLeft} label="THREADS" />
    </section>
  );
}

export default Stats;

function Stat({ label, number }) {
  return (
    <div className="stat">
      <h2>{number}</h2>
      <p>{label}</p>
    </div>
  );
}
