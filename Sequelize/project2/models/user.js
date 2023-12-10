"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post}) {
      // define association here
      this.hasMany(Post,{foreignKey:'userId',
      as:'posts' //here "as" option specifies how we want to use it with this name in app.js
    })
    }
    /* toJSON() is used to prevent some of the columns from being returned ,in the below case
    we are hiding "id" column (we are spreading the object and hiding id from being returned)
    */

    toJSON(){
      return {...this.get(),id:undefined}
    }
  }
  User.init(
    {
      uuid:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notNull:{msg:'User name should be provided'},
          notEmpty:{msg:'User name can not be empty'}
        }
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notNull:{msg:'User email  should be provided'},
          notEmpty:{msg:'User email can not be empty'},
          isEmail:{msg:'Not a valid email'}
        }
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notNull:{msg:'User role should be provided'},
          notEmpty:{msg:'User role can not be empty'}
        }
      },
    },
    {
      sequelize,
      tableName: "users", //give the table name for the model
      modelName: "User",
    }
  );
  return User;
};
