import React, {useContext} from 'react'
import {ThemeContext} from '../context/ThemeContext'
import { Button } from 'react-bootstrap';

const ThemeToggle = () => {
    const {mode, toggle} = useContext(ThemeContext);
  return (
    <>
    <Button 
    variant={mode === 'light' ? 'outline-dark' : 'outline-light'}
    onClick={toggle}>
        {mode === 'light' ? 'Modo oscuro' : 'Modo claro'}
    </Button> 
    </>
  )
}

export default ThemeToggle