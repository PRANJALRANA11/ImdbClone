import axios from 'axios'

export const  categoryMovies=async(Api_url)=>{
    try {
        let response=await axios.get(Api_url)
        return response.data;
    } catch (error) {
        console.log(error.message);
        return error.response.data;
    }
}