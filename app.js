function sumar(){
    const forma = document.getElementById('formulario');
    let operandoA = forma['Numero1'];
    let operandoB = forma['Numero2'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
function restar(){
    const forma = document.getElementById('formulario');
    let operandoA = forma['Numero1'];
    let operandoB = forma['Numero2'];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
function multiplicar(){
    const forma = document.getElementById('formulario');
    let operandoA = forma['Numero1'];
    let operandoB = forma['Numero2'];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
function dividir(){
    const forma = document.getElementById('formulario');
    let operandoA = forma['Numero1'];
    let operandoB = forma['Numero2'];
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}