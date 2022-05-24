
const username = document.getElementById('user');
const password = document.getElementById('pasword');
const btn = document.getElementById('userAccess');

const validarCampos = (user,pass) => {
    user.setCustomValidity('');
    pass.setCustomValidity('');

    if(username.value== ''){
        username.setCustomValidity('El campo de user no puede estar vacío');
    }else if (pass.value == ''){
        pass.setCustomValidity('El campo de user no puede estar vacío');
    }
        username.setCustomValidity('El campo de user no puede estar vacío')
    }
    console.log("la que te pario")


// btn.addEventListener('click',(e)) => 