import React, { useEffect, useRef } from 'react';
import './FairyFollower.css';

const FairyFollower = () => {
  const fairyRef = useRef(null);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;

      if (fairyRef.current) {
        fairyRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <img
    ref={fairyRef}
    src="/Diefly.gif"
    className="fairy-follower"
    alt="Navi"
  />;
};

export default FairyFollower;
