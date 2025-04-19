
const {createUsersTable,insertUser, fetchAllUsers, updateUserEmail} = require('./concepts/basic-queries')

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

        const updateUser = await updateUserEmail("Pavan Kumar","kumar@gmail.com")
        console.log(updateUser)
    } catch (error) {
        console.log("error",error)
    }
}

async function testAllQueries(){
    await testBasicQueries()
}

testAllQueries()