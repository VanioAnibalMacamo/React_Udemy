import React from 'react';

const BemVindo = (props) =>{
  return(
    <div>
      <h2>Bem-Vindo (a) {props.nome} </h2>
      <h3>Tenho {props.idade} anos</h3>
    </div>
  )
} 

function App(){
  return(
    <div>
        Olá Mundo
        <BemVindo nome="Mateus" idade="24"/>
        <BemVindo nome="Vanio" idade="10"/>
        <h1>Curso React</h1>
    </div>
  )
}

export default App;