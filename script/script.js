function insert(num) {
    var numero = document.getElementById('operacao__valor').innerHTML;
    document.getElementById('operacao__valor').innerHTML = numero + num;
}

function clean() {
    document.getElementById('operacao__valor').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('operacao__valor').innerHTML;
    document.getElementById('operacao__valor').innerHTML = resultado.substring(0, resultado.length -1);
}

function calc(resultado) {
    var resultado = document.getElementById('operacao__valor').innerHTML;
    if(resultado) {
        document.getElementById('operacao__valor').innerHTML = eval(resultado);
    } else {
        document.getElementById('operacao__valor').innerHTML = "Insira um valor";
    }
}