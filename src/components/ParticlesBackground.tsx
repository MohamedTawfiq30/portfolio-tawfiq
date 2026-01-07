import { useCallback, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      const { tsParticles } = await import("@tsparticles/engine");
      await loadSlim(tsParticles);
      setInit(true);
    };
    initParticles();
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  const options: ISourceOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 150,
          links: {
            opacity: 0.5,
          },
        },
        push: {
          quantity: 2,
        },
      },
    },
    particles: {
      color: {
        value: ["#8B5CF6", "#3B82F6", "#06B6D4"],
      },
      links: {
        color: "#8B5CF6",
        distance: 150,
        enable: true,
        opacity: 0.2,
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
          width: 1920,
          height: 1080,
        },
        value: 60,
      },
      opacity: {
        value: 0.4,
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

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;
