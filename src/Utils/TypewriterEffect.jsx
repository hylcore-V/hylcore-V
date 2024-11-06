import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ prefix = "I am a ", phrases, speed = 100, delay = 1000 }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isDeleting) {
      if (charIndex > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, speed);
      } else {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    } else {
      if (charIndex < phrases[phraseIndex].length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText + phrases[phraseIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, speed);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, phraseIndex, phrases, isDeleting, speed, delay]);

  return (
    <div className='type-writter-effect'>
      <span className="typewriter-prefix">{prefix}</span>{displayedText}
      <span className="type-writter-cursor">|</span>
    </div>
  );
};

export default TypewriterEffect;
