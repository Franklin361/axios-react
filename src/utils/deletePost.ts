import { client } from '../api/client';

export const deletePost = async (id: number): Promise<Boolean> => {
    const { status } = await client.delete(`${id}`);
    return status === 200
}