function leDados() {

  let strDados = localStorage.getItem("db");
  let objDados = {};

  if (strDados) {

    objDados = JSON.parse(strDados);
  }
  else {

    objDados = {
      cadastros: [{
        nome: "ADM",
        empresa: "Test",
        categoria: "A",
        endereco: "Rua Um",
        telefone: "9911",
        email: "@example.com",
        descricao: "just a test"
      },
      {
        nome: "victor",
        empresa: "puc",
        categoria: "B",
        endereco: "Rua B",
        telefone: "9999",
        email: "victor@.com",
        descricao: "victor teste"
      }]

    }
  }

  return objDados;
}

function salvaDados(dados) {

  localStorage.setItem("db", JSON.stringify(dados));
}

function incluirCadastro() {

  let objDados = leDados();

  let strNome = document.getElementById("inputNome").value;
  let strEmpresa = document.getElementById("inputEmpresa").value;
  let strCategoria = document.getElementById("inputCategoria").value;
  let strEndereco = document.getElementById("inputEndereco").value;
  let strTelefone = document.getElementById("inputTelefone").value;
  let strEmail = document.getElementById("inputEmail").value;
  let strDescricao = document.getElementById("inputDescricao").value;

  let novoCadastro = {

    nome: strNome,
    empresa: strEmpresa,
    categoria: strCategoria,
    endereco: strEndereco,
    telefone: strTelefone,
    email: strEmail,
    descricao: strDescricao
  };

  objDados.cadastros.push(novoCadastro);

  salvaDados(objDados);

  imprimeDados();

}

function imprimeDados() {

  let tela = document.getElementById("tela");
  let strHtml = "";
  let objDados = leDados();

  for (i = 0; i < objDados.cadastros.length; i++) {

    strHtml += `<p>${objDados.cadastros[i].nome} - ${objDados.cadastros[i].empresa} - ${objDados.cadastros[i].categoria} - ${objDados.cadastros[i].endereco} - ${objDados.cadastros[i].telefone} - ${objDados.cadastros[i].email} - ${objDados.cadastros[i].descricao}</p>`
  }

  tela.innerHTML = strHtml;

}

document.getElementById("btnMostrar").addEventListener("click", imprimeDados);
document.getElementById("btnEnviar").addEventListener("click", incluirCadastro);

onload = () => {

  inputTelefone.oninput = () => {

    let numeros = "0123456789()-"

    if (numeros.indexOf(inputTelefone.value.charAt(inputTelefone.value.length - 1)) < 0) {

      inputTelefone.value = inputTelefone.value.substr(0, inputTelefone.value.length - 1);
    }
  };

  inputNome.oninput = () => {

    let numeros = "0123456789"

    if (numeros.indexOf(inputNome.value.charAt(inputNome.value.length - 1)) >= 0) {

      inputNome.value = inputNome.value.substr(0, inputNome.value.length - 1);
    }
  };

  inputCategoria.oninput = () => {

    let numeros = "0123456789"

    if (numeros.indexOf(inputCategoria.value.charAt(inputCategoria.value.length - 1)) >= 0) {

      inputCategoria.value = inputCategoria.value.substr(0, inputCategoria.value.length - 1);
    }
  };

  inputEmail.oninput = () => {

    let e = " ";

    if (e.indexOf(inputEmail.value.charAt(inputEmail.value.length - 1)) >= 0) {

      inputEmail.value = inputEmail.value.substr(0, inputEmail.value.length - 1);
    }

  };

  inputNome.onblur = () => {

    if (inputNome.value.length == 0) {

      inputNome.style.border = 'red solid';
    } else {

      inputNome.style.border = 'green solid';
    }
  }

  inputEmpresa.onblur = () => {

    if (inputEmpresa.value.length == 0) {

      inputEmpresa.style.border = 'red solid';
    } else {

      inputEmpresa.style.border = 'green solid';
    }
  }

  inputCategoria.onblur = () => {

    if (inputCategoria.value.length == 0) {

      inputCategoria.style.border = 'red solid';
    } else {

      inputCategoria.style.border = 'green solid';
    }
  }

  inputEndereco.onblur = () => {

    if (inputEndereco.value.length == 0) {

      inputEndereco.style.border = 'red solid';
    } else {

      inputEndereco.style.border = 'green solid';
    }
  }

  inputTelefone.onblur = () => {

    if (inputTelefone.value.length == 0) {

      inputTelefone.style.border = 'red solid';
    } else {

      inputTelefone.style.border = 'green solid';
    }
  }

  inputEmail.onblur = () => {

    if (inputEmail.value.length == 0) {

      inputEmail.style.border = 'red solid';
    } else {

      inputEmail.style.border = 'green solid';
    }

  }

  inputDescricao.onblur = () => {

    if (inputDescricao.value.length == 0) {

      inputDescricao.style.border = 'red solid';
    } else {

      inputDescricao.style.border = 'green solid';
    }
  }

  function vazia() {

    if ((inputNome.value.length == 0) || (inputEmpresa.value.length == 0) || (inputCategoria.value.length == 0) || (inputEndereco.value.length == 0) || (inputTelefone.value.length == 0) || (inputEmail.value.length == 0) || (inputDescricao.value.length == 0)) {

      alert("Cadastro Incompleto!");
    } else {

      alert("Cadastro Enviado!");
    }
  }

  document.getElementById("btnEnviar").addEventListener("click", vazia);

};