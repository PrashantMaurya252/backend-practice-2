const bookService = require('../services/bookService');


exports.addBook = async(req,res)=>{
    try {
        const {title,publishedDate,authorId} = req.body 
        const book = await bookService.addBook(title,new Date(publishedDate),authorId)
        res.status(201).json(book)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

exports.getAllBooks = async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

exports.getBookById = async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

exports.updateBook = async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

exports.deleteBook = async(req,res)=>{
    try {
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}