import axios from "axios";


export const getUser = async () => {
    const response = await axios.get("192.168.161.131:3000/account")
    return response.data
}