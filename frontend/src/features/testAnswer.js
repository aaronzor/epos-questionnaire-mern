import { createSlice } from '@reduxjs/toolkit';

export const testAnswerSlice = createSlice({
    name: 'testAnswer',
    initialState: {
        retail: false,
        hospitality: false
    },
    reducers: {
        setTestAnswer: (state, { payload }) => {
            state = { ...state, payload };
        }
    }
});

export const { setTestAnswer } = testAnswerSlice.actions;

// const handleOnChange = (event) => {
//     const { name, value } = event.target;
//     setDetails({ ...details, [name]: value });
// };

export default testAnswerSlice.reducer;
