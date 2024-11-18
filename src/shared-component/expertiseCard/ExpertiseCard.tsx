import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

interface PropsInterface {
  data: {
    id: number;
    logo: any;
    value: number;
    title: string;
    
  };
}

const ExpertiseCard = ({ data }: PropsInterface) => {
  const countUpRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0); // State to hold the current count
  const [hasAnimated, setHasAnimated] = useState(false); // State to track if the animation has run
  const target = data?.value; // The target value to count up to
  const duration = 2500; // Duration of the animation in ms

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true);
          observer.disconnect(); // Disconnect observer after first animation
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    let startTime: number | null = null;

    const animateCountUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Ensure progress does not go over 1

      const newCount = Math.round(progress * target);
      setCount(newCount);

      if (progress < 1) {
        requestAnimationFrame(animateCountUp);
      }
    };

    requestAnimationFrame(animateCountUp);
  };

  return (
    <div className="funfact-style-two-item wow fadeInUp">
      <div className="icon">
        <Image
          src={data?.logo}
          width={60} // Set a fixed width
          height={60}
          alt={`${data?.title} Logo`}
        />
      </div>
      <div className="fun-fact">
        <div className="counter">
          <div ref={countUpRef} className="timer">
            {count}
          </div>
          <div className="operator">%</div>
        </div>
        <span className="medium">{data?.title}</span>
      </div>
    </div>
  );
};

export default ExpertiseCard;
