import { http } from 'api/http';

export const BrandsApi = {
    getBrands: async () => {
        const { data } = await http.get('/brands');
        return data;
    },
};
