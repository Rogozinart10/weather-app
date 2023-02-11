import React from 'react'
import s from './Days.module.scss'

const Buttons = () => {
  const btns = [
    {
        id: 1,
        title: 'На неделю',
    },
    {
        id: 2,
        title: 'На месяц',
    },
    {
        id: 3,
        title: 'На 10 дней',
    },
    {
        id: 4,
        title: 'Отменить',
    }
  ]  
  return (
    <div className={s.btn_wrapper}>
        <div className={s.btns}>
            {btns.map(item => (
                <div key={item.id} className={s.btn}>{item.title}</div>
            ))}
        </div>
    </div>
  )
}

export default Buttons