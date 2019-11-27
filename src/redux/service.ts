import axios from "axios";

export const registerService = async (user: any) => {
    try {
        const { data } = await axios.post("http://localhost:4000/auth/register", user);
        return data;
    } catch (ex) {
        return []
    }

}

export const logInService = async (logInUser: any) => {
    try {
        const { data } = await axios.post("http://localhost:4000/auth/login", logInUser);
        return data;
    } catch (ex) {
        return []
    }

}

export const getFlights = async (searchParams: any, userKey: string) => {
    const token = {
        headers: { 'authorization': userKey }
    };
    try {
        const { data } = await axios.post("http://localhost:4000/flights/schedule", searchParams, token);
        return data;
    } catch (ex) {
        return []
    }
}