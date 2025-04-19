const db = require('../db/db');

async function createUsersTable(){
    const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`;

    try {
        await db.query(createTableQuery)
        console.log('Users table created successfully')
    } catch (error) {
        console.log('Error while creating a table',error)
    }
}

async function insertUser(username,email){
    const insertUserQuery = `
    INSERT INTO users (username,email)
    VALUES ($1,$2)
    RETURNING *
    `;
    try {
        const res = await db.query(insertUserQuery,[username,email])
        console.log('user inserted successfully',res.rows[0])
        return res.rows[0]
    } catch (error) {
        console.log('Error while inserting new user',error)
    }
}

async function fetchAllUsers(){
    const getAllUsersFromUsersTable = 'SELECT * FROM users';
    try {
        const res = await db.query(getAllUsersFromUsersTable)
        console.log('Fetched all users',res.rows)
        return res.rows
    } catch (error) {
        console.log("Error while fetching users",error)
    }
}

async function updateUserEmail(username,newEmail){
    const updateUserQuery = `
    UPDATE users
    SET email = $2
    WHERE username = $1
    RETURNING *
    `;

    try {
        const res = await db.query(updateUserQuery,[username,newEmail])

        if(res.rows.length > 0){
            console.log('User updated successfully!', res.rows[0])
            return res.rows[0]
        }else{
            console.log('No user found with given username')
            return null
        }
    } catch (error) {
        console.log("error during email update",error)
    }
}

async function deleteInfo(username){
    const deleteQuery = `
    DELETE FROM users
    WHERE username = $1
    RETURNING *
    `;
    try {
        const res = await db.query(deleteQuery,[username])

        if(res.rows.length > 0){
            console.log('user deleted successfully!',res.rows[0])
            return res.rows[0]
        }else{
            console.log("No user found with given username")
            return null
        }
    } catch (error) {
        console.log("error while deleting user",error)
    }
}
module.exports = {createUsersTable,insertUser,fetchAllUsers,updateUserEmail,deleteInfo} 