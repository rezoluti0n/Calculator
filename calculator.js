
const express = require("express")
const bodyParser = require("body-parser");
// const res = require("express/lib/response");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());
// app.get("/", function (req,res) {
//     res.sendFile(__dirname + "/index.html");
// });

// app.post("/", function (req,res) {

//     var num1 = Number(req.body.n1);
//     var num2 = Number(req.body.n2);
//     var cal = num1 + num2;
// // var weight = Number(req.body.n1);
// // var height = Number(req.body.n2);

// // var bmi = weight / Math.pow(height,2);
     
// res.send(cal);
// });
// app.get("/bmicalculator", function (req,res) {
//     res.sendFile(__dirname + "/bmicalculator.html");
// });
// app.post("/bmicalculator", (req,res)=>{
   
// var weight = parseFloat(req.body.n1);
// var height = parseFloat(req.body.n2);

// var bmi = weight / Math.pow(height,2);
     
// res.send(bmi);
// });

app.get("/api/test",(req,res) => {
    const person = {name: "Puthik",age: 12};
    res.send(person);
});
app.post("/api/test",(req,res) => {

    let person = req.body;
    person.age += 30;
    res.send(person);
  
});
app.listen(3000,function(){
    console.log("Server start on port 3000");
});