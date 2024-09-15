import { createClient } from '@vercel/postgres';
import { sql } from '@vercel/postgres';

export async function connectToDB() {
    const client = createClient();
    await client.connect();

    try {
        if (client) {
            console.log('Connected to Database.!')
            return client;
        }
    } catch (error) {
        console.log('Error conecting to DB')
    }
}

export async function getPosts() {
    try {
        const data = await sql`SELECT * FROM posts`;
        // console.log('data :', data);
        return data.rows;
    } catch (error) {
        console.log('Error in getPosts :', error);
    }
}