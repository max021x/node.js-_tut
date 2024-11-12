// basic of node 
/*
const http = require('http') ;
// req , res 
const server = http.createServer((req , res) =>{
  res.statusCode = 200 ;
  // what kinde of informations we are giving back 
  // res.setHeader('Content-Type' , 'text/plain');
  res.setHeader('Content-Type' , 'text/html');
  // what the user get back 
  res.end('<h1>welcome to my fucking page</h1>') ;
}); 
// 
server.listen(3000 , '127.0.0.1' , ()=>{
  console.log("server running ... ");
}) ; */


// how to create peoject 
// npm init -y 
// npm start


// npm depencies 
// how to install 
// npm install uuid  // a package to generate random identifiers
// npmjs has all source code init 

// creating a unic indentifire
// const {v4 : uuid4} = require('uuid') ;
// console.log(uuid4());


// git 
//toptal gitignore for node 

// express 
// its common package use for creating backend applications 
// 
// simple web app using express
// const express = require('express') ;
// const app = express();
// const port = 3000 ;

// first you will get can not get / in that port 
// becuase we neet to use an endpoint 
// this is our endpoint 

// app.get('/' , (req , res)=>{
//   res.send('hello express 🥳🥳') ;
// });

// how to change the request method (get)
// app.post('/' , (req, res)=>{
//   res.send('this is post request 🤔')
// });

// app.listen(port , ()=>{
//   console.log('app listening on port' , port);
// });  

// borwser by defualt use get method how to change it  
// one way is to create a html form but we arent covering that 
// another way is using a tool which is js by the way 
