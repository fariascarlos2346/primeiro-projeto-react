import styled from "styled-components";
import Background from './assets/logodev.png'

export const Container = styled.div `
   background: url("${Background}");
   background-size: cover;

   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 40px;
`;

export const Image = styled.img `
   margin-top: 30px;
`;

export const ConteinerItens = styled.div `
   background: linear-gradient(
      157.44deg,
      rgba(255, 255, 255, 0.6) 0.84%,
      rgba(255, 255, 255, 0.6) 0.85%,
      rgba(255, 255, 255, 0.15) 100%
   );
   border-radius: 61px 61px 0px 0px;

   padding: 50px 36px;

   display: flex;

   flex-direction: column;
`;

export const H1 = styled.h1 `
   font-style: normal;
   font-weight: bold;
   font-size: 34px;
   line-height: 40px;
   text-align: center;
   color: red;
   margin-bottom: 80px;
`;

export const H2 = styled.h2 `
   font-style: normal;
   font-weight: bold;
   font-size: 34px;
   line-height: 40px;
   text-align: center;
   color: green;
   margin-bottom: 70px;
`;

export const P = styled.p `
   
`;

export const InputLabel = styled.p `
   letter-spacing: -0.408px;
   font-style: normal;
   f
`;

export const Input = styled.input `
`;

export const Button = styled.button `
`;