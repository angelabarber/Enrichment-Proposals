export const Primate = ({ primate }) => {
  return (
    <section className="primate" key={primate.id}>
      <header className="primate-info"></header>
      <div className="text">{primate.name}</div>
      <img className="photos" alt={primate} src={primate.image}></img>
      <div></div>
    </section>
  );
};
