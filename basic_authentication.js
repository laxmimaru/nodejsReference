const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const users = [];

app.use(express.json());


app.post('/authenticate',async(req,res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password,10);
    users.push({username:req.body.username,password:hashedPassword});
    res.status(201).send(users);

    }catch(error){
        console.log('error = ',error)
    }
    
}

)

app.listen(5000,(req,res)=>{
    console.log('server successfully started o port 5000');
}

)