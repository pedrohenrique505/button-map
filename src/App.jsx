import GamepadViewer from './components/GamepadViewer.jsx';
import GamepadVisual from './components/GamepadVisual.jsx';
import EmptyStatePanel from './components/EmptyStatePanel.jsx';
import StatusFooter from './components/StatusFooter.jsx';
import { useGamepads } from './hooks/useGamepads.js';

function App() {
  const gamepads = useGamepads();
  const primaryGamepad = gamepads[0];

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="site-mark" href="#top">
          Button Map
        </a>
        <div className="site-header-meta" aria-label="Session status">
          <span>{gamepads.length > 0 ? 'Controller Active' : 'Device Scan Pending'}</span>
        </div>
      </header>

      <main className="app-main" id="top">
        {gamepads.length === 0 ? (
          <EmptyStatePanel />
        ) : (
          <div className="dashboard-stack">
            <section className="live-intro">
              <p className="eyebrow">Input Session Active</p>
              <h1>Live Controller Diagnostics</h1>
              <p>
                Real-time button and axis telemetry stays visible while the
                connected controller is active.
              </p>
            </section>

            <GamepadVisual gamepad={primaryGamepad} />

            <section
              className="technical-section"
              aria-label="Connected controllers"
            >
              <div className="section-header">
                <p className="eyebrow">Connected Devices</p>
                <h2>Raw Input Stream</h2>
                <p>
                  Every detected controller remains listed below with live button
                  and axis values.
                </p>
              </div>

              <div className="gamepad-list">
                {gamepads.map((gamepad) => (
                  <GamepadViewer key={gamepad.index} gamepad={gamepad} />
                ))}
              </div>
            </section>
          </div>
        )}
      </main>

      <StatusFooter gamepads={gamepads} />
    </div>
  );
}

export default App;
