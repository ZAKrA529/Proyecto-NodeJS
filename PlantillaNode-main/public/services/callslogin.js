async function getLogin() {
    try {
        const response = await fetch('http://localhost:3003/registros', {
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


export { getLogin };


//////////LLAMADO POST//////////


async function postLogin(fullname, email, password) {
    try {


        const userData = {
            fullname,
            email,
            password
        };


        const response = await fetch("http://localhost:3003/registros", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });


        return await response.json();

    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}


export { postLogin }


//////////////LLAMADO UPDATE/////////////




async function updatelogin(fullname, email, password, id) {
    try {


        const userData = {
            fullname,
            email,
            password,
            id

        };










        const response = await fetch("http://localhost:3003/registros/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });




        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}


export { updatelogin }






//////////////LLAMADO DELETE/////////////




async function deletelogin(id) {
    try {
        const response = await fetch(`http://localhost:3003/registros/${id}`, {
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


export { deletelogin };
