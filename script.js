const inputEmail = document.querySelector('.input_email'); // constante que captura o input onde o usuário irá fazer a entrada de dados.
const btn_valid = document.querySelector('.btn_valid'); // constante que captura o botão de validar.


function validarEmail(value){
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/; // Expressão Regular (RegEx).

    return regex.test(value);   // Testando RegEx (retorna true ou false).
}

btn_valid.addEventListener('click', (event) => {
    event.preventDefault();

    const email = inputEmail.value; // constante com o valor do input onde o usuário irá fazer a entrada de dados.

    const isValid = validarEmail(email); // constante que irá chamar e armazenar o valor que será retornado pela função validarEmail(). Obs: Ela retornará true ou false como já explicado.

    if(isValid){ // condicional que valida se a função validarEmail() irá retornar true.
        alert('Email válido');
    }else{ // condicional que valida se a função validarEmail() irá retornar false.
        alert('Email inválido');
    }
})