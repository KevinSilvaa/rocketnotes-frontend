import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-backend-r7x6.onrender.com"
});
