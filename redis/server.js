const redis = require('redis')
const client = redis.createClient({
    host:'localhost',
    port:6379
})

client.on("error",(error)=>
console.log("Redis client error occured!",error)
)

async function testRedisConection(){
    try {
        await client.connect()
        console.log('Connected to redis')

        await client.set("key","Prashant");

        const extractValue = await client.get('key')

        console.log(extractValue)
    } catch (error) {
        console.log(error)
    } finally{
        await client.quit()
    }
}

testRedisConection()