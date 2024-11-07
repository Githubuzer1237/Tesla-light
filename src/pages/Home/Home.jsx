import { useContext, useEffect, useState } from 'react';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import s from './Home.module.css';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';

const Home = () => {
  const { switchHeaderPanel, dataHome, setdataHeaderPanel } =
    useContext(Context);

  // window.addEventListener("scroll", function () {
  //   const navbar = document.getElementById("navbar");
  //   if (window.scrollY > 50) {
  //     navbar.classList.add("white-bg");
  //   } else {
  //     navbar.classList.remove("white-bg");
  //   }
  // });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderPanel />
      <title>Tesla</title>
      <header>
        <nav id="navbar" className={scrollY > 50 ? `${s.white}` : ''}>
          <img className={s.logo} src="/src/assets/logo.svg" alt="broken" />

          <div className={s.nav}>
            {!!dataHome &&
              dataHome.map((el) => (
                <p
                  key={el.id}
                  className={s.vehicles}
                  onClick={(e) => {
                    switchHeaderPanel();
                    setTimeout(() => {
                      setdataHeaderPanel(el);
                    }, 200);
                  }}
                >
                  {el.text}
                </p>
              ))}
            <Link className={s.vehicles} to={'/teslashop'}>
              Shop
            </Link>
          </div>

          <div className={s.about}>
            <img src="/src/assets/znakvoprosa.svg" alt="broken" />
            <img src="/src/assets/lang.svg" alt="broken" />
            <img src="/src/assets/profile.svg" alt="broken" />
          </div>
        </nav>

        <button className={s.burger}>Menu</button>

        <h1 className={s.pox}>Model 3</h1>
        <p className={s.ppp}>$7,500 Federal Tax Credit Available</p>
        <p className={s.ppp1}>From $29,990 After Est. Savings</p>

        <div className={s.btns}>
          <Link to={'./Overview'} className={s.btn1} href="">
            Order Now
          </Link>
          <Link to={'/demodrive'} className={s.btn2} href="">
            Demo Drive
          </Link>
        </div>
      </header>

      <main>
        <section className={s.model_y}>
          <h1 className={s.h1}>Model Y</h1>
          <p className={s.model_y_p}>1.99% APR Financing Ending August 31</p>
          <p className={s.model_y_p1}>From $31,490</p>

          <div className={s.btns1}>
            <Link to={'./Overview'} className={s.btn1} href="">
              Order Now
            </Link>
            <Link to={'/Demodrive'} className={s.btn2} href="">
              Demo Drive
            </Link>
          </div>
        </section>
        <section className={s.model_x}>
          <h1 className={s.h1}>Model X</h1>
          <p className={s.model_y_p}>From $65,990</p>
          <p className={s.model_y_p1}>After $14,000 Est. Savings1</p>

          <div className={s.btns1}>
            <Link to={'./Overview'} className={s.btn1} href="">
              Order Now
            </Link>
            <Link to={'/Demodrive'} className={s.btn2} href="">
              Demo Drive
            </Link>
          </div>
        </section>

        <section className={s.model_s}>
          <h1 className={s.h1s}>Model S</h1>
          <p className={s.model_y_ps}>From $68,490</p>
          <p className={s.model_y_p1s}>After $6,500 Est. Savings</p>

          <div className={s.btns1}>
            <Link to={'./Overview'} className={s.btn1} href="">
              Order Now
            </Link>
            <Link to={'/Demodrive'} className={s.btn2} href="">
              Demo Drive
            </Link>
          </div>
        </section>

        <section className={s.cybertruck}>
          <div className={s.cy}>
            <img src="/cybertruck-text.svg" alt="broken" />
          </div>
          <div className={s.button_container}>
            <a href="#" className={s.button}>
              ORDER NOW
            </a>
            <a href="#" className={s.button}>
              LEARN MORE
            </a>
          </div>
        </section>

        <section className={s.solars}>
          <h1 className={s.h1s}>Solar Panels</h1>

          <p className={s.model_y_p1s}>Schedule a Virtual Consultation</p>

          <div className={s.btns1}>
            <Link to={'./Overview'} className={s.btn1} href="">
              Order Now
            </Link>
            <Link className={s.btn2} href="">
              Learn More
            </Link>
          </div>
        </section>
        <section className={s.solarroof}>
          <h1 className={s.h1}>Solar Roof</h1>

          <p className={s.model_y_p}>Produce Clean Energy From Your Roof</p>

          <div className={s.btns1}>
            <Link to={'./Overview'} className={s.btn1} href="">
              Order Now
            </Link>
            <Link className={s.btn2} href="">
              Learn More
            </Link>
          </div>
        </section>
        <section className={s.powerwall}>
          <h1 className={s.h1}>Powerwall</h1>
          <div className={s.btns1}>
            <Link to={'./powerwall'} className={s.btn1} href="">
              Order Now
            </Link>
            <Link to={'/power'} className={s.btn2} href="">
              Learn More
            </Link>
          </div>
        </section>

        <footer>
          <div className={s.divtex}>
            <p>
              $7,500 Federal Tax Credit available for eligible buyers and
              subject to MSRP caps. Model 3 Rear-Wheel
            </p>
            <p>Drive not eligible.</p>
          </div>

          <div className={s.divtext}>
            <p>
              Price before estimated savings is $42,490, excluding taxes and
              fees. Subject to change. Estimated
            </p>
            <p>
              savings includes $5,000 in gas savings estimated over five years,
              the $7,500 Federal Tax Credit and state
            </p>
            <p>
              incentives, available to eligible buyers and subject to MSRP caps.
              Terms apply.
            </p>
          </div>

          <div className={s.divtext}>
            <p>
              Price before estimated savings is $44,990, excluding taxes and
              fees. Subject to change. Estimated
            </p>
            <p>
              savings includes $6,000 in gas savings estimated over five years,
              the $7,500 Federal Tax Credit and state
            </p>
            <p>
              incentives, available to eligible buyers and subject to MSRP caps.
              Terms apply.
            </p>
          </div>

          <div className={s.divtext}>
            <p>
              Price before estimated savings is $79,990, excluding taxes and
              fees. Subject to change. Estimated
            </p>
            <p>
              savings includes $6,500 in gas savings estimated over five years,
              the $7,500 Federal Tax Credit and state
            </p>
            <p>
              incentives, available to eligible buyers and subject to MSRP caps.
              Terms apply.
            </p>
          </div>

          <div className={s.divtext}>
            <p>
              Price before estimated savings is $74,990, excluding taxes and
              fees. Subject to change. Estimated
            </p>
            <p>
              savings includes $6,500 in gas savings estimated over five years
              and state incentives, available to eligible
            </p>
            <p>buyers and subject to MSRP caps. Terms apply.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
