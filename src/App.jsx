import GamepadViewer from './components/GamepadViewer.jsx';
import { useGamepads } from './hooks/useGamepads.js';

function App() {
  const gamepads = useGamepads();

  return (
    <main className="app">
      <header className="app-header">
        <h1>Button Map</h1>
        <p>
          Conecte um controle e pressione qualquer botão para ver os inputs em
          tempo real.
        </p>
      </header>

      {gamepads.length === 0 ? (
        <section className="empty-state">
          <h2>Nenhum controle conectado</h2>
          <p>
            Alguns navegadores só liberam a Gamepad API depois que você aperta
            um botão no controle.
          </p>
        </section>
      ) : (
        <section className="gamepad-list" aria-label="Controles conectados">
          {gamepads.map((gamepad) => (
            <GamepadViewer key={gamepad.index} gamepad={gamepad} />
          ))}
        </section>
      )}
    </main>
  );
}

export default App;
