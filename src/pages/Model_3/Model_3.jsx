
import React, { useState, useEffect } from 'react';
import s from './Model_3.module.css';
import { Link } from 'react-router-dom';

const Model_3 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [paragraphText, setParagraphText] = useState('Standard And Long Range');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
        setParagraphText('Performance'); 
      } else {
        setIsScrolled(false);
        setParagraphText('Standard And Long Range'); // Изначальный текст
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${s.container} ${isScrolled ? `${s.scrolled}` : ''}`}>
      <div className={s.newcont}>
        <div className={s.textcont}>
          <h1 className={s.h1}>Model 3</h1>
          <p className={s.p}>{paragraphText}</p>
        </div>
        <div className={s.btns1}>
          <Link to={'/Overview'} className={s.btn1} href="">
            Order Now
          </Link>
          <a className={s.btn2} href="">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Model_3;
