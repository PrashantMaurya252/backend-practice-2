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

async function deleteAuthor(id){
    try {
        const deletedAuthor = await prisma.author.delete({
            where:{id},
            include:{books:true}
        })

        return deletedAuthor
    } catch (error) {
        throw new Error(error.message)
    }
}
module.exports = {addAuthor,deleteAuthor}