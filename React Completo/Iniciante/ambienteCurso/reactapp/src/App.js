

  /* ===== Exemplo 1 ======
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

/* ===== Exemplo 2 =====
const App = () => {
  const nome = 'André';
  return <p>Nome: { nome }</p>;
};
===== fim =====*/

/* =====Exemplo 3 =====
const App = () => {
  const random = Math.random();
  return <p>Número aleatório {random * 10}</p>
}
===== fim =====*/

/* =====Exemplo 4 =====
const App = () => {
  const ativo = false;
  return (
    <p className={ ativo ? 'ativo' : 'inativo' }>Adicionando classe</p>
  )
}
===== fim =====*/

/* =====Exemplo 5 =====
const titulo = <h1>Esse é um titulo</h1>
const App = () => {
  return (
    <>
      {titulo}
    </>
  )
}
===== fim =====*/

/* =====Exemplo 6 =====
const App = () => {
  const mostrarNome = (sobrenome) => {
    return 'André' + ' ' + sobrenome;
  }

  return (
    <p>{ mostrarNome('Silva') }</p>
  )
}
===== fim =====*/

/* =====Exemplo 7 =====
const App = () => {
  return (
      <p>{new Date().getFullYear()}</p>
  )  
}
===== fim =====*/

/* =====Exemplo 8 =====
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

  /* =====Exemplo  =====
  ===== fim =====*/
  /* =====Exemplo  =====
  ===== fim =====*/
  /* =====Exemplo  =====
  ===== fim =====*/

export default App;
