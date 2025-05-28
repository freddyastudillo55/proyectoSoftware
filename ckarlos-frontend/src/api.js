// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3500', // ajusta si tu backend corre en otro puerto o dominio
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,            // si necesitas cookies o credenciales
});

export default API;
