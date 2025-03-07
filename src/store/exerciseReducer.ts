import { createSlice } from '@reduxjs/toolkit';

const exerciseReducer = createSlice({
    name: 'exercise',
    initialState: {
        theme: 'light',
        items: {},
        byCategory: {},
        formState: 'initial',
        new: {},
        isNewValid: false,
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});
export const { setTheme } = exerciseReducer.actions;
export default exerciseReducer.reducer;

type ExerciseEnv = 'indoor' | 'outdoor' | 'any';
type ExerciseCategory =
  | 'aerobic'
  | 'strength'
  | 'interval'
  | 'flexibility'
  | 'other';

export interface Exercise {
  id: string;
  name: string;
  description: string;
  // Eg. repetitions or time
  levelDescriptions: { low: string; medium: string; high: string };
  environment: ExerciseEnv;
  category: ExerciseCategory;
  // Eg. "Legs", "Mid body", or "Arms"
  tags: string[];
}

type ExercisesByCategory = {
  [group in Exercise['category']]: Exercise[];
};

type EditableExercise = Omit<Exercise, 'id'>;

type State = {
  items: { [id: string]: Exercise };
  byCategory: ExercisesByCategory;
  formState: 'initial' | 'editing' | 'saving' | 'saved' | 'failed';
  new: EditableExercise;
  isNewValid: boolean;
};

const initialExercise: EditableExercise = {
  name: '',
  description: '',
  levelDescriptions: { low: '', medium: '', high: '' },
  environment: 'any',
  category: 'other',
  tags: [],
};