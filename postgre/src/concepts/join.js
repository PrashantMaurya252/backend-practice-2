const db = require('../db/db')

// inner join returns only the rows where there is a match in both tables

async function getUsersWithPosts(){
    const getUsersWithPostsQuery = `
    SELECT users.id, users.username, posts.title
    FROM users
    INNER JOIN posts ON users.id = posts.user_id
    `;

    try {
        const res = await db.query(getUsersWithPostsQuery);
        return res.rows
    } catch (error) {
        console.log("getUsersWithPosts error",error)
    }
}

module.exports = {getUsersWithPosts}