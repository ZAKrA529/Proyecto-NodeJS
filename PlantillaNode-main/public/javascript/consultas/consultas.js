import { deleteticket, getticket, postticket, updateticket } from "../../services/callsfront.js";
import { alerta } from "../tools/sweetalert2.js";

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const otro = document.getElementById("otro");
const descripcion = document.getElementById("descripcion");
const envio = document.getElementById("envio");

guardarconsulta();

envio.addEventListener("click" , async function (e) {
    e.preventDefault();

    //Evita el envio de datos vacíos
    const nombreval = nombre.value.trim()
    const emailval = email.value.trim()
    const htmlval = html.value.trim()
    const cssval = css.value.trim()
    const jsval = js.value.trim()
    const otroval = otro.value.trim()
    const descripcionval = descripcion.value.trim()

    //valida campos vacíos
    if (!nombreval || !emailval || !htmlval || !cssval || !jsval || otroval || !descripcionval) {
        await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios!',
        });
        return;
    }

    //Agrega la consulta al db.JSON
    try {
        await postticket(nombreval, emailval, htmlval, cssval, jsval, otroval, descripcionval);

        alerta("Éxito!", "Tu consulta se registro", "success", "Ok");

        //limpia los campos despues de la consulta
        nombreval.value="";
        emailval.value="";
        htmlval.value="";
        cssval.value="";
        jsval,value="";
        otroval.value="";
        descripcionval.value="";
    } catch (error) {
        alerta("Error!", "No se pudo registrar tu consulta", "error", "Ok");
        console.error(error);
    }
});

async function guardarconsulta() {
    try {
        const ticked = await getticket();
        console.log(ticked)
    } catch (error) {
        console.error("Error al obtener la consulta:", error);
    }
}
