const db = require('../db/db')

// WHERE clause

async function getUsersWhere(condition){
    const getUsersQuery = `
    SELECT * FROM users
    WHERE ${condition}
    `;

    try {
        const res = await db.query(getUsersQuery)
        return res.rows
    } catch (error) {
        console.log("get users query",error)
    }
}

async function getSortedUsers(column,order="ASC"){
    const getSortedUsersQuery = `
    SELECT * FROM users
    ORDER BY ${column} ${order}
    `;

    try {
        const result = await db.query(getSortedUsersQuery);
        return result.rows
    } catch (error) {
        console.log("error while sorting",error)
    }
}

module.exports = {getUsersWhere,getSortedUsers}