const form = document.getElementById('form-number');

function validaNumero(numeroMaior) {
    const numeroComoArray =  numeroMaior.split(' ');
    return numeroComoArray.length > 1
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = parseFloat(document.getElementById('Number1').value);
    const numeroB = parseFloat(document.getElementById('Number2').value);
    const mensagemErro = `O numero A: <b>${numeroA}</b> é maior que numero B: <b>${numeroB}</b> esta errado.`;
    const mensagemSucesso = `O numero B: <b>${numeroB}</b> é maior que o numero A: <b>${numeroA}</b>`;

    if (numeroA == numeroB) {
        alert("Numero1 é igual ao numero 2");
    } else if (numeroA > numeroB) {
        const containermensagemErro = document.querySelector('.error-message');
        containermensagemErro.innerHTML = mensagemErro;
        containermensagemErro.style.display = 'block';
        Number1.style.border = '1px solid red';
    } else {
        const containermensagemSucesso = document.querySelector('.sucess-message')
        containermensagemSucesso.innerHTML = mensagemSucesso;
        containermensagemSucesso.style.display = 'block';
    }
});

Number1.addEventListener('keyup', function(e) {
    const containermensagemErro = document.querySelector('.error-message');
    containermensagemErro.style.display = 'none';
});

Number1.addEventListener('blur', function() {
    Number1.style.border = '';
});

Number1.addEventListener('keyup', function(e) {
    const containermensagemErro = document.querySelector('.sucess-message');
    containermensagemErro.style.display = 'none';
});

Number2.addEventListener('keyup', function(e) {
    const containermensagemErro = document.querySelector('.sucess-message');
    containermensagemErro.style.display = 'none';
});