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
   border-radius: 200px;
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
   height: 100vh;
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
   letter-spacing: -0.408px;
   font-style: normal;
   font-weight: bold;
   font-size: 20px;
   line-height: 22px;
   color: black;
`;

export const InputLabel = styled.p `
   letter-spacing: -0.408px;
   font-style: normal;
   font-weight: bold;
   font-size: 20px;
   line-height: 22px;
   color: black;
   margin-left: 25px;
`;

export const Input = styled.input `
   background: rgba(255, 255, 255, 0.25);
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 15px;

   width: 340px;
   height: 60px;
   padding-left: 25px;

   border: none;
   outline: none;

   font-style: normal;
   font-weight: normal;
   font-size: 24px;
   line-height: 20px;
   color: #eeeeee;

`;

export const Button = styled.button `
   width: 345px;
   height: 74px;
   background: rgba(0, 0, 0, 0.8);
   border-radius: 15px;
   border: none;

   font-style: normal;
   font-weight: bold;
   font-size: 20px;
   line-height: 28px; 
   color: #FFFFFF;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;

   &:hover{
      opacity: 0.8;
   }

   &:active{
      opacity: 0.5;
   }
`;