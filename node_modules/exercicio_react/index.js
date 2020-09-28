const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const PORTA = 8080

const lanches = [
  {id: 1,
  nome: 'Pastel',
  descricao: 'Pastel de queijo',
  estoque: 10,
  image: 'https://erpuploads.nuvem3.com.br/Empresa/34/Produtos/44674/grd_pastel-de-queijo-41b7538772894bf680dcc9ab4c4592a1.jpg',
  categoria: 'Salgado'},

  {id: 2,
  nome: 'Coxinha',
  descricao: 'Coxinha de frango com catupiry',
  estoque: 15,
  image: 'https://cdn.awsli.com.br/600x450/1336/1336442/produto/54141611/8770c53a9d.jpg',
  categoria: 'Salgado'},

  {id: 3,
  nome: 'Caldo de cana',
  descricao: 'Copo de 500ml',
  estoque: 30,
  image: 'https://blog.guadaim.com.br/wp-content/uploads/2018/04/193088-3-receitas-com-caldo-de-cana-que-voce-precisa-conhecer-810x540.jpg',
  categoria: 'Bebida'},

  {id: 4,
  nome: 'Coca-Cola',
  descricao: 'Lata de 350ml',
  estoque: 50,
  image: 'https://www.bistek.com.br/media/catalog/product/cache/a0f56255df7cc0bba606b01642cf2e34/9/9/997463.jpg',
  categoria: 'Bebida'},
];

app.use(bodyParser.json());
app.use(cors());

// retorna todos os itens do array
app.get("/lanches", (req, res) => {
  res.send(lanches);
});

// busca item do array por nome
app.get("/lanches/:nome", (req, res) => {
  const nome = req.params.nome;
  res.send(lanches.filter(lanche => lanche.nome.includes(nome)));
})

// busca item do array por id
app.get("/lanches/id/:id", (req, res) => {
  const id = req.params.id;
  const item = lanches.find(pam => pam.id == id);
  if(item) {
    res.send(item);
  } else {
    res.sendStatus(404);
  }
});

// inicializa servidor http na porta PORTA
app.listen(PORTA, () => {
  console.log(`Servidor node ouvindo na porta ${PORTA}`);
});
