import PropTypes from 'prop-types';
import RecetaCard from './RecetaCard';

function ListaRecetas({ recetas }) {
  return (
    <section className="app__grid" aria-label="Listado de recetas">
      {recetas.map((receta) => (
        <RecetaCard
          key={receta.id}
          nombre={receta.nombre}
          origen={receta.origen}
          porciones={receta.porciones}
          categoria={receta.categoria}
          descripcion={receta.descripcion}
          ingredientes={receta.ingredientes}
        />
      ))}
    </section>
  );
}

ListaRecetas.propTypes = {
  recetas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string,
      origen: PropTypes.string,
      porciones: PropTypes.number,
      categoria: PropTypes.string,
      descripcion: PropTypes.string,
      ingredientes: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

ListaRecetas.defaultProps = {
  recetas: [],
};

export default ListaRecetas;
