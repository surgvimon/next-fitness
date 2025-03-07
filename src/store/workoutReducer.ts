import { Photo } from '@/utils/photos';
import { createSlice } from '@reduxjs/toolkit';
import { Exercise } from './exerciseReducer';
import { workouts } from './mock-data';

const workoutReducer = createSlice({
    name: 'workout',
    initialState: {
        theme: 'light',
        items: {},
        sorted: [],
        workouts: workouts,
        formState: 'initial',
        new: {},
        isNewValid: false,
    },
    reducers: {
        updateNewWorkout: (state, action) => {
            state.theme = action.payload;
        },
        toggleExerciseInNewWorkout: (state, action) => {
            state.theme = action.payload;
        },
        clearNewWorkout: (state, action) => {
            state.theme = action.payload;
        },
        saveNewWorkout: (state, action) => {
            state.theme = action.payload;
        },
    },
});
export const { 
    updateNewWorkout, 
    toggleExerciseInNewWorkout, 
    clearNewWorkout, 
    saveNewWorkout 
} = workoutReducer.actions;
export default workoutReducer.reducer;

export interface Workout {
    id: string;
    name: string;
    image: Photo;
    exercises: Exercise[];
    sets: number;
    duration?: string;
  }
  
  interface EditableWorkout {
    name?: string;
    image?: Photo;
    exercises?: string[];
    sets?: number;
    duration?: string;
  }
  
  type State = {
    items: { [id: string]: Workout };
    sorted: Workout[];
    formState: 'initial' | 'editing' | 'saving' | 'saved' | 'failed';
    new: EditableWorkout;
    isNewValid: boolean;
  };


