import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const SpaceBackground = () => {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleMouseMove = (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  };

  return (
    <div className="neon-container" onMouseMove={handleMouseMove}>
      {/* Neon Cursor Glow */}
      <div
        className="neon-glow"
        style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
      />

      {/* Neon Circle Hover */}
      <div
        className="neon-circle"
        style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
      />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          // fullScreen: { enable: false },
          fullScreen: { enable: true, zIndex: -2 },
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            move: {
              enable: true,
              speed: 0.8,
              random: true,
              outModes: { default: "bounce" },
            },
            size: { value: 10 },
            shape: {
              type: "char",
              character: {
                value: ["D", "A", "N", "U", "S", "R", "I"],
                font: "Arial",
                style: "bold",
                weight: "900",
                fill: true,
              },
            },
            color: { value: "#00ffff" }, // Set all letters to cyan (or change as needed)
            opacity: {
              value: 0.8,
              anim: { enable: false },
              // anim: { enable: true, speed: 0.4, opacity_min: 0.3 },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#00ffff",
              opacity: 0.9,
              width: 2,
              // shadow: { enable: true, blur: 10, color: "#00ffff" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: {
                distance: 250,
                lineLinked: { opacity: 1, color: "#ffcc00" }, // Hover changes color to golden
              },
              push: { particles_nb: 5 },
            },
          },
        }}
      />
    </div>
  );
};

export default SpaceBackground;
