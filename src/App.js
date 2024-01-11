import React from 'react';
import Logo03 from './assets/logo03.png'

import {
   Container,
   Image,
   ConteinerItens,
   H1,
   H2,
   P,
   InputLabel,
   Input,
   Button 
} from "./styles";


function App() {
  return (
    <Container>
      <Image alt="Logo-Desenvolvedor" src={Logo03}/>
      <H1>Sou Carlos Henrique estou migrando de carreira, varias decadas como motorista e agora entrando no mundo da programação, adquirindo experiência a três anos.</H1>
      <H2>Estou cursando Analise e Desenvolvimento de Sistemas no ultimo semestre, também estou na formação do DevClub para desenvolvedor Full Stack, ja conclui varios modolos dentre eles, HTML,CSS,Javascript,Node-js,React e neste periodo ja realizei diversos projetos.</H2>
      <P>Muitos dos meus projetos estão no https://github.com/fariascarlos2346 e meu linkedin para maiores informações https://www.linkedin.com/in/carloshenrique-web/. </P>


      <ConteinerItens>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"/>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"/>

        <Button>Contato</Button>
      </ConteinerItens>

    </Container>
  );
}

export default App