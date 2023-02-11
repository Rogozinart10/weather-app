import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "./../api/index"

const API_KEY = '17755b097c924303b72140944233001';

export const fetchWeather = createAsyncThunk(
    'weather/fetchWeather',
    async function(location) {
        const { data } = await axios.get( '/forecast.json', {
            params: {
                key: API_KEY,
                q: location,
                days: 7,
            }
        });
        return data;
    }
)

const initialState = {
    weather: {},
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.weather = action.payload;
        })
    }
})

export default weatherSlice.reducer;