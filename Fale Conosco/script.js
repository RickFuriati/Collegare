/*$(".input-field").on("focus",function() {
    if($(".border-danger").not(this).length){
        $(".border-danger").removeClass("border-danger");
    }
    $(this).next().toggleClass("border-danger");
})*/

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let email = document.querySelector('#email');
let labelEmail = document.querySelector('#labelEmail');
let mensagem = document.querySelector('#mensagem');
let labelMensagem = document.querySelector('#labelMensagem');



nome.addEventListener('keyup', () => {
    if(nome.value == 0){
      labelNome.setAttribute('style', 'color: red');
      labelNome.innerHTML = ('*Nome não pode ficar em branco');

    }else{
      labelNome.setAttribute('style', 'color: #14213D;');
      labelNome.innerHTML = ('Nome');
    }
  });

  email.addEventListener('keyup', () => {
    if(email.value == 0){
      labelEmail.setAttribute('style', 'color: red');
      labelEmail.innerHTML = ('*E-mail não pode ficar em branco');

    }else{
      labelEmail.setAttribute('style', 'color: #14213D;');
      labelEmail.innerHTML = ('E-mail');
    }
  });

  mensagem.addEventListener('keyup', () => {
    if(mensagem.value == 0){
      labelMensagem.setAttribute('style', 'color: red');
      labelMensagem.innerHTML = ('*Mensagem não pode ficar em branco');

    }else{
      labelMensagem.setAttribute('style', 'color: #14213D;');
      labelMensagem.innerHTML = ('Mensagem');
    }
  });

  function validar(){
    localStorage.setItem("Nome", document.querySelector("input#nome").value);
    localStorage.setItem("Email", document.querySelector("input#email").value);
    localStorage.setItem("Mensagem", document.querySelector("textarea#mensagem").value);

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var mensagem = document.getElementById("mensagem");

    if(nome.value == "" && email.value == "" && mensagem.value == ""){
        alert('Nome, E-mail e Mensagem NÃO podem ficar em branco');
        return;
      }
      if(nome.value == "" && email.value == "" ){
        alert('Nome e E-mail NÃO podem ficar em branco');
        return;
      }
      if(nome.value == "" &&  mensagem.value == ""){
        alert('Nome e Mensagem NÃO podem ficar em branco');
        return;
      }
      if(email.value == "" && mensagem.value == ""){
        alert('E-mail e Mensagem NÃO podem ficar em branco');
        return;
      }

    if(nome.value == ""){
        alert('Nome não informado');
        return;
      }
      if(email.value == ""){
        alert('E-mail não informado');
        return;
      }
      if(mensagem.value == ""){
        alert('Mensagem não informada');
        return;
      }

      alert("Sua mensagem foi enviada. Fique atento ao seu e-mail para receber o retorno. Atenciosamente, Equipe Collegare")

}

