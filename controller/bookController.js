const mongoose = require('mongoose')
const bookModel = require('../Model/bookSchema')

// {
//     "title": "book1" ,
//     "author":"Priya",
//     "description":"New book Publish",
//     "image":"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
//    }


exports.getAllBootControl = async (req, res) => {
    try {
        const books = await bookModel.find({})
        if (!books) {
            return res.status(200).send({
                success: false,
                message: "No book Found"
            })
        }
        return res.status(200).send({
            success: true,
            bookCount: books.length,
            message: "All Books List",
            books,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            success: false,
            message: "Error while getting Books",
            err,
        });
    }
}

exports.createBookControl = async (req, res) => {
    try {
        const { title, author, description, image } = req.body;


        const newBook = new bookModel({ title, author, description, image })
        // const session = await mongoose.startSession();
        // session.startTransaction();
        // await newBlog.save({ session })
        // await session.commitTransaction()
        await newBook.save();

        res.status(200).json({
            success: true,
            message: "Book Created",
            newBook,
        });
        if (!title || !author || !description || !image) {
            return res.status(400).send({
                success: false,
                message: " Please provide all Fields",
            });
        }

    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: "Error while Creating Book",
            err
        })
    }

}

exports.updatebookcontrol = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, Description, image } = req.body;
        const book = await bookModel.findByIdAndUpdate(
            id,
            { ...req.body },
            { new: true }
        );
        return res.status(200).send({
            success: true,
            message: "Book Updated",
            book,
        });
    } catch (err) {
        console.log(err)
        return res.status(400).send({
            success: false,
            message: "Error while Updating Book",
            err,
        })
    }
}

exports.getBookDetailsController = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await bookModel.findById(id)
        if (!book) {
            return res.status(404).send({
                success: false,
                message: " book Not Found",

            });
        }
        return res.status(200).send({
            success: true,
            message: "Fetch Single Book",
            book,
        });
    } catch (err) {
        console.log(err);
        return res.status(400).send({
            success: false,
            message: " Something went wrong",
            err
        });
    }
}

exports.deleteBookControl = async (req, res) => {
    try {
        const book = await bookModel
            .findByIdAndDelete(req.params.id)
        // await book.books.pull(book);

        return res.status(200).send({
            success: true,
            message: "Book Deleted",
        })
    }
    catch (err) {
        console.log(err)
        return res.status(400).send({
            success: false,
            message: "Error While deleting Book",
            err,
        });
    }
}