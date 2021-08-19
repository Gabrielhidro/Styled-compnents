import React from 'react'
import { ThemeOn, ThemeOff} from '../../assets/images'
import { Icon } from '../Conta/styles'

const claro = <Icon src={ThemeOn} alt="tema claro" />
const escuro = <Icon src={ThemeOff} alt="tema claro" />

export default ((tema) => (tema ? escuro : claro))
