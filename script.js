
const button_rolardados = document.getElementById('rolling-dados');
button_rolardados.addEventListener('click', function(){
    breset();
    lancarDados ();
    conjuntResults();
    somaDados();
    counter();
    rolarDados();
    


})


function lancarDados (){
    arrayDados = [];
    for(let i = 0; i <2; i++){
    arrayDados.push(Math.floor(1+ 6*Math.random()));
    }
    return arrayDados;
    
}






function conjuntResults() {
    arraysValores = [];
    for(let j = 0; j<1000; j++){
        lancarDados();
        arraysValores.push(arrayDados);
    }
    return arraysValores;

}



function somaDados(){
    arrayResult = []
    
    for(k = 0; k < arraysValores.length; k++){
        s = arraysValores[k][0] + arraysValores [k][1];
        arrayResult.push(s);
    }
    console.log(arrayResult)
    return arrayResult;

}


/* resultados = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; */


function counter(){
    arrayResultados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for(let i = 0; i < arrayResult.length; i++ ){
        let valor = arrayResult[i];
        arrayResultados[valor-2] = arrayResultados[valor-2] + 1;
    }
    console.log(arrayResultados)
    return arrayResultados;
}


function rolarDados() {
    let ct = 1
    for(b = 0; b < arrayResultados.length; b++){
        const content = document.getElementById('results');
        const resultados = document.createElement('div');
        resultados.classList.add('results-content');
        ct = ct + 1;
        resultados.innerText = ct + " : " + arrayResultados[b];
        resultados.style.border = "2px solid darkcyan"; 
        resultados.style.borderRadius = '10px';
        resultados.style.height = `${arrayResultados[b]*2}px`
        resultados.style.maxWidth = "100px";
        resultados.style.marginTop = '15px'
        resultados.style.marginRight = '10px'
        content.appendChild(resultados);
    }
    let ct2 = 1
    for(c = 0; c < arrayResultados.length; c++){
        const content = document.getElementById('results1');
        const resultados = document.createElement('div');
        resultados.classList.add('results1-content');
        ct2 = ct2 + 1;
        resultados.innerText = ct2 + " : " + arrayResultados[c];
        resultados.style.border = "2px solid darkcyan"; 
        resultados.style.borderRadius = '10px';
        resultados.style.maxWidth = "300px";
        resultados.style.marginTop = '15px'
        resultados.style.marginRight = '15px'
        content.appendChild(resultados);
    }
   

}   

const reset = document.getElementById('reset');
reset.addEventListener('click', function(){
    breset();
  
})



function breset() {
    rst = document.getElementById('results');
    rst.innerHTML = "";
    rst1 = document.getElementById('results1');
    rst1.innerHTML = "";
}







