import { recetas } from './data/recetas';

console.log('Recetas cargadas:', recetas);

function App() {
  return (
    <main>
      <h1>Recetario digital</h1>
      <p>Recetas cargadas: {recetas.length}</p>
    </main>
  );
}

export default App;
