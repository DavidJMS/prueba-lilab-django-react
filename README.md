# prueba-lilab-django-react
Correr el proyecto en Modo desarrollo:

Backend:
Primero debemos de instalar python 3
Luego debemos de crear el entorno virtual: virtualenv env en windows
Posteriormente instalar todas las dependencias que estan en el archivo requirements.txt de la carpeta backend: pip install -r requirements.txt
Debemos de crear nuestra base de datos en pgadmin y asignar los valores en el archivo settings. Nota estos datos son personales debemos de colocarlos en un archivo de entorno como puede ser un .ssh solo que por motivos de prueba no me dio tiempo.
Hay que realizar la migracion: python3 manage.py migrate
Encender el server: python3 manage.py runserver

Frontend:
Debemos tener instalado NodeJs en su versión más estable
Seguido debemos de instalar todas las dependencias: npm i
Corremos el server: npm start
