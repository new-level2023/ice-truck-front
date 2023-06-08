import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from "next-redux-wrapper";

const brandsSlice = createSlice({
    name: "brands",
    initialState: {
        brands: [],
    },
    reducers: {
        setBrands(state, action) {
            state.brands = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(HYDRATE, (state, action) => {
                return {
                    ...state,
                    ...action.payload.brands,
                };
            })
    },
});

export const { setBrands } = brandsSlice.actions;
export default brandsSlice.reducer;