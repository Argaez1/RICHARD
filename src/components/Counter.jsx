import React,{useState} from 'react'
import {Button, Badge} from 'react-bootstrap'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='mb-3'>
      <h5>Contador <Badge bg='primary' className='me-2'>{count}</Badge></h5>
      <div className='d-flex gap-2'>
        <Button variant='primary' onClick={() => setCount(count + 1)}>Incrementar</Button>
        <Button variant='danger' onClick={() => setCount(count - 1)}>Decrementar</Button>
        <Button variant='warning' onClick={() => setCount(0)}>Reset</Button>
      </div>
    </div>
  )
}

export default Counter
