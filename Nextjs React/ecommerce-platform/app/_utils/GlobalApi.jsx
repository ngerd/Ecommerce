const {default: axios} = require("axios");

const axiosClient=axios.create({
    baseURL:'http://192.168.1.4:1337/api'
})

const getCategory=()=>axiosClient.get('/categories?populate=*')

const getSliders=()=>axiosClient.get('/sliders?populate=*').then(resp=>{
    return resp.data.data
})

// const getSliders = async () => {
//     try {
//       const response = await axiosClient.get('/sliders?populate=*');
//       return response.data.data; // Safely return the data array
//     } catch (error) {
//       console.error("Error fetching sliders:", error);
//       return []; // Fallback to an empty array
//     }
//   };

const getAllProducts=()=>axiosClient.get('/products?populate=*').then(resp=>{
    return resp.data.data
})


export default{
    getCategory,
    getSliders,
    getAllProducts
}