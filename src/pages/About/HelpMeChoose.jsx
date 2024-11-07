import s from "./HelpMeChoose.module.css";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import { Context } from "../../context/Context";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Random from "../About2/Random";

const Help = () => {
  const { switchHeaderPanel, dataHome, setdataHeaderPanel, isHeaderPanel } =
    useContext(Context);

  return (
    <>
      <HeaderPanel />

      <video className={s.video} autoPlay muted loop>
        <source src="/Introducing-Model-Y.mp4" />
      </video>

      <nav>
   <Link to={'/'}>     <img className={s.logo} src="/logowhite.png" alt="broken" /> </Link>

        <div className={isHeaderPanel ? `${s.nav} ${s.active}` : s.nav}>
          {!!dataHome &&
            dataHome.map((el) => (
              <p
                key={el.id}
                className={
                  isHeaderPanel ? `${s.vehicles} ${s.active}` : s.vehicles
                }
                onClick={() => {
                  switchHeaderPanel();
                  setTimeout(() => {
                    setdataHeaderPanel(el);
                  }, 200);
                }}
              >
                {el.text}
              </p>
            ))}
        </div>

        <div className={s.about}>
          <img src="/znakvoprosa.svg" alt="broken" />
          <img src="/lang.svg" alt="broken" />
          <img src="/profile.svg" alt="broken" />
        </div>
      </nav>

      <button className={s.burger}>Menu</button>

      <h1 className={s.h1}>Help Me Choose</h1>
      <p className={s.p}>
        Discover which Tesla models meet your needs by answering questions about
        your budget, <br /> driving habits and lifestyle.
      </p>
      <div className={s.forbtn}>
        <Link to="/random" className={s.btn1}>
          Get Started
        </Link>
      </div>
    </>
  );
};

export default Help;
