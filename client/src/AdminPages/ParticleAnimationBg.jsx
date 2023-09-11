import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticleBackground = () => {
  const options = {
    particles: {
        number: { value: 20 },
        color: { value: ['#266afd', '#7aa3ff', '#407bff'] },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: true,
            speed: 0.2,
            opacity_min: 0.3,
            sync: true,
          },
        },
        size: {
          value: 50,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 450,
          color: '#ffffff',
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          bounce: true,
        },
      },
      interactivity: {
        detect_on: 'canvas',
        // activate
        events: {
          onhover: {
            enable: true,
            mode: ['bubble'],
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 200,
            size: 17,
            duration: 1,
            opacity: 0.8,
            speed: 2,
          },
        },
      },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="Particles">
      <Particles style={{zIndex:"-10"}} options={options} init={particlesInit} />
    </div>
  );
};

export default ParticleBackground
