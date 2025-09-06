import { useEffect, useRef } from 'react';

const AnimatedCounter = ({ target, duration = 2000 }) => {
  const countRef = useRef(null);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = 0;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(startValue + (target - startValue) * progress);
      
      if (countRef.current) {
        countRef.current.textContent = currentValue;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, [target, duration]);

  return <span ref={countRef}>0</span>;
};

export default function Basic() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold gradient-text mb-8">
          OpenSource Weekend 2025
        </h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">
              <AnimatedCounter target={500} />+
            </div>
            <div className="text-black-300">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">
              <AnimatedCounter target={50} />+
            </div>
            <div className="text-black-300">Speakers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">
              <AnimatedCounter target={100} />+
            </div>
            <div className="text-black-300">Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
}
