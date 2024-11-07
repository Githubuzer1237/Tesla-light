import React, { useState, useEffect } from "react";
import "./Zoomimg.css";
import { Link } from "react-router-dom";

const Zoomimg = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [scale, setScale] = useState(1);
  const [showVideoClass, setShowVideoClass] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const img = document.querySelector(".zooming");
      const box = document.querySelector(".zooming__box");
      if (img && box) {
        const rect = img.getBoundingClientRect();

        // Проверяем, если изображение зафиксировано и скролл ниже
        if (rect.top <= 0) {
          setIsFixed(true);
          setScale(1 + -rect.top / 500); // Примерный коэффициент масштаба
        } else {
          setIsFixed(false);
          setScale(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Вызов при монтировании компонента

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="section-zooming">
        <img
          className={`zooming ${isFixed ? "fixed" : ""}`}
          src="teslainside_2.png"
          alt=""
          style={{ transform: `scale(${scale})` }}
        />

        <div className={`zooming__box ${showVideoClass ? "video" : ""}`}>
          <video autoPlay muted src="/abbos.webm"></video>
          <h3>A More Restful Commute</h3>
          <p>
            Autopilot enables your car to steer, accelerate, and brake
            automatically within its lane under your active supervision,
            assisting with the most burdensome parts of driving. With
            over-the-air software updates, the latest enhancements are available
            instantly.
          </p>

          <div className="zooming__inner">
          <Link to={'/Overview'} className="btn1">
              Order Now
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default Zoomimg;
