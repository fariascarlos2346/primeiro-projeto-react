import React, { useState, useRef } from 'react';

import axios from 'axios'

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

//Saber consumir APi´s utilizando o Axios

function App() {
  //const users = [];
  const [ users, setUsers ] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()
  //React Hooks => Ferramentas auxiliares

  function addNewUser(){
    setUsers([
      ...users,
      {
        id: Math.random(), 
        name:inputName.current.value , 
        age:inputAge.current.value 
      },
    ]);
  }

  function deleteUser(userId){
    const newUsers = users.filter( user => user.id !== userId)

    setUsers(newUsers)
  }

  return (
    <Container>
      <Image alt="Logo-Desenvolvedor" src={Logo03}/>
      <H1>Sou Carlos Henrique estou migrando de carreira, varias decadas como motorista e agora entrando no mundo da programação, adquirindo experiência a três anos.</H1>
      <H2>Estou cursando Analise e Desenvolvimento de Sistemas no ultimo semestre, também estou na formação do DevClub para desenvolvedor Full Stack, ja conclui varios modolos dentre eles, HTML,CSS,Javascript,Node-js,React e neste periodo ja realizei diversos projetos.</H2>
      <P>Muitos dos meus projetos estão no <a href="https://github.com/fariascarlos2346" target="_blank">Github</a> e meu <a href="https://www.linkedin.com/in/carloshenrique-web/" target="_blank">Linkedin</a> para maiores informações. </P>


      <ConteinerItens>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"/>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"/>

        <Button onClick={addNewUser}>
          Contato<img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo"/>
              </button>
            </User>
          ))}
        </ul>
      </ConteinerItens>
    </Container>
  );
}

export default App;