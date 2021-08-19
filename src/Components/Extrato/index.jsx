import React from "react"
import { Box } from "../Conta/styles"
import { extratoLista } from "../../info"
import { Card, ButtonExtrato } from "./styles"

export const Extrato = () => {
   return(
   <Box>

    {extratoLista.updates.map(({date, from, id, type, value}) => {
      return (
        <>
          <Card key={id}>
            <p>{date}</p>
            <p>{from}</p>
            <p>{type}</p>
            <p>{value}</p>
          </Card>
        </>
      )
    })}
    <ButtonExtrato>
      Ver mais
    </ButtonExtrato>
   </Box>
   )
}
