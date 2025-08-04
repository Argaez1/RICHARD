import React, {useMemo} from 'react'
import {useFetch} from '../hooks/useFetch'
import { Spinner,Alert,ListGroup,Badge } from 'react-bootstrap';
    const PostList = ({searchTerm}) => {
    const {data : posts, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts');
    const filteredPosts = useMemo(() => {
        if(!posts) return [];
        return posts.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [posts, searchTerm]);

    if(loading)
    return (
        <div className='text-center my-4'>
            <Spinner animation='border' role='status'/>
        </div>
    );
    if(error)
    return(
        <Alert variant='danger' className='text-center my-4'>
            Error al cargar los posts : {error}
        </Alert>
    );

    if(filteredPosts.length === 0)
        return(
        <Alert variant='warning' className='text-center my-4'>
            No se encontraron resultados
        </Alert>    
        );

    return(
        <>
        <div className='my-3'>
            <h5>
                posts <Badge bg='info'>{filteredPosts.length}</Badge>  
            </h5>
        </div>
        <ListGroup>
            {filteredPosts.slice(0,20).map(post => (
                <ListGroup.Item key={post.id} className='mb-2'>
                    <h6>{post.title}</h6>
                    <p className='mb-0'>{post.body}</p>
                   
                </ListGroup.Item>
            ))}
        </ListGroup>
        </>
    );
}
    
export default PostList