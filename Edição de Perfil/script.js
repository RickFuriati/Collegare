 let user = document.querySelector('#user');
 let labelUser = document.querySelector('#labelUser');

 let name = document.querySelector('#name');
 let labelName = document.querySelector('#labelName');

 let lastName = document.querySelector('#lastName');
 let labelLastName = document.querySelector('#labelLastName');

 let email = document.querySelector('#email');
 let labelEmail = document.querySelector('#labelEmail');

 let telephone = document.querySelector('#telephone');
 let labelTelephone = document.querySelector('#labelTelephone');

 let address= document.querySelector('#address');
 let labelAddress= document.querySelector('#labelAddress');

 let city = document.querySelector('#city');
 let labelCity = document.querySelector('#labelCity');

 let state = document.querySelector('#state');
 let labelState= document.querySelector('#labelState');

 document.querySelector("#user").value = localStorage.getItem("usuario");
 document.querySelector("#name").value = localStorage.getItem("nome");
 document.querySelector("#lastName").value = localStorage.getItem("sobrenome");
 document.querySelector("#email").value = localStorage.getItem("email");
 document.querySelector("#telephone").value = localStorage.getItem("telefone");
 document.querySelector("#address").value = localStorage.getItem("endereço");
 document.querySelector("#city").value = localStorage.getItem("cidade");
 document.querySelector("#state").value = localStorage.getItem("estado");

  

  user.addEventListener('keyup', () => {
    if(user.value == 0){
      labelUser.setAttribute('style', 'color: red');
      labelUser.innerHTML = ('*Usuário não pode ficar em branco');

    }else{
      labelUser.setAttribute('style', 'color: #14213D;');
      labelUser.innerHTML = ('Usuário (*)');
    }
  });

  name.addEventListener('keyup', () => {
    if(name.value == 0){
      labelName.setAttribute('style', 'color: red');
      labelName.innerHTML = ('*Nome não pode ficar em branco');

    }else{
      labelName.setAttribute('style', 'color: #14213D;');
      labelName.innerHTML = ('Name (*)');
    }
  });

  lastName.addEventListener('keyup', () => {
    if(lastName.value == 0){
      labelLastName.setAttribute('style', 'color: red');
      labelLastName.innerHTML = ('*Sobrenome não pode ficar em branco');

    }else{
      labelLastName.setAttribute('style', 'color: #14213D;');
      labelLastName.innerHTML = ('Sobrenome (*)');
    }
  });

  email.addEventListener('keyup', () => {
    if(email.value == 0){
      labelEmail.setAttribute('style', 'color: red');
      labelEmail.innerHTML = ('*E-mail não pode ficar em branco');

    }else{
      labelEmail.setAttribute('style', 'color: #14213D;');
      labelEmail.innerHTML = ('E-mail (*)');
    }
  });

  telephone.addEventListener('keyup', () => {
    if(telephone.value == 0){
      labelTelephone.setAttribute('style', 'color: red');
      labelTelephone.innerHTML = ('*Telefone não pode ficar em branco');

    }else{
      labelTelephone.setAttribute('style', 'color: #14213D;');
      labelTelephone.innerHTML = ('Telefone (*)');
    }
  });

   address.addEventListener('keyup', () => {
    if(address.value == 0){
      labelAddress.setAttribute('style', 'color: red');
      labelAddress.innerHTML = ('*Telefone não pode ficar em branco');

    }else{
      labelAddress.setAttribute('style', 'color: #14213D;');
      labelAddress.innerHTML = ('Telefone (*)');
    }
  });

   city.addEventListener('keyup', () => {
    if(city.value == 0){
      labelCity.setAttribute('style', 'color: red');
      labelCity.innerHTML = ('*Cidade não pode ficar em branco');

    }else{
      labelCity.setAttribute('style', 'color: #14213D;');
      labelCity.innerHTML = ('Cidade (*)');
    }
  });

   state.addEventListener('keyup', () => {
    if(state.value == 0){
      labelState.setAttribute('style', 'color: red');
      labelState.innerHTML = ('*Estado não pode ficar em branco');

    }else{
      labelState.setAttribute('style', 'color: #14213D;');
      labelState.innerHTML = ('Estado (*)');
    }
  });

  function validar(){
    localStorage.setItem("usuario", document.querySelector("input#user").value);
    localStorage.setItem("nome", document.querySelector("input#name").value);
    localStorage.setItem("sobrenome", document.querySelector("input#lastName").value);
    localStorage.setItem("email", document.querySelector("input#email").value);
    localStorage.setItem("telefone", document.querySelector("input#telephone").value);
    localStorage.setItem("endereço", document.querySelector("input#address").value);
    localStorage.setItem("cidade", document.querySelector("input#city").value);
    localStorage.setItem("estado", document.querySelector("input#state").value);


    var user = document.getElementById("user");
    var name = document.getElementById("name");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var telephone = document.getElementById("telephone");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var state = document.getElementById("state");

    if(user.value == ""){
      alert('Usuário não informado');
      return;
    }
    if(name.value == ""){
      alert('Nome não informado');
      return;
    }
    if(lastName.value == ""){
      alert('Sobrenome não informado');
      return;
    }
    if(email.value == ""){
      alert('Email não informado');
      return;
    }
    if(telephone.value == ""){
      alert('Telefone não informado');
      return;
    }
    if(address.value == ""){
      alert('Endereço não informado');
      return;
    }
    if(city.value == ""){
      alert('Cidade não informado');
      return;
    }
    if(state.value == ""){
      alert('Estado não informado');
      return;
    }
    alert('INFORMAÇÕES SALVAS');
  }
 

 function senha(){
   open('index2.html');
 }





