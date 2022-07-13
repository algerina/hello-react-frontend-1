import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  greeting: {},
  error: null
};

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const { data } = await axios.get('http://localhost:3000/api/v1/greetings');
    console.log(data);
    return data;
  }
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchGreeting.pending, state => {
        state.loading = true;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.loading = false;
        state.greeting = action.payload;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default greetingSlice.reducer;
