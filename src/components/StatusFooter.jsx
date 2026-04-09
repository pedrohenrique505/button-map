function StatusFooter({ gamepads }) {
  const footerMessage =
    gamepads.length > 0
      ? `${gamepads.length} controller${gamepads.length > 1 ? 's' : ''} active in current session.`
      : 'Awaiting controller input.';

  return (
    <footer className="site-footer">
      <span>{footerMessage}</span>
      <div className="footer-links" aria-label="Secondary links">
        <span>Documentation</span>
        <span>Calibration Protocol</span>
        <span>GitHub</span>
      </div>
    </footer>
  );
}

export default StatusFooter;
