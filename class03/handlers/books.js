const books = [
    {
        id: 1,
        title: "Murder Mystery",
        author: "Filan Fisteki"
    },
    {
        id: 2,
        title: "The Shining",
        author: "Shaban Rustemi"
    },
    {
        id: 3,
        title: "Harry Potter",
        author: "William Shakspear"
    }
];


const getAllBooks = (req, res, next)=>{
    return res.status(200).json(books);
};


const addNewBook = (req, res, next) => {
    const body = req.body;
    const newBook = {
        id: books.length + 1,
        title: body.title,
        author: body.author
    };
    books.push(newBook);
    return res.status(200).json(books);
};



module.exports = {getAllBooks, addNewBook};