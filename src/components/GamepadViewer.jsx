function formatValue(value) {
  return Number(value).toFixed(3);
}

function formatButtonIndex(index) {
  return `B${String(index).padStart(1, '0')}`;
}

function countActiveButtons(buttons) {
  return buttons.filter((button) => button.pressed).length;
}

function GamepadViewer({ gamepad }) {
  const digitalButtons = gamepad.buttons.slice(0, 12);

  return (
    <article className="gamepad-card">
      <header className="gamepad-header">
        <div>
          <p className="eyebrow">Device Profile</p>
          <h2>{gamepad.id}</h2>
          <p>Index: {gamepad.index}</p>
        </div>

        <dl className="gamepad-summary">
          <div>
            <dt>Buttons</dt>
            <dd>{gamepad.buttons.length}</dd>
          </div>
          <div>
            <dt>Axes</dt>
            <dd>{gamepad.axes.length}</dd>
          </div>
          <div>
            <dt>Active</dt>
            <dd>{countActiveButtons(gamepad.buttons)}</dd>
          </div>
        </dl>
      </header>

      <section className="telemetry-block">
        <div className="telemetry-block-header">
          <h3>Digital Inputs</h3>
          <span>B0 → B11</span>
        </div>

        <div className="digital-grid">
          {digitalButtons.map((button, index) => (
            <div className={`digital-cell ${button.pressed ? 'is-active' : ''}`} key={index}>
              <span>{formatButtonIndex(index)}</span>
              <strong>{button.pressed ? 'Active' : 'Idle'}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="telemetry-block">
        <div className="telemetry-block-header">
          <h3>Axis Offsets</h3>
          <span>A0 → A{Math.max(gamepad.axes.length - 1, 0)}</span>
        </div>

        <div className="input-grid">
          {gamepad.axes.map((axisValue, index) => (
            <div className="input-row" key={index}>
              <span>Axis {index}</span>
              <span>{axisValue > 0 ? 'positive' : axisValue < 0 ? 'negative' : 'neutral'}</span>
              <span>value: {formatValue(axisValue)}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

export default GamepadViewer;
