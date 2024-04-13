var escreve = document.getElementById('tex');
var resu = document.getElementById('res');
var anotacoes = [];

function adicionar() {
    var texto = escreve.value.trim();
    if (texto === '') {
        alert('Por favor, digite uma anotação antes de adicionar.');
        return;
    }

    var dataAtual = new Date();
    var dataFormatada = formatarData(dataAtual);
    anotacoes.unshift({texto: texto, data: dataFormatada});
    exibirAnotacoes();
    escreve.value = ''; 
    escreve.focus();
}


function apagar(index) {
    anotacoes.splice(index, 1);
    exibirAnotacoes();
}

function exibirAnotacoes() {
    resu.innerHTML = '';
    anotacoes.forEach(function(anotacao, index) {
        var div = document.createElement('div');
        var texto = document.createTextNode(anotacao.texto);
        var button = document.createElement('button');
        var icon = document.createElement('i');
        icon.className = 'fas fa-trash';
        button.appendChild(icon); 
        button.onclick = function() {
            apagar(index);
        };

        var dataSpan = document.createElement('span');
        dataSpan.className = 'data';
        dataSpan.textContent = anotacao.data;

        div.appendChild(texto);
        div.appendChild(dataSpan);
        div.appendChild(button);
        resu.appendChild(div);
    });
}

function formatarData(data) {
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var hora = String(data.getHours()).padStart(2, '0');
    var minuto = String(data.getMinutes()).padStart(2, '0');
    var segundo = String(data.getSeconds()).padStart(2, '0');
    return `${dia}/${mes}/${ano} às ${hora}:${minuto}:${segundo}`;
}
