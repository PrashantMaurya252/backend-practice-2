const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

async function addBook(title,publisedDate,authorId){
    try {
        const newelyCreatedBook = await prisma.book.create({
            data:{
                title,
                publisedDate,
                author:{
                    connect:{id:authorId},
                },
            },
            include:{author:true},
        })

        return newelyCreatedBook;
    } catch (error) {
        console.log("add book error",error)
    }
}

module.exports = {addBook}