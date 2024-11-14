import { useState, useEffect } from 'react';

function useTypewriter(texts:any, typingSpeed = 100, pauseDuration = 2000) {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = texts[textIndex];
    
    if (!isDeleting && charIndex < currentWord.length) {
      setTimeout(() => {
        setCurrentText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      setTimeout(() => {
        setCurrentText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
    } else if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }
  }, [charIndex, isDeleting, texts, textIndex, typingSpeed, pauseDuration]);

  return currentText;
}

export default useTypewriter;
