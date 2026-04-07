import GamepadViewer from './components/GamepadViewer.jsx';
import GamepadVisual from './components/GamepadVisual.jsx';
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
        <>
          <GamepadVisual gamepad={gamepads[0]} />

          <section className="technical-section" aria-label="Controles conectados">
            <div className="section-header">
              <h2>Listagem técnica</h2>
              <p>
                Todos os controles conectados continuam aparecendo aqui com
                botões e eixos em tempo real.
              </p>
            </div>

            <div className="gamepad-list">
              {gamepads.map((gamepad) => (
                <GamepadViewer key={gamepad.index} gamepad={gamepad} />
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default App;
