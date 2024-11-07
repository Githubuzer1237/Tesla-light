

// import React, { useContext, useState } from 'react';
// import s from './Overview.module.css';
// import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
// import { Context } from '../../context/Context';
// import { Link } from 'react-router-dom';

// const Overview = () => {
//   const { switchHeaderPanel, dataHome, setdataHeaderPanel } =
//     useContext(Context);

//   const [selectedColor, setSelectedColor] = useState('overview_1.jpg');

//   const handleColorChange = (colorImage) => {
//     setSelectedColor(colorImage);
//   };

//   return (
//     <>
//       <div className={s.all}>
//         <HeaderPanel />
//         <nav id="navbar">
//           <Link to="/">
//             <img className={s.logo} src="/logo.svg" alt="broken" />
//           </Link>
//           <div className={s.nav}>
//             {!!dataHome &&
//               dataHome.map((el) => (
//                 <p
//                   key={el.id}
//                   className={s.vehicles}
//                   onClick={() => {
//                     switchHeaderPanel();
//                     setTimeout(() => {
//                       setdataHeaderPanel(el);
//                     }, 200);
//                   }}
//                 >
//                   {el.text}
//                 </p>
//               ))}
//           </div>
//           <div className={s.about}>
//             <img src="/znakvoprosa.svg" alt="broken" />
//             <img src="/lang.svg" alt="broken" />
//             <img src="/profile.svg" alt="broken" />
//           </div>
//         </nav>

//         <div className={s.container}>
//           <div className={s.imgcontainer}>
//             {/* Отображаем машину с текущим выбранным цветом */}
//             <img className={s.img} src={selectedColor} alt="car" />
//           </div>

//           <div className={s.model_container}>
//             <h1>Model 3</h1>
//             <div className={s.model_details}>
//               <div className={s.detail}>
//                 363 mi
//                 <span>Range (EPA est.)</span>
//               </div>
//               <div className={s.detail}>
//                 125mph
//                 <span>Top Speed</span>
//               </div>
//               <div className={s.detail}>
//                 4.9se
//                 <span>0–60 mph</span>
//               </div>
//             </div>
//             <div className={s.colorscontainer}>
//               {/* Каждое изображение цвета теперь меняет цвет машины при клике */}
//               <img
//                 className={s.colors}
//                 src="color_black.avif"
//                 alt=""
//                 onClick={() => handleColorChange('overview_1.jpg')}
//               />
//               <img
//                 className={s.colors}
//                 src="color_white.avif"
//                 alt=""
//                 onClick={() => handleColorChange('overview_1_white.jpg')}
//               />
//               <img
//                 className={s.colors}
//                 src="color_blue.avif"
//                 alt=""
//                 onClick={() => handleColorChange('overview_1_blue.jpg')}
//               />
//               <img
//                 className={s.colors}
//                 src="color_solidblack.avif"
//                 alt=""
//                 onClick={() => handleColorChange('overview_1_black.jpg')}
//               />
//               <img
//                 className={s.colors}
//                 src="color_red.avif"
//                 alt=""
//                 onClick={() => handleColorChange('overview_1_red.jpg')}
//               />
//               <img
//                 className={s.colors}
//                 src="color_silver.avif"
//                 alt=""
//                 onClick={() => handleColorChange('overview_1_gray.jpg')}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Overview;
import React, { useContext, useState } from 'react';
import s from './Overview.module.css';
import HeaderPanel from '../../components/HeaderPanel/HeaderPanel';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';

const Overview = () => {
  const { switchHeaderPanel, dataHome, setdataHeaderPanel } =
    useContext(Context);

  const [selectedColor, setSelectedColor] = useState('overview_1.jpg');

  const handleColorChange = (colorImage) => {
    const imgElement = document.querySelector(`.${s.img}`);

    imgElement.classList.add(s.fade);

    setTimeout(() => {
      setSelectedColor(colorImage);

      imgElement.classList.remove(s.fade);
    }, 500);
  };

  return (
    <>
      <div className={s.all}>
        <HeaderPanel />
        <nav id="navbar">
          <Link to="/">
            <img className={s.logo} src="/logo.svg" alt="broken" />
          </Link>
          <div className={s.nav}>
            {!!dataHome &&
              dataHome.map((el) => (
                <p
                  key={el.id}
                  className={s.vehicles}
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

        <div className={s.container}>
          <div className={s.imgcontainer}>
            <img className={`${s.img}`} src={selectedColor} alt="car" />
          </div>

          <div className={s.model_container}>
            <h1>Model 3</h1>
            <div className={s.model_details}>
              <div className={s.detail}>
                363 mi
                <span>Range (EPA est.)</span>
              </div>
              <div className={s.detail}>
                125mph
                <span>Top Speed</span>
              </div>
              <div className={s.detail}>
                4.9se
                <span>0–60 mph</span>
              </div>
            </div>
            <div className={s.colorscontainer}>
              <img
                className={s.colors}
                src="color_black.avif"
                alt=""
                onClick={() => handleColorChange('overview_1.jpg')}
              />
              <img
                className={s.colors}
                src="color_white.avif"
                alt=""
                onClick={() => handleColorChange('overview_1_white.jpg')}
              />
              <img
                className={s.colors}
                src="color_blue.avif"
                alt=""
                onClick={() => handleColorChange('overview_1_blue.jpg')}
              />
              <img
                className={s.colors}
                src="color_solidblack.avif"
                alt=""
                onClick={() => handleColorChange('overview_1_black.jpg')}
              />
              <img
                className={s.colors}
                src="color_red.avif"
                alt=""
                onClick={() => handleColorChange('overview_1_red.jpg')}
              />
              <img
                className={s.colors}
                src="color_silver.avif"
                alt=""
                onClick={() => handleColorChange('overview_1_gray.jpg')}
              />
            </div>
              <div className={s.btns}>
              <button>Rear-Wheel Drive      $33,990</button>
              <button>Long Range Rear-Wheel Drive        $29,990</button>
              <button>Long Range All-Wheel Drive        $34,990</button>
              <button>Performance All-Wheel Drive        $49,990</button>

              </div>



            <h1>Back Interior Color</h1>
            <div className={s.backinteriorcontainer}>
              
              <img 
              className={s.colors2}
               src="color_black.avif"
                alt="" 
                onClick={() => handleColorChange('overview_2_black.jpg')}
                />
                <img 
              className={s.colors2}
               src="color_white.avif"
                alt="" 
                onClick={() => handleColorChange('overview_2_white.jpg')}
                />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
