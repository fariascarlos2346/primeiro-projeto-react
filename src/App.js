import React, { useState } from 'react';

import Logo03 from './assets/logo03.png';
import Arrow from './assets/arrow.png';
import Trash from './assets/trash.png';

import {
   Container,
   Image,
   ConteinerItens,
   H1,
   H2,
   P,
   InputLabel,
   Input,
   Button,
   User 
} from "./styles";


function App() {
  //const users = [];
  const [ users, setUsers ] = useState([]);
  const [ name, setName ] = useState();
  const [ age, setAge ] = useState();

  //React Hooks => Ferramentas auxiliares

  function addNewUser(){
    setUsers([{id: Math.random(), name, age}])
    
  }

  function changeInputName(event){
    setName(event.target.value)
  }

  function changeInputAge(event){
    setName(event.target.value)
  }

  return (
    <Container>
      <Image alt="Logo-Desenvolvedor" src={Logo03}/>
      <H1>Sou Carlos Henrique estou migrando de carreira, varias decadas como motorista e agora entrando no mundo da programação, adquirindo experiência a três anos.</H1>
      <H2>Estou cursando Analise e Desenvolvimento de Sistemas no ultimo semestre, também estou na formação do DevClub para desenvolvedor Full Stack, ja conclui varios modolos dentre eles, HTML,CSS,Javascript,Node-js,React e neste periodo ja realizei diversos projetos.</H2>
      <P>Muitos dos meus projetos estão no https://github.com/fariascarlos2346 e meu linkedin para maiores informações https://www.linkedin.com/in/carloshenrique-web/. </P>


      <ConteinerItens>
        <InputLabel>Nome</InputLabel>
        <Input onChange={changeInputName} placeholder="Nome"/>

        <InputLabel>Idade</InputLabel>
        <Input onChange={changeInputAge} placeholder="Idade"/>

        <Button onClick={addNewUser}>
          Contato<img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> - <p>{user.age}</p>
              <button><img src={Trash} alt="lata-de-lixo"/></button>
            </User>
          ))}
        </ul>
      </ConteinerItens>

    </Container>
  );
}

export default App