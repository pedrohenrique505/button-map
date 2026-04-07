function GamepadVisual({ gamepad }) {
  return (
    <section className="visual-card" aria-label="Controle visual principal">
      <div className="visual-card-header">
        <div>
          <h2>Controle visual</h2>
          <p>{gamepad.id}</p>
        </div>
        <span>Índice {gamepad.index}</span>
      </div>

      <div className="gamepad-visual">
        <div className="shoulder-row">
          <div className="shoulder-button">L1</div>
          <div className="shoulder-button">L2</div>
          <div className="shoulder-button">R2</div>
          <div className="shoulder-button">R1</div>
        </div>

        <div className="gamepad-body">
          <div className="dpad">
            <div></div>
            <div className="visual-button">↑</div>
            <div></div>
            <div className="visual-button">←</div>
            <div className="visual-button dpad-center"></div>
            <div className="visual-button">→</div>
            <div></div>
            <div className="visual-button">↓</div>
            <div></div>
          </div>

          <div className="analog-area">
            <div className="analog-stick">
              <div className="analog-dot"></div>
            </div>
            <div className="center-buttons">
              <span>SELECT</span>
              <span>START</span>
            </div>
            <div className="analog-stick">
              <div className="analog-dot"></div>
            </div>
          </div>

          <div className="face-buttons">
            <div></div>
            <div className="visual-button">Y</div>
            <div></div>
            <div className="visual-button">X</div>
            <div className="visual-button">B</div>
            <div className="visual-button">A</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GamepadVisual;
