function formatValue(value) {
  return Number(value).toFixed(3);
}

function GamepadViewer({ gamepad }) {
  return (
    <article className="gamepad-card">
      <header className="gamepad-header">
        <div>
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
        </dl>
      </header>

      <section>
        <h3>Buttons</h3>
        <div className="input-grid">
          {gamepad.buttons.map((button, index) => (
            <div
              className={`input-row ${button.pressed ? 'is-active' : ''}`}
              key={index}
            >
              <span>Button {index}</span>
              <span>{button.pressed ? 'pressed' : 'idle'}</span>
              <span>value: {formatValue(button.value)}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>Axes</h3>
        <div className="input-grid">
          {gamepad.axes.map((axisValue, index) => (
            <div className="input-row" key={index}>
              <span>Axis {index}</span>
              <span>value: {formatValue(axisValue)}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

export default GamepadViewer;
