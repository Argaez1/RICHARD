import React, {useState, useEffect} from 'react'

export const useFetch = (url) => { 
    const [data, setData] = useState(null);             
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!url) return;    
        let isMounted = true; 
        setLoading(true);
        setError(null); 
        fetch(url)
        .then(res => {
            if(!res.ok) throw new Error (`HTTP ${res.status}`);
            return res.json();
        })
        .then(data => {
            if(isMounted) setData(data);
        })
        .catch(err =>{
            if(isMounted) setError(err.message);
        })
        .finally(() => {
            if(isMounted) setLoading(false);
        })
        return () => {
            isMounted = false;
        }
    }, [url]);
  return {data, loading, error};
}


