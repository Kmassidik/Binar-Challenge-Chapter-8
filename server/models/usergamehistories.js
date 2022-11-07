'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usergamehistories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usergamehistories.init({
    room: DataTypes.STRING,
    roomId: DataTypes.STRING,
    playerOne: DataTypes.STRING,
    playerTwo: DataTypes.STRING,
    result: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usergamehistories',
  });
  return usergamehistories;
};