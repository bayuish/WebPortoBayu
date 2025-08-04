import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const particlesConfig = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fps_limit: 120,
  // --- Nonaktifkan interaksi di sini ---
  interactivity: {
    events: {
      onHover: {
        enable: false, // Ubah dari true menjadi false
        mode: "repulse",
      },
      onClick: {
        enable: false, // Nonaktifkan juga event klik
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 50,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffd700",
    },
    links: {
      color: "#ffd700",
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 400,
      },
      value: 40,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

function ParticlesBackground() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesConfig}
    />
  );
}

export default ParticlesBackground;