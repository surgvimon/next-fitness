import { configureStore } from '@reduxjs/toolkit';
import {
    useDispatch as useDispatchBase,
    useSelector as useSelectorBase,
  } from 'react-redux';
  
import themeReducer from './themeReducer';
import asyncReducer from './asyncReducer';
import workoutReducer from './workoutReducer';
import exerciseReducer from './exerciseReducer';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: { users: UsersState}
type AppDispatch = typeof store.dispatch;

// Since we use typescript, lets utilize `useDispatch`
export const useDispatch = () => useDispatchBase<AppDispatch>();

// And utilize `useSelector`
export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);


const store = configureStore({
    reducer: {
        themes: themeReducer,
        async: asyncReducer,
        workout: workoutReducer,
        exercise: exerciseReducer,
    },
    middleware: (getDefaultMiddleware:any) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
// store.dispatch(verifyAuth());
export default store
