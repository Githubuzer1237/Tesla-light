import React from 'react'
import s from './TeslaShop.module.css'
import { Link } from 'react-router-dom'
const TeslaShop = () => {
  return (
    <>
    <div className={s.container}>

    <div className={s.button_container}>
            <Link to={'/Shop'} href="#" className={s.button}>
              SHOP NOW
            </Link>
</div>
            
    </div>
    </>
  )
}

export default TeslaShop