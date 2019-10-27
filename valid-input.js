$(document).ready( function () {
    // Validacion para solo mayusculas
    var cont = 0;
    var pun = false;
    $(".may").on("keypress", function () {
        $input=$(this);
        setTimeout(function () {
         $input.val($input.val().toUpperCase());
        },50);
    });
})

//Validacion para numeros enteros
function validNum(e){   
    key = e.keyCode || e.which;

    teclado = String.fromCharCode(key);
    numero = "0123456789";

    if(numero.indexOf(teclado)==-1){
        return false;
    }
}
var espacio = false;

//Validacion solo para texto
function validText(e){

    key = e.keyCode || e.which;

    teclado = String.fromCharCode(key);
    
    if($('input:focus').val() == "" ){
        espacio = false;
    }
    if(key==32 && espacio == false){
        texto = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    }else{
        texto = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
        espacio = true;
    }
    
    if(texto.indexOf(teclado)==-1){
        return false;
    }
}

//Validacion para caracteres Alfanumericos
function validAlfa(e){

    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key);
    if($('input:focus').val() == "" ){
        espacio = false;
    }
    if(key==32 && espacio == false){
        texto = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ-0123456789°";
    }else{
        texto = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ-0123456789° ";
        espacio = true;
    }
    if(texto.indexOf(teclado)==-1){
        return false;
    }
}


//Validacion para deshabilitar la opcion enter en los inputs
$('input').on('keypress', function(){
    if(event.keyCode == 13) event.returnValue = false;
})

//Validacion para punto decimal de 3 digitos
function NumCheck(e, field) {
    key = e.keyCode ? e.keyCode : e.which
    // backspace
    if (key == 8) return true
    // 0-9
    if (key > 47 && key < 58) {
      if (field.value == "") return true
      regexp = /.[0-9]{6}$/
      return !(regexp.test(field.value))
    }

    if (key == 46) {
      if (field.value == "") return false
      regexp = /^[0-9]+$/
      return regexp.test(field.value)
    }

    return false
}




