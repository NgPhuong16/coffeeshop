const { createSlice } = require("@reduxjs/toolkit");
export const sortSlice = createSlice({
    name: "sort",
    initialState: null,
    reducers: {
        sortDefault: (state) => (state = null),
        sortASC: (state) => (state = "ASC"),
        sortDESC: (state) => (state = "DESC")
    },
});
export const { sortDefault, sortASC, sortDESC } = sortSlice.actions;
export default sortSlice.reducer;
