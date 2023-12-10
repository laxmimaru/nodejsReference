'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      // define association here
      this.belongsTo(User,{foreignKey:'userId', //here this referes to posts model,relation between User and posts
      as:'user'  //here "as" option specifies how we want to use it with this name in app.js
    }) 
    }

    toJSON(){
      return {...this.get(),id:undefined}
    }
  }
  Post.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    body: {
      type: DataTypes.STRING,
      allowNull:false
    }
      
  }, {
    sequelize,
    tableName:'posts',
    modelName: 'Post',
  });
  return Post;
};