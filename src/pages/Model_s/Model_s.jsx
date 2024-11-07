
  import React, { useState, useEffect } from 'react';
  import AOS from 'aos';
  import 'aos/dist/aos.css'; 
  import s from './Model_s.module.css';
  import { Link } from 'react-router-dom';

  const Model_s = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      AOS.init({
        duration: 800, 
        easing: 'ease-in-out',
        once: false,
      });
    }, []);
    

    const slides = [
      {
        videoSrc: '/abbosniga.webm',
        title: 'Cinematic Experience',
        description:
          'A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional  responsiveness for gaming, movies and more.',
      },
      {
        videoSrc: '/abbosniga_2.mp4',
        title: 'Yoke Steering',
        description:
          'A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip.',
      },
      {
        videoSrc: '/abbosniga_3.webm',
        title: 'Perfect Environment',
        description:
          'Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment.',
      },
      {
        videoSrc: '/abbosniga_4.webm',
        title: 'Redesigned Second Row',
        description:
          'Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.',
      },
      {
        videoSrc: '/abbosniga_5.webm',
        title: 'Tesla Arcade',
        description:
          'Play games on your in-car touchscreens.',
      },
    ];

    const handleSlideChange = (index) => {
      setCurrentSlide(index);
    };

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 7000);

      return () => clearInterval(interval);
    }, [slides.length]);

    return (
      <>
        <div className={s.container}>
          <div className={s.textcont}>
            <h1 className={s.h1}>Model S</h1>
            <div className={s.pon}>
              <p className={s.model_y_p1}>From $68,490</p>
              <p className={s.model_y_p}>After Est. Gas Savings $6,500</p>
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

          <section className={s.niga}>
            <h2 data-aos="fade-up" className={s.text_align_center}>Interior of the Future</h2>
          </section>

          <section className={s.abbos}>
            <video autoPlay loop muted src={slides[currentSlide].videoSrc}></video>
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
            <h3>{slides[currentSlide].title}</h3>
            <p>{slides[currentSlide].description}</p>
          </section>

          <section className={s.watafak}>
            <div data-aos="fade-up" className={s.watafak_1}>
              <img src="watafak_1.avif" alt="broken" />
              <div className={s.textwtf}>
                <h4>Stay Connected</h4>
                <p>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</p>
              </div>
            </div>

            <div data-aos="fade-up" className={s.watafak_2}>
              <video autoPlay loop muted src="watafak_2.webm"></video>
              <div className={s.textwtf}>
                <h4>Immersive Sound</h4>
                <p>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</p>
              </div>
            </div>

            <div data-aos="fade-up" className={s.watafak_3}>
              <img src="watafak_3.avif" alt="broken" />
              <div className={s.textwtf}>
                <h4>Room for Everything</h4>
                <p>With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too. Compare Models</p>
              </div>
            </div>
          </section>

        <section>
        <div className={s.sigmo}>
        <div className={s.sktext}>
        <div data-aos="fade-up" className={s.text}>
        <p>1,020 hp</p>
        <p>Peak Power</p>
        </div>
        
        <div data-aos="fade-up" className={s.text}>
        <p>9,23 s</p>
        <p>@155 mph 1/4 mile</p>
        </div>

        <div data-aos="fade-up" className={s.text}>
        <p>1.99 s</p>
        <p>0-60 mph</p>
        </div>

        </div> 


        </div>
        <div data-aos="fade-up" className={s.whitexz}>
          <div className={s.othercontent}>

          <div className={s.newtext}>
            <p>Plaid</p>
            <h2 className={s.beyond}>Beyond Ludicrous</h2>
          </div>
          
          <div className={s.newbtns}>
            <Link className={` ${s.btn1 } ${s.newbtn1 }`} to={'/overview'}> Order Now  </Link>
            <Link className={` ${s.btn2 } ${s.newbtn2 }`}> Models</Link>

          </div>
          </div>
          <div className={s.othertext}>
            <p>Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture <br /> for all Model S trims enables back-to-back track runs without performance degradation. Chat with a <br /> Tesla Advisor to learn more about Model S or <span > <Link className={s.span} to={'/demodrive'}> schedule a demo drive today. </Link></span></p>
          </div>

        </div>
        </section>


        </div>
      </>
    );
  };

  export default Model_s;