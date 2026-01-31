import axios from 'axios';

// Auto-detect environment
const isLocal = typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

const PROD_API_URL = 'https://blog-backend-lh4a.onrender.com/api/';
const LOCAL_API_URL = 'http://localhost:8000/api/';

// Priority: 1. Env Var, 2. Auto-detected URL based on hostname
const API_BASE = import.meta.env.VITE_API_URL || (isLocal ? LOCAL_API_URL : PROD_API_URL);

// Get the base backend URL (without /api/) for media
let rawBase = API_BASE.replace('/api/', '');

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
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `${BACKEND_URL}${cleanPath}`;
};

console.log("Environment:", isLocal ? "Local" : "Production");
console.log("Backend URL detected:", BACKEND_URL);

const API = axios.create({
    baseURL: API_BASE,
});

export const getPVs = () => API.get('pvs/');
export const getTeam = () => API.get('team/');
export const getPartners = () => API.get('partners/');
export const getResources = () => API.get('resources/');

export default API;
