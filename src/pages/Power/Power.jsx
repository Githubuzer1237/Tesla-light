import React from 'react';
import s from './Power.module.css';
import { Link } from 'react-router-dom';

const Power = () => {
  return (
    <>
      <div className={s.all}>
        <div className={s.cont}>
          <div className={s.div}>
            <h2>Powerwall</h2>
            <p>Whole-Home Backup, 24/7</p>
          </div>

          <Link to={'/powerwall'} className={s.btn2}>
            Order PowerWall
          </Link>
        </div>
      </div>
      <section className={s.daback}>
        <h2>Power Your Home, Save Money</h2>
        <p>
          Powerwall is a compact home battery that stores energy generated by
          solar or from the grid. You can use <br /> this energy to power the
          devices and appliances in your home day and night, during outages or
          when you <br /> want to go off-grid. With customizable power modes,
          you can optimize your stored energy for outage <br />
          protection, electricity bill savings and more.
        </p>
      </section>
    </>
  );
};

export default Power;
