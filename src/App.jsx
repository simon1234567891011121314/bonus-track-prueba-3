import { recetas } from './data/recetas';
import RecetaCard from './components/RecetaCard';
import './App.css';

console.log('Recetas cargadas:', recetas);

function App() {
  return (
    <main className="app">
      <header className="app__header">
        <h1>Recetario digital</h1>
        <p>Explora recetas organizadas por categoría y descubre las opciones vegetarianas.</p>
      </header>

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
    </main>
  );
}

export default App;
