import api from "./apiConfig.js";

export const getFish = async () => {
    try {
        const response = await api.get("/")
        //axios generally returns an object but we need the data from the object        
        return response.data
    } catch (error) {
        throw error
    }
}