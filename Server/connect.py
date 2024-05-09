import pymysql

# Establecer conexión a la base de datos
connection_bd = pymysql.connect(host='localhost',
                             user='root',
                             password='123456',
                             database='pruebapyd')

print(connection_bd)



