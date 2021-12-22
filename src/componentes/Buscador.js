const Buscador = ({ search, sugerencia }) => {
  return (
    <div className="">
      <form action="#">
        <input
          type="text"
          placeholder="Buscar"
          onChange={(evento) => {
            search(evento.target.value);
          }}
        />
      </form>
      <div>
        {sugerencia.map((elemento) => (
          <div>
            <h2>{elemento.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Buscador;
