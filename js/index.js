function validar(){
    let edad = document.getElementById('edad');
    
    if (edad.value >= 18){
        alert("Es mayor de edad");
    }else if(edad.value<=0){
        alert("Edad no valida");
    }else{
        alert("Es menor de edad");
    }
}