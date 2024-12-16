const express = require('express');
const port = 1009;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

let bookstore = [
    { id: "1", bookname: "Ramayan", author: "Valmiki", price: "150"},
    { id: "2", bookname: "The White Tiger", author: "Aravind adiga",price: "250" },
    { id: "3", bookname: "A Suitable Boy", author: "Vikram seth",price: "100" },
    { id: "4", bookname: "Sea of Poppies", author: "Amitav ghosh",price: "300" },
    { id: "5", bookname: "Malgudi Days", author: "R. k. narayan",price: "350" },
    { id: "6", bookname: "Shreemad Bhagvad Gita", author: "Vedvyas",price: "450" },
    { id: "7", bookname: "The White Tiger", author: "Arvind Adiga",price: "550" },
    { id: "8", bookname: "Godaan", author: "Premchand",price: "400" },
    { id: "9", bookname: "Sea of Poppies", author: "Amitav Ghosh",price: "400" },
    { id: "10", bookname: "The  Namesake", author: "Jhumpa Laheri",price: "150" },
]

app.get("/", (req, res) => {
    res.render("index", { bookstore });
});

app.post("/addData", (req, res) => {
    req.body.id = String(bookstore.length + 1);
    bookstore.push(req.body);
    res.redirect("/");
})

app.get("/deleteData", (req, res) => {
    let deleteRecord = bookstore.filter((e) => e.id != req.query.id);
    bookstore = deleteRecord;
    res.redirect("/");
});

app.get("/editData/:id", (req, res) => {
    let singleData = bookstore.find((e) => e.id == req.params.id);
    res.render("edit", { singleData });
})

app.post("/updateData", (req, res)=>{
    console.log(req.body);
    bookstore.map((e)=>{
        if(e.id == req.body.id){
            e.id = req.body.id;
            e.bookname = req.body.bookname;
            e.author = req.body.author;
            e.price = req.body.price;
        }
        else{
            e
        }
        res.redirect("/");
    })
    
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started" + port);
})