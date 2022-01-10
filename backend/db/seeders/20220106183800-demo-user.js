'use strict';
const bcrypt = require('bcryptjs');
const user = require('../models/user');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fakeUser1@user.com',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'fakeUser2@user.com',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'sallysue@user.com',
        username: 'SallySue',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'brad12@user.com',
        username: 'Brad12',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'rosie9@user.com',
        username: 'Rosie9',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        email: 'chadlad@user.com',
        username: 'ChadLad',
        hashedPassword: bcrypt.hashSync('password'),
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
