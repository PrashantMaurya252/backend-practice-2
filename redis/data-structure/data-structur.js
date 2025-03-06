const redis = require('redis')
const client = redis.createClient({
    host:'localhost',
    port:6379
})

client.on("error",(error)=>
console.log("Redis client error occured!",error))

async function redisDatStructures(){
    try {
        // String -> SET, GET,MSET,MGET

        await client.connect()

        await client.set("user:name","Prashant Maurya")
        const name = await client.get("user:name")
        console.log(name,"name")

        await client.mSet(["user:email","prashant@gmail.com","user:age","60","user:country","India"])
        const [email,age,country]=await client.mGet(["user:email","user:age","user:country"])
        console.log(email,age,country)

        // lists -> LPUSH,RPUSH,LRANGE,LPOP,RPOP
    } catch (error) {
        console.log(error)
    }finally{
        client.quit()
    }
}

redisDatStructures()