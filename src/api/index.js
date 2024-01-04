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


const getSingleProduct = async (productId) => {
    try {
      const response = await axios.get(`${baseUrl}/${productId}`);
      return response.data || null;
    } catch (error) {
      console.error(`Error fetching product ${productId}:`, error);
      return null;
    }
  };
  

export default {getAllProducts, getSingleProduct};