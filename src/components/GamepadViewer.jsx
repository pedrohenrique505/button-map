function formatValue(value) {
  return Number(value).toFixed(3);
}

function GamepadViewer({ gamepad }) {
  return (
    <article className="gamepad-card">
      <header className="gamepad-header">
        <div>
          <h2>{gamepad.id}</h2>
          <p>Índice: {gamepad.index}</p>
        </div>

        <dl className="gamepad-summary">
          <div>
            <dt>Botões</dt>
            <dd>{gamepad.buttons.length}</dd>
          </div>
          <div>
            <dt>Eixos</dt>
            <dd>{gamepad.axes.length}</dd>
          </div>
        </dl>
      </header>

      <section>
        <h3>Botões</h3>
        <div className="input-grid">
          {gamepad.buttons.map((button, index) => (
            <div
              className={`input-row ${button.pressed ? 'is-active' : ''}`}
              key={index}
            >
              <span>Botão {index}</span>
              <span>{button.pressed ? 'pressionado' : 'solto'}</span>
              <span>valor: {formatValue(button.value)}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3>Eixos</h3>
        <div className="input-grid">
          {gamepad.axes.map((axisValue, index) => (
            <div className="input-row" key={index}>
              <span>Eixo {index}</span>
              <span>valor: {formatValue(axisValue)}</span>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

export default GamepadViewer;
