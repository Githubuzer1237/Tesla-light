// Toast.js
import React, { useState, useEffect } from 'react';
import './Toast.css'; // Подключаем стили

const Toast = ({ message, onClose }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (message) {
      setIsActive(true);
      const timer = setTimeout(() => {
        setIsActive(false);
        onClose();
      }, 5000); // Уведомление исчезает через 5 секунд

      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <div className={`toast ${isActive ? 'active' : ''}`}>
      <div className="toast-content">
        <i className="fas fa-check check"></i>
        <div className="message">
          <span className="text text-1">Success</span>
          <span className="text text-2">{message}</span>
        </div>
      </div>
      <i className="fa-solid fa-xmark close" onClick={() => setIsActive(false)}></i>
      <div className={`progress ${isActive ? 'active' : ''}`}></div>
    </div>
  );
};

export default Toast;
