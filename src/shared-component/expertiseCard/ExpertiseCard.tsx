import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import javaScriptLogo from '@/app/img/icon/javascript.png'

interface PropsInterface {
  data:{
    id: number,
      logo: any,
      value: number,
      title: string,
  }
}
const ExpertiseCard = ({data}:PropsInterface) => {
  const countUpRef = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);  // State to hold the current count
  const target = data?.value;  // The target value to count up to
  const duration = 2500;  // Duration of the animation in ms

  useEffect(() => {
    let startTime: number | null = null;

    // The function to update the count
    const animateCountUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);  // Ensure progress does not go over 1

      const newCount = Math.round(progress * target);
      setCount(newCount);

      // Continue the animation until we reach the target value
      if (progress < 1) {
        requestAnimationFrame(animateCountUp);
      }
    };

    // Start the animation
    requestAnimationFrame(animateCountUp);
  }, [target, duration]);

  return (
    <>
      <div className="funfact-style-two-item wow fadeInUp">
        <div className="icon">
          <Image
            src={data?.logo}
            width={60} // Set a fixed width
            height={60}
            alt="JavaScript Logo"
          />
        </div>
        <div className="fun-fact">
          <div className="counter">
            {/* This is the dynamically updated number */}
            <div ref={countUpRef} className="timer">{count}</div>
            <div className="operator">%</div>
          </div>
          <span className="medium">{data?.title}</span>
        </div>
      </div>
    </>
  );
};

export default ExpertiseCard;
