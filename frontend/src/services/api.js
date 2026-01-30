import axios from 'axios';

// Get the base backend URL (without /api/)
export const BACKEND_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8000/api/').replace('/api/', '');

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/',
});

export const getPVs = () => API.get('pvs/');
export const getTeam = () => API.get('team/');
export const getPartners = () => API.get('partners/');
export const getResources = () => API.get('resources/');

export default API;
