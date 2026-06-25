import { useMemo, useState } from 'react';
import { recetas } from './data/recetas';
import FiltroCategoria from './components/FiltroCategoria';
import ListaRecetas from './components/ListaTareas';
import './App.css';

console.log('Recetas cargadas:', recetas);

const MAX_BUSQUEDA = 30;

function App() {
  const [filtroCategoria, setFiltroCategoria] = useState('Todas');
  const [busqueda, setBusqueda] = useState('');

  const recetasFiltradas = useMemo(() => {
    const textoBusqueda = busqueda.trim().toLowerCase().slice(0, MAX_BUSQUEDA);

    return recetas.filter((receta) => {
      const coincideCategoria =
        filtroCategoria === 'Todas' || receta.categoria === filtroCategoria;

      const textoReceta = `${receta.nombre} ${receta.descripcion} ${receta.origen}`.toLowerCase();
      const coincideBusqueda = textoBusqueda.length === 0 || textoReceta.includes(textoBusqueda);

      return coincideCategoria && coincideBusqueda;
    });
  }, [busqueda, filtroCategoria]);

  const manejarBusqueda = (evento) => {
    setBusqueda(evento.target.value);
  };

  return (
    <main className="app">
      <header className="app__header">
        <h1>Recetario digital</h1>
        <p style={{ color: 'white' }}>Explora recetas organizadas por categoría y descubre las opciones vegetarianas.</p>
      </header>

      <section className="app__controles" aria-label="Controles de búsqueda y filtro">
        <input
          type="text"
          value={busqueda}
          onChange={manejarBusqueda}
          placeholder="Buscar por nombre o descripción"
          maxLength={MAX_BUSQUEDA}
          className="app__buscador"
        />
        <FiltroCategoria filtroActual={filtroCategoria} onCambiarFiltro={setFiltroCategoria} />
      </section>

      {recetasFiltradas.length > 0 ? (
        <ListaRecetas recetas={recetasFiltradas} />
      ) : (
        <p className="app__sin-resultados">No hay recetas que coincidan</p>
      )}
    </main>
  );
}

export default App;
