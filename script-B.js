//
//
// Disciplina: Trabalho Interdisciplinar - Aplicações Web
// Professor: Rommel Vieira Carneiro (rommelcarneiro@gmail.com)
//
// Código LoginApp utilizado como exemplo para alunos de primeiro período

// Página inicial de Login
const LOGIN_URL = "login.html";

// Objeto para o banco de dados de usuários baseado em JSON
var db_usuarios = {};

// Objeto para o usuário corrente
var usuarioCorrente = {};

// função para gerar códigos randômicos a serem utilizados como código de usuário
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

// Dados de usuários para serem utilizados como carga inicial
const dadosIniciais = {
  usuarios: [
    {
      id: generateUUID(),
      nome: "Bruno Zandona",
      empresa: "PUC Minas",
      categoria: "Administrador do Sistema",
      endereco: "Padre Eustáquio",
      telefone: "31 99336-8839",
      email: "bruzan57@gmail.com",
      descricao: "Trabalho bom e bem feito",
      distancia: "2000",
      precomin: "10",
    },
    {
        id: generateUUID(),
        nome: "Francisca",
        empresa: "Fran Limpezas Corporativas",
        categoria: "Limpeza",
        endereco: "Rua Monte Negro, 123",
        telefone: "31 99121-3412",
        email: "fran@outlook.com",
        descricao: "Limpo com excelência a sua empresa",
        distancia: "100 metros",
        precomin: "40",
    },
    {
        id: generateUUID(),
        nome: "Jonathan",
        empresa: "Limpa Vidros",
        categoria: "Limpeza",
        endereco: "Rua Caetano, 900",
        telefone: "31 90102-3157",
        email: "jonas12@gmail.com",
        descricao: "Limpo os vidros mais altos da cidade",
        distancia: "1500 metros",
        precomin: "70",
    },
    {
        id: generateUUID(),
        nome: "Maria Tereza",
        empresa: "Irmãs Domésticas",
        categoria: "Limpeza",
        endereco: "Av dois, 1000",
        telefone: "31 90912-4175",
        email: "irmasdome@hotmail.com",
        descricao: "Deixamos sua casa um brilho",
        distancia: "50000 metros",
        precomin: "20",
    },
    {
        id: generateUUID(),
        nome: "Cláudio Moreira",
        empresa: "Cybrary",
        categoria: "Informática",
        endereco: "Av. do Contorno, 5795",
        telefone: "3003-3232",
        email: "claudioprogram@cybrary.com",
        descricao: "Sei programas em todas as linguagens C-like",
        distancia: "3700",
        precomin: "150",
    },
    {
        id: generateUUID(),
        nome: "Ana Clara",
        empresa: "CyberNet",
        categoria: "Informática",
        endereco: "Av Amazonas, 298, 2° andar",
        telefone: "31 3252-3232",
        email: "clarana@cyber.net.com",
        descricao: "Especialista em hardware",
        distancia: "5600 metros",
        precomin: "90",
    },
    {
        id: generateUUID(),
        nome: "Carlos Amadeu",
        empresa: "Machine Control",
        categoria: "Informática",
        endereco: "Av. Pres. Tancredo Neves, 4248, 3° andar",
        telefone: "3939-2345",
        email: "carlosamadeu@machine.com",
        descricao: "Trabalho com manutenção de computadores",
        distancia: "6500",
        precomin: "75",
    },
    {
        id: generateUUID(),
        nome: "Daniel",
        empresa: "Daniel Finanças",
        categoria: "Finanças",
        endereco: "Rua tres , 30",
        telefone: "31 91254-7127",
        email: "finasdani@gmail.com",
        descricao: "Te ajudo a se organizar financeiramente",
        distancia: "190",
        precomin: "100",
    },
    {
        id: generateUUID(),
        nome: "Cleber",
        empresa: "Clebinho NFT",
        categoria: "Finanças",
        endereco: "Rua tecnológica, 11",
        telefone: "31 91924-1518",
        email: "nftcleber@hotmail.com",
        descricao: "Te auxílio com as melhores dicas de criptomoedas",
        distancia: "200",
        precomin: "150",
    },
    {
        id: generateUUID(),
        nome: "Larissa",
        empresa: "Financeiro Corporativo",
        categoria: "Finanças",
        endereco: "Rua da bahia, 900",
        telefone: "31 91241-5125",
        email: "larifinanceiro@gmail.com",
        descricao: "Ajudo sua empresa a se reerguer financeiramente",
        distancia: "490",
        precomin: "170",
    },
    {
        id: generateUUID(),
        nome: "Lucas Maia",
        empresa: "Lucas Produções",
        categoria: "Edição",
        endereco: "Conselheiro Lafaiete",
        telefone: "31 99380-3557",
        email: "lucasmaia@gmail.com",
        descricao: "Faço as melhores edições para youtubers",
        distancia: "20000",
        precomin: "300",
    },
    {
        id: generateUUID(),
        nome: "Pedro",
        empresa: "Efeitos & Cia",
        categoria: "Edição",
        endereco: "Rua Professora Maria",
        telefone: "31 90142-9125",
        email: "efeitoscia@outlook.com",
        descricao: "Faço edições para videoclipes de músicas",
        distancia: "100",
        precomin: "500",
    },
    {
        id: generateUUID(),
        nome: "Julia Veloso",
        empresa: "Kedit",
        categoria: "Edição",
        endereco: "Montes Claros",
        telefone: "38 9917-1018",
        email: "juliaveloso@hotmail.com",
        descricao: "Faço as melhores montagens de banda",
        distancia: "55000",
        precomin: "100",
    },
    {
        id: generateUUID(),
        nome: "Victor Lopes",
        empresa: "PUC Minas",
        categoria: "Manutenção",
        endereco: "Rua B",
        telefone: "31 99999-9999",
        email: "victor@gmail.com",
        descricao: "Sou muito bom",
        distancia: "1000",
        precomin: "20",
    },
    {
        id: generateUUID(),
        nome: "Marcos",
        empresa: "Marcão",
        categoria: "Manutenção",
        endereco: "Rua sete , 10",
        telefone: "31 91242-6758",
        email: "marcoshidro@outlook.com",
        descricao: "Concerto qualquer pia ou tubulação entupida",
        distancia: "800 metros",
        precomin: "50",
    },
    {
      id: generateUUID(),
      nome: "Barbara",
      empresa: "Babi Jardins",
      categoria: "Manutenção",
      endereco: "Rua das flores, 22",
      telefone: "31 91251-9251",
      email: "babi2707@hotmail.com",
      descricao: "Deixo suas flores em ótimo estado e faço poda em árvores pequenas",
      distancia: "1000",
      precomin: "70",
    },
  ],
};

// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp() {
  // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
  usuarioCorrenteJSON = sessionStorage.getItem("usuarioCorrente");
  if (usuarioCorrenteJSON) {
    usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
  }

  // PARTE 2 - INICIALIZA BANCO DE DADOS DE USUÁRIOS
  // Obtem a string JSON com os dados de usuários a partir do localStorage
  var usuariosJSON = localStorage.getItem("db_usuarios");

  // Verifica se existem dados já armazenados no localStorage
  if (!usuariosJSON) {
    // Se NÃO há dados no localStorage

    // Copia os dados iniciais para o banco de dados
    db_usuarios = dadosIniciais;

    // Salva os dados iniciais no local Storage convertendo-os para string antes
    localStorage.setItem("db_usuarios", JSON.stringify(dadosIniciais));
  } else {
    // Se há dados no localStorage

    // Copia os dados iniciais para o banco de dados
    db_usuarios = dadosIniciais;

    // Salva os dados iniciais no local Storage convertendo-os para string antes
    localStorage.setItem("db_usuarios", JSON.stringify(dadosIniciais));
  }
}

// Inicializa as estruturas utilizadas pelo LoginApp
initLoginApp();

function Round(x) {
  var y;

  if (x > 1000) {
    y = x / 1000 + " km";
  } else {
    y = x + " m";
  }

  return y;
}

function exibeUsuarios() {
  // Popula a tabela com os registros do banco de dados
  let listaUsuarios = "";
  for (i = 0; i < db_usuarios.usuarios.length; i++) {
    let usuario = db_usuarios.usuarios[i];
    listaUsuarios += `<tr><td scope="row">${usuario.nome}</td>
                <td>${usuario.empresa}</td>
                <td>${usuario.categoria}</td>
                <td>${usuario.endereco}</td>
                <td>${usuario.telefone}</td>
                <td>${usuario.email}</td>
                <td>${usuario.descricao}</td>
                <td>${usuario.distancia}</td>
                <td>${usuario.precomin}</td></tr>`;
  }

  // Substitui as linhas do corpo da tabela
  document.getElementById("table-usuarios").innerHTML = listaUsuarios;
}

function initPage() {
  // Lista os usuários
  exibeUsuarios();
}

// Associa ao evento de carga da página a função para verificar se o usuário está logado
window.addEventListener("load", initPage);

function PesquisaNome() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("grid-usuarios");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function PesquisaCategoria() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("InputCat");
  filter = input.value.toUpperCase();
  table = document.getElementById("grid-usuarios");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function Ordenar(n) {
  var table, rows, switching, i, x, y, shouldSwitch;

  table = document.getElementById("grid-usuarios");
  switching = true;
  /*Make a loop that will continue until
    no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
        first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      let usuario = db_usuarios.usuarios[i];

      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
            one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
