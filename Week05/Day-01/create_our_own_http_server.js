import express from 'express';

const app=express();
// # Create an HTTP Server

// It should have 4 routes

// 1. http://localhost:3000/multiply?a=1&b=2
// 2. [http://localhost:3000/add?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// 3. [http://localhost:3000/divide?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)
// 4. [http://localhost:3000/subtract?a=1&b=2](http://localhost:3000/multiply?a=1&b=2)

// Inputs given at the end after `?` are known as query parameters (usually used in GET requests)

// The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)

app.get("/sum", function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b); // parse int is use to change the string to integer
    
    res.status(200).json({ans: a+b})
})

app.get("/multiply", function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    res.status(200).json({ans: a*b})
})

app.get("/subtract", function(req,res){
    const a = req.query.a;
    const b = req.query.b;
    res.status(200).json({ans: a-b})
})

app.get("/divide/:a/:b", function(req,res){
    const a = req.params.a;
    const b = req.params.b;
    res.status(200).json({ans: a/b})
})

app.listen(3000);


