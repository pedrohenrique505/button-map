function ControllerHero({ asset = null }) {
  return (
    <div className="controller-hero-frame" aria-hidden="true">
      <div className="controller-hero-status">No Gamepad Detected</div>
      <div className="controller-hero-asset" data-slot="controller-hero-asset">
        {asset ?? (
          <svg
            className="controller-hero-svg"
            viewBox="0 0 720 260"
            role="img"
            aria-label="Disconnected controller illustration"
          >
            <g fill="none" stroke="currentColor" strokeWidth="2.5">
              <path
                d="M180 152c6-34 30-56 66-56h70l15 20h58l15-20h70c36 0 60 22 66 56l10 42c4 18-8 34-26 34-12 0-22-6-28-16l-17-29H239l-17 29c-6 10-16 16-28 16-18 0-30-16-26-34z"
                opacity="0.92"
              />
              <circle cx="272" cy="153" r="30" />
              <circle cx="448" cy="153" r="30" />
              <path d="M300 116l24 31" opacity="0.55" />
              <path d="M420 116l-24 31" opacity="0.55" />
              <path d="M154 140l-40-24" opacity="0.28" />
              <path d="M566 140l40-24" opacity="0.28" />
              <path d="M338 84h44" opacity="0.45" />
              <path d="M207 183h306" opacity="0.16" />
            </g>

            <g fill="currentColor">
              <rect x="152" y="113" width="20" height="20" rx="2" opacity="0.1" />
              <rect x="548" y="113" width="20" height="20" rx="2" opacity="0.1" />
              <path d="M221 136h16v-16h12v16h16v12h-16v16h-12v-16h-16z" />
              <circle cx="482" cy="128" r="8" />
              <circle cx="507" cy="144" r="8" />
              <circle cx="457" cy="144" r="8" />
              <circle cx="482" cy="160" r="8" />
              <rect x="338" y="124" width="18" height="8" rx="1" opacity="0.8" />
              <rect x="364" y="124" width="18" height="8" rx="1" opacity="0.8" />
            </g>

            <g fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="360" cy="136" r="28" opacity="0.2" />
              <path d="M348 124l24 24" />
              <path d="M372 124l-24 24" />
            </g>
          </svg>
        )}
      </div>
    </div>
  );
}

export default ControllerHero;
