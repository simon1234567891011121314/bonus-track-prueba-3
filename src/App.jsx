import { recetas } from './data/recetas';
import ListaRecetas from './components/ListaTareas';
import './App.css';

console.log('Recetas cargadas:', recetas);

function App() {
  return (
    <main className="app">
      <header className="app__header">
        <h1>Recetario digital</h1>
        <p style={{ color: 'white' }}>Explora recetas organizadas por categoría y descubre las opciones vegetarianas.</p>
      </header>

      <ListaRecetas recetas={recetas} />
    </main>
  );
}

export default App;
