import ControllerHero from './ControllerHero.jsx';

const RESCAN_EVENT_NAME = 'button-map:rescan';

function EmptyStatePanel() {
  function handleManualRescan() {
    window.dispatchEvent(new Event(RESCAN_EVENT_NAME));
  }

  return (
    <section className="empty-panel" aria-label="No connected controller">
      <div className="empty-hero">
        <ControllerHero />

        <div className="empty-copy">
          <h1>NO_GAMEPAD_DETECTED</h1>
          <p>
            Connect your controller via USB or Bluetooth and press any button to
            begin the input test sequence.
          </p>
        </div>

        <div className="empty-actions" aria-label="Connection guidance">
          <button className="primary-action" type="button" onClick={handleManualRescan}>
            Manual Rescan
          </button>
        </div>
      </div>

      <section className="info-grid" id="diagnostics-notes" aria-label="Project notes">
        <div className="info-lead">
          <p className="eyebrow">Project Manifesto</p>
          <h2>Universal Hardware Diagnostics.</h2>
          <p>
            Button Map is a minimal browser-based interface for checking gamepad
            availability and reading live input once a device is detected.
          </p>
          <dl className="info-stats">
            <div>
              <dt>Output</dt>
              <dd>Live Input</dd>
            </div>
            <div>
              <dt>Data</dt>
              <dd>Real Time</dd>
            </div>
            <div>
              <dt>Mode</dt>
              <dd>Local Scan</dd>
            </div>
          </dl>
        </div>

        <div className="info-columns">
          <article>
            <p className="eyebrow">Response Analysis</p>
            <p>
              Once a controller is available, the interface renders button and
              axis telemetry without leaving the page.
            </p>
          </article>
          <article>
            <p className="eyebrow">Mechanical Check</p>
            <p>
              Use the live viewer to verify button presses, trigger travel, stick
              drift, and directional input behavior.
            </p>
          </article>
          <article>
            <p className="eyebrow">Maintenance Log</p>
            <p>
              If no device appears, confirm browser support, reconnect the cable,
              re-pair Bluetooth, and press any button again.
            </p>
          </article>
          <article>
            <p className="eyebrow">Native Support</p>
            <p>
              This project relies on the browser Gamepad API, so behavior may vary
              across operating systems and controllers.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
}

export default EmptyStatePanel;
