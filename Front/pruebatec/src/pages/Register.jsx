import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Button, } from "@/components/ui/button"
import { createUser } from '@/axios/axios.user';

 

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUser(Nombre, Telefono, Cedula, Codigo_ciudad, Estado_cliente, Img_cliente);
  
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
        <Input id="cedula" type="number" value={Cedula}/>
        <label htmlFor="nombre">Nombre</label>
        <Input id="nombre" value={Nombre}/>
        <label htmlFor="telefono">Telefono</label>
        <Input id="telefono" type="number" value={Telefono}/>
        <label htmlFor="ciudad">Ciudad</label>
        <Select id="ciudad">
            <SelectTrigger>
              <SelectValue placeholder="Selecciona tu rol" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Rol</SelectLabel>
                <SelectItem value="docente">Docente</SelectItem>
                <SelectItem value="alumno">Alumno</SelectItem>
                <SelectItem value="padre">Padre, madre o tutor</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="secundary" size="default" value={Img_cliente}>Agregar Imagen</Button>
          <Button variant="default" size="default" onSubmit={handleSubmit} >Crear</Button>
    </div>
    </>
  )

}
export default Register
