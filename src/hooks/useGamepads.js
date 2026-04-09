import { useEffect, useState } from 'react';

const RESCAN_EVENT_NAME = 'button-map:rescan';

function readConnectedGamepads() {
  if (!navigator.getGamepads) {
    return [];
  }

  return Array.from(navigator.getGamepads()).filter(Boolean);
}

export function useGamepads() {
  const [gamepads, setGamepads] = useState([]);

  useEffect(() => {
    let animationFrameId;

    function updateGamepads() {
      setGamepads(readConnectedGamepads());
      animationFrameId = requestAnimationFrame(updateGamepads);
    }

    function handleRescanRequest() {
      setGamepads(readConnectedGamepads());
    }

    window.addEventListener(RESCAN_EVENT_NAME, handleRescanRequest);
    updateGamepads();

    return () => {
      window.removeEventListener(RESCAN_EVENT_NAME, handleRescanRequest);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return gamepads;
}
