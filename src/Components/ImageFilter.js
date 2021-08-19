import React from "react";
import {
  Alimentacao,
  Outros,
  Saude,
  Transporte,
  Utilidades,
} from '../assets/images'
import { Icon } from "./Conta/styles";

export default function ImageFilter(type){
  const Images = {
    Restaurante: <Icon src={Alimentacao} alt="Restaurante" />,
    Utilidades: <Icon src={Utilidades} alt="Utilidades" />,
    Saude: <Icon src={Saude} alt="Saude" />,
    Transporte: <Icon src={Transporte} alt="Transporte" />,
    Default: <Icon src={Outros} alt="Default" />,
  };

  return Images[type] || Images.Default
}
