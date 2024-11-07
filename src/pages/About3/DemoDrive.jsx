



import React, { useContext } from 'react';
import s from './DemoDrive.module.css';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';

const DemoDrive = () => {
  const { switchHeaderPanel, dataHome, setdataHeaderPanel, isHeaderPanel } = useContext(Context);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const botToken = '7450130440:AAELtiUM-E0Z6GzMAUusPsMEqovb08zDb4Q';
    const chatId = '-4228343009';

    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const phoneNumber = event.target.elements.phoneNumber.value;

    const message = `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email Address: ${email}
      Phone Number: ${phoneNumber}
    `;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const data = {
      chat_id: chatId,
      text: message
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Сообщение отправлено:', result);
      })
      .catch(error => {
        console.error('Ошибка при отправке сообщения:', error);
      });

    event.target.reset();
  };

  return (
    <>
      <div className={s.div}>
        <HeaderPanel />
        <nav id="navbar" className={scrollY > 50 ? `${s.white}` : ''}>
          <Link to='/' >  <img className={s.logo} src="/logo.svg" alt="broken" /> </Link>
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
          </div>
          <div className={s.about}>
            <img src="/znakvoprosa.svg" alt="broken" />
            <img src="/lang.svg" alt="broken" />
            <img src="/profile.svg" alt="broken" />
          </div>
        </nav>
      </div>
      <div className={s.container}>
        <div className={s.textcontain}>
          <h1>Demo Drive Tesla</h1>
          <p>
            Experience Full Self-Driving (Supervised), Learn About Charging and
            Get All Your Questions Answered
          </p>
        </div>
        <div className={s.form}>
          <h2>Contact Information</h2>
          <div className={s.inputs1}>
            <form onSubmit={handleFormSubmit}>
              <div className={s.container2}>
                <label>
                  <p>First Name</p>
                  <input className={s.inputs} type="text" name="firstName" required />
                </label>
                <label>
                  <p>Last Name</p>
                  <input className={s.inputs} type="text" name="lastName" required />
                </label>
                <label>
                  <p>Email Address</p>
                  <input className={s.inputs} type="email" name="email" required />
                </label>
                <label>
                  <p>Phone Number</p>
                  <input className={s.inputs} type="tel" name="phoneNumber" required />
                </label>
              </div>
              <div className={s.forgap}>
                <label className={s.label}>
                  <input required className={s.checkbox} type="checkbox" />
                  <p>Learn about Energy Products</p>
                </label>
                <p className={s.pon}>
                  By continuing, I agree to the
                  <span className={s.pon_pon1}> Terms and Conditions</span>
                </p>
                <button className={s.tgbtn} type="submit">
                  Schedule Demo Drive
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoDrive;
