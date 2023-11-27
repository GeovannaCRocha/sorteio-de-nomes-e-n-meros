let nomes = [];
let nomeSorteado = '';

function adicionarNome() {
    const nomeInput = document.getElementById('nomeInput');
    const nome = nomeInput.value.trim();

    if (nome !== '') {
        nomes.push(nome);
        nomeInput.value = '';
        exibirNomes();
    }
}

function sortearNome() {
    const resultadoElemento = document.getElementById('resultado');

    if (nomes.length === 0) {
        resultadoElemento.textContent = 'Adicione nomes antes de sortear.';
    } else {
        const indiceSorteado = Math.floor(Math.random() * nomes.length);
        nomeSorteado = nomes[indiceSorteado];
        resultadoElemento.textContent = `Nome Sorteado: ${nomeSorteado}`;
    }
}

function limparNomes() {
    nomes = [];
    nomeSorteado = '';
    exibirNomes();
    limparResultado();
}

function exibirNomes() {
    const listaNomesElemento = document.getElementById('listaNomes');
    listaNomesElemento.innerHTML = '';

    for (const nome of nomes) {
        const li = document.createElement('li');
        li.textContent = nome;
        listaNomesElemento.appendChild(li);
    }
}

function limparResultado() {
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = '';
}
