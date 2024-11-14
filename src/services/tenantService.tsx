import axios from "axios";

export interface Tenant {
    id: number;
    name: string;
    email: string;
}

export const fetchTenants = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    return response.data;
};


