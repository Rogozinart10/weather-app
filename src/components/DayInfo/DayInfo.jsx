import React from 'react'
import GlobalSVGSelector from '../../assets/icons/GlobalSVGSelector'
import s from './DayInfo.module.scss'
import cloud from './../../assets/img/cloud.png'
import { useSelector } from 'react-redux'

const DayInfo = () => {
  const weather = useSelector((state) => state.weather.weather)
  const info = [
    {
        id: 1,
        icon: <GlobalSVGSelector id='temp' />,
        title: 'Температура',
        info: `${Math.ceil(weather?.current?.temp_c)}° - ощущается как ${Math.ceil(weather?.current?.feelslike_c)}°`,
    },
    {
        id: 2,
        icon: <GlobalSVGSelector id='pressure' />,
        title: 'Давление',
        info: `${weather?.current?.pressure_mb} мм ртутного столба`,
    },
    {
        id: 3,
        icon: <GlobalSVGSelector id='precip' />,
        title: 'Осадки',
        info: `${(weather?.current?.precip_mm)} мм осадков`,
    },
    {
        id: 4,
        icon: <GlobalSVGSelector id='cloud' />,
        title: 'Ветер',
        info: `${Math.round((weather?.current?.wind_kph) * 1000 / 3600)} м/с`,
    },
  ]  
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        {info.map(item => (
            <div key={item.id} className={s.block}>
                <div className={s.icon}>{item.icon}</div>
                <div className={s.title}>{item.title}</div>
                <div className={s.info}>{item.info}</div>
            </div>
        ))}
      </div>
      <img src={cloud} className={s.cloud_img} alt="" />
    </div>
  )
}

export default DayInfo
