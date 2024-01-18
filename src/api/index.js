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

  export async function registerUser(userObj) {
    try {
      const resp = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObj),
      });
  
      const json = await resp.json();
      console.log(json); // Assuming your response contains token property
      return json.token; // Adjust this based on your actual API response structure
    } catch (err) {
      console.error(err);
    }
  }

export default {getAllProducts, getSingleProduct, registerUser};