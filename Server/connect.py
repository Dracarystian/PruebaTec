import pymysql

# Establecer conexión a la base de datos
connection_bd = pymysql.connect(host='localhost',
                             user='root',
                             password='123456',
                             database='pruebapyd',
                             cursorclass=pymysql.cursors.DictCursor)

cursor = connection_bd.cursor()

#Consulta a la primera pregunta del ejercicio:
query = """
            SELECT c.Nombre AS Nombre_Cliente, AVG(f.Valor) AS Promedio_Ventas
            FROM Cliente c
            LEFT JOIN Factura f ON c.Cedula = f.Cedula
            WHERE YEAR(f.Fecha_factura) = 2006
            AND c.Cedula NOT IN (
                SELECT DISTINCT Cedula
                FROM Factura
                WHERE YEAR(Fecha_factura) = 2005
                AND Cedula IS NOT NULL
            )
            GROUP BY c.Nombre;
        """
#Consulta a la segunda pregunta del ejercicio:

#query = """
#            WITH Ventas AS (
#                SELECT c.Nombre AS Nombre_Cliente, SUM(f.Valor) AS Valor_Acumulado, YEAR(f.Fecha_factura) AS Anio
#                FROM Cliente c
#                JOIN Factura f ON c.Cedula = f.Cedula
#                JOIN Ciudad ci ON c.Codigo_ciudad = ci.Codigo_ciudad
#                JOIN Departamento d ON ci.Cod_departamento = d.Codigo_depar
#                WHERE d.Nombre_depar = 'Departamento X'
#                AND (MONTH(f.Fecha_factura) BETWEEN 1 AND 3)
#                GROUP BY c.Nombre, YEAR(f.Fecha_factura)
#            )
#            SELECT Anio, Nombre_Cliente, Valor_Acumulado
#            FROM (
#               SELECT Anio, Nombre_Cliente, Valor_Acumulado,
#                       ROW_NUMBER() OVER (PARTITION BY Anio ORDER BY Valor_Acumulado DESC) AS rn
#                FROM Ventas
#            ) AS RankedVentas
#           WHERE rn = 1;
#        """        

cursor.execute(query)


# Obtener los resultados de la consulta
results = cursor.fetchall()

# Mostrar los resultados
for row in results:
    print(row)


