import { getUsers, postUsers, deleteUser, updateUsers } from "../services/calls.js";
import { alerta } from "../tools/sweetalert2.js";

const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const role = document.getElementById("role"); // Nuevo campo para seleccionar rol
const registro = document.getElementById("registro");

guardarUsuarios();

// Función que guarda los datos en el db.JSON
registro.addEventListener("click", async function (e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const namevalue = fullname.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const roleValue = role.value.trim(); // Obtener el rol seleccionado

    // Verifica si hay campos vacíos antes de hacer la petición
    if (!namevalue || !emailvalue || !passwordvalue || !roleValue) {
        alerta("Error!", "Todos los campos son obligatorios", "error", "Ok");
        return; // Detiene la ejecución para evitar que se envíen datos vacíos
    }

    try {
        // Registra el usuario con el rol seleccionado
        await postUsers(namevalue, emailvalue, passwordvalue, roleValue); // Guardamos el rol en la base de datos
        

        alerta("Éxito!", "Usuario registrado correctamente", "success", "Ok");

        // Limpiar los campos después de un registro exitoso
        fullname.value = "";
        email.value = "";
        password.value = "";
        role.value = ""; // Limpiar selección del rol
    } catch (error) {
        alerta("Error!", "No se pudo registrar el usuario", "error", "Ok");
        console.error(error);
    }
});

async function guardarUsuarios() {
    try {
        const datos = await getUsers();
        console.log(datos);
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }
}
