export const Primate = ({ primate }) => {
  return (
    <section className="primate" key={primate.id}>
      <header className="primate-info"></header>
      <div className="primate-info">{primate.name}</div>
      <div className="primate-info">Natural Behaviors:{primate.behaviors}</div>
    </section>
  );
};
