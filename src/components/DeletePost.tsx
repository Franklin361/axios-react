import { deletePost, getPosts } from "../utils"
import { useEffect, useState } from 'react';
import { ResponseAPI } from "../api";

export const DeletePost = () => {
    const [posts, setPosts] = useState<ResponseAPI[]>([])

    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, [])

    const handleDelete = async (id: number) => {
        const isSuccess = await deletePost(id)
        if (isSuccess) setPosts(prev => prev.filter(post => post.id !== id))
    }

    return (
        <>
            <h1>Delete Post 👇</h1> <br />
            <h2>Click a card</h2>
            <div className="grid">
                {
                    posts.map(post => (
                        <div className="card" key={post.id} onClick={() => handleDelete(post.id)}>
                            <p>ID: <span>{post.id}</span></p>
                            <p>Title: <span>{post.title}</span></p>
                            <p>Body: <span>{post.body}</span></p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}