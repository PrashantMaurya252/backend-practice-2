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

        // await client.set("user:name","Prashant Maurya")
        // const name = await client.get("user:name")
        // console.log(name,"name")

        // await client.mSet(["user:email","prashant@gmail.com","user:age","60","user:country","India"])
        // const [email,age,country]=await client.mGet(["user:email","user:age","user:country"])
        // console.log(email,age,country)

        // lists -> LPUSH,RPUSH,LRANGE,LPOP,RPOP

        // await client.lPush('notes',['note 1','note 2','note 3'])
        // const extractAllNotes = await client.lRange('notes',0,-1)
        // console.log(extractAllNotes,"extract All Notes")

        // // const firstNote = await client.lPop('notes')
        // const remainingTasks = await client.lRange('notes',0,-1)
        // console.log(firstNote,"firstNote")
        // console.log(remainingTasks,"remainingTasks")

        // sets -> SADD,SMEMBERS,SISMEMBER,SREM

        // await client.sAdd('user:nickName',['john','varun','xyz'])
        // const extractUserNicknames = await client.sMembers('user:nickName')

        // console.log(extractUserNicknames,'name')

        // const isVarunPresent = await client.sIsMember('user:nickName',"varun")
        // console.log(isVarunPresent)

        // await client.sRem("user:nickName","xyz")
        // const getUpdatedUserNickNames = await client.sMembers('user:nickName')
        // console.log(getUpdatedUserNickNames,"getUpdatedUserNickNAmes")

        // sorted sets

        // ZADD,ZRANGE,ZRANK,ZREM

        // await client.zAdd('cart',[
        //     {
        //         score:100,value:'Cart 1'
        //     },
        //     {
        //         score:150,value:'Cart 2'
        //     },
        //     {
        //         score:10,value:'Cart 3'
        //     }
        // ])

        // const getTopCartItems = await client.zRange("cart",0,-1)
        // console.log(getTopCartItems,"getCartItems")

        // const getAllCartItemsWithScore = await client.zRangeWithScores("cart",0,-1);
        // console.log(getAllCartItemsWithScore,"with score")

        // const cartTwoRank = await client.zRank('cart','Cart 2')

        // console.log(cartTwoRank,"two rank")


    } catch (error) {
        console.log(error)
    }finally{
        client.quit()
    }
}

redisDatStructures()