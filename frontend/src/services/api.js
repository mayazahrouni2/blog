import axios from 'axios';

// Get the base backend URL (without /api/)
let rawBase = (import.meta.env.VITE_API_URL || 'http://localhost:8000/api/').replace('/api/', '');

// Normalize: ensure it ends with / and if it's a render.com URL, force https
if (rawBase.includes('render.com') && !rawBase.startsWith('https://')) {
    rawBase = rawBase.replace('http://', 'https://');
}
if (!rawBase.endsWith('/')) {
    rawBase = rawBase + '/';
}

export const BACKEND_URL = rawBase;

export const getMediaURL = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    // Remove leading slash from path to avoid double slashes with BACKEND_URL
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${BACKEND_URL}${cleanPath}`;
};

console.log("Backend URL detected:", BACKEND_URL);

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/',
});

export const getPVs = () => API.get('pvs/');
export const getTeam = () => API.get('team/');
export const getPartners = () => API.get('partners/');
export const getResources = () => API.get('resources/');

export default API;
