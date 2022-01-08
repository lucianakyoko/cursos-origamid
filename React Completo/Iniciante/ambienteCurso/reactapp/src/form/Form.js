import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  const array = ['item1', 'item2'];

  return (
    <form>
      <Input id= 'email' label='Email' required/>
      <Input id= 'password' type='password' label='Password'/>
      <Button itens={array}/>
    </form>
  )
}

export default Form
