import { configureStore, createSlice, combineReducers } from '@reduxjs/toolkit';
import logo from '../Assets/logo.png';
import initialState from '../initialState.json'; 

// Logo slice
const logoSlice = createSlice({
  name: 'logo',
  initialState: logo,
  reducers: {},
});

// Company Name slice
const companyNameSlice = createSlice({
  name: 'companyName',
  initialState: initialState.companyName,
  reducers: {},
});

// Slogan slice
const sloganSlice = createSlice({
  name: 'slogan',
  initialState: initialState.slogan,
  reducers: {},
});

// Location-Phone Pairs slice
const locationPhonePairsSlice = createSlice({
  name: 'locationPhonePairs',
  initialState: initialState.locationPhonePairs,
  reducers: {
    addPair: (state, action) => {
      state.push(action.payload);
    },
    removePair: (state, action) => {
      return state.filter(pair => pair.location !== action.payload.location);
    }
  }
});

// Doctors slice
const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: initialState.doctors,
  reducers: {
    addDoctor: (state, action) => {
      state.push(action.payload);
    },
    removeDoctor: (state, action) => {
      return state.filter(doc => doc.name !== action.payload.name);
    }
  }
});

// Embed slice
const embedSlice = createSlice({
  name: 'embed',
  initialState: initialState.embedLink,
  reducers: {},
});


// Combine reducers
const rootReducer = combineReducers({
  logo: logoSlice.reducer,
  companyName: companyNameSlice.reducer,
  slogan: sloganSlice.reducer,
  locationPhonePairs: locationPhonePairsSlice.reducer,
  doctors: doctorsSlice.reducer,
  embed: embedSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export const { addPair, removePair } = locationPhonePairsSlice.actions;

export const { addDoctor, removeDoctor } = doctorsSlice.actions;