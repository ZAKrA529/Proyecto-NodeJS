async function getticket() {
    try {
        const response = await fetch('http://localhost:3003/Consultasfront', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        if (!response.ok) {
            throw new Error('Error fetching users');
        }


        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}


export { getticket };


//////////LLAMADO POST//////////


async function postticket(nombre, email, html, css, js, otro, descripcion) {
    try {


        const tickedData = {
            nombre, email, html, css, js, otro, descripcion
        };


        const response = await fetch("http://localhost:3003/Consultasfront", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tickedData)
        });


        return await response.json();

    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}


export { postticket }


//////////////LLAMADO UPDATE/////////////




async function updateticket(nombre, email, html, css, js, otro, descripcion) {
    try {


        const tickedData = {
            nombre, email, html, css, js, otro, descripcion
        };










        const response = await fetch("http://localhost:3003/Consultasfront/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tickedData)
        });




        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}


export { updateticket }






//////////////LLAMADO DELETE/////////////




async function deleteticket(id) {
    try {
        const response = await fetch(`http://localhost:3003/Consultasfront/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }


        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}


export { deleteticket };
