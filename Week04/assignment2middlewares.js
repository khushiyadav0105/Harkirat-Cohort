import express from 'express';
import app from './assignment1middlewares';
import { use } from 'react';

//we are given an express server which has a few end points.
//your task is to create a global middleware(app.use) which will rate limit the requests from a user to only 5 request per second.

// if a user sends more than 5 requests in a single second the server should block them with a 404.

//user will be sending their user id in the header as 'user-id'

// you have been given a numberofRequestsForUser object to start off with which clears every one second;


let numberofRequestsForUser = {};
setInterval(()=>{
    numberofRequestsForUser={};
},1000)

app.use(function(req,res,next){
    const userId = req.header["user-id"];
    if(numberofRequestsForUser[userId]){
        numberofRequestsForUser[userId] = numberofRequestsForUser[userId] + 1;
         if(numberofRequestsForUser[userId]>5){
            res.status(404).send("no entry");
         } else{
            next();
         }
    } else{
        numberofRequestsForUser[userId] = 1;
        next();
    }

})
