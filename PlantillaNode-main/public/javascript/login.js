import { getLogin, postLogin, updatelogin, deletelogin } from "../services/callslogin.js";
import { alerta } from "../tools/sweetalert2.js";

const user = document.getElementById("loginname");
const emailuser = document.getElementById("emaillogin");
const passwordlogin = document.getElementById("password");
const login = document.getElementById("login");

login.addEventListener("click", async function (e) {
    e.preventDefault();

    const userdata = user.value.trim();
    const email = emailuser.value.trim();
    const password = passwordlogin.value.trim();

    if (!userdata || !email || !password) {
        alerta("Error!", "Todos los campos son obligatorios", "error", "Ok");
        return;
    }

    try {
        const users = await getLogin();
        console.log("Usuarios obtenidos:", users);

        const userL = users.find(u => u.user === userdata && u.email === email && u.password === password);

        if (userL) {
            // Guardar datos en sesión con el rol correcto
            sessionStorage.setItem("currentUsers", JSON.stringify({
                id: userL.id,
                name: userL.fullname, // Ahora guarda el nombre completo
                email: userL.email,
                role: userL.role  // Se recupera el rol correctamente
            }));

            // Redirigir según el rol del usuario
            const redirectPath = userL.role === "Profesor" ? "pagina.html" : "paginas.html";
            window.location.href = redirectPath;

            alerta("Éxito!", "Inicio de sesión exitoso", "success", "Ok");
        } else {
            alerta("Error!", "Correo o contraseña incorrectos", "error", "Ok");
        }
    } catch (error) {
        alerta("Error!", "No se pudo iniciar sesión", "error", "Ok");
        console.error("Error al iniciar sesión:", error);
    }
});
