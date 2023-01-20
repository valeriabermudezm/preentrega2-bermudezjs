let confirmar = true

do{
    class Cliente {
        constructor (nombre, edad, telefono, correo){
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
        this.correo = correo;
        }
    }
    const cliente = []
    
    let nuevoCliente = 0 

    while (nuevoCliente < 1){
        let pregunta = new Cliente(prompt("Ingrese su nombre y apellido"),
                                    Number(prompt("Ingrese su edad")),
                                    Number(prompt("Ingrese su numero de contacto")),
                                    prompt("Ingrese su correo"))
        cliente.push(pregunta)
        console.log(cliente)
        nuevoCliente++
    }
    
    
    
    function servicios(opciones, branding, desarrollow, disenog) {
        switch (opciones) {
            case "1":
                alert("Para el servicio de Diseño y desarrollo web el precio se encuentra entre 250 - 650 dolares")
                return desarrollow
            case "2":
                alert("Para el servicio de Branding/Identidad de marca el precio se encuentra entre 65 - 650 dolares")
                return branding
            case "3":
                alert("Para el servicio de Diseño Gráfico/Editorial el precio está entre 50 - 650 dolares")
                return disenog
    
            default:
                return alert("Debes seleccionar alguno de estos servicios")
        }
    }
    let valorservicios = prompt("Ingrese el servicio de su interés \n 1 para Diseño y Desarrollo web \n 2 para Branding/Identidad de marca \n 3 para Diseño Gráfico/Editorial")
    let tipodeservicio = servicios(valorservicios)
    
    
}while(confirm("Desea realizar otra cotización")){ 
}

alert("Nos comunicaremos contigo lo más pronto posible")
