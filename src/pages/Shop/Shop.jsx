
import s from './Shop.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <>
      <div className={s.items_container}>
        <h2 className={s.h2}>BEST SELLERS</h2>

        <div className={s.items}>
          <Swiper
            spaceBetween={30}
            loop={true}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <Link to={'/item/1'} className={s.item}>
                <img className={s.img} src="/item_1.avif" alt="" />
                <h3>CONSOLE TRAYS</h3>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'/item/2'}>
                <div className={s.item}>
                  <img className={s.img} src="/item_2.avif" alt="" />
                  <h3>CABLE ORGANIZER</h3>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'/item/3'} className={s.item}>
                <img className={s.img} src="/item_3.avif" alt="" />
                <h3>AIR FILTER</h3>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={'/item/4'} className={s.item}>
                <img className={s.img} src="/item_4.avif" alt="" />
                <h3>INTERIOR LINERS</h3>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Shop;
