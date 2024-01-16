function convertir(divisa){
    let valor = document.getElementById("cantidad").value;
    let resultado = 0;
    if(divisa=="euro"){
        //Convierto a euros
        resultado = valor * 0.91340;
        document.getElementById("resultado").innerHTML = resultado + " €";
    }
    else{
        //Convierto a dolares
        resultado = valor * 1.09475;
        document.getElementById("resultado").innerHTML = resultado + " $";
    }
}