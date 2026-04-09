import GamepadViewer from './components/GamepadViewer.jsx';
import ConnectedStatePanel from './components/ConnectedStatePanel.jsx';
import EmptyStatePanel from './components/EmptyStatePanel.jsx';
import StatusFooter from './components/StatusFooter.jsx';
import { useGamepads } from './hooks/useGamepads.js';

function App() {
  const gamepads = useGamepads();
  const primaryGamepad = gamepads[0];

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header-left">
          <a className="site-mark" href="#top">
            Button Map
          </a>
          <nav className="site-nav" aria-label="Primary">
            <a href="#devices">Devices</a>
            <a href="#calibration">Calibration</a>
            <a href="#logs">Logs</a>
          </nav>
        </div>
        <div className="site-header-meta" aria-label="Session status">
          <span>{gamepads.length > 0 ? 'Ver 1.0.4' : 'Device Scan Pending'}</span>
        </div>
      </header>

      <main className="app-main" id="top">
        {gamepads.length === 0 ? (
          <EmptyStatePanel />
        ) : (
          <ConnectedStatePanel
            primaryGamepad={primaryGamepad}
            gamepads={gamepads}
            viewerSlot={gamepads.map((gamepad) => (
              <GamepadViewer key={gamepad.index} gamepad={gamepad} />
            ))}
          />
        )}
      </main>

      <StatusFooter gamepads={gamepads} />
    </div>
  );
}

export default App;
