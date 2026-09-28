import React, { useEffect, useState } from 'react';

type HoverMode = 'default' | 'clickable' | 'card' | 'node';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [hoverMode, setHoverMode] = useState<HoverMode>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Completely disable on mobile and touch devices
    const isTouchDevice =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0;

    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        if (target.closest('.project-card, [data-cursor="project"]')) {
          setHoverMode('card');
        } else if (target.closest('#exploring-ai, [data-cursor="node"]')) {
          setHoverMode('node');
        } else if (
          target.closest(
            'button, a, input, textarea, select, [role="button"], .cursor-pointer, .interactive-hover'
          )
        ) {
          setHoverMode('clickable');
        } else {
          setHoverMode('default');
        }
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth GPU trailing animation
  useEffect(() => {
    let animationFrameId: number;

    const animateTrail = () => {
      setTrailPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22,
        };
      });
      animationFrameId = requestAnimationFrame(animateTrail);
    };

    animationFrameId = requestAnimationFrame(animateTrail);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  const isClickable = hoverMode === 'clickable';
  const isCard = hoverMode === 'card';
  const isNode = hoverMode === 'node';
  const isInteractive = isClickable || isCard || isNode;

  // Ring dimension based on mode
  const ringSize = isCard ? 64 : isNode ? 56 : isClickable ? 48 : 36;
  const halfRing = ringSize / 2;

  return (
    <>
      {/* Outer Futuristic Glowing Trail Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${trailPosition.x - halfRing}px, ${trailPosition.y - halfRing}px, 0)`,
          width: `${ringSize}px`,
          height: `${ringSize}px`,
        }}
      >
        <div
          className={`w-full h-full rounded-full border transition-all duration-200 flex items-center justify-center ${
            isCard
              ? 'border-cyan-400 bg-cyan-400/10 shadow-[0_0_25px_rgba(6,182,212,0.5)]'
              : isNode
              ? 'border-purple-400 bg-purple-500/15 shadow-[0_0_25px_rgba(168,85,247,0.5)]'
              : isClickable
              ? 'border-cyan-300 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.4)]'
              : 'border-purple-400/50 bg-purple-500/5 shadow-[0_0_12px_rgba(168,85,247,0.25)]'
          }`}
        >
          {isCard && (
            <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-200 uppercase">
              VIEW
            </span>
          )}
        </div>
      </div>

      {/* Center Precise Aim Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[100000]"
        style={{
          transform: `translate3d(${position.x - 3.5}px, ${position.y - 3.5}px, 0)`,
          width: '7px',
          height: '7px',
        }}
      >
        <div
          className={`w-full h-full rounded-full transition-all duration-150 ${
            isInteractive
              ? 'bg-cyan-300 scale-125 shadow-[0_0_8px_#22d3ee]'
              : 'bg-purple-300 shadow-[0_0_6px_#c084fc]'
          }`}
        />
      </div>
    </>
  );
};
