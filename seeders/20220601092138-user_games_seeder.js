'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('User_games', [
       {
        username: 'admin',
        password: bcrypt.hashSync('admin123', 10),
        user_token: null,
        role: 'Super User',
        createdAt: new Date(),
        updatedAt: new Date()
       },
      //  {
      //   username: 'nursalli',
      //   password: bcrypt.hashSync('nursalli123', 10),
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('User_games', null, {});
  }
};
