$(document).ready(function(){

    $('#telefone').mask('(00) 0 0000-0000');

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
                },
            telefone:{
                required:true
            },
            aceitoTermos:{
                required:true
            }
        },

        messages:{
            nome:'Por favor, insira o seu nome.',
            email:'Por favor, insira seu e-mail.',
            telefone:'Por favor, insira seu telefone',
            aceitoTermos: 'Você deve aceitar os termos para continuar.'
        },

        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise. Cadastro completo.");
            form.reset();

        },

        invalidHandler: function(evento, validador) {
            let campoInvalido = validador.numberOfInvalids();
            if(campoInvalido){
                alert(`existem ${campoInvalido} campos incorretos`)
            }
        }
    })
});