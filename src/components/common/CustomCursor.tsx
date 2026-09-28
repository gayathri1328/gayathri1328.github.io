import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = !!target.closest('button, a, input, textarea, select, [role="button"], .interactive-hover');
        setIsHovering(isClickable);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing effect
  useEffect(() => {
    let animationFrameId: number;

    const animateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    animationFrameId = requestAnimationFrame(animateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glowing Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${trailPosition.x - (isHovering ? 28 : 20)}px, ${trailPosition.y - (isHovering ? 28 : 20)}px, 0)`,
          width: isHovering ? '56px' : '40px',
          height: isHovering ? '56px' : '40px',
        }}
      >
        <div
          className={`w-full h-full rounded-full border transition-all duration-300 ${
            isHovering
              ? 'border-cyan-400 bg-cyan-400/10 scale-110 shadow-[0_0_20px_rgba(6,182,212,0.4)]'
              : 'border-purple-400/60 bg-purple-500/5 shadow-[0_0_12px_rgba(168,85,247,0.25)]'
          }`}
        />
      </div>

      {/* Center Precise Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[10000]"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          width: '8px',
          height: '8px',
        }}
      >
        <div
          className={`w-full h-full rounded-full transition-transform duration-150 ${
            isHovering ? 'bg-cyan-300 scale-150' : 'bg-purple-300'
          }`}
        />
      </div>
    </>
  );
};
