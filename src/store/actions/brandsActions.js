import { createAsyncThunk } from '@reduxjs/toolkit';
import { BrandsApi } from 'store/services/brands';
import { handleError } from 'store/utils/error';

export const getBrands = createAsyncThunk('brands/getBrands', async (_, { rejectWithValue }) => {
    try {
        const data = await BrandsApi.getBrands();
        console.log({data})
        return data;
    } catch (err) {
        handleError(err, rejectWithValue);
    }
});
