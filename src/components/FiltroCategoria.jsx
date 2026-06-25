import PropTypes from 'prop-types';

const categorias = ['Todas', 'Entrada', 'Fondo', 'Postre'];

function FiltroCategoria({ filtroActual, onCambiarFiltro }) {
  return (
    <div className="filtro-categoria" role="group" aria-label="Filtrar recetas por categoría">
      {categorias.map((categoria) => {
        const activo = filtroActual === categoria;
        return (
          <button
            key={categoria}
            type="button"
            className={`filtro-categoria__boton ${activo ? 'activo' : ''}`}
            onClick={() => onCambiarFiltro(categoria)}
          >
            {categoria}
          </button>
        );
      })}
    </div>
  );
}

FiltroCategoria.propTypes = {
  filtroActual: PropTypes.string.isRequired,
  onCambiarFiltro: PropTypes.func.isRequired,
};

export default FiltroCategoria;
