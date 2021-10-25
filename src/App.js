import React, { Component } from 'react';
import './App.css';
import {useState} from 'react';

class App extends Component {
 
  render(){
    return(
      <div>
        <Contador />
      </div>
    );
  }
}
 
export default App;

function Contador() {
  const [contador,setContador] =useState(0);

  function adicionarPessoa() {
    setContador(contador + 1);
  }

  function retirarPessoa() {
    setContador(contador - 1);
  }

  return (
    <div class="container">
       <div class="box">
         <h1>Contador de Pessoas</h1>
         <h1 class="contador">{contador}</h1>
         <button id="adicionar" onClick={adicionarPessoa}>+</button><br/>
         <button id="retirar" onClick={retirarPessoa}>-</button>
       </div>
    </div>
  ) 
}
