 let password = document.querySelector('#oldSenha');
 let labelPassword = document.querySelector('#labelOldSenha');

 let newPassword = document.querySelector('#newSenha');
 let labelNewPassword = document.querySelector('#labelNewSenha');

 let confirmName = document.querySelector('#confirmName');
 let labelConfirmName = document.querySelector('#labelConfirmSenha');




function salvar(){
    localStorage.setItem("Senha atual", document.querySelector("input#oldSenha").value);
    localStorage.setItem("Nova senha", document.querySelector("input#newSenha").value);
    localStorage.setItem("Confirmar", document.querySelector("input#confirmSenha").value);
    alert('Senha Alterada');
}


 