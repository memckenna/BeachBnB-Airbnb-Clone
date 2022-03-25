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
       spotId: 1,
       url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-54072130/original/2c0a7913-6730-4bab-b0a4-824aa8255a26.jpeg?im_w=1200",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       spotId: 1,
       url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-54072130/original/6485326d-71be-403b-9450-9f83a8def8e4.jpeg?im_w=1440",
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
       spotId: 2,
       url: "https://a0.muscache.com/im/pictures/miso/Hosting-48123503/original/d78ced7d-5349-42bd-8000-5b354df58ea4.jpeg?im_w=1200",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       spotId: 2,
       url: "https://a0.muscache.com/im/pictures/miso/Hosting-48123503/original/b2f94c42-bbf5-445e-a731-836cfff7f4ea.jpeg?im_w=1200",
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
       spotId: 3,
       url: "https://a0.muscache.com/im/pictures/35461573-f9e3-45c8-a5a4-ade538e2b0ed.jpg?im_w=1200",
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       spotId: 3,
       url: "https://a0.muscache.com/im/pictures/54e0b6fe-44a7-4642-9547-6ef85fa6f7aa.jpg?im_w=1200",
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
      spotId: 4,
      url: "https://a0.muscache.com/im/pictures/36f18396-bf2c-4790-92eb-7f2b8a62555f.jpg?im_w=720",
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      spotId: 4,
      url: "https://a0.muscache.com/im/pictures/30eac88c-ff4b-4828-89c4-36e00d3d2257.jpg?im_w=1200",
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
      spotId: 5,
      url: "https://a0.muscache.com/im/pictures/fc6dfc1c-cb3a-4f5a-9b19-c3fc82aef0c1.jpg?im_w=720",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotId: 5,
      url: "https://a0.muscache.com/im/pictures/21cb709d-c891-4917-bcfa-153522b86a02.jpg?im_w=720",
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
      spotId: 6,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-53344025/original/52635eec-5de9-443c-acf9-04a4177061b0.jpeg?im_w=1200",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotId: 6,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-53344025/original/10e86c22-a721-4299-82fd-b1787f71ea22.jpeg?im_w=720",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-46496139/original/8dab2f0b-0ac9-4a87-9b7a-2af5ecd47155.jpeg?im_w=1200",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-46496139/original/11ac4064-faaf-40ae-a592-72cd12aff229.jpeg?im_w=720",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      spotId: 7,
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-46496139/original/144ae8d0-e9e0-40b4-bfed-e1cc317f374d.jpeg?im_w=720",
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
