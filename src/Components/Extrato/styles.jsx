import styled from "styled-components";
import { Button } from "../Conta/styles";

export const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 3px 0;
  padding: 10px;

  font-size: 12px;
  border-radius: 10px;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.2);

`

export const ButtonExtrato = styled(Button)`
  padding: 15px;
`
