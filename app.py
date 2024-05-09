from flask import Flask, jsonify, request
from Server.connect import connection_bd

app = Flask(__name__)

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

# Endpoint para crear un nuevo cliente
@app.route('/api/clientes', methods=['POST'])
def crear_cliente():
    datos_cliente = request.json
    with connection_bd.cursor() as cursor:
        sql = "INSERT INTO Cliente (Cedula, Nombre, Telefono, Codigo_ciudad, Estado_cliente) VALUES (%s, %s, %s, %s, %s);"
        cursor.execute(sql, (datos_cliente['Cedula'], datos_cliente['Nombre'], datos_cliente['Telefono'], datos_cliente['Codigo_ciudad'], datos_cliente['Estado_cliente']))
        connection_bd.commit()
    return jsonify({'message': 'Cliente creado exitosamente'}), 201

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
