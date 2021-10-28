import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line no-extend-native
Array.prototype.remove = function (from, to) {
    let rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

export const currentAnswerSlice = createSlice({
    name: 'currentAnswer',
    initialState: { value: [] },
    reducers: {
        setCurrentAnswer: (state, action) => {
            state.value.push(action.payload);
        },
        filterCurrentAnswer: (state, action) => {
            state.value.remove(action.payload);
        },
        clearCurrentAnswer: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setCurrentAnswer } = currentAnswerSlice.actions;
export const { filterCurrentAnswer } = currentAnswerSlice.actions;
export const { clearCurrentAnswer } = currentAnswerSlice.actions;

export default currentAnswerSlice.reducer;
