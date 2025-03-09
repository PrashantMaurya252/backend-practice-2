// Pubsub
// -> publisher -> send -> channel -> subscriber will consume this

const redis = require('redis')

const client = redis.createClient({
    host:'localhost',
    port:6379
})

client.on("error",(error)=>
console.log("Redis client error occured!",error))

async function testAdditionalFeatures(){
    try {
        await client.connect()

        // const subscriber = client.duplicate() // create a new client -> share the same connection
        // await subscriber.connect()  // connect to redis server for  the subscriber

        // await subscriber.subscribe('dummy-channel',(message,channel)=>{
        //     console.log(`Received message from ${channel}:${message}`)
        // })

        // publis  message in dummy channel
        // await client.publish('dummy-channel','some dummy data from publisher')
        // await client.publish('dummy-channel','Some new message again from publisher')
        // await new Promise((resolve)=>setTimeout(resolve,3000))
        // await subscriber.unsubscribe('dummy-channel')
        // await subscriber.quit()  // close the subscriber connection

        // pipelining & transactions

        // const multi = client.multi()
        // multi.set("key-transaction1","value1")
        // multi.set("key-transaction2","value2")
        // multi.get("key-transaction1")
        // multi.get("key-transaction2")

        // const results = await multi.exec();
        // console.log(results,"results")

        // const pipeline = await client.multi()
        // pipeline.set("key-transaction1","value1")
        // pipeline.set("key-transaction2","value2")
        // pipeline.get("key-transaction1")
        // pipeline.get("key-transaction2")

        // const pipelineResult = await multi.exec()
        // console.log(pipelineResult,"pipelineResult")

        // // batch data operation ->
        // const pipelineOne = client.multi()
        // for(let i = 0;i<1000;i++){
        //     pipelineOne.set(`user:${i}:action`,`Action ${i}`)
        // }

        // await pipelineOne.exec()

        // const dummyExample = client.multi()

        // dummyExample.decrBy(`account:1234:balance `,100)
        // dummyExample.incrBy('account:0000:balance :',100)

        // const finalResults = await dummyExample.exec()

        // const cartExample = client.multi()
        // cartExample.hIncrBy('cart:1234','item_count',1)
        // cartExample.hIncrBy('cart:1234','total_price',10)

        // await cartExample.exec()

        console.log("PErformance test")
        console.time("without pipelining")

        for(let i =0;i<1000;i++){
            await client.set(`user${i}`,`user_value${i}`)
        }

        console.timeEnd('without pipelining')

        console.time("with pipelining")
        const bigPipeline = client.multi()
        for(let i =0;i<1000;i++){
            bigPipeline.set(`user-pipeline-key${i}`,`user_pipeline_value${i}`)
        }

        await bigPipeline.exec()
        console.timeEnd("with pipelining")

    } catch (error) {
        console.log(error)
    }finally{
        client.quit()
    }
}

testAdditionalFeatures()