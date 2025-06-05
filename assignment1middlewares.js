import express from 'express';

//create a global middleware(app.use ) which will maintain a count of the number of requests made to the server in the global requestCount variable.
const app=express();
let requestCount=0;

app.get('/user', function(req,res){
    res.status(200).json({name: 'jhon'});
});