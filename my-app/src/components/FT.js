import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

function FT() {
    const initialState = {
        loading: true,
        error: '',
        post: {},
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    loading: false,
                    error: '',
                    post: action.payload
                }
            case 'FETCH_ERROR':
                return {
                    loading: false,
                    error: 'Something went wrong...',
                    post: {}
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const [delay, setDelay] = useState(false);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/2/')
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
                setTimeout(() => {
                    setDelay(true);
                }, 2000);
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' });
                setTimeout(() => {
                    setDelay(true);
                }, 2000);
            });
    }, []);
    return (
        <div>
            {
                state.loading || !delay ? 'Loading...' : state.post.title
            }
            {
                state.error && <p>{state.error}</p>
            }
        </div>
    );
}

export default FT;