import axios from 'axios';

const baseUrl = "https://fakestoreapi.com/products";

const getAllProducts = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data || [];
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};

export default getAllProducts;