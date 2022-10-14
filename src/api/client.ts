import axios from 'axios';

export const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
})

export interface ResponseAPI {
    userId: number;
    id: number;
    title: string;
    body: string;
}
