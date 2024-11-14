import { useEffect, useState } from 'react';

function useTextRotation(texts:any, delay = 2000) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => clearInterval(interval);
  }, [texts, delay]);

  return texts[currentTextIndex];
}

export default useTextRotation;
