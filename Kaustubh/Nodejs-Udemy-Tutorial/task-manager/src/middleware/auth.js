// const express=require('express');
const jwt=require('jsonwebtoken');
const User=require('../models/user');

const auth=async (req,res,next)=>{
    try {
        // Get Authorization header
        // Remember to put space after Bearer_
        const token=req.header('Authorization').replace('Bearer ','');
        // console.log("Token after string replace is",token);
        
        const decoded=jwt.verify(token,'thisismyfantasticnewcourse');        
        const user=await User.newUser.findOne({_id: decoded._id,'tokens.token': token});

        // If user not found
        if(!user){
            throw new error();
        }

        // Now as we fetched user, there's no need to re-retrieve user in userRouter
        // Let's send that user as a result
        req.user=user;
        next();
    } catch (error) {
        res.status(401).send({error: 'Please authenticate your crendentials'});
    }
}

module.exports=auth;