import axios from "axios";

interface Users {
    id: number;
    name: string;
    email: string;
}
export interface Tenant {
    users: Users[]
}



export const fetchTenants = async () => {
    const response = await axios.get('https://dummyjson.com/users')
    return response.data;
};


