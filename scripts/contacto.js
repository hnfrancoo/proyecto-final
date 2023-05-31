function formulario(event){
    $('.alert').remove();
    event.preventDefault();

 //declaro las variables
 var nombre=$('#nombre').val(),
    correo=$('#correo').val(),
    asunto=$('#asunto').val(),
    mensaje=$('#mensaje').val();
 //valido 

 if (nombre =="" || nombre == null){

    cambiarColor("nombre");
    alerta("Campo Obligatorio");
    return false;
 }

 if (correo =="" || correo == null){

    cambiarColor("correo");
    alerta("Campo Obligatorio");
    return false;
 }

 if (asunto =="" || asunto == null){

    cambiarColor("asunto");
    alerta("Campo Obligatorio");
    return false;
 }

 if (mensaje =="" || mensaje == null){

    cambiarColor("mensaje");
    alerta("Campo Obligatorio");
    return false;
 }

  $(formulario).submit();
  window.alert("Gracias por escibirnos! En breve nos contactaremos para responder tu consulta");
  window.location ='../index.html'

  return true;
}



$('input').focus(function(){
    $('.alert').remove();
    colorPredeterminado('nombre');
    colorPredeterminado('correo');
    colorPredeterminado('asunto');
    colorPredeterminado('mensaje');
});

$('textarea').focus(function(){
    $('.alert').remove();
    colorPredeterminado('mensaje');
});

function colorPredeterminado(dato){
    $('#' + dato).css({
        border: "1px solid black"
    }); 
}

//funcion para cambiar de color los bordes de las input
 function cambiarColor(dato){
    $('#' + dato).css({
        border: "1px solid red"
    });
 }
 //funcion para mostrar la alerta
 function alerta(texto){
  $('#nombre').before('<div class="alert">Error: '+ texto +'</div>')
 }
