import React, {useState, useEffect} from 'react'
import {Form} from 'react-bootstrap'

const TitleSync = () => {
    const [name, setName] = useState('');

    useEffect(() => {
      document.title = name ? ` hola, ${name}` : 'React hooks UseEffect';
    }, [name]);

return (

    <>
        <Form.Group className='mb-3'>
            <Form.Label>Escribe tu nombre</Form.Label>
            <Form.Control 
            type='text' 
            placeholder='Escribe tu nombre' 
            value={name} 
            onChange={(e) => setName(e.target.value)}></Form.Control>
        </Form.Group>
    </>
  )
}

export default TitleSync