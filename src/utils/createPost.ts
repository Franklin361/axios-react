import { client, ResponseAPI } from '../api/client';

export const createPost = async (title: string, body: string, userId: number): Promise<ResponseAPI> => {
    const { data } = await client.post('', { title, body, userId, id: 52 })
    return data
}