
const {createUsersTable} = require('./concepts/basic-queries')

// test basic queries

async function testBasicQueries(){
    try {
        // await createUsersTable()
    } catch (error) {
        console.log("error",error)
    }
}

async function testAllQueries(){
    await testBasicQueries()
}

testAllQueries()