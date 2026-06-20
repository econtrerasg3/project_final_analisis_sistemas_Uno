import axios from '@/plugins/axios';

export const getTenants = async () => {
    try {
        const response = await axios.get('/tenants');

        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};