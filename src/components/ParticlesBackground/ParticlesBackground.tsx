import React, { useCallback } from '../../utils/reactImports';
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { useTheme } from '../../context/ThemeContext';

const ParticlesBackground: React.FC = () => {
  const { theme } = useTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const mainColor = theme === 'dark' ? "#64ffda" : "#0d9488";

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        particles: {
          color: {
            value: mainColor,
          },
          links: {
            color: mainColor,
            distance: 100,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 40,
            density: {
              enable: true,
              area: 800
            }
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground; 