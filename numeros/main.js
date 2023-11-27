let numeros = [];

function adicionarNumero() {
    const numeroInput = document.getElementById('numeroInput');
    const numero = parseInt(numeroInput.value);

    if (!isNaN(numero)) {
        numeros.push(numero);
        numeroInput.value = '';
        exibirNumeros();
    }
}

function sortearNumero() {
    const resultadoElemento = document.getElementById('resultado');

    if (numeros.length === 0) {
        resultadoElemento.textContent = 'Adicione números antes de sortear.';
    } else {
        const indiceSorteado = Math.floor(Math.random() * numeros.length);
        const numeroSorteado = numeros[indiceSorteado];
        resultadoElemento.textContent = `Número Sorteado: ${numeroSorteado}`;
    }
}

function limparNumeros() {
    numeros = [];
    exibirNumeros();
    limparResultado();
}

function exibirNumeros() {
    const listaNumerosElemento = document.getElementById('listaNumeros');
    listaNumerosElemento.innerHTML = '';

    for (const numero of numeros) {
        const li = document.createElement('li');
        li.textContent = numero;
        listaNumerosElemento.appendChild(li);
    }
}

function limparResultado() {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = '';
}
