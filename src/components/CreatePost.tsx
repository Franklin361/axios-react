import { useState } from 'react';
import { ResponseAPI } from '../api';
import { createPost } from '../utils';

export const CreatePost = () => {

    const [posts, setPosts] = useState<ResponseAPI[]>([])

    const handleClick = async () => {
        const newPost = await createPost("new title", "something", Date.now())
        setPosts(prev => ([newPost, ...prev]))
    }

    return (
        <div>
            <h1>Create Post 👇</h1>
            <button onClick={handleClick}>Add Post</button>

            <div className='grid'>
                {
                    posts.map(post => (
                        <div key={post.userId}>
                            <p>Title: <span>{post.title}</span></p>
                            <p>Body: <span>{post.body}</span></p>
                            <p>User: <span>{post.userId}</span></p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}