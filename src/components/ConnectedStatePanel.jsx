import GamepadVisual from './GamepadVisual.jsx';

function ConnectedStatePanel({ primaryGamepad, gamepads, viewerSlot }) {
  return (
    <section className="connected-panel" aria-label="Connected controller diagnostics">
      <div className="connected-sidebar">
        <section className="connected-hero-copy">
          <p className="eyebrow">System Active</p>
          <h1>{primaryGamepad.id}</h1>
        </section>

        <section className="connected-meta-grid" id="calibration">
          <div>
            <p className="eyebrow">Mapping</p>
            <strong>{primaryGamepad.mapping || 'Standard'}</strong>
          </div>
          <div>
            <p className="eyebrow">Index</p>
            <strong>{primaryGamepad.index}</strong>
          </div>
          <div>
            <p className="eyebrow">Controllers</p>
            <strong>{gamepads.length}</strong>
          </div>
        </section>

        <section className="connected-sidebar-block" id="logs">
          <div className="section-header">
            <div>
              <p className="eyebrow">Telemetry</p>
              <h2>Input Stream</h2>
            </div>
          </div>
          <div className="gamepad-list">{viewerSlot}</div>
        </section>
      </div>

      <div className="connected-main">
        <GamepadVisual gamepad={primaryGamepad} />
      </div>
    </section>
  );
}

export default ConnectedStatePanel;
