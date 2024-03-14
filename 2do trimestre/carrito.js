let carro = [
    {id:0, 'titulo':'monitor','precio':129.99, uds:0},
    {id:1,'titulo':'teclado','precio':39.99, uds:0},
    {id:2, 'titulo':'ratón', 'precio':22.99, uds:0},
    {id:3, 'titulo':'gráfica', 'precio':1449.99, uds:0}
];
let almacenado=null;
function iniciar(){
    almacenado = localStorage.getItem("carro");
    if (****************){ // Comprobamos si el carrito tenía algo almacenado 
        almacenado = ****************; // Convertimos el texto almacenado en un objeto Javascript
        carro = almacenado;
        refrescar();
    }
}
function anadir(producto){
     // En producto llevamos el identificador del producto a guardar en el carrito
     let objeto = carro[producto];
     objeto['uds'] += 1; // Añado unidad
     carro[producto] = objeto;
     document.getElementById("id"+producto).value = objeto['uds'];
     **************** // Almacenamos en localStorage el carro
     refrescar();
}
function quitar(producto){
    // En producto llevamos el identificador del producto a guardar en el carrito
    let objeto = carro[producto];
    let numuds = objeto['uds'];
    if (***********){ // Comprobamos que el número de unidades sea al menos una
        objeto['uds'] -= 1; // Quito unidad
        carro[producto] = objeto;
        document.getElementById("id"+producto).value = objeto['uds'];
        localStorage.setItem("carro", JSON.stringify(carro));
        refrescar();
    }
}
// Actualiza visualización carrito y almacenamiento local
****************{
    let listaCarrito = document.getElementById("carrito");
    let total=0;
    listaCarrito.innerHTML="";
    **************** // Recorremos todos los elementos del carrito
    {
        
        let producto = carro[i];
        if (producto['uds']>0){
            let nodo = ****************; // Creamos un nuevo elemento lista
            let texto = document.createTextNode("Producto: " + producto['titulo']+" Unidades:"+producto['uds']+" Precio ud:"+producto['precio']);
            document.getElementById("id"+i).value = producto['uds'];
            **************** // Añadimos el texto
            listaCarrito.appendChild(nodo);
            total = total + producto['uds']*producto['precio'];
        }
    }
    **************** // Escribimos el total
}