import React, {useMemo} from 'react'
import {useFetch} from '../hooks/useFetch'
import { Spinner,Alert,ListGroup,Badge } from 'react-bootstrap';
const Productos = ({searchTerm}) => {
  const { data: users, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');

  const filteredUsers = useMemo(() => {
    if (!users) return [];
    if (!searchTerm) return users;
    return users.filter(u =>
      u.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  if (loading)
    return (
      <div className='text-center my-4'>
        <Spinner animation='border' role='status' />
      </div>
    );

  if (error)
    return (
      <Alert variant='danger' className='text-center my-4'>
        Error al cargar los todos: {error}
      </Alert>
    );

  if (filteredUsers.length === 0)
    return (
      <Alert variant='warning' className='text-center my-4'>
        No se encontraron resultados
      </Alert>
    );

  return (
    <>
      <div className='my-3'>
        <h5>
          Todos <Badge bg='info'>{filteredUsers.length}</Badge>
        </h5>
      </div>
      <ListGroup>
        {filteredUsers.slice(0, 20).map(user => (
          <ListGroup.Item key={user.id} className='mb-2'>
            <h6>{user.title}</h6>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
    
export default Productos