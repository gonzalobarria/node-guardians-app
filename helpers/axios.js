import axios from 'axios';

export const API = axios.create({
	baseURL: process.env.NEXT_PUBLIC_URL_SERVER,
	timeout: 30000
});
