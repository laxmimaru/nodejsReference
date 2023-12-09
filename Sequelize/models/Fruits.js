module.exports = (sequelize, Datatypes) => {
  const Fruits = sequelize.define("Fruits", {
    fruitCode: {
      type: Datatypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    fruitName: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    fruitColor: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return Fruits;
};
