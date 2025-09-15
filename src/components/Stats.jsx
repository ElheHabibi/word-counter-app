function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfChar} label="characters" />
      <Stat number={stats.numberOfWords} label="words" />
      <Stat number={stats.sentences} label="sentences" />
      <Stat number={stats.instagramLeft} label="instagram" />
    </section>
  );
}

export default Stats;

function Stat({ label, number }) {
  return (
    <div className="stat">
      <span className={`stat__number ${number < 0 ? 'stat__number--limit' : ''}`} >{number}</span>
      <h2 className="stat__name">{label}</h2>
    </div>
  );
}
