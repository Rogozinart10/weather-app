import React from 'react'
import { useSelector } from 'react-redux'
import GlobalSVGSelector from '../../assets/icons/GlobalSVGSelector'
import s from './Day.module.scss'

const Day = () => {
  const weather = useSelector((state) => state.weather.weather);
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <div className={s.title}>
            <div className={s.info_temp}>{Math.ceil(weather?.current?.temp_c)}°</div>
            <div className={s.info_day}>Today</div>
        </div>
        <div className={s.icon}>
          <img src={weather?.current?.condition?.icon} alt="" />
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.time}>Time: {(weather?.location?.localtime)?.slice(10)}</div>
        <div className={s.city}>City: {weather?.location?.name}</div>
      </div>
    </div>
  )
}

export default Day
