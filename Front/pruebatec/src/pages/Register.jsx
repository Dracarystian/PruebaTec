import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { crearCliente } from '@/axios/axios.user';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [cedula, setCedula] = useState('');
  const [codigoCiudad, setCodigoCiudad] = useState('');
  const [imgCliente, setImgCliente] = useState(null); // Estado para almacenar la imagen seleccionada

  // Función para manejar la carga de la imagen
  const handleImagenChange = (e) => {
    const imagen = e.target.files[0];
    setImgCliente(imagen);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Establecer el estado del cliente como "Activo"
    const estadoCliente = 'Activo';

    // Crear un FormData para enviar la imagen al servidor
    const formData = new FormData();
    formData.append('imagen', imgCliente);

    try {
      await crearCliente({ nombre, telefono, cedula, codigo_ciudad: codigoCiudad, estado_cliente: estadoCliente, img_cliente: formData });
  
      alert("Te has registrado correctamente");
    } catch (error) {
      console.error("Error en el registro", error);
    
      if (error.response && error.response.status === 400) {
        alert(
          "El correo electrónico ya está registrado. Por favor, utiliza otro correo."
        );
      } else {
        alert(
          "Algo sucedió mal durante el registro. Por favor, inténtalo de nuevo."
        );
      }
    }
  }; 

  return (
    <>
      <h1>Cliente</h1>
      <div className='flex flex-col gap-5'>
        <label htmlFor="cedula">Cedula</label>
        <Input id="cedula" type="number" value={cedula} onChange={(e) => setCedula(e.target.value)} />
        <label htmlFor="nombre">Nombre</label>
        <Input id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <label htmlFor="telefono">Telefono</label>
        <Input id="telefono" type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        <label htmlFor="ciudad">Ciudad</label>
        <Select id="ciudad" onChange={(e) => setCodigoCiudad(e.target.value)}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona la ciudad" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Ciudad</SelectLabel>
              <SelectItem value="bogota">Bogotá</SelectItem>
              <SelectItem value="medellin">Medellín</SelectItem>
              <SelectItem value="cali">Cali</SelectItem>
              <SelectItem value="barranquilla">Barranquilla</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {/* Input de tipo file para seleccionar la imagen */}
        <input type="file" onChange={handleImagenChange} />
        <Button variant="default" size="default" onClick={handleSubmit}>Crear</Button>
      </div>
    </>
  );
}

export default Register;
