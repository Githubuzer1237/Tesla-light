import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import s from './TestrandomCar.module.css';
import DemoDrive from '../../pages/About3/DemoDrive';

const TestRandomCar = () => {
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const images = [
      'testrandom_1.png',
      'testrandom_2.png',
      'testrandom_3.png',
      'testrandom_4.png',
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    setRandomImage(images[randomIndex]);
  }, []);

  return (
    <section className={s.TestRandomCar}>
      <div className={s.container}>
        <div className={s.containerimg}>
          <img className={s.img_car} src={randomImage} alt="car" />
        </div>
        {/* <img src="testrandom_2.png" alt="" /> */}

        <div className={s.textContainer}>
          <h2 className={s.h2}>
            Long Range Rear-Wheel <br /> Drive
          </h2>
          <div className={s.textdiv}>
            <b className={s.b}>First Option</b>
            <p className={s.firstp}>
              Our sports sedan. Great for families and commuting
            </p>
          </div>

          <div className="textdiv">
            <b>Starting Price</b>
            <p className={s.p}>$42,490</p>
          </div>

          <div className="textdiv">
            <b>After Savings</b>
            <p className={s.p}>$29,990</p>
          </div>

          <div className="textdiv">
            <b>Range (EPA est.)</b>
            <p className={s.p}>363 miles</p>
          </div>

          <div className={s.btns}>
            <Link to={"/DemoDrive"} className={s.btn}>  Demo Drive </Link>
            <Link to={'/Overview'}  className={s.btn2}>Design yours</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestRandomCar;
