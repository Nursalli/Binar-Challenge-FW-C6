'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('User_games', [
       {
        username: 'nursalli',
        password: bcrypt.hashSync('password', 10),
        createdAt: new Date(),
        updatedAt: new Date()
       },
      //  {
      //   username: 'nursalli2',
      //   password: bcrypt.hashSync('password', 10),
      //   createdAt: new Date(),
      //   updatedAt: new Date()
      // },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('User_games', null, {});
  }
};
