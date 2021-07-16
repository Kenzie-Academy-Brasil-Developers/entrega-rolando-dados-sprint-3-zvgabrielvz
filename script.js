
arraysValores = [];

function lancarDados (){
    arrayDados = [];
    for(let i = 0; i <2; i++){
    arrayDados.push(Math.floor(1+ 6*Math.random()));
    }
    return arrayDados;
}

console.log(lancarDados()+ " ");
console.log(lancarDados()+ " ");
console.log(lancarDados()+ " ");


function conjuntResults() {
    for(let j = 0; j<1000; j++){
        lancarDados();
        arraysValores.push(arrayDados);
    }
    return arraysValores;

}

console.log(conjuntResults());

function somaDados(){
    arrayResult = []
    for(k = 0; k < arraysValores.length; k++){
        s = arraysValores[k][0] + arraysValores [k][1];
        arrayResult.push(s);
    }
    return arrayResult;

}
console.log(somaDados());


/* resultados = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; */
let arrayResultados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function counter(){
    for(let i = 0; i < arrayResult.length; i++ ){
        let valor = arrayResult[i];
        arrayResultados[valor-2] = arrayResultados[valor-2] + 1;
    }
    return arrayResultados;
}
console.log(counter());



function rolarDados() {
    let ct = 1
    for(b = 0; b < arrayResultados.length; b++){
        const content = document.getElementById('results');
        const resultados = document.createElement('div');
        resultados.classList.add('results-content');
        ct = ct + 1;
        resultados.innerText = ct + " : " + arrayResultados[b];
        resultados.style.border = "2px solid darkcyan"; 
        resultados.style.borderRadius = '10px'
        resultados.style.width = "200px";
        resultados.style.marginTop = '15px'
        content.appendChild(resultados);
    }

}   



const button_rolardados = document.getElementById('rolling-dados');
button_rolardados.addEventListener('click', function(){
    rolarDados();

})

const reset = document.getElementById('reset');
reset.addEventListener('click', function(){
    rst = document.getElementById('results');
    rst.innerText = "";
    
})





