import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/',
});

export const getPVs = () => API.get('pvs/'); // Changed from posts/ to pvs/
export const getTeam = () => API.get('team/');
export const getPartners = () => API.get('partners/');
export const getResources = () => API.get('resources/');

export default API;
