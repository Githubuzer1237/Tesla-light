
// import React, { useState, useContext } from "react";
// import { Context } from "../../context/Context";
// import s from "./Random.module.css";
// import TestRandomCar from "../../components/testrandomcar/TestRandomCar";

// const Random = () => {
//   const [contentIndex, setContentIndex] = useState(0);
//   const [isTestRandomCar, setisTestRandomCar] = useState(false);

//   const { switchHeaderPanel, dataHome, setdataHeaderPanel, isHeaderPanel } =
//     useContext(Context);

//   const [selectedButtons, setSelectedButtons] = useState([]);

//   const handleButtonClick = (label) => {
//     setSelectedButtons((prevSelected) =>
//       prevSelected.includes(label)
//         ? prevSelected.filter((item) => item !== label)
//         : [...prevSelected, label]
//     );
//   };
//   const contents = [
//     <div className={s.contentOne} key="content1">
//       <img className={s.forrandom1} src="/forrandom.jpg" alt="broken" />
//       <div className={s.textContent}>
//         <h2 className={s.randomh2}>
//           What style of vehicle are <br /> you looking for?
//         </h2>
//         <button className={s.newbtns}>Sedan</button>
//         <button className={s.newbtns}>SUV</button>
//         <button className={s.newbtns}>I'm Flexible</button>
//       </div>
//     </div>,
//     <div className={s.contentTwo} key="content2">
//       <img className={s.forrandom2} src="/forrandom2.png" alt="broken" />
//       <div className={s.textContent}>
//         <h2 className={s.randomh2}>
//           What style of vehicle are <br /> you looking for?
//         </h2>
//         <button className={s.newbtns}>0-40 Miles</button>
//         <button className={s.newbtns}>40-100 Miles</button>
//         <button className={s.newbtns}>100+ Miles</button>
//       </div>
//     </div>,
//     <div className={s.contentThree} key="content3">
//       <img className={s.forrandom1} src="forrandom3.jpg" alt="broken" />
//       <div className={s.textContent}>
//         <h2 className={s.randomh2}>
//           How will you use your <br /> new vehicle?
//         </h2>
//         <div className={s.randomBtns}>
//           <button
//             className={`${s.newbtns2} ${
//               selectedButtons.includes("Road Trips") ? s.selected : ""
//             }`}
//             onClick={() => handleButtonClick("Road Trips")}
//           >
//             Road Trips
//           </button>
//           <button
//             className={`${s.newbtns2} ${
//               selectedButtons.includes("Errands") ? s.selected : ""
//             }`}
//             onClick={() => handleButtonClick("Errands")}
//           >
//             Errands
//           </button>
//           <button
//             className={`${s.newbtns2} ${
//               selectedButtons.includes("Family Driving") ? s.selected : ""
//             }`}
//             onClick={() => handleButtonClick("Family Driving")}
//           >
//             Family Driving
//           </button>
//           <button
//             className={`${s.newbtns2} ${
//               selectedButtons.includes("Commuting") ? s.selected : ""
//             }`}
//             onClick={() => handleButtonClick("Commuting")}
//           >
//             Commuting
//           </button>
//           <button
//             className={`${s.newbtns2} ${
//               selectedButtons.includes("Performance Driving") ? s.selected : ""
//             }`}
//             onClick={() => handleButtonClick("Performance Driving")}
//           >
//             Performance Driving
//           </button>
//           <button
//             className={`${s.newbtns2} ${
//               selectedButtons.includes("Technology") ? s.selected : ""
//             }`}
//             onClick={() => handleButtonClick("Technology")}
//           >
//             Technology
//           </button>
//           <button
//             className={`${s.newbtns2} ${
//               selectedButtons.includes("Car Camping") ? s.selected : ""
//             }`}
//             onClick={() => handleButtonClick("Car Camping")}
//           >
//             Car Camping
//           </button>
//           <button
//             className={`${s.newbtns2} ${
//               selectedButtons.includes("Winter Driving") ? s.selected : ""
//             }`}
//             onClick={() => handleButtonClick("Winter Driving")}
//           >
//             Winter Driving
//           </button>
//           <button
//             className={`${s.newbtns2} ${
//               selectedButtons.includes("Towing") ? s.selected : ""
//             }`}
//             onClick={() => handleButtonClick("Towing")}
//           >
//             Towing
//           </button>
//           <button
//             className={`${s.newbtns2} ${
//               selectedButtons.includes("Ride-Share") ? s.selected : ""
//             }`}
//             onClick={() => handleButtonClick("Ride-Share")}
//           >
//             Ride-Share
//           </button>
//         </div>
//       </div>
//     </div>,
//   ];

//   const handleNextClick = () => {
//     setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
//   };

//   const handlePreviousClick = () => {
//     setContentIndex((prevIndex) =>
//       prevIndex === 0 ? contents.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <>
//       {isTestRandomCar && <TestRandomCar />}

//       <div className={s.tabs}>
//         <button className={s.prev} onClick={handlePreviousClick}>
//           <img src="arrow.png" alt="Previous" className={s.prevImg} />
//         </button>
//         <div className={s.poncontainer}>
//           <div className={s.container}>{contents[contentIndex]}</div>
//         </div>
//         <button
//           className={s.next}
//           onClick={() => {
//             handleNextClick(), setisTestRandomCar((prev) => !prev);
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

// export default Random;
import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";
import s from "./Random.module.css";
import TestRandomCar from "../../components/testrandomcar/TestRandomCar";

const Random = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [isTestRandomCar, setisTestRandomCar] = useState(false);

  const { switchHeaderPanel, dataHome, setdataHeaderPanel, isHeaderPanel } =
    useContext(Context);

  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (label) => {
    setSelectedButtons((prevSelected) =>
      prevSelected.includes(label)
        ? prevSelected.filter((item) => item !== label)
        : [...prevSelected, label]
    );
  };

  const contents = [
    <div className={s.contentOne} key="content1">
      <img className={s.forrandom1} src="/forrandom.jpg" alt="broken" />
      <div className={s.textContent}>
        <h2 className={s.randomh2}>
          What style of vehicle are <br /> you looking for?
        </h2>
        <button className={s.newbtns}>Sedan</button>
        <button className={s.newbtns}>SUV</button>
        <button className={s.newbtns}>I'm Flexible</button>
      </div>
    </div>,
    <div className={s.contentTwo} key="content2">
      <img className={s.forrandom2} src="/forrandom2.png" alt="broken" />
      <div className={s.textContent}>
        <h2 className={s.randomh2}>
          What style of vehicle are <br /> you looking for?
        </h2>
        <button className={s.newbtns}>0-40 Miles</button>
        <button className={s.newbtns}>40-100 Miles</button>
        <button className={s.newbtns}>100+ Miles</button>
      </div>
    </div>,
    <div className={s.contentThree} key="content3">
      <img className={s.forrandom1} src="forrandom3.jpg" alt="broken" />
      <div className={s.textContent}>
        <h2 className={s.randomh2}>
          How will you use your <br /> new vehicle?
        </h2>
        <div className={s.randomBtns}>
          <button
            className={`${s.newbtns2} ${
              selectedButtons.includes("Road Trips") ? s.selected : ""
            }`}
            onClick={() => handleButtonClick("Road Trips")}
          >
            Road Trips
          </button>
          <button
            className={`${s.newbtns2} ${
              selectedButtons.includes("Errands") ? s.selected : ""
            }`}
            onClick={() => handleButtonClick("Errands")}
          >
            Errands
          </button>
          <button
            className={`${s.newbtns2} ${
              selectedButtons.includes("Family Driving") ? s.selected : ""
            }`}
            onClick={() => handleButtonClick("Family Driving")}
          >
            Family Driving
          </button>
          <button
            className={`${s.newbtns2} ${
              selectedButtons.includes("Commuting") ? s.selected : ""
            }`}
            onClick={() => handleButtonClick("Commuting")}
          >
            Commuting
          </button>
          <button
            className={`${s.newbtns2} ${
              selectedButtons.includes("Performance Driving") ? s.selected : ""
            }`}
            onClick={() => handleButtonClick("Performance Driving")}
          >
            Performance Driving
          </button>
          <button
            className={`${s.newbtns2} ${
              selectedButtons.includes("Technology") ? s.selected : ""
            }`}
            onClick={() => handleButtonClick("Technology")}
          >
            Technology
          </button>
          <button
            className={`${s.newbtns2} ${
              selectedButtons.includes("Car Camping") ? s.selected : ""
            }`}
            onClick={() => handleButtonClick("Car Camping")}
          >
            Car Camping
          </button>
          <button
            className={`${s.newbtns2} ${
              selectedButtons.includes("Winter Driving") ? s.selected : ""
            }`}
            onClick={() => handleButtonClick("Winter Driving")}
          >
            Winter Driving
          </button>
          <button
            className={`${s.newbtns2} ${
              selectedButtons.includes("Towing") ? s.selected : ""
            }`}
            onClick={() => handleButtonClick("Towing")}
          >
            Towing
          </button>
          <button
            className={`${s.newbtns2} ${
              selectedButtons.includes("Ride-Share") ? s.selected : ""
            }`}
            onClick={() => handleButtonClick("Ride-Share")}
          >
            Ride-Share
          </button>
        </div>
      </div>
    </div>,
  ];

  const handleNextClick = () => {
    if (contentIndex < contents.length - 1) {
      setContentIndex(contentIndex + 1);
    } else {
      setisTestRandomCar(true);
    }
  };

  const handlePreviousClick = () => {
    if (isTestRandomCar) {
      setisTestRandomCar(false);
    } else {
      setContentIndex((prevIndex) =>
        prevIndex === 0 ? contents.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <>
      {isTestRandomCar ? (
        <TestRandomCar />
      ) : (
        <div className={s.tabs}>
          <button className={s.prev} onClick={handlePreviousClick}>
            <img src="arrow.png" alt="Previous" className={s.prevImg} />
          </button>
          <div className={s.poncontainer}>
            <div className={s.container}>{contents[contentIndex]}</div>
          </div>
          <button className={s.next} onClick={handleNextClick}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Random;
