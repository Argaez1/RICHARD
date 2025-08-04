import React from 'react'
import {Form} from 'react-bootstrap'    

const SearchBar = ({value, onChange}) => {
  return (
    <>
    <Form className='mb-3'>
    <Form.Control
    type='text'
    placeholder='Buscar'
    value={value}
    onChange={onChange}
    />  
    </Form>
    </>
  )
}

export default SearchBar