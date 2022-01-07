

  /* ===== JSX: Exemplo 1 ======
function App() {  
  return (
    <>
      <a className="ativo" href="https://www.google.com.br" title="Site Google">Google</a>
      <label htmlFor="nome">Nome</label>
      <input type="text" id="nome"/>
    </>
  ); 
} 
===== fim =====*/

/* ===== JSX: Exemplo 2 =====
const App = () => {
  const nome = 'André';
  return <p>Nome: { nome }</p>;
};
===== fim =====*/

/* ===== JSX: Exemplo 3 =====
const App = () => {
  const random = Math.random();
  return <p>Número aleatório {random * 10}</p>
}
===== fim =====*/

/* ===== JSX: Exemplo 4 =====
const App = () => {
  const ativo = false;
  return (
    <p className={ ativo ? 'ativo' : 'inativo' }>Adicionando classe</p>
  )
}
===== fim =====*/

/* ===== JSX: Exemplo 5 =====
const titulo = <h1>Esse é um titulo</h1>
const App = () => {
  return (
    <>
      {titulo}
    </>
  )
}
===== fim =====*/

/* ===== JSX: Exemplo 6 =====
const App = () => {
  const mostrarNome = (sobrenome) => {
    return 'André' + ' ' + sobrenome;
  }

  return (
    <p>{ mostrarNome('Silva') }</p>
  )
}
===== fim =====*/

/* ===== JSX: Exemplo 7 =====
const App = () => {
  return (
      <p>{new Date().getFullYear()}</p>
  )  
}
===== fim =====*/

/* ===== JSX: Exemplo 8 =====
const App = () => {
  const carro = {
    marca: 'Ford',
    rodas: 4
  }
  return (
    <>
      <p>{carro.marca}</p>
      <p>{carro.rodas}</p>
    </>
  )
}
===== fim =====*/


/* ===== JSX: Exemplo 9 =====
const App = () => {
  const estiloP = {
    color: "blue",
    fontSize: '2.4rem',
    fontFamily: 'Arial',
    fontWeight: '700'
  }

  return (
    <p style={ estiloP }>Usando estilos como objeto</p>
  )
}
===== fim =====*/


  /* ===== JSX: EXERCÍCIO 1 =====
    // Mostre os dados da aplicação, como aprensetado no vídeo
    // Não utilize CSS externo, use o style para mudar as cores
    // Se a situação estiver ativa pinte de verde, inativa vermelho
    // Se o gasto for maior que 10000 mostre uma mensagem

    
    const luana = {
      cliente: 'Luana',
      idade: 27,
      compras: [
        {nome: 'Notebook', preco: 'R$ 2500'},
        {nome: 'Geladeira', preco: 'R$ 3000'},
        {nome: 'Smartphone', preco: 'R$ 1500'},
      ],
      ativa: true
    };
    
const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    {nome: 'Notebook', preco: 'R$ 2500'},
    {nome: 'Geladeira', preco: 'R$ 3000'},
    {nome: 'Smartphone', preco: 'R$ 1500'},
    {nome: 'Guitarra', preco: 'R$ 3500'},
  ],
  ativa: false
}

const App = () => {
  const dados = mario;
  
  const preçosEmNumeros = dados.compras.map(compra => Number(compra.preco.replace('R$ ', '')));
  const totalCompras = preçosEmNumeros.reduce((precoAnterior, precoAtual) => precoAnterior + precoAtual);
  
  const estiloAtivo = {
    color: 'green',
    fontWeight: '700,'
  }
  
  const estiloInativo = {
    color: 'red',
    fontWeight: '700,'
  }
  
  return (
    <>
    <p>Nome: {dados.cliente}</p>
    <p>Idade: {dados.idade}</p>
    <p>Situação: <span style={dados.ativa? estiloAtivo : estiloInativo}>{dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
    <p>Total gasto: R$ {totalCompras}</p>
    
    {totalCompras > 10000 && <p>Você está gastando muito!</p>}
    </>
    )
  }
===== fim =====*/
  

/* ===== JSX Array: Exemplo 1 =====
const App = () => {
  //const produtos = ['Notebook', 'Tablet', 'Smartphone'];
  const produtos = [
    <li key="e1">Notebook</li>,
    <li key="e2">Tablet</li>,
    <li key="e3">Smartphone</li>
  ]

  return (
    <div>{produtos}</div>
  )
}
===== fim =====*/

/* ===== JSX Array: Exemplo 2 =====
const App = () => {
  const filmes = ['Before Sunrise', 'Before Sunset', 'Before Midnight', 'Novo Filme'];

  return (
    <ul>
      {filmes.map(filme => <li key={filme}>{filme}</li>)}
    </ul>
  )
}
===== fim =====*/
  
const App = () => {
  const livros = [
    {nome: 'The Game of Thrones', ano: 1996},
    {nome: 'The Clash of Kings', ano: 1998},
    {nome: 'The Storm of Swords', ano: 2000},
  ];

  return (
    <ul>
      {livros.filter(({ano}) => ano >= 1998).map(({nome, ano}) => <li key={nome}>{nome}, {ano}</li>)}
    </ul>
  )
}
  
  
  
  /* ===== JSX Array Exemplo 3 =====
  ===== fim =====*/





  
  /* ===== Exemplo  =====
  ===== fim =====*/
  
  /* ===== Exemplo  =====
  ===== fim =====*/
  
  export default App;
  