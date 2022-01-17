'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Images', [
     {
       spotId: 1,
       url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-54072130/original/696cea3b-6a5b-4b4e-8fe5-ee8cb93d7406.jpeg?im_w=1200',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       spotId: 2,
       url: "https://a0.muscache.com/im/pictures/miso/Hosting-48123503/original/5fa71ec3-534e-41b6-b958-9f0adec80e46.jpeg?im_w=1200",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       spotId: 3,
       url: "https://a0.muscache.com/im/pictures/82ee0966-b82b-45e0-aedf-e73bc322f20a.jpg?im_w=1200",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       spotId: 1,
       url: "https://a0.muscache.com/im/pictures/miso/Hosting-48123503/original/5fa71ec3-534e-41b6-b958-9f0adec80e46.jpeg?im_w=1200",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       spotId: 1,
       url: "https://a0.muscache.com/im/pictures/82ee0966-b82b-45e0-aedf-e73bc322f20a.jpg?im_w=1200",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      spotId: 4,
      url: "https://a0.muscache.com/im/pictures/13638b7b-fd9c-40e0-b61d-c9c9d8c4b93c.jpg?im_w=1200",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotId: 5,
      url: "https://a0.muscache.com/im/pictures/5be3369f-aa4a-4645-9b79-4d961de6da65.jpg?im_w=1200",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotId: 6,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-53344025/original/8db0ac0c-2124-4588-8331-e3d7b619bc0d.jpeg?im_w=1200",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-46496139/original/8dab2f0b-0ac9-4a87-9b7a-2af5ecd47155.jpeg?im_w=1200",
      createdAt: new Date(),
      updatedAt: new Date()
    }

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Images', null, {});
  }
};
