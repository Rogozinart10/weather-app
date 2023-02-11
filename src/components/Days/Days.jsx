import React from 'react'
import { useSelector } from 'react-redux'
import GlobalSVGSelector from '../../assets/icons/GlobalSVGSelector'
import s from './Days.module.scss'

const Days = () => {
  function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
  }
  const dayss = [
    'Вc',
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Сб'
  ];
  let forecast = useSelector((state) => state.weather.weather.forecast);
  const days = [
    {
        id: 1,
        day: 'Сьогодні',
        date: `${(forecast?.forecastday[0]?.date)?.slice(5)}`,
        icon: <img src={forecast?.forecastday[0]?.day?.condition?.icon} alt="" />,
        temp1: `${Math.ceil(forecast?.forecastday[0]?.day?.maxtemp_c)}°`,
        temp2: `${Math.ceil(forecast?.forecastday[0]?.day?.mintemp_c)}°`,
        info: `${forecast?.forecastday[0]?.day?.condition?.text}`,
    },
    {
        id: 2,
        day: 'Завтра',
        date: `${(forecast?.forecastday[1]?.date)?.slice(5)}`,
        icon: <img src={forecast?.forecastday[1]?.day?.condition?.icon} alt="" />,
        temp1: `${Math.ceil(forecast?.forecastday[1]?.day?.maxtemp_c)}°`,
        temp2: `${Math.ceil(forecast?.forecastday[1]?.day?.mintemp_c)}°`,
        info: `${forecast?.forecastday[1]?.day?.condition?.text}`,
    },
    {
        id: 3,
        day: `${dayss[(new Date((forecast?.forecastday[2]?.date)?.toString())).getDay()]}`,
        date: `${(forecast?.forecastday[2]?.date)?.slice(5)}`,
        icon: <img src={forecast?.forecastday[2]?.day?.condition?.icon} alt="" />,
        temp1: `${Math.ceil(forecast?.forecastday[2]?.day?.maxtemp_c)}°`,
        temp2: `${Math.ceil(forecast?.forecastday[2]?.day?.mintemp_c)}°`,
        info: `${forecast?.forecastday[2]?.day?.condition?.text}`,
    },
    {
        id: 4,
        day: `${dayss[(new Date((forecast?.forecastday[3]?.date)?.toString())).getDay()]}`,
        date: `${(forecast?.forecastday[3]?.date)?.slice(5)}`,
        icon: <img src={forecast?.forecastday[3]?.day?.condition?.icon} alt="" />,
        temp1: `${Math.ceil(forecast?.forecastday[3]?.day?.maxtemp_c)}°`,
        temp2: `${Math.ceil(forecast?.forecastday[3]?.day?.mintemp_c)}°`,
        info: `${forecast?.forecastday[3]?.day?.condition?.text}`,
    },
    {
        id: 5,
        day: `${dayss[(new Date((forecast?.forecastday[4]?.date)?.toString())).getDay()]}`,
        date: `${(forecast?.forecastday[4]?.date)?.slice(5)}`,
        icon: <img src={forecast?.forecastday[4]?.day?.condition?.icon} alt="" />,
        temp1: `${Math.ceil(forecast?.forecastday[4]?.day?.maxtemp_c)}°`,
        temp2: `${Math.ceil(forecast?.forecastday[4]?.day?.mintemp_c)}°`,
        info: `${forecast?.forecastday[4]?.day?.condition?.text}`,
    },
    {
        id: 6,
        day: `${dayss[(new Date((forecast?.forecastday[5]?.date)?.toString())).getDay()]}`,
        date: `${(forecast?.forecastday[5]?.date)?.slice(5)}`,
        icon: <img src={forecast?.forecastday[5]?.day?.condition?.icon} alt="" />,
        temp1: `${Math.ceil(forecast?.forecastday[5]?.day?.maxtemp_c)}°`,
        temp2: `${Math.ceil(forecast?.forecastday[5]?.day?.mintemp_c)}°`,
        info: `${forecast?.forecastday[5]?.day?.condition?.text}`,
    },
    {
        id: 7,
        day: `${dayss[(new Date((forecast?.forecastday[6]?.date)?.toString())).getDay()]}`,
        date: `${(forecast?.forecastday[6]?.date)?.slice(5)}`,
        icon: <img src={forecast?.forecastday[6]?.day?.condition?.icon} alt="" />,
        temp1: `${Math.ceil(forecast?.forecastday[6]?.day?.maxtemp_c)}°`,
        temp2: `${Math.ceil(forecast?.forecastday[6]?.day?.mintemp_c)}°`,
        info: `${forecast?.forecastday[6]?.day?.condition?.text}`,
    },
  ]  
  return (
    <>
        <div className={s.wrapper}>
            <div className={s.content}>
                {days.map(item => (
                    <div key={item.id} className={s.card}>
                        <div className={s.day}>{item.day}</div>
                        <div className={s.date}>{item.date}</div>
                        <div className={s.icon}>{item.icon}</div>
                        <div className={s.temp1}>{item.temp1}</div>
                        <div className={s.temp2}>{item.temp2}</div>
                        <div className={s.info}>{item.info}</div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Days