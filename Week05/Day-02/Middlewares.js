import express from 'express';

const app = express();

let requestCount=0;
 
app.use(function(req,res,next){
    requestCount = requestCount+1;
    next();
})

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


