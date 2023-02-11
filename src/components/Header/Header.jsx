import React, { useState } from 'react'
import GlobalSVGSelector from '../../assets/icons/GlobalSVGSelector'
import s from './Header.module.scss'
import { useTheme } from '../../hooks/useTheme';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../features/weatherSlice';


const Header = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const addCity = () => {
        dispatch(fetchWeather(value));
        setValue('');
    }
    const {handleThemeChange} = useTheme();
    return (
        <header>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSVGSelector id='header-logo' />
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div onClick={handleThemeChange} className={s.theme}><GlobalSVGSelector id='change-theme' /></div>
                <div className={s.select}>
                    <input className={s.input} type='text' onChange={(e) => setValue(e.target.value)} value={value} />
                    <button className={s.btn} onClick={addCity}>Add</button>
                </div>
            </div>
        </header>
    )
}

export default Header


{/* <FormControl className={s.select}>
                    <InputLabel className={s.select_title} id="demo-simple-select-label">Оберіть місто</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Введите гов"
                        className={s.selec}
                    >
                        <MenuItem value={10}>Вінниця</MenuItem>
                        <MenuItem value={20}>Львів</MenuItem>
                        <MenuItem value={30}>Київ</MenuItem>
                    </Select>
                </FormControl> */}
