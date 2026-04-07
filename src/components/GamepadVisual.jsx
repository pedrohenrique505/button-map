const BUTTONS = {
  a: 0,
  b: 1,
  x: 2,
  y: 3,
  l1: 4,
  r1: 5,
  l2: 6,
  r2: 7,
  select: 8,
  start: 9,
  dpadUp: 12,
  dpadDown: 13,
  dpadLeft: 14,
  dpadRight: 15,
};

function isPressed(gamepad, buttonIndex) {
  return Boolean(gamepad.buttons[buttonIndex]?.pressed);
}

function getButtonValue(gamepad, buttonIndex) {
  return gamepad.buttons[buttonIndex]?.value ?? 0;
}

function getButtonClass(gamepad, buttonIndex, baseClass) {
  return `${baseClass} ${isPressed(gamepad, buttonIndex) ? 'is-active' : ''}`;
}

function getStickStyle(gamepad, xAxisIndex, yAxisIndex) {
  const x = gamepad.axes[xAxisIndex] ?? 0;
  const y = gamepad.axes[yAxisIndex] ?? 0;

  return {
    transform: `translate(calc(-50% + ${x * 26}px), calc(-50% + ${y * 26}px))`,
  };
}

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
          <div className={getButtonClass(gamepad, BUTTONS.l1, 'shoulder-button')}>
            L1
          </div>
          <div
            className={getButtonClass(gamepad, BUTTONS.l2, 'shoulder-button')}
            style={{ '--trigger-value': getButtonValue(gamepad, BUTTONS.l2) }}
          >
            L2
          </div>
          <div
            className={getButtonClass(gamepad, BUTTONS.r2, 'shoulder-button')}
            style={{ '--trigger-value': getButtonValue(gamepad, BUTTONS.r2) }}
          >
            R2
          </div>
          <div className={getButtonClass(gamepad, BUTTONS.r1, 'shoulder-button')}>
            R1
          </div>
        </div>

        <div className="gamepad-body">
          <div className="dpad">
            <div></div>
            <div className={getButtonClass(gamepad, BUTTONS.dpadUp, 'visual-button')}>
              ↑
            </div>
            <div></div>
            <div className={getButtonClass(gamepad, BUTTONS.dpadLeft, 'visual-button')}>
              ←
            </div>
            <div className="visual-button dpad-center"></div>
            <div className={getButtonClass(gamepad, BUTTONS.dpadRight, 'visual-button')}>
              →
            </div>
            <div></div>
            <div className={getButtonClass(gamepad, BUTTONS.dpadDown, 'visual-button')}>
              ↓
            </div>
            <div></div>
          </div>

          <div className="analog-area">
            <div className="analog-stick">
              <div className="analog-dot" style={getStickStyle(gamepad, 0, 1)}></div>
            </div>
            <div className="center-buttons">
              <span className={isPressed(gamepad, BUTTONS.select) ? 'is-active' : ''}>
                SELECT
              </span>
              <span className={isPressed(gamepad, BUTTONS.start) ? 'is-active' : ''}>
                START
              </span>
            </div>
            <div className="analog-stick">
              <div className="analog-dot" style={getStickStyle(gamepad, 2, 3)}></div>
            </div>
          </div>

          <div className="face-buttons">
            <div></div>
            <div className={getButtonClass(gamepad, BUTTONS.y, 'visual-button')}>Y</div>
            <div></div>
            <div className={getButtonClass(gamepad, BUTTONS.x, 'visual-button')}>X</div>
            <div className={getButtonClass(gamepad, BUTTONS.b, 'visual-button')}>B</div>
            <div className={getButtonClass(gamepad, BUTTONS.a, 'visual-button')}>A</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GamepadVisual;
