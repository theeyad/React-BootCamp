import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = process.env.REACT_APP_WEATHER_MAP_API_KEY;

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ lat, lon }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        { params: { lat, lon, appid: apiKey, units: "metric" } },
      );
      return response.data;
    } catch (err) {
    return rejectWithValue(err.response?.data ?? { message: "Network error" });
    }
  },
);

const initialState = {
  number: null,
  description: "",
  min: null,
  max: null,
  status: "idle",
  error: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (currentState) => {
        currentState.status = "pending";
        currentState.error = null;
      })
      .addCase(fetchWeather.fulfilled, (currentState, action) => {
        currentState.status = "succeeded";
        currentState.number = Math.round(action.payload.main.temp);
        currentState.min = Math.round(action.payload.main.temp_min);
        currentState.max = Math.round(action.payload.main.temp_max);
        currentState.description = action.payload.weather[0].description;
      }).addCase(fetchWeather.rejected, (currentState, action) => {
        currentState.status = "failed";
        currentState.error = action.payload?.message ?? action.error.message;
      })
  },
});

export const selectWeather = (state) => state.weather;
export default weatherSlice.reducer;
