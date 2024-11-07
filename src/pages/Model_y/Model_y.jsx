import React, { useEffect, useState } from 'react';
import s from './Model_y.module.css';
import { Link } from 'react-router-dom';
import Zoom from '../../components/Zoom/Zoom';
import Zoomimg from '../../components/Zoomimg/Zoomimg';

const Model_y = () => {
  const slides = [
    {
      imgSrc: 'whileyousleep.avif',
      title: 'While You Sleep ',
      description:
        'Charge at home with Wall Connector and add up to 44 miles of range per hour.',
    },
    {
      imgSrc: 'duringtheday.avif',
      title: 'During The Day',
      description:
        'Plug Mobile Connector in to any standard outlet and add up to 30 miles of range per hour.',
    },
    {
      imgSrc: 'onroadtrips.avif',
      title: 'On Road Trips',
      description:
        'Add up to 160 miles of range in just 15 minutes† at a Supercharger along your route or recharge at your destination.  ',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [imgScroll, setimgScroll] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className={s.container}>
        <div className={s.textcont}>
          <h1 className={s.h1}>Model Y</h1>
          <div className={s.pon}>
            <p className={s.model_y_p1}>1.99% APR Financing Ending August 31</p>
            <p className={s.model_y_p}>From $31,490*</p>
          </div>
        </div>

        <div className={s.bottomcont}>
          <div className={s.textp}>
            <div className={s.jopa}>
              <p>359 mi</p> <p>Range (EPA est.)</p>
            </div>
            <div className={s.jopa}>
              <p>1,99 s</p> <p>0-60mph</p>
            </div>
            <div className={s.jopa}>
              <p>200mph</p> <p>Top Speed</p>
            </div>
            <div className={s.jopa}>
              <p>1,020hp</p> <p>Peak Power</p>
            </div>
          </div>
          <div className={s.btns1}>
            <Link to={'/Overview'} className={s.btn1}>
              Order Now
            </Link>
            <Link to={'/Demodrive'} className={s.btn2}>
              Demo Drive
            </Link>
          </div>
        </div>

        <section className={s.babe}>
          <div className={s.babetext}>
            <h2 className={s.h22}>Engineered for Your Safety</h2>
            <p className={s.p2}>
              We engineer our vehicles to be the safest in the world. With an
              extremely low chance of roll-over and <br /> occupant injury,
              Model Y receives some of the highest possible safety ratings.
            </p>
          </div>
        </section>

        <section className={s.Accident}>
          <div className={s.box}>
            <video autoPlay loop muted src="/accident_1.webm"></video>
            <div className={s.textbox}>
              <h2 className={s.h22}>
                The Best Accident is <br />
                No Accident
              </h2>
              <p className={s.p2}>
                Active safety features can help reduce impact severity or
                prevent <br /> accidents from happening altogether. Features
                like Forward <br /> Collision Warning, Active Emergency Braking
                and Lane Departure <br /> avoidance all come standard.
              </p>
            </div>
          </div>
        </section>

        <section className={s.babe2}>
          <video autoPlay loop muted>
            <source src="/model_y_charge.webm" />
          </video>
          <div className={s.babetext}>
            <h2 className={s.h22}>Charge Everywhere</h2>
            <p className={s.p2}>
              Plenty of range for every kind of drive. From daily driving to
              family road trips, charging Model Y is fast, <br /> convenient and
              accessible anywhere there’s electricity.
            </p>
          </div>
        </section>

        <div className={s.frik}>
          <section className={s.sliderSection}>
            <div className={s.sliderContainer}>
              <img
                className={s.slideImage}
                src={slides[currentSlide].imgSrc}
                alt={`Slide ${currentSlide}`}
              />
              <h3 className={s.slideTitle}>{slides[currentSlide].title}</h3>
              <p className={s.slideDescription}>
                {slides[currentSlide].description}
              </p>
              <div className={s.sliderControls}>
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`${s.sliderButton} ${
                      currentSlide === index ? s.active : ''
                    }`}
                    onClick={() => handleSlideChange(index)}
                  ></button>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className={s.gojo}>
          <div className={s.textabbosa}>
            <h2>Go Anywhere</h2>
            <p>
              Go ahead, take the road trip. With up to 320 miles (est.) of range
              on a single charge, chances are you’ll need <br /> a break before
              your Model Y will. Dual motor all-wheel drive ensures you’re ready
              to tackle any road <br /> conditions.
            </p>
          </div>
        </section>

        <section className={s.babe3}>
          <video autoPlay loop muted>
            <source src="/roomfor.webm" />
          </video>
          <div className={s.babetext}>
            <h2 className={s.h22}>Room for Everything</h2>
            <p className={s.p2}>
              Fold-flat seats, two trunks and 3,500 pounds of towing
              capability—if you need to bring it, Model Y can help.
            </p>
          </div>
        </section>

        <Zoom />
        <Zoomimg />
      </div>
    </>
  );
};

export default Model_y;
