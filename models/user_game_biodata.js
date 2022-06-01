'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game_biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_game_biodata.hasOne(User_games, {
        foreignKey: 'id_user'
      });
      User_games.belongsTo(User_game_biodata);
    }
  }
  User_game_biodata.init({
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: 'Indonesia'
    }
  }, {
    sequelize,
    modelName: 'User_game_biodata',
  });
  return User_game_biodata;
};