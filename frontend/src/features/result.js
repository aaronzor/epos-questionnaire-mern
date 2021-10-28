import { createSlice } from '@reduxjs/toolkit';

export const resultSlice = createSlice({
    name: 'result',
    initialState: {
        value: [
            {
                answerOne: ''
            },
            {
                answerTwo: ''
            },
            {
                answerThree: ''
            },
            {
                answerFour: ''
            },
            {
                answerFive: ''
            },
            {
                answerSix: {
                    userName: '',
                    userEmail: '',
                    userPhone: ''
                }
            }
        ]
    },
    reducers: {
        setOne: (state, action) => {
            state.value.answerOne = action.payload;
        },
        setTwo: (state, action) => {
            state.value.answerTwo = action.payload;
        },
        setThree: (state, action) => {
            state.value.answerThree = action.payload;
        },
        setFour: (state, action) => {
            state.value.answerFour = action.payload;
        },
        setFive: (state, action) => {
            state.value.answerFive = action.payload;
        },
        setSix: (state, action) => {
            state.value.answerSix = action.payload;
        }
    }
});

export const { setOne } = resultSlice.actions;
export const { setTwo } = resultSlice.actions;
export const { setThree } = resultSlice.actions;
export const { setFour } = resultSlice.actions;
export const { setFive } = resultSlice.actions;
export const { setSix } = resultSlice.actions;

export default resultSlice.reducer;
