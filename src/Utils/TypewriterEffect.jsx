import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ prefix = "I am a ", phrases, speed = 150, delay = 1000 }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(prefix);

  useEffect(() => {
    if (charIndex < phrases[phraseIndex].length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prefix + phrases[phraseIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        if (phraseIndex < phrases.length - 1) {
          setPhraseIndex(phraseIndex + 1);
        } else {
          setPhraseIndex(0);  // Reset to the first phrase
        }
        setCharIndex(0);
        setDisplayedText(prefix);  // Reset to just the prefix
      }, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [charIndex, phraseIndex, phrases, prefix, speed, delay]);

  return (
    <div className='type-writter-effect'>
      {displayedText}
      <span className="type-writter-cursor">|</span>
    </div>
  );
};

export default TypewriterEffect;
