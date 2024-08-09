const { createSlice } = require("@reduxjs/toolkit");
export const filterSlice = createSlice({
    name: "filter",
    initialState: { min: 0, max: 9999999 },
    reducers: {
        setMin: (state, actions) => {
            state.min = actions.payload;
            return state;
        },
        setMax: (state, actions) => {
            state.max = actions.payload;
            return state;
        }
    },
});
export const { setMax, setMin } = filterSlice.actions;
export default filterSlice.reducer;
