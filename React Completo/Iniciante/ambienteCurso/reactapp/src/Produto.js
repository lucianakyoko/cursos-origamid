import React from 'react';

const Produto = ({produto, propriedades}) => {

  return (
    <div style={{border: '1px solid', margin: '1rem', padding: '1rem'}}>
      <p>{produto}</p>
      <ul>
        {propriedades.map(propriedade => <li key={propriedade}>{propriedade}</li>)}
      </ul>
    </div>
  )
}

export default Produto;
