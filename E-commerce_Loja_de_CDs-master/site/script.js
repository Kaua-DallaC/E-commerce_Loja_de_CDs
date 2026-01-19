// Dados dos Produtos

const data = [
  {
    id: "1",
    artista: "Charli XCX",
    titulo: "Brat",
    preco: 59.9,
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum sunt velit nisi, optio, quasi repellat itaque inventore expedita nulla pariatur ad eligendi nobis quo corporis. Quasi quos aspernatur tenetur Brat?",
    especificacao: "Dimensões do produto: 13,97 x 0,25 x 12,19 cm; 45,36 g",
    imagem: "https://m.media-amazon.com/images/I/614TkS7FUcL._AC_SL1500_.jpg",
    categoria: "pop",
  },
  {
    id: "2",
    artista: "Lady Gaga",
    titulo: "Mayhem",
    preco: 50.0,
    descricao:
      "Mayhem (estilizado em letras maiúsculas) é o oitavo[a] álbum de estúdio da artista musical estadunidense Lady Gaga, lançado em 7 de março de 2025 através da Streamline e Interscope Records.",
    especificacao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem earum sunt velit nisi, optio, quasi repellat itaque inventore expedita nulla pariatur ad eligendi nobis quo corporis.",
    imagem: "https://m.media-amazon.com/images/I/611y4lxl27L._AC_SL1500_.jpg",
    categoria: "pop",
  },
  {
    id: "3",
    artista: "Pitty",
    titulo: "Anacrônico",
    preco: 39.9,
    descricao:
      "Cd Pitty Anacrônico Lacrado Novo Informações sobre o cd: 'Pitty conquistou o Brasil com o lançamento do seu primeiro álbum “Admirável Chip Novo” (Deck), em 2003. O disco seguinte, “Anacrônico”, veio para garantir a sua consagração como um exemplo do verdadeiro rock ‘à brasileira’ e volta às lojas em inédito formato de cd num lançamento da Polysom",
    especificacao:
      "Faixas do CD: A Saideira Anacrônico De Você Memórias Dejá Vú Aahhh...! Ignorin'u Brinquedo Torto Na Sua Estante No Escuro Quem Vai Queimar? Guerreiros São Guerreiros Querer Depois",
    imagem:
      "https://m.media-amazon.com/images/I/51qEOXnCFsL._AC_SX300_SY300_QL70_ML2_.jpg",
    categoria: "rock",
  },
  {
    id: "4",
    artista: "Pink Floyd",
    titulo: "The Dark Side Of The Moon",
    preco: 89.9,
    descricao:
      "Original studio album remastered by James Guthrie in gatefold sleeve with 12-page booklet",
    especificacao: "Dimensões do produto: 13,97 x 0,25 x 12,19 cm; 45,36 g",
    imagem: "https://m.media-amazon.com/images/I/61OBOiVbkeL._AC_SX522_.jpg",
    categoria: "rock",
  },
  {
    id: "5",
    artista: "Gal Costa",
    titulo: "Gal Costa",
    preco: 120.0,
    descricao:
      "Gal Costa (Japanese Reissue) (Brazil's Treasured Masterpieces 1950s - 2000s)Gal Costa (Japanese Reissue) (Brazil's Treasured Masterpieces 1950s - 2000s)",
    especificacao: "Dimensões da embalagem: 14,2 x 12,3 x 1,1 cm; 90 g",
    imagem: "https://m.media-amazon.com/images/I/71A1KtyWV8L._AC_SX522_.jpg",
    categoria: "mpb",
  },
  {
    id: "6",
    artista: "Poppy",
    titulo: "Flux",
    preco: 140.0,
    descricao:
      "O sexto álbum de estúdio da Poppy continua o aventureirismo sônico do hino industrial radiante de diamantes 'New Way Out', com Poppy e o coprodutor Jordan Fish (ex-Bring Me the Horizon). É o som emocionante de um artista em constante evolução redefinindo seu legado uma música de cada vez, com uma compreensão bem-vinda de que ainda há muita inspiração a ser encontrada nas margens ainda a ser explorada, nas profundezas dos espaços negativos.",
    especificacao: "Dimensões da embalagem: 14,2cm; 90 g",
    imagem: "https://m.media-amazon.com/images/I/81ZMmrTwBPS._AC_SX522_.jpg",
    categoria: "rock",
  },
  {
    id: "7",
    artista: "Taylor Swift",
    titulo: "Midnights",
    preco: 80.0,
    descricao:
      "Taylor Swift's 2022 studio album 'Midnights', released October 21st 2022. It is a collection of music written in the middle of the night, a journey through terrors and sweet dreams. The floors we pace and the demons we face - the stories of 13 sleepless nights scattered throughout Taylor's life. The 'Lavender' CD version is a Deluxe Edition with 3 extra tracks to the other CD's, so 16 tracks in total.",
    especificacao: "Dimensões da embalagem: 14,2 x 12,4",
    imagem: "https://m.media-amazon.com/images/I/41LHY++72PL._AC_.jpg",
    categoria: "pop",
  },
  {
    id: "8",
    artista: "Rita Lee",
    titulo: "Lança Perfume",
    preco: 75.0,
    descricao: "Rita Lee, Lança Perfume. (1980).",
    especificacao: "Dimensões da embalagem: 14,2 x 12,3 x 1,1 cm; 90 g",
    imagem: "https://m.media-amazon.com/images/I/61QexWZKWOL._AC_SX522_.jpg",
    categoria: "mpb",
  },
];

// Página de Produtos

const produtosContainer = document.querySelector("#produtos-container");
const inputBusca_produtos = document.querySelector("#inputBusca_produtos");

const displayData_Produtos = (data) => {
  const produtosContainer = document.getElementById("produtos-container");
  produtosContainer.innerHTML = "";

  data.forEach((e) => {
    produtosContainer.innerHTML += `
      <div class="col">
        <div class="bg-white border border-0 h-100 d-flex flex-column p-2">
          <a onClick="irDetalhes('${e.id}')" class="link-underline link-underline-opacity-0" href="detalhes.html">
            <div class="border border-3 border-black mb-2 d-flex justify-content-center align-items-center" style="height: 200px;">
              <img class="img-fluid h-100" src="${e.imagem}" alt="${e.titulo}">
            </div>
            <h3 class="text-black fs-5 fw-bold">${e.artista} - ${e.titulo}</h3>
          </a>
          <div class="d-flex gap-3 align-items-center mt-auto">
            <h3 class="text-black fs-6 fst-italic mb-0">R$ ${e.preco.toFixed(2)}</h3>
            <button onclick="adicionarAoCarrinho('${e.id}')" class="bg-white border-0 p-0"><img src="imagens/shopping-cart.svg" alt="Adicionar ao carrinho"></button>
          </div>
        </div>
      </div>
    `;
  });
};

function filtrarProdutos() {
  const valor = inputBusca_produtos.value.toLowerCase();

  const resultado = data.filter(
    (i) =>
      i.titulo.toLowerCase().includes(valor) ||
      i.artista.toLowerCase().includes(valor),
  );

  displayData_Produtos(resultado);
}

if (inputBusca_produtos) {
  inputBusca_produtos.addEventListener("input", filtrarProdutos);
}

function redirecionar_Produtos() {
  const buscaInicio = document.querySelector("#inputBusca_inicio").value;
  sessionStorage.setItem("produtoBuscadoInicio", buscaInicio);
  window.location.href = "produtos.html";
}

function carregarBusca_inicio() {
  const prodBuscadoI = sessionStorage.getItem("produtoBuscadoInicio");

  if (prodBuscadoI) {
    inputBusca_produtos.value = prodBuscadoI;
    filtrarProdutos();
  }
}

window.addEventListener("load", () => {
  displayData_Produtos(data);
});
window.addEventListener("load", carregarBusca_inicio);

function removerBusca() {
  sessionStorage.removeItem("produtoBuscadoInicio");
}
window.addEventListener("load", removerBusca);

// Página de Detalhes

function irDetalhes(id) {
  sessionStorage.setItem("sobreProduto", id);
}

const detalhesContainer = document.querySelector("#detalhes-container");

const displayData_Detalhes = (data) => {
  detalhesContainer.innerHTML = "";

  const idSalvo = sessionStorage.getItem("sobreProduto");
  const produto = data.find((item) => item.id === idSalvo);
  if (!produto) return;

  detalhesContainer.innerHTML = `
    <div class="col-12 col-md-6 d-flex justify-content-center">
      <img class="img-fluid border border-3 border-black" src="${produto.imagem}" alt="${produto.titulo}">
    </div>

    <div class="col-12 col-md-6 d-flex flex-column gap-2">
      <h3 class="fw-bold">${produto.artista} - ${produto.titulo}</h3>

      <p><b>Descrição:</b> ${produto.descricao}</p>
      <p><b>Especificações técnicas:</b> ${produto.especificacao}</p>

      <h2 class="fw-bold">R$ ${produto.preco.toFixed(2)}</h2>

      <div class="d-flex gap-1 align-items-center">
        <select id="qtd-produto" class="border border-2 border-black w-auto">
          <option disabled selected>Quantidade:</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onclick="adicionarAoCarrinhoComQtd('${produto.id}')" class="border border-0 bg-white">
          <img src="imagens/shopping-cart.svg" alt="Adicionar ao carrinho">
        </button>
      </div>
    </div>
  `;
};

window.addEventListener("load", () => displayData_Detalhes(data));

// Página de Carrinho de Compras

let arrCarrinho = JSON.parse(localStorage.getItem("produtoSalvo")) || [];

function adicionarAoCarrinho(id) {
  arrCarrinho.push(id);

  localStorage.setItem("produtoSalvo", JSON.stringify(arrCarrinho));

  console.log(arrCarrinho);
}

function adicionarAoCarrinhoComQtd(id) {
  const select = document.getElementById("qtd-produto");
  const qtd = Number(select.value) || 1;

  for (let i = 0; i < qtd; i++) {
    adicionarAoCarrinho(id);
  }

  displayData_Carrinho();
}

const carrinhoContainer = document.querySelector("#carrinho-container");

const armazenadoCarrinho =
  JSON.parse(localStorage.getItem("produtoSalvo")) || [];

function displayData_Carrinho() {
  if (arrCarrinho.length === 0) {
    carrinhoContainer.innerHTML = `
      <div class="h500 d-flex flex-column gap-4 align-items-center justify-content-center">
      <img class="h50" src="imagens/shopping-cart.svg">
        <h3>Carrinho está vazio :(</h3>
      </div>
    `;
    return;
  }

  carrinhoContainer.innerHTML = "";

  let total = 0;
  const contagem = {};

  arrCarrinho.forEach((id) => {
    contagem[id] = (contagem[id] || 0) + 1;
  });

  for (let id in contagem) {
    const produto = data.find((item) => item.id == id);
    if (!produto) continue;

    const qtd = contagem[id];
    const subtotal = qtd * produto.preco;
    total += subtotal;

    carrinhoContainer.innerHTML += `
      <div class="d-flex gap-5 align-items-center">
      <select
        class="border border-3 border-black h50 bg-secondary bg-opacity-25"
        onchange="atualizarQuantidade('${produto.id}', this.value)">
        <option value="1" ${qtd == 1 ? "selected" : ""}>1</option>
        <option value="2" ${qtd == 2 ? "selected" : ""}>2</option>
        <option value="3" ${qtd == 3 ? "selected" : ""}>3</option>
      </select>
        <div class="d-flex gap-4 border border-3 border-black p-3 bg-secondary bg-opacity-25 w-25">
          <div class="d-flex flex-column gap-5 nowrap align-items-start">
            <div class="d-flex flex-column gap-1">
              <h4 class="fw-bold">${produto.artista} - ${produto.titulo}</h4>
              <h4>R$ ${produto.preco.toFixed(2)}</h4>
              <p>${qtd}x Subtotal: R$ ${subtotal.toFixed(2)}</p>
            </div>
          </div>
          
          <img class="img-fluid produto-carrinho-imagem border border-3 border-black"
          src="${produto.imagem}">
        </div>
        <button class="h50 bg-danger bg-opacity-50" onclick="removerDoCarrinho('${produto.id}')">X</button>
      </div>
    `;
  }

  carrinhoContainer.innerHTML += `
    <div class="border border-3 border-black p-3 pb-1 pe-5 d-flex flex-column gap-5 mt-4 bg-secondary bg-opacity-25">
      <div>
        <h3 class="border-bottom border-3 border-black fs-5">Total:</h3>
        <p>R$ ${total.toFixed(2)}</p>
      </div>
    </div>
  `;
}

function atualizarQuantidade(id, novaQtd) {
  novaQtd = Number(novaQtd);

  arrCarrinho = arrCarrinho.filter((itemId) => itemId != id);

  for (let i = 0; i < novaQtd; i++) {
    arrCarrinho.push(id);
  }

  localStorage.setItem("produtoSalvo", JSON.stringify(arrCarrinho));
  displayData_Carrinho();
}

window.addEventListener("load", displayData_Carrinho);

function removerDoCarrinho(id) {
  arrCarrinho = arrCarrinho.filter((itemId) => itemId !== id);

  localStorage.setItem("produtoSalvo", JSON.stringify(arrCarrinho));

  displayData_Carrinho();
}

// Filtros

function filtrarCategoria(categoria) {
  console.log("Filtrando categoria:", categoria);

  let produtosFiltrados;

  if (categoria === "todos") {
    produtosFiltrados = data;
  } else {
    produtosFiltrados = data.filter((item) => item.categoria === categoria);
  }

  displayData_Produtos(produtosFiltrados);
}

function ordenarProdutos(tipo) {
  let produtosOrdenados = [...data];

  switch (tipo) {
    case "preco-cresc":
      produtosOrdenados.sort((a, b) => a.preco - b.preco);
      break;
    case "preco-desc":
      produtosOrdenados.sort((a, b) => b.preco - a.preco);
      break;
    case "titulo-cresc":
      produtosOrdenados.sort((a, b) => a.titulo.localeCompare(b.titulo));
      break;
    case "titulo-desc":
      produtosOrdenados.sort((a, b) => b.titulo.localeCompare(a.titulo));
      break;
  }

  displayData_Produtos(produtosOrdenados);
}
