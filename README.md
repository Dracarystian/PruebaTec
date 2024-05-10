# Prueba Tecnica para Datos Y Proyectos

# Primera Parte:

- Para la creacion de la base de datos use MySQL a traves de WorkBench y para hacer la conexion usa la extencion *pymysql* 

- Se añade la funcion para poder hacer las consultas directamente desde python añadiendo un cursor para que permita mostrar las consultas en consola.

# Segunda Parte

A partir de la base de datos pude crear los endpoints necesarios para obtener los datos de 'cliente', borrar y modificar. 

Para esta parte use Flask, y jsonfy para convertir los datos a json, para asegurarme de que los endpoints realmente estan bien utilicé **Postman** para realizar algunas pruebas.
Es de mis primeras veces usando esta tecnología, muy cómoda y facil de usar.

# Tercera Parte

- Para esta parte de la actividad, decidi usar React con tailwind, añadiendo componentes de chadsn, lamentablemente por el tiempo no llegué al producto final, sin embargo con Axios conecte
el front con el back del aplicativo y quedo listo para realizar las peticiones https futuras para cuando culmine el front. Por el momento el servidor esta corriendo en el localhost de flask (port:5000), pero planeo dockerizar la aplicacion para poderla desplegar en cualquier entorno que permita docker.

**En las horas siguientes a esta entrega seguiré manipulando el repositorio para dockerizar la aplicación (probablemente cuando leas el README ya estará hecho), y tambien para terminar con el front y el aplicativo en si**

# Actualización

- Se modifico el app.py para que reciba una img que pertenecera al cliente registrado. 
- Por parte del front se modifica el Register para que cuando reciba una ciudad en el registro se le asigne automaticamente el Codigo_ciudad y el Codigo_departamento