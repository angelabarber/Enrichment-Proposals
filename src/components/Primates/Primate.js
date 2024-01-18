export const Primate = ({ primate }) => {
  return (
    <section className="primate" key={primate.id}>
      <header className="primate-info"></header>
      <div className="text">{primate.name}</div>
      <div className="text">Natural Behaviors:{primate.behaviors}</div>
    </section>
  );
};
