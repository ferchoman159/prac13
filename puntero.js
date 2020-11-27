$(document).ready(function(){
    // alert("Empezando con jquery's");
    $("#cambio").text("Se sustituye");
   
    $("#Mostrar").click(function(){
        $("#dinamico").show();
    });
    $("#ocultar").click(function(){
        $("#dinamico").hide();
    });
    $("#cssborde").click(function(){
        $("#dinamico").css("background-color","magenta");
        $("#dinamico").css("border","2px  double yellow");
    });
    $("#cssborde").hover(function(){
        alert("estas encima del boton");
    });


    $('select#operaciones').on('change',function(){
        let valorSelected = $('#operaciones').val();
      

        $("#btnoperaciones").click(function(){
            let resultado;


            let num1 =parseInt($("#num1").val(),10);
            let num2 =parseInt($("#num2").val(),10);

          

            switch (valorSelected) {
                case '-':
                    resultado = num1-num2;
                    break;
                case '+':
                    resultado = num1+num2;
                break;
                case '*':
                    resultado = num1*num2;
                break;
                case '/':
                    resultado = num1/num2;
                break;
            }
            

            $("#resultado").text(resultado);
        });
    });


});
