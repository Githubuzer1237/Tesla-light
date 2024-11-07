// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import s from './Cart.module.css';

// const Cart = ({ cart, removeFromCart }) => {
//   const navigate = useNavigate();
//   const [selectedItems, setSelectedItems] = useState([]);

//   const handleCheckboxChange = (itemId) => {
//     setSelectedItems((prevSelectedItems) =>
//       prevSelectedItems.includes(itemId)
//         ? prevSelectedItems.filter((id) => id !== itemId)
//         : [...prevSelectedItems, itemId]
//     );
//   };

//   const handleCheckout = () => {
//     const itemsToOrder = cart.filter((item) => selectedItems.includes(item.id));

//     if (itemsToOrder.length === 0) {
//       alert('Пожалуйста, выберите товары для заказа.');
//       return;
//     }

//     const orderDetails = itemsToOrder
//       .map(
//         (item) =>
//           `Товар: ${item.name}, Количество: ${item.quantity}, Цена: ${item.price}`
//       )
//       .join('\n');

//     const botToken = '7450130440:AAELtiUM-E0Z6GzMAUusPsMEqovb08zDb4Q';
//     const chatId = '-4228343009';
//     const message = `Пользователь хочет заказать следующие товары:\n${orderDetails}`;

//     fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         chat_id: chatId,
//         text: message,
//       }),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log('Сообщение отправлено:', result);
//         itemsToOrder.forEach((item) => removeFromCart(item.id));
//       })
//       .catch((error) => {
//         console.error('Ошибка при отправке сообщения:', error);
//       });
//   };

//   if (cart.length === 0) {
//     return <div className={s.empty}>Ваша корзина пуста</div>;
//   }


















//   return (
//     <>
//     <div className={s.ob}>

//     <div className={s.cartContainer}>
//       <h2>Your Cart</h2>
//       <ul className={s.cartList}>
//         {cart.map((item) => (
//           <li key={item.id} className={s.cartItem}>
            
//             <img src={item.image} alt={item.name} className={s.cartItemImage} />
//             <div className={s.cartItemDetails}>
//               <h3>{item.name}</h3>
//               <p>Quantity:  {item.quantity}</p>
//               <button
//               onClick={() => removeFromCart(item.id)}
//               className={s.removeButton}
//             >
//               Remove
//             </button>
             
//             </div>
//             <p> ${item.price}</p>
//             <input className={s.checkbox}
//               type="checkbox"
//               checked={selectedItems.includes(item.id)}
//               onChange={() => handleCheckboxChange(item.id)}
//             />
//           </li>
//         ))}
//       </ul>
     
//     </div>
//     <div className={s.container}>
//      <h2>Order Summary</h2>
// <div className={s.cont}>

//      <div className={s.div}>
//      <p className={s.pr}>Shipping</p>
//      <p className={s.pr}>Sales Tax</p>
// <h2>SubTotal</h2>

//      </div>

//      <div className={s.div}>
//      <p className={s.pr}>Free</p>
//      <p className={s.pr}>Calculated at checkout</p>
//      <p className={s.p}>$450.00</p>
//      </div>



//     </div>

//     <button onClick={handleCheckout} className={s.checkoutButton}>
//         Оформить Заказ
//       </button>

// </div>
//     </div>


//     </>
//   );
// };

// export default Cart;








import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import s from './Cart.module.css';

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(itemId)
        ? prevSelectedItems.filter((id) => id !== itemId)
        : [...prevSelectedItems, itemId]
    );
  };

  const handleCheckout = () => {
    const itemsToOrder = cart.filter((item) => selectedItems.includes(item.id));

    if (itemsToOrder.length === 0) {
      alert('Пожалуйста, выберите товары для заказа.');
      return;
    }

    const orderDetails = itemsToOrder
      .map(
        (item) =>
          `Товар: ${item.name}, Количество: ${item.quantity}, Цена: ${item.price ? item.price.toFixed(2) : 'N/A'}`
      )
      .join('\n');

    const botToken = '7450130440:AAELtiUM-E0Z6GzMAUusPsMEqovb08zDb4Q';
    const chatId = '-4228343009';
    const message = `Пользователь хочет заказать следующие товары:\n${orderDetails}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Сообщение отправлено:', result);
        itemsToOrder.forEach((item) => removeFromCart(item.id));
      })
      .catch((error) => {
        console.error('Ошибка при отправке сообщения:', error);
      });
  };

  if (cart.length === 0) {
    return <div className={s.empty}>
          <h2> Cart</h2>

 
      <h3>Your Cart Is Empty</h3>
      <div className={s.div123}>

     <Link to={'/Shop'}> <button  className={s.checkoutButton}>
            Continue Shopping
          </button>
          </Link>
          <Link to={'/'}> <button  className={s.checkoutButton2}>
            Go Home
          </button>
          </Link>
      </div>
      </div>;
  }

  return (
    <>
      <div className={s.ob}>
        <div className={s.cartContainer}>
          <h2> Cart</h2>
          <ul className={s.cartList}>
            {cart.map((item) => (
              <li key={item.id} className={s.cartItem}>
                <img src={item.image} alt={item.name} className={s.cartItemImage} />
                <div className={s.cartItemDetails}>
                  <h3>{item.name}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price ? item.price.toFixed(2) : 'N/A'}</p>
                  <p>Subtotal: ${item.price ? (item.price * item.quantity).toFixed(2) : 'N/A'}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className={s.removeButton}
                  >
                    Remove
                  </button>
                </div>
                <input
                  className={s.checkbox}
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={s.container}>
          <h2>Order Summary</h2>
          <div className={s.cont}>
            <div className={s.div}>
              <p className={s.pr}>Shipping</p>
              <p className={s.pr}>Sales Tax</p>
              <h2>SubTotal</h2>
            </div>
            <div className={s.div}>
              <p className={s.pr}>Free</p>
              <p className={s.pr}>Calculated at checkout</p>
              <p className={s.p}>
                ${cart.reduce((total, item) => total + (item.price ? item.price * item.quantity : 0), 0).toFixed(2)}
              </p>
            </div>
          </div>
          <button onClick={handleCheckout} className={s.checkoutButton}>
            Оформить Заказ
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;

