import { createContext, useState } from 'react';
import { Link } from 'react-router-dom';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isHeaderPanel, setIsHeaderPanel] = useState(false);

  const switchHeaderPanel = () => setIsHeaderPanel((prev) => !prev);

  const [isLoader, setIsLoader] = useState(true);

  const switchLoader = () => setIsLoader((prev) => !prev);

  const [dataHeaderPanel, setdataHeaderPanel] = useState(null);

  const dataHome = [
    {
      id: 1,
      text: `Vehicle`,
      image: [
        { id: 1, src: '/model-s.png', title: 'Model S', learnLink: '/model_s' },
        { id: 2, src: '/model-3.png', title: 'Model 3', learnLink: '/model_3' },
        { id: 3, src: '/model-x.png', title: 'Model X', learnLink: '/model_x' },
        { id: 4, src: '/model-y.png', title: 'Model Y', learnLink: '/model_y' },
        {
          id: 5,
          src: '/helpmechoose.png',
          title: 'Help Me Choose',
          get: true,
          link: 'help',
        },
      ],
    },

    {
      id: 2,
      text: `Energy`,
      image: [
        { id: 1, src: '/energy1.png', title: 'Solar Panels' },
        { id: 2, src: '/energy2.png', title: 'Solar Roofs' },
        { id: 3, src: '/energy3.png', title: 'Powerwall' },
        { id: 4, src: '/energy4.png', title: 'Megapack' },
      ],
    },

    {
      id: 3,
      text: `Charging`,
      image: [
        { id: 1, src: '/charging1.jpg', title: 'Charging' },
        { id: 2, src: '/charging2.jpg', title: 'Home Charging' },
        { id: 3, src: '/charging3.png', title: 'Super Charging' },
      ],
    },

    // {
    //   id: 4,
    //   text: `Shop`,
    //   image: [
    //     { id: 1, src: '/shop1.jpg' },
    //     { id: 2, src: '/shop2.jpg' },
    //     { id: 3, src: '/shop3.png' },
    //     { id: 4, src: '/shop4.jpg' },
    //   ],
    // },
  ];

  return (
    <Context.Provider
      value={{
        isHeaderPanel,
        switchHeaderPanel,
        dataHome,
        setdataHeaderPanel,
        dataHeaderPanel,
        isLoader,
        switchLoader,
      }}
    >
      {children}
    </Context.Provider>
  );
};
