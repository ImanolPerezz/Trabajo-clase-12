function saludo() {
    var saludo=prompt("Ingrese su nombre.")
    if(saludo==""){
        alert("Y el nombre che???")
    } if (saludo) {
        alert("Bienvenido " + saludo)
    }
    }
saludo();
