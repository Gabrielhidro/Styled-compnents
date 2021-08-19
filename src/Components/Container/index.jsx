import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";

import { ContainerSection, Content } from './styles'
import { Extrato } from "../Extrato";

const Container = () => {
  return (
    <ContainerSection>
      <Titulo>Olá Fulano!</Titulo>
      <Content>
        <Conta />
        <Extrato />
      </Content>
    </ContainerSection>
  );
};

export default Container;
