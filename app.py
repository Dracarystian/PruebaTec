from flask import Flask, jsonify, request
from werkzeug.utils import secure_filename
import os
from Server.connect import connection_bd
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:5173"}})

UPLOAD_FOLDER = 'uploads'  
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

#verificar si la extensión del archivo es permitida
def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Endpoint para crear un nuevo cliente
@app.route('/api/clientes', methods=['POST'])
def crear_cliente():
    datos_cliente = request.form
    imagen = request.files['imagen']

    # Verificar si se ha subido una imagen y si su extensión es permitida
    if 'imagen' not in request.files or not allowed_file(imagen.filename):
        return jsonify({'message': 'No se ha proporcionado una imagen válida'}), 400

    #Guardar img en el server
    if imagen:
        filename = secure_filename(imagen.filename)
        imagen.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

    with connection_bd.cursor() as cursor:
        sql = "INSERT INTO Cliente (Cedula, Nombre, Telefono, Codigo_ciudad, Estado_cliente, Ruta_imagen) VALUES (%s, %s, %s, %s, %s, %s);"
        cursor.execute(sql, (datos_cliente['Cedula'], datos_cliente['Nombre'], datos_cliente['Telefono'], datos_cliente['Codigo_ciudad'], datos_cliente['Estado_cliente'], os.path.join(app.config['UPLOAD_FOLDER'], filename)))
        connection_bd.commit()

    return jsonify({'message': 'Cliente creado exitosamente'}), 201

# Endpoint para obtener todos los clientes
@app.route('/api/clientes', methods=['GET'])
def obtener_clientes():
    with connection_bd.cursor() as cursor:
        sql = "SELECT * FROM Cliente;"
        cursor.execute(sql)
        clientes = cursor.fetchall()
    return jsonify(clientes)

# Endpoint para obtener un cliente por su ID
@app.route('/api/clientes/<int:id>', methods=['GET'])
def obtener_cliente_por_id(id):
    with connection_bd.cursor() as cursor:
        sql = "SELECT * FROM Cliente WHERE Cedula = %s;"
        cursor.execute(sql, (id,))
        cliente = cursor.fetchone()
    if cliente:
        return jsonify(cliente)
    else:
        return jsonify({'message': 'Cliente no encontrado'}), 404

# Endpoint para actualizar un cliente existente
@app.route('/api/clientes/<int:id>', methods=['PUT'])
def actualizar_cliente(id):
    datos_cliente = request.json
    with connection_bd.cursor() as cursor:
        sql = "UPDATE Cliente SET Nombre = %s, Telefono = %s, Codigo_ciudad = %s, Estado_cliente = %s WHERE Cedula = %s;"
        cursor.execute(sql, (datos_cliente['Nombre'], datos_cliente['Telefono'], datos_cliente['Codigo_ciudad'], datos_cliente['Estado_cliente'], id))
        connection_bd.commit()
    return jsonify({'message': 'Cliente actualizado exitosamente'})

# Endpoint para eliminar un cliente por su ID
@app.route('/api/clientes/<int:id>', methods=['DELETE'])
def eliminar_cliente(id):
    with connection_bd.cursor() as cursor:
        sql = "DELETE FROM Cliente WHERE Cedula = %s;"
        cursor.execute(sql, (id,))
        connection_bd.commit()
    return jsonify({'message': 'Cliente eliminado exitosamente'}), 204

if __name__ == '__main__':
    app.run(debug=True)
