require('dotenv').config();


const express = require('express');
const jwt = require('jsonwebtoken');
const posts =[
    {
        name:'kyle',
        title:'developer'
    },
    {
    name:'jim',
    title:'tester'
    }


]
app = express();
app.use(express.json());


app.get('/posts',(req, res)=>{
res.json(posts);
}


)


app.post('/login',(req,res)=>{
    const username = req.body.username;
    const user = {name : username};
    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken : accessToken});


}


)


app.listen(3000,()=>{
    console.log('server running ')
}


)
