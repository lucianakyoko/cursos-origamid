/* ***** Class 0301 - useState - Exemplo 01 *****
import React from 'react';

const App = () => {
  const ativo = true;
  return (
    <button disabled={!ativo}>
      {ativo ? 'Ativo' : 'Inativo'}
    </button>
  )
}
===== FIM do exemplo ===== */


/* ***** Class 0301 - useState - Exemplo 02 *****
Perceba que o handleClick funciona perfeitamente: Ao clicar no botão, o console mostra o inverso do estado atual (se está ativo, torna-se inativo e vice-versa), porém, o botão não é renderizado novamente quando clicado. 

import React from 'react'

const App = () => {
  let ativo = true;
  
  const handleClick = () => {
    ativo = !ativo;
    console.log(ativo);
  }
  
  return (
    <button onClick={handleClick}>
    {ativo ? 'Ativo' : 'Inativo'}
    </button>
    )
  }
===== FIM do exemplo ===== */


/* ***** Class 0301 - useState - Exemplo 03 *****
O código abaixo resolve o problema do Exemplo 02 com o uso do useState.
Este método recebe dois parametros: O primeiro é o estado inicial, o segundo a função que atualiza o estado inicial declarado no primeiro parametro.

import React from 'react';

const App = () => {
  const ativoHook = React.useState(false);
  const ativoValor = ativoHook[0];
  const atualizaValor = ativoHook[1];
  console.log(ativoHook);

  const handleClick = () => atualizaValor(!ativoValor);
   
  return (
    <button onClick={handleClick}>
      {ativoValor ? 'Ativo' : 'Inativo'}
    </button>
  )
}
===== FIM do exemplo ===== */


/* ***** Class 0301 - useState - Exemplo 04 *****
A forma mais comum de se usar o useState, é fazendo o uso do destructuring. Então, desestruturando o Exemplo 03, fica assim:

  import React from 'react';
  const App = () => {
    const [ativo, setAtivo] = React.useState(true);
    const handleClick = () => setAtivo(!ativo);
    return (
      <button onClick={handleClick}>
      {ativo ? 'Ativo' : 'Inativo'}
      </button>
      )
    }
===== FIM do exemplo ===== */


/* ***** Class 0301 - useState - Exemplo 05 *****
Usando múltiplos estados - Não existem limites para o uso do useState. Podemos definir diversos no mesmo componente.

import React from 'react';

const App = () => {
  const [ativo, setAtivo] = React.useState(true);
  const [dados, setDados] = React.useState({nome: 'André', idade: '14'});
  
  const handleClick = () => {
    setAtivo(!ativo)};
    setDados({...dados, faculdade: 'Possui faculdade'});
    
    return (
      <>
      <p>{dados.nome}.</p>
      <p>{dados.idade}.</p>
      <p>{dados.faculdade}</p>
      
      <button onClick={handleClick}>
      {ativo ? 'Ativo' : 'Inativo'}
      </button>
      </>
      )
    }
===== FIM do exemplo ===== */


/* ***** Class 0301 - useState - Exemplo 06 PROPS *****
Podemos passar o estado e a função de modificação como propriedades para outros elementos.
import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

  const App = () => {
    const [modal, setModal] = React.useState(false);
    
    return (
      <div>
      <div>{modal ? 'Modal aberto' : 'Modal fechado'}</div>
      <Modal modal={modal} setModal={setModal}/>
      <ButtonModal setModal={setModal}/>
      </div>
      )
    }
===== FIM do exemplo ===== */


/* ***** Class 0301 - useState - Exemplo 07 - REATIVIDADE *****
Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes.


import React from 'react'

const App = () => {
  const [item, setItem] = React.useState('Teste');
  const handleClick = () => {
    setItem('outro');
  }
  return (
    <div>
    <p>{item}</p>
    <button onClick={handleClick}>Clicar</button>
    </div>
    )
  }
===== FIM do exemplo ===== */


import React from 'react';
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== 'null') setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setCarregando(true)
    setProduto(target.innerText);
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button style={{ marginRight: '1rem' }} onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </div>
  );
};











/* ***** Class 0301 - useState - EXERCÍCIO #1 *****

===== FIM do exemplo ===== */

















/* ***** Class 0301 - useState - Exemplo 06 *****

===== FIM do exemplo ===== */
/* ***** Class 0301 - useState - Exemplo 06 *****

===== FIM do exemplo ===== */
/* ***** Class 0301 - useState - Exemplo 06 *****

===== FIM do exemplo ===== */








export default App;
