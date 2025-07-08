import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FU() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState([]);
    const [delay, setDelay] = useState(false);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                setLoading(false);
                setError('');
                setPost(res.data);
                setTimeout(() => {
                    setDelay(true);
                }, 2000);
            })
            .catch(err => {
                setLoading(false);
                setError('Something Went Wrong...');
                setPost({});
                setTimeout(() => {
                    setDelay(true);
                }, 2000);
            });
    }, []);
    return (
        <div>
            {
                loading || !delay ?
                    ('Loading...') :
                    (post.map((p, index) => <p key={index}>{p.title}</p>))
            }
            {
                error ? error : null
            }
        </div>
    );
}

export default FU;