function resetForm(){
    document.getElementById('nombre').value= '';
    document.getElementById('apellido').value= '';
    document.getElementById('mail').value= '';
    document.getElementById('cantidad').value= '';
    document.getElementById('categoria').selectedIndex= '0';
    document.getElementById('total').innerHTML= '';

}


function resumen(){

    const cantidad = document.getElementById('cantidad').value;
    const opcion = document.getElementById('categoria').selectedIndex;
    const total = document.getElementById('total').innerHTML;

    var precio;

    if (opcion === 0) {
        precio = cantidad * 40;
    }
    else if (opcion ===  1) {
        precio = cantidad * 100;
    }
    else if  ( opcion === 2){
        precio = cantidad * 170
    }
    
    var pagar = Number(precio) + Number(total);
    document.getElementById('total').innerHTML='';
    document.getElementById('total').innerHTML=pagar;
    

}