import { useEffect, useState } from 'react';

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

    updateGamepads();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return gamepads;
}
