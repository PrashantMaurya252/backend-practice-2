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

        await client.set("name","Prashant");

        const extractValue = await client.get('name')

        console.log(extractValue)

        const deleteCount=await client.del("name")
        const updatedValue= await client.get('name')
        await client.set('count',"100")
        const incrementCount = await client.incr("count");
        console.log(incrementCount,"increment")

        const decrementCount = await client.decr("count");
        await client.decr("count");
        await client.decr("count");
        await client.decr("count");
        await client.decr("count");
        
        console.log(decrementCount,"decrement")
        console.log(updatedValue)
        console.log(deleteCount)
        console.log(await client.get("count"))
    } catch (error) {
        console.log(error)
    } finally{
        await client.quit()
    }
}

testRedisConection()