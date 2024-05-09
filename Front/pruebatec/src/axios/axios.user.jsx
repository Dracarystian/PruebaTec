import axios from 'axios';

// URL base de tu API REST en Flask
const API_URL = 'http://localhost:5000/api';

// Función para obtener todos los clientes
export const obtenerClientes = async () => {
  try {
    const response = await axios.get(`${API_URL}/clientes`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    throw error;
  }
};

// Función para obtener un cliente por su ID
export const obtenerClientePorId = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/clientes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener cliente por ID:', error);
    throw error;
  }
};

// Función para crear un nuevo cliente
export const crearCliente = async (cliente) => {
  try {
    const response = await axios.post(`${API_URL}/clientes`, cliente);
    return response.data;
  } catch (error) {
    console.error('Error al crear cliente:', error);
    throw error;
  }
};

// Función para actualizar un cliente existente
export const actualizarCliente = async (id, cliente) => {
  try {
    const response = await axios.put(`${API_URL}/clientes/${id}`, cliente);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar cliente:', error);
    throw error;
  }
};

// Función para eliminar un cliente por su ID
export const eliminarCliente = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/clientes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar cliente:', error);
    throw error;
  }
};
