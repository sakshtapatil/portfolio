import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

function ParticleBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = NET({
      el: vantaRef.current,
      THREE,

      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      minHeight: 200,
      minWidth: 200,

      backgroundColor: 0x111111,
      color: 0x45d9d0,

      points: 7,
      maxDistance: 15,
      spacing: 30,

      showDots: true,
      scale: 1,
      scaleMobile: 1,
    });

    return () => effect && effect.destroy();
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
}

export default ParticleBackground;