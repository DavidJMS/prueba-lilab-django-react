# prueba-lilab-django-react
Correr el proyecto en Modo desarrollo:

Backend:
1. Debemos de instalar python 3.
2. Luego debemos de crear el entorno virtual: virtualenv env en windows.
3. Posteriormente instalar todas las dependencias que estan en el archivo requirements.txt de la carpeta backend: pip install -r requirements.txt
4. Debemos de crear nuestra base de datos en pgadmin y asignar los valores en el archivo settings. Nota estos datos son personales debemos de colocarlos en un archivo de entorno como puede ser un .ssh solo que por motivos de prueba no me dio tiempo, por lo cual basta solo en colocar los datos en la configuración de base de datos en el archivo settings estipulada.
5. Hay que realizar la migracion una vez creada la base de datos y corriendo pgadmin: python3 manage.py migrate.
6. Por ultimo encender el server: python3 manage.py runserver.

Frontend:
1. Debemos tener instalado NodeJs en su versión más estable.
2. Seguido debemos de instalar todas las dependencias: npm i.
3. Corremos el server: npm start
