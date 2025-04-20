
const { countPostsByUser } = require('./concepts/aggregation')
const {createUsersTable,insertUser, fetchAllUsers, updateUserEmail, deleteInfo} = require('./concepts/basic-queries')
const { getUsersWhere, getSortedUsers, getPaginatedUsers } = require('./concepts/filtering-sorting')
const { getUsersWithPosts, getAllUsersAndTheirPosts } = require('./concepts/join')
const { createPostsTable, insertNewPost } = require('./concepts/relationships')

// test basic queries

async function testBasicQueries(){
    try {
        // await createUsersTable()
        // await insertUser("Prashant Maurya","prashant@gmail.com")
        // await insertUser("Shantanu Bhaskar","shantanu@gmail.com")
        // await insertUser("Shailendra Singh","shailendra@gmail.com")
        // await insertUser("Himanshu Arya","himanshu@gmail.com")
        // await insertUser("Pavan Kumar","pavan@gmail.com")

        // console.log("All users")
        // const allUsers = await fetchAllUsers()
        // console.log(allUsers)

        // const updateUser = await updateUserEmail("Pavan Kumar","kumar@gmail.com")
        // console.log(updateUser)

        const deletedUser = await deleteInfo("Pavan Kumar")
        console.log(deletedUser)
    } catch (error) {
        console.log("error",error)
    }
}

async function testFilterAndSortQueries(){
    try {
        // get users with username whose username starting with s

        // const sFilteredUsers = await getUsersWhere("username LIKE 'S%'")
        // console.log(sFilteredUsers)

        // const sortedUsers = await getSortedUsers('created_at','ASC')
        // console.log(sortedUsers)

        const paginatedUsers = await getPaginatedUsers(2,1)
        console.log("paginated users",paginatedUsers)
    } catch (error) {
        console.log("Error",error)
    }
}

async function testRelationshipQueries(){
    try {
        // await createPostsTable()
        await insertNewPost('Third post',"This is my Third post",2)
    } catch (error) {
        console.log("Relationship error",error)
    }
}

async function testJoinQueries(){
    try {
        // const usersWithPosts = await getUsersWithPosts()
        // console.log(usersWithPosts)

        const allUserswithTheirPosts = await getAllUsersAndTheirPosts()
        console.log(allUserswithTheirPosts)
    } catch (error) {
        console.log("tes join error",error)
    }
}

async function testAggregateQuerise(){
    try {
        const postCount = await countPostsByUser()
        console.log(postCount)
    } catch (error) {
        console.log("testAggregate queries error",error)
    }
}

async function testAllQueries(){
    // await testBasicQueries()
    // await testFilterAndSortQueries()

    // await testRelationshipQueries()
    // await testJoinQueries()
    await testAggregateQuerise()
}

testAllQueries()