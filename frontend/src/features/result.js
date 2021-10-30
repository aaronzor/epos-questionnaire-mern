import { createSlice } from '@reduxjs/toolkit';

export const resultSlice = createSlice({
    name: 'result',
    initialState: {
        value: []
    },
    reducers: {
        pushCurrentAnswer: (state, { payload }) => {
            if (payload !== { value: [] }) {
                state.value.push(payload);
            }

            return state;
        }
    }
});

export const { pushCurrentAnswer } = resultSlice.actions;

export default resultSlice.reducer;
