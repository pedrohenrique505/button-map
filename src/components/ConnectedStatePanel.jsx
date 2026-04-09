import AnalogTelemetry from './AnalogTelemetry.jsx';
import GamepadVisual from './GamepadVisual.jsx';

function formatDeviceLabel(id) {
  return id
    .replace(/\(.*?\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toUpperCase();
}

function ConnectedStatePanel({ primaryGamepad, gamepads, viewerSlot }) {
  const deviceLabel = formatDeviceLabel(primaryGamepad.id);

  return (
    <section className="connected-panel" aria-label="Connected controller diagnostics">
      <div className="connected-sidebar">
        <section className="connected-hero-copy">
          <p className="eyebrow">System Active</p>
          <h1>
            <span>Connected:</span>
            <br />
            {deviceLabel}
          </h1>
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

        <AnalogTelemetry gamepad={primaryGamepad} />

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
