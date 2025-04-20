const db = require('../db/db')

async function createPostsTable(){
    const createTableQuery = `
    CREATE TABLE IF NOT EXIST posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`;

    try {
        await  db.query(createTableQuery)
        console.log('Posts table created successfully!')
    } catch (error) {
        console.log("create table error",error)
    }
}

module.exports = {createPostsTable}