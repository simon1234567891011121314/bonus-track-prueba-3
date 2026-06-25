import PropTypes from 'prop-types';

function RecetaCard({
  nombre,
  origen,
  porciones,
  categoria,
  descripcion,
  ingredientes,
}) {
  const categoriaClase = categoria?.toLowerCase() || 'general';

  return (
    <article className={`receta-card ${categoriaClase}`}>
      <div className="receta-card__header">
        <div>
          <h2>{nombre}</h2>
          <p className="receta-card__origen">{origen}</p>
        </div>
        <span className="receta-card__badge">{categoria}</span>
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
};

RecetaCard.defaultProps = {
  nombre: 'Receta sin nombre',
  origen: 'Origen no disponible',
  porciones: 1,
  categoria: 'General',
  descripcion: 'Sin descripción disponible.',
  ingredientes: [],
};

export default RecetaCard;
