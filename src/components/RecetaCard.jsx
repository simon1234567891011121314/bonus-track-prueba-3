import PropTypes from 'prop-types';

function RecetaCard({
  nombre,
  origen,
  porciones,
  categoria,
  descripcion,
  ingredientes,
  esVegetariana,
}) {
  const categoriaClase = categoria?.toLowerCase() || 'general';
  const claseVegetariana = esVegetariana ? 'receta-card--vegetariana' : '';

  return (
    <article className={`receta-card ${categoriaClase} ${claseVegetariana}`.trim()}>
      <div className="receta-card__header">
        <div>
          <h2>{nombre}</h2>
          <p className="receta-card__origen">{origen}</p>
        </div>
        <div className="receta-card__badges">
          {esVegetariana && <span className="receta-card__veg">VEG</span>}
          <span className="receta-card__badge">{categoria}</span>
        </div>
      </div>

      <p className="receta-card__descripcion">{descripcion}</p>

      <div className="receta-card__meta">
        <span>Porciones: {porciones}</span>
      </div>

      <div className="receta-card__ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          {ingredientes.map((ingrediente) => (
            <li key={ingrediente}>{ingrediente}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

RecetaCard.propTypes = {
  nombre: PropTypes.string,
  origen: PropTypes.string,
  porciones: PropTypes.number,
  categoria: PropTypes.string,
  descripcion: PropTypes.string,
  ingredientes: PropTypes.arrayOf(PropTypes.string),
  esVegetariana: PropTypes.bool,
};

RecetaCard.defaultProps = {
  nombre: 'Receta sin nombre',
  origen: 'Origen no disponible',
  porciones: 1,
  categoria: 'General',
  descripcion: 'Sin descripción disponible.',
  ingredientes: [],
  esVegetariana: false,
};

export default RecetaCard;
