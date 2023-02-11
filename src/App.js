import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Day from "./components/Day/Day";
import DayInfo from "./components/DayInfo/DayInfo";
import Days from "./components/Days/Days";
import Header from "./components/Header/Header";
import { fetchWeather } from "./features/weatherSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather('Kiev'))
  }, []);
    
  return (
    <div className="app">
      <Header />
      <div className='wrap'>
        <Day />
        <DayInfo />
      </div>
      <Days />
    </div>
  );
}

export default App;
