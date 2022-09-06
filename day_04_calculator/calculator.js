var numero = document.getElementById('numero').value;

console.log(numero);



function showIn(n){
    document.getElementById('saida').innerHTML = n;
    numero = n;
    
}

function armazena(n1){
    numero = n1;
    

}

function clean(){
    document.getElementById('saida').innerHTML = '';
}

function calcular(){

    document.getElementById('saida').innerHTML = numero;

    alert(numero);

}

