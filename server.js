const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const users = [];

app.use(express.json());

app.get('/users',(req,res)=>{
    res.json(users);

}

)

app.post('/newUser',async (req,res)=>{

    console.log('name = ',req.body.name)
    console.log('password = ',req.body.password)
    const password = await bcrypt.hash(req.body.password,10);
    const user ={
        name:req.body.name,
    password:password
    }
    
    users.push(user);
    res.status(201).send();

}

)

app.post('/users/login',async (req,res)=>{
    console.log('inside login')
    if(req.body.name){
        console.log('user exists');

    }

    const user = users.find(curUser => curUser.name === req.body.name)
    console.log('loggedin user = ',user);
    if(user){
        if(await bcrypt.compare(req.body.password , user.password)){
            res.status(200).json('user successfully validated');
        }
    }

}

)


app.listen(3000,()=>{
    console.log('server successfully started on the port 3000');
}

)