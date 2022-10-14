import { useState, useEffect } from 'react';
import { ResponseAPI } from '../api';
import { getPosts } from '../utils';

export const GetPost = () => {

    const [posts, setPosts] = useState<ResponseAPI[]>([])

    useEffect(() => {
        //  start loading
        getPosts().then(data => setPosts(data))
        //  finish loading
    }, [])

    return (
        <>
            <h1>Get Post 👇</h1><br />
            <h2>posts list</h2>

            <div className='grid'>
                {
                    posts.map(post => (
                        <div key={post.id}>
                            <p>Title: <span>{post.title}</span></p>
                            <p>Body: <span>{post.body}</span></p>
                            <p>User: <span>{post.userId}</span></p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}