
import React, { useState } from 'react';
import s from './Powerwall.module.css';
import { Link } from 'react-router-dom';

const Powerwall = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = '7519737610:AAGMYVhIwyzvKySnu3NbQjjK3v3duxnHXyA';
    const chatId = '-4556811883';
    const message = `Пользователь оставил заявку на покупку Powerwall. Почта: ${email}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (response.ok) {
        alert('Заявка отправлена!');
        setEmail('');
      } else {
        alert('Ошибка при отправке заявки.');
      }
    } catch (error) {
      alert('Ошибка при отправке заявки.');
    }
  };

  return (
    <div className={s.all}>
      <img className={s.power} src="/power-wall-sect.avif" alt="" />

      <div className={s.text}>
        <h2>Powerwall 3</h2>
        <p>
          Store energy for intelligent home backup and grid
          <br /> independence, complete with remote monitoring
          <br /> anywhere, anytime.
        </p>

        <form className={s.form} onSubmit={handleSubmit}>
          <label>
            <p>Email</p>
            <input
              className={s.inputs}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <button className={s.tgbtn} type="submit">
            Leave a Request
          </button>
        </form>

        <Link className={s.link}>Learn More About Powerwall</Link>
        

      <Link to={'/'} >
      <button className={s.tgbtn2} type="submit">
            Go Home
          </button>
      </Link>  
      </div>
    </div>
  );
};

export default Powerwall;
