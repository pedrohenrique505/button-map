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
  l3: 10,
  r3: 11,
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

function getStickPosition(gamepad, xAxisIndex, yAxisIndex) {
  const x = gamepad.axes[xAxisIndex] ?? 0;
  const y = gamepad.axes[yAxisIndex] ?? 0;

  return {
    cx: 0 + x * 14,
    cy: 0 + y * 14,
  };
}

function getTriggerClass(gamepad, buttonIndex) {
  return `controller-trigger ${isPressed(gamepad, buttonIndex) ? 'is-active' : ''}`;
}

function getSurfaceClass(gamepad, buttonIndex) {
  return `controller-surface ${isPressed(gamepad, buttonIndex) ? 'is-active' : ''}`;
}

function getStickClass(gamepad, buttonIndex) {
  return `controller-stick-base ${isPressed(gamepad, buttonIndex) ? 'is-active' : ''}`;
}

function GamepadVisual({ gamepad }) {
  const leftStick = getStickPosition(gamepad, 0, 1);
  const rightStick = getStickPosition(gamepad, 2, 3);

  return (
    <section
      className="visual-card visual-map-panel"
      id="devices"
      aria-label="Primary controller visual"
    >
      <div className="visual-card-header">
        <div>
          <p className="card-kicker">Axis Offset XY</p>
          <h2>Live Map</h2>
          <p>Reference drawing updates in real time as inputs change.</p>
        </div>
        <span>Index {gamepad.index}</span>
      </div>

      <div className="gamepad-map-stage">
        <svg
          className="controller-map"
          viewBox="0 0 760 560"
          role="img"
          aria-label={`Live map for ${gamepad.id}`}
        >
          <g className="controller-outline" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M197 198c16-52 52-86 112-86h62c13 0 24 5 33 14l15 15h55l15-15c9-9 20-14 33-14h62c60 0 96 34 112 86l27 87c18 58-12 117-66 131-38 10-72-6-93-42l-23-40H293l-23 40c-21 36-55 52-93 42-54-14-84-73-66-131z" />
            <rect x="332" y="136" width="96" height="88" rx="22" />
            <circle cx="345" cy="325" r="33" />
            <circle cx="482" cy="325" r="33" />
          </g>

          <g className="controller-detail" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M94 300h92" opacity="0.2" />
            <path d="M575 300h95" opacity="0.2" />
            <path d="M235 466h92" opacity="0.14" />
            <path d="M547 466h92" opacity="0.14" />
          </g>

          <g className="controller-trigger-group">
            <path className={getTriggerClass(gamepad, BUTTONS.l2)} d="M238 110h72c18 0 33 15 33 33v12h-76c-22 0-40-18-40-40z" />
            <path className={getTriggerClass(gamepad, BUTTONS.r2)} d="M523 110h72v5c0 22-18 40-40 40h-76v-12c0-18 15-33 33-33z" />
            <text x="272" y="135">L2</text>
            <text x="558" y="135">R2</text>
          </g>

          <g className="controller-shoulder-labels">
            <text className={isPressed(gamepad, BUTTONS.l1) ? 'is-active' : ''} x="214" y="166">
              L1
            </text>
            <text className={isPressed(gamepad, BUTTONS.r1) ? 'is-active' : ''} x="567" y="166">
              R1
            </text>
          </g>

          <g className="controller-dpad">
            <rect className={getSurfaceClass(gamepad, BUTTONS.dpadUp)} x="210" y="226" width="18" height="18" />
            <rect className={getSurfaceClass(gamepad, BUTTONS.dpadLeft)} x="186" y="250" width="18" height="18" />
            <rect className="controller-surface" x="210" y="250" width="18" height="18" />
            <rect className={getSurfaceClass(gamepad, BUTTONS.dpadRight)} x="234" y="250" width="18" height="18" />
            <rect className={getSurfaceClass(gamepad, BUTTONS.dpadDown)} x="210" y="274" width="18" height="18" />
          </g>

          <g className="controller-face">
            <circle className={getSurfaceClass(gamepad, BUTTONS.y)} cx="565" cy="225" r="13" />
            <circle className={getSurfaceClass(gamepad, BUTTONS.x)} cx="540" cy="250" r="13" />
            <circle className={getSurfaceClass(gamepad, BUTTONS.b)} cx="590" cy="250" r="13" />
            <circle className={getSurfaceClass(gamepad, BUTTONS.a)} cx="565" cy="275" r="13" />
          </g>

          <g className="controller-center-buttons">
            <circle className={getSurfaceClass(gamepad, BUTTONS.select)} cx="387" cy="260" r="9" />
            <circle className={getSurfaceClass(gamepad, BUTTONS.start)} cx="427" cy="260" r="9" />
          </g>

          <g className="controller-stick-group">
            <circle className={getStickClass(gamepad, BUTTONS.l3)} cx="345" cy="325" r="33" />
            <circle className="controller-stick-inner" cx="345" cy="325" r="16" />
            <circle className="controller-stick-pointer" cx={345 + leftStick.cx} cy={325 + leftStick.cy} r="4.5" />

            <circle className={getStickClass(gamepad, BUTTONS.r3)} cx="482" cy="325" r="33" />
            <circle className="controller-stick-inner" cx="482" cy="325" r="16" />
            <circle className="controller-stick-pointer" cx={482 + rightStick.cx} cy={325 + rightStick.cy} r="4.5" />
          </g>

          <g className="controller-callouts">
            <text x="610" y="304">MODULE_A.ACT</text>
            <text x="20" y="525">LIVE_MAP</text>
            <text x="104" y="525">REF_DRAWING_2024_D3</text>
            <text x="574" y="525">COORDINATES 40.7128° N, 74.0060° W</text>
          </g>
        </svg>
      </div>
    </section>
  );
}

export default GamepadVisual;
