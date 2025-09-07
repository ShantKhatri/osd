import React, { useRef, useEffect } from "react";

export default function MarqueeLogos({
  logos = [],
  duration = 100,
  height = 120,
  itemMinWidth = 220
}) {
  // Duplicate logos to create a seamless loop
  const items = [...logos, ...logos];
  const trackRef = useRef(null);

  useEffect(() => {
    // Force reflow if logos change so CSS animation restarts cleanly
    const el = trackRef.current;
    if (!el) return;
    void el.offsetWidth;
  }, [logos.map?.((l) => l.logo).join?.(",")]);

  if (!logos || logos.length === 0) return null;

  return (
    <div className="w-full overflow-hidden">
      <style>{`
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: 24px;
          animation: marquee ${duration}s linear infinite;
        }
        .marquee-item { display:inline-flex; align-items:center; justify-content:center; width: ${itemMinWidth}px; height: ${height}px; }
        .marquee-card { display:flex; align-items:center; justify-content:center; width:100%; height:100%; border-radius: 8px; }
        .marquee-card img { max-width: calc(100% - 24px); max-height: calc(100% - 16px); object-fit: contain; display:block; }
        /* cap image height to the component height but no more than 140px */
        .marquee-item img, .marquee-card img, .marquee-img { max-height: ${Math.min(
          height,
          140
        )}px; height: auto; }
  /* Specific fix: reduce oversize WordPress logo which has a tall/large source image */
  .marquee-card img[src*="wordpress"], .marquee-card img[src*="Wordpress"] { max-width: 60% !important; max-height: 80% !important; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none !important; } }
        @media (max-width: 640px) { .marquee-item { width: 120px; height: ${Math.max(
          48,
          Math.round(height * 0.7)
        )}px; } }
      `}</style>

      <div
        style={{ display: "flex", alignItems: "center", height: `${height}px` }}
      >
        <div ref={trackRef} className="marquee-track">
          {items.map((logo, i) => (
            <div key={i} className="marquee-item">
              <img
                src={logo.logo}
                alt={logo.name || `logo-${i}`}
                loading="eager"
                style={{ height: "auto", maxWidth: "100%" }}
                className="marquee-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
