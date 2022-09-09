function insert(num){
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
}

function clear(){
    document.getElementById('result').innerHTML="";
}

function FuncCalc(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = eval(result);   
}