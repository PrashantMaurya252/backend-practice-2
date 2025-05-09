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

async function getPaginatedUsers(limit,offset){
    const getPaginatedQuery = `
    SELECT * FROM users
    LIMIT $1 OFFSET $2
    `;
    try {
        const result = await db.query(getPaginatedQuery,[limit,offset])
        return result.rows
    } catch (error) {
        console.log("pagination error",error)
    }
}

module.exports = {getUsersWhere,getSortedUsers,getPaginatedUsers}