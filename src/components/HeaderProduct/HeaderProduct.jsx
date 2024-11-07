import { Link, useLocation } from 'react-router-dom';
import s from './HeaderProduct.module.css';

const HeaderProduct = ({ src, title, get, link, learnLink }) => {
  // const navigate = useLocation();

  // console.log(navigate.pathname);
  return (
    <>
      <div className={s.headerProduct}>
        <img src={src} alt="broken" />

        <h3>{title}</h3>

        <div className={s.div}>
          {!!get ? (
            <Link to={link}>Get Started</Link>
          ) : (
            <>
              <Link to={learnLink}>Learn</Link>
              <Link to="">Order</Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderProduct;
