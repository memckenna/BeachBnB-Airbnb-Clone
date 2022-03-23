'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Bookings', [
     {
       userId: "1",
       spotId: "1",
       startDate: new Date("March 1, 2022 16:00:00"),
       endDate: new Date("March 4, 2022 16:00:00"),
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      userId: "2",
      spotId: "2",
      startDate: new Date("March 12, 2022 16:00:00"),
      endDate: new Date("March 18, 2022 16:00:00"),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: "3",
      spotId: "3",
      startDate: new Date("April 1, 2022 16:00:00"),
      endDate: new Date("April 5, 2022 16:00:00"),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: "4",
      spotId: "4",
      startDate: new Date("March 15, 2022 16:00:00"),
      endDate: new Date("March 19, 2022 16:00:00"),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: "5",
      spotId: "5",
      startDate: new Date("April 6, 2022 16:00:00"),
      endDate: new Date("April 12, 2022 16:00:00"),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: "1",
      spotId: "7",
      startDate: new Date("April 11, 2022 16:00:00"),
      endDate: new Date("April 16, 2022 16:00:00"),
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
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
