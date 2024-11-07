import { useContext } from 'react';
import HeaderProduct from '../HeaderProduct/HeaderProduct';
import s from './HeaderPanel.module.css';
import { Context } from '../../context/Context';

const HeaderPanel = () => {
  const { isHeaderPanel, switchHeaderPanel, dataHeaderPanel } =
    useContext(Context);

  return (
    <div
      className={isHeaderPanel ? `${s.HeaderPanel} ${s.active}` : s.HeaderPanel}
      onClick={switchHeaderPanel}
    >
      <div className={s.container} onClick={(e) => e.stopPropagation()}>
        {!!dataHeaderPanel &&
          dataHeaderPanel.image.map((el) => (
            <HeaderProduct
              key={el.id}
              src={el.src}
              title={el.title}
              get={el.get}
              link={el.link}
              learnLink={el.learnLink}
            />
          ))}
      </div>
    </div>
  );
};

export default HeaderPanel;
