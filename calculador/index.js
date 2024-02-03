function poner(value) {
    document.getElementById("txt").value += value;
}
function calcular(operator) {
    let result = document.getElementById("txt").value;
    let calculation = eval(result);
    document.getElementById("txt").value =calculation;
}
function borrar() {
    document.getElementById("txt").value = ""
}