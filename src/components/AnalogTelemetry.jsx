function formatPercent(value) {
  return `${(value * 100).toFixed(1)}%`;
}

function getAxisValue(gamepad, index) {
  return gamepad.axes[index] ?? 0;
}

function AnalogField({ label, xValue, yValue, xName, yName }) {
  return (
    <article className="analog-field">
      <div className="analog-circle-wrap">
        <p className="eyebrow">{label}</p>
        <div className="analog-circle">
          <span className="analog-crosshair analog-crosshair-x"></span>
          <span className="analog-crosshair analog-crosshair-y"></span>
          <span
            className="analog-pointer"
            style={{
              transform: `translate(calc(-50% + ${xValue * 31}px), calc(-50% + ${yValue * 31}px))`,
            }}
          ></span>
        </div>
      </div>

      <div className="analog-readout">
        <div>
          <span>{xName}</span>
          <strong>{formatPercent(xValue)}</strong>
        </div>
        <div>
          <span>{yName}</span>
          <strong>{formatPercent(yValue)}</strong>
        </div>
      </div>
    </article>
  );
}

function AnalogTelemetry({ gamepad }) {
  return (
    <section className="connected-sidebar-block">
      <div className="section-header">
        <div>
          <p className="eyebrow">Analog Tracking</p>
          <h2>Stick Coordinates</h2>
        </div>
      </div>

      <div className="analog-telemetry-grid">
        <AnalogField
          label="L-Stick"
          xValue={getAxisValue(gamepad, 0)}
          yValue={getAxisValue(gamepad, 1)}
          xName="LX Axis"
          yName="LY Axis"
        />
        <AnalogField
          label="R-Stick"
          xValue={getAxisValue(gamepad, 2)}
          yValue={getAxisValue(gamepad, 3)}
          xName="RX Axis"
          yName="RY Axis"
        />
      </div>
    </section>
  );
}

export default AnalogTelemetry;
