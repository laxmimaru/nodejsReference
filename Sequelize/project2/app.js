const { sequelize, User,Post } = require("./models");
const express = require("express");
const app = express();

app.use(express.json());

app.post("/createUser", async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const user = await User.create({
      name,
      email,
      role,
    });
    res.status(200).json(user);
  } catch (error) {
    console.log("error = ", error);
    res.status(400).json(error);
  }
});

app.put("/updateUser/:uuid", async (req, res) => {
    try {
      const uuid = req.params.uuid;
      const {role} = req.body;
      const user = await User.findOne({where:{uuid} });
      user.role = role;
      const updatedUser = await user.save();      
      res.status(200).json(updatedUser);
    } catch (error) {
      console.log("error = ", error);
      res.status(400).json(error);
    }
  });

  app.delete("/deleteUser/:uuid", async (req, res) => {
    try {
      const uuid = req.params.uuid;      
      const user = await User.findOne({where:{uuid} });      
      user.destroy();
      res.status(200).json({msg:"user deleted successfully!!"});
    } catch (error) {
      console.log("error = ", error);
      res.status(400).json(error);
    }
  });


app.get("/getAllUsers", async (req, res) => {
    try {
      
      const users = await User.findAll({});
      res.status(200).json(users);
    } catch (error) {
      console.log("error = ", error);
      res.status(400).json(error);
    }
  });



  app.get("/getAllUsersWithPosts", async (req, res) => {
    try {
      
      const users = await User.findAll({
        where:{uuid: "820848f0-9160-4ba6-a3f5-09b6de2372fe"},
        include:['posts'] //here you can pass an array of models
      });
      res.status(200).json(users);
    } catch (error) {
      console.log("error = ", error);
      res.status(400).json(error);
    }
  });

  app.get("/getAllPostsWithUsers", async (req, res) => {
    try {
      
      const posts = await Post.findAll(
        
        {where:{uuid: "820848f0-9160-4ba6-a3f5-09b6de2372fe"},
            include:['user'] //here you can pass an array of models
        });
      res.status(200).json(posts);
    } catch (error) {
      console.log("error = ", error);
      res.status(400).json(error);
    }
  });




  app.get("/getUser/:uuid/:name", async (req, res) => {
    try {
      const uuid = req.params.uuid;
      const user = await User.findAll({where:{uuid} });
      res.status(200).json(user);
    } catch (error) {
      console.log("error = ", error);
      res.status(400).json(error);
    }
  });

  app.post('/createPost',async (req,res)=>{
    try{
        const {body,uuid,userId} = req.body;
        console.log('uuid = ',uuid)
        const user = await User.findOne({
            where:{uuid:uuid}
        }
            
        )
        console.log('user = ',user)
        const post = await Post.create(
            {
                body,
                uuid ,
                userId:user.id
            }
    
        )
        res.status(200).json(post)
    }catch(error){
        console.log('error = ',error)
        res.status(400).json({error:error})
    }
    
  }

  )


  app.listen(5000, async () => {
  console.log("server running on port 5000");
  await sequelize.authenticate(); //creates database tables based on the models we have
  console.log("sync done!!");
});
