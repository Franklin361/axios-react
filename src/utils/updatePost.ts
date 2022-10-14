import { client, ResponseAPI } from '../api/client';

interface Props {
    id: number,
    userId: number,
    body: string,
    title: string
}

export const updatePost = async ({ id, body, title, userId }: Props): Promise<ResponseAPI> => {
    const { data } = await client.put(`${id}`, { body, title, userId })

    return data
}