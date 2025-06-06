import express from 'express';

//create a global middleware(app.use ) which will maintain a count of the number of requests made to the server in the global requestCount variable.
const app=express();
let requestCount=0;


app.use(function(req,res,next){            //this is the line of code which we need to add in this assignment.

    requestCount = requestCount + 1;           //app.use is used when we want to use the middleware in every function or middleware.

    next();
});

app.get('/user', function(req,res){
    res.status(200).json({name: 'jhon'});
});

app.post('/user',function(req,res){
    res.status(200).json({requestCount});
})

app.get('/requestCount', function(req,res){
    res.status(200).json({requestCount});
})

app.listen(3000);
export default app;
