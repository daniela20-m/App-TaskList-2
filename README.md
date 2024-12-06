# TaskList Application

## Prerrequisitos

Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes programas en tu máquina:

- **Java JDK**: [Descargar desde Oracle](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- **Node.js**: [Descargar desde Node.js](https://nodejs.org/)
- **MySQL**: [Descargar desde MySQL](https://dev.mysql.com/downloads/)
- **Visual Studio Code**: [Descargar desde Visual Studio Code](https://code.visualstudio.com/)

## Inicialización del Proyecto

Este proyecto utiliza Spring Boot para el Backend y React para el Frontend.

### Backend (Spring Boot)

1. **Creación del Proyecto:**
   Se usó **Spring Initializr** para crear el proyecto de Spring Boot con las siguientes dependencias:

   - **Spring Web**: Para crear el API REST.
   - **Spring Data JPA**: Para interactuar con la base de datos (usando Hibernate).
   - **Spring Boot DevTools**: Para facilitar la depuración durante el desarrollo.
   - **MySQL**: Para la conexión con la base de datos MySQL.
   - **Validation**: Para la validación de los datos entrantes en las solicitudes HTTP.

2. **Estructura del Proyecto:**
   El Backend está organizado en los siguientes paquetes:

   - **model/Task.java**: Clase que define la entidad `Task` y su mapeo a la base de datos con la anotación `@Entity`.
   - **repository/TaskRepository.java**: Extiende `JpaRepository` para proporcionar acceso a operaciones CRUD en la base de datos sin necesidad de consultas SQL manuales.
   - **service/TaskService.java**: Contiene la lógica de negocio (crear, leer, actualizar, eliminar tareas).
   - **controller/TaskController.java**: Expone los endpoints de la API REST utilizando anotaciones de Spring Web como `@RestController`, `@GetMapping`, `@PostMapping`, `@PutMapping`, y `@DeleteMapping`.

3. **Iniciar el Backend:**
   Para iniciar el Backend de la aplicación, sigue estos pasos:

   - Navega a la carpeta del Backend en tu terminal.
   - Ejecuta el siguiente comando para compilar y ejecutar el servidor:

     ```bash
     mvn spring-boot:run
     ```

   - El Backend estará corriendo en el puerto `8080` de tu localhost por defecto.

### Frontend (React)

1. **Instalar Dependencias:**
   El Frontend está desarrollado con React. Para instalar las dependencias, realiza lo siguiente:

   - Navega a la carpeta del Frontend.
   - Ejecuta el siguiente comando para instalar todas las dependencias:

     ```bash
     npm install
     ```

2. **Iniciar el Frontend:**
   Para ejecutar el Frontend, usa el siguiente comando:

   ```bash
   npm start



### Detalles adicionales:
- En la sección de **Prerrequisitos**, es importante que incluyas enlaces de descarga para facilitar la instalación de los programas requeridos.
- En **Inicialización del Proyecto**, te expliqué cómo iniciar tanto el Backend como el Frontend, con los comandos necesarios.
- La sección de **Base de Datos** te muestra un ejemplo de configuración de conexión con MySQL.
- Asegúrate de incluir ejemplos de endpoints de la API REST, así como los métodos disponibles para interactuar con las tareas.

Este archivo README.md debe ser claro y comprensible para los desarrolladores que vayan a utilizar o evaluar tu código.
