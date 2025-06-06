import express from 'express';
import app from './assignment1middlewares';

// you have been given an express server which has a few endpoints.
//your task is to 
    //1.Ensure that if there is ever an exception, the end user sees a status code of 404.
    //2. Maintain the errorCOunt variable whose value should ho up every time there is an exception in any endpoint.

//Error == javascript will give error and stop the executin of aa program


//Error handling middleware
// added to the end of the file takes 4 arguments err res req next;
// here err is the error 



app.use( function(err, req, res, next){
    res.status(404).send({})
    errorCount = errorCount + 1;
})

