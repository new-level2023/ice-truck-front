import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";

const trucksSlice = createSlice({
    name: "trucks",
    initialState: {
        trucks: [],
    },
    reducers: {
        setTrucks(state, action) {
            state.trucks = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(HYDRATE, (state, action) => {
                return {
                    ...state,
                    ...action.payload.trucks,
                };
            })
    },
});

export const { setTrucks } = trucksSlice.actions;
export default trucksSlice.reducer;