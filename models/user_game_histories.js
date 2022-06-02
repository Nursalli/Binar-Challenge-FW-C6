'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game_histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_game_histories.belongsTo(models.User_games);
      models.User_games.hasMany(User_game_histories, {
        foreignKey: 'id_user'
      });
    }
  }
  User_game_histories.init({
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    time_in_minute: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User_game_histories',
  });
  return User_game_histories;
};