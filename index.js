import express from "express";
import bodyParser from "body-parser";
import {name} from "ejs";
import {fileURLToPath} from "url";
import {dirname} from"path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app= express();
const port =3000;
const listItems=[];
const workItems=[];



var day=["Monday","Tuesday","Wednesday","Thursady","Friday","Saturday","Sunday"];
var month=["January","February","March","April","May","June","July","July","August","September","October","November","December"];
const d = new Date();
var newDay=new Date().getDay();
var  newMonth=new Date().getMonth();


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.render("index.ejs",{
        listTile:newDay,
        listItems:listItems,
        page:"today",


    });
})
//app.post("/submit", (req, res) => {
/ // const numLetters=req.body["fName"].length+req.body["lName"].length;
  //  console.log(numLetters);
  //  res.render("index.ejs",{numberOfLetters:numLetters});
//})
app.post("/submit",(req,res)=>{
   
    if ( req.body.task) {
       listItems.push(req.body.task);
       res.redirect("/");
    }
        });

app.get("/work", (req, res) => {
   res.render("index.ejs",{
    listTile:newDay,
    listItems:workItems,
    page:"today",

     
   });
  
    
   
   });

app.post("/work",(req,res)=>{
   
    if ( req.body.task) {
       workItems.push(req.body.task);
       res.redirect("/work");
    }
        });
   
  

//app.post("/", (req, res) => {
    //const inputTodoTask = req.body.todoTask.trim(); 

   // if (inputTodoTask !== "") { 
      //  todos.push({
      //      todoTask: inputTodoTask
      //  });
   // }

   // res.redirect("/");





app.listen(port,()=>{
    console.log("Your server is running on port "+port);
});

