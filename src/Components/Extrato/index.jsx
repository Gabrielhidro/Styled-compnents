import React from "react"
import { Box } from "../Conta/styles"
import { extratoLista } from "../../info"
import Items from "./components/Items"
import { ButtonExtrato } from "./styles"

export const Extrato = (props) => {
   return(
   <Box>
    {extratoLista.updates.map(({ id, type, from, value, date }) => {
      return (
        <Items key={id} type={type} from={from} value={value} date={date} />
      );
    })}
    <ButtonExtrato>
      Ver mais
    </ButtonExtrato>
   </Box>
   )
}
