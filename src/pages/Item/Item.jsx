

// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import s from './Item.module.css';
// import Toast from "../../components/Toast/Toast";

// const products = {
//   1: {
//     id: '1',
//     name: 'Model Y and 2017-2023 | Model 3 Center Console Trays',
//     image: '/item_1.avif',
//     description:
//       'The Model 3/Y Center Console Trays help you stay organized with two flocked bins for your center console. The rear tray is a great size for larger items while the front tray is divided into two sections.',
//     },
//   2: {
//     id: '2',
//     name: 'Cable Organizer',
//     image: '/item_2.avif',
//     description:
//       'Store your Corded Mobile Connector with the newly redesigned Cable Organizer. This product features a sturdy bracket to keep your cables neatly stowed and a chassis holder to reduce additional wear and tear on your adaptor and outlet.',
//   },
//   3: {
//     id: '3',
//     name: 'Air Filter',
//     image: '/item_3.avif',
//     description:
//       'Replace your Model 3 or Model Y cabin air filters to prevent pollen, industrial fallout, road dust and other particles from entering the cabin through the vents. Tesla recommends replacing these filters every two years.',
//   },
//   4: {
//     id: '4',
//     name: 'Interior Liners',
//     image: '/item_4.avif',
//     description:
//       'Model Y All-Weather Interior Liners are made from thermoplastic elastomer materials for ultimate protection and spatial coverage. Unlike traditional floor mats, Model Y All-Weather Interior Liners feature vertical walls that help protect the interior carpet and ensure easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom made using the latest digital measurements for Model Y.',
//   },
// };


// const Item = ({ addToCart }) => {
//   const { productId } = useParams();
//   const [count, setCount] = useState(1);
//   const [toastMessage, setToastMessage] = useState('');

//   const increment = () => {
//     setCount((prev) => prev + 1);
//   };

//   const decrement = () => {
//     setCount((prev) => Math.max(prev - 1, 1));
//   };

//   const product = products[productId];

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const handleAddToCart = () => {
//     addToCart(product, count);
//     setToastMessage('Your changes have been saved');
//   };

//   const handleToastClose = () => {
//     setToastMessage('');
//   };

//   return (
//     <div>
//       <div className={s.container}>
//         <div className={s.imgcont}>
//           <img className={s.img} src={product.image} alt={product.name} />
//         </div>
//         <div className={s.textcontainer}>
//           <h2 className={s.h2}>{product.name}</h2>
//           <div className={s.qua}>
//             <h4 className={s.h4}>Quantity</h4>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <button
//                 onClick={decrement}
//                 disabled={count <= 1}
//                 style={{ border: 'none', background: 'none', color: 'white' }}
//               >
//                 -
//               </button>
//               <div
//                 style={{
//                   padding: '5px',
//                   paddingRight: '40px',
//                   paddingLeft: '40px',
//                   border: '1px solid gray',
//                   color: 'white',
//                   textAlign: 'center',
//                 }}
//               >
//                 {count}
//               </div>
//               <button
//                 onClick={increment}
//                 style={{ border: 'none', background: 'none', color: 'white' }}
//               >
//                 +
//               </button>
//             </div>
//           </div>
//           <button onClick={handleAddToCart} className={s.button}>
//             ADD TO CART
//           </button>
//           <div className={s.desc}>
//             <h4 className={s.h4}>Description</h4>
//             <p className={s.p}>{product.description}</p>
//           </div>
//         </div>
//       </div>
//       {toastMessage && <Toast message={toastMessage} onClose={handleToastClose} />}
//     </div>
//   );
// };

// export default Item;



import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './Item.module.css';
import Toast from "../../components/Toast/Toast";

const products = {
  1: {
    id: '1',
    name: 'Model Y and 2017-2023 | Model 3 Center Console Trays',
    image: '/item_1.avif',
    description:
      'The Model 3/Y Center Console Trays help you stay organized with two flocked bins for your center console. The rear tray is a great size for larger items while the front tray is divided into two sections.',
    price: 35,
  },
  2: {
    id: '2',
    name: 'Cable Organizer',
    image: '/item_2.avif',
    description:
      'Store your Corded Mobile Connector with the newly redesigned Cable Organizer. This product features a sturdy bracket to keep your cables neatly stowed and a chassis holder to reduce additional wear and tear on your adaptor and outlet.',
    price: 35,
  },
  3: {
    id: '3',
    name: 'Air Filter',
    image: '/item_3.avif',
    description:
      'Replace your Model 3 or Model Y cabin air filters to prevent pollen, industrial fallout, road dust and other particles from entering the cabin through the vents. Tesla recommends replacing these filters every two years.',
    price: 17,
  },
  4: {
    id: '4',
    name: 'Interior Liners',
    image: '/item_4.avif',
    description:
      'Model Y All-Weather Interior Liners are made from thermoplastic elastomer materials for ultimate protection and spatial coverage. Unlike traditional floor mats, Model Y All-Weather Interior Liners feature vertical walls that help protect the interior carpet and ensure easy cleanup. Created with an exclusive pattern by Tesla Design Studio, these liners are custom made using the latest digital measurements for Model Y.',
    price: 225,
  },
};

const Item = ({ addToCart }) => {
  const { productId } = useParams();
  const [count, setCount] = useState(1);
  const [toastMessage, setToastMessage] = useState('');

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - 1, 1));
  };

  const product = products[productId];

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, count);
    setToastMessage('Product added to cart');
  };

  const handleToastClose = () => {
    setToastMessage('');
  };

  return (
    <div>
      <div className={s.container}>
        <div className={s.imgcont}>
          <img className={s.img} src={product.image} alt={product.name} />
        </div>
        <div className={s.textcontainer}>
          <h2 className={s.h2}>{product.name}</h2>
          <p className={s.price}>Price: ${product.price.toFixed(2)}</p>
          <div className={s.qua}>
            <h4 className={s.h4}>Quantity</h4>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button
                onClick={decrement}
                disabled={count <= 1}
                style={{ border: 'none', background: 'none', color: 'white' }}
              >
                -
              </button>
              <div
                style={{
                  padding: '5px',
                  paddingRight: '40px',
                  paddingLeft: '40px',
                  border: '1px solid gray',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                {count}
              </div>
              <button
                onClick={increment}
                style={{ border: 'none', background: 'none', color: 'white' }}
              >
                +
              </button>
            </div>
          </div>
          <button onClick={handleAddToCart} className={s.button}>
            ADD TO CART
          </button>
          <div className={s.desc}>
            <h4 className={s.h4}>Description</h4>
            <p className={s.p}>{product.description}</p>
          </div>
        </div>
      </div>
      {toastMessage && <Toast message={toastMessage} onClose={handleToastClose} />}
    </div>
  );
};

export default Item;
