// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home/Home';
// import Help from './pages/About/HelpMeChoose';
// import Random from './pages/About2/Random';
// import DemoDrive from './pages/About3/DemoDrive';
// import Overview from './pages/About4/Overview';
// import Model_3 from './pages/Model_3/Model_3';
// import Model_s from './pages/Model_s/Model_s';
// import Model_y from './pages/Model_y/Model_y';
// import Model_x from './pages/Model_x/Model_x';
// import TeslaShop from './pages/TeslaShop/TeslaShop';
// import Shop from './pages/Shop/Shop';
// import Item from './pages/Item/Item';

// const App = () => {

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/help" element={<Help />} />
//         <Route path="/random" element={<Random />} />
//         <Route path="/DemoDrive" element={<DemoDrive />} />
//         <Route path="/OverView" element={<Overview />} />
//         <Route path="/model_3" element={<Model_3 />} />
//         <Route path="/model_s" element={<Model_s />} />
//         <Route path="/model_y" element={<Model_y />} />
//         <Route path="/model_x" element={<Model_x />} />
//         <Route path="/teslashop" element={<TeslaShop />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/item" element={<Item />} />
//         <Route path="/item/:productId" element={<Item />} /> {/* Маршрут для страницы товара */}
//       </Routes>
//     </>
//   );
// };

// export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Help from './pages/About/HelpMeChoose';
import Random from './pages/About2/Random';
import DemoDrive from './pages/About3/DemoDrive';
import Overview from './pages/About4/Overview';
import Model_3 from './pages/Model_3/Model_3';
import Model_s from './pages/Model_s/Model_s';
import Model_y from './pages/Model_y/Model_y';
import Model_x from './pages/Model_x/Model_x';
import TeslaShop from './pages/TeslaShop/TeslaShop';
import Shop from './pages/Shop/Shop';
import Item from './pages/Item/Item';
import Cart from './pages/Cart/Cart';
import { useState, useEffect } from 'react';
import Powerwall from './pages/powerwall/Powerwall';
import Power from './pages/Power/Power';

const App = () => {
  // Load cart from localStorage when the app initializes
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  console.log(cart);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/help" element={<Help />} />
      <Route path="/random" element={<Random />} />
      <Route path="/DemoDrive" element={<DemoDrive />} />
      <Route path="/OverView" element={<Overview />} />
      <Route path="/model_3" element={<Model_3 />} />
      <Route path="/model_s" element={<Model_s />} />
      <Route path="/model_y" element={<Model_y />} />
      <Route path="/model_x" element={<Model_x />} />
      <Route path="/teslashop" element={<TeslaShop />} />
      <Route path="/powerwall" element={<Powerwall />} />
      <Route path="/power" element={<Power />} />

      <Route path="/shop" element={<Shop />} />
      <Route path="/item/:productId" element={<Item addToCart={addToCart} />} />




      
      <Route
        path="/cart"
        element={<Cart cart={cart} removeFromCart={removeFromCart} />}
      />
    </Routes>
  );
};

export default App;
