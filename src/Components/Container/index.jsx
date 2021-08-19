import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";

import { ContainerSection, Content } from './styles'

const Container = () => {
  return (
    <ContainerSection>
      <Titulo>Olá Fulano!</Titulo>
      <Content>
        <Conta />
      </Content>
    </ContainerSection>
  );
};

export default Container;
