# Usa la imagen base oficial de Python
FROM python:3.9

# Copia el archivo requirements.txt al directorio de trabajo
COPY requirements.txt .

# Instala las dependencias del proyecto
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto de la aplicación al directorio de trabajo
COPY . .

# Indica al contenedor que escuche en el puerto 5000
EXPOSE 5000

# Define el comando para ejecutar la aplicación
CMD ["python", "app.py"]
