const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function addAuthor(name){
    try {
        const newelyCreatedAuthor = await prisma.author.create({
            data:{name},
        })
        return newelyCreatedAuthor;
    } catch (error) {
        console.log("Add Author error",error)
    }
}

module.exports = {addAuthor}