'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Spots', [
     {
       userId: 1,
       address: "1234 Cozy Cottage Lane",
       city: "Panama City Beach",
       state: "Florida",
       country: "United States",
       zipcode: 32413,
       name: "Cozy Cottage",
       price: 615.00,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      userId: 2,
      address: "2345 Beachfront Blvd",
      city: "Edisto Beach",
      state: "South Carolina",
      country: "United States",
      zipcode: 29438,
      name: "It's Beach Time",
      price: 753.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      address: "12 Summer Islands Lane",
      city: "Kiawah Island",
      state: "South Carolina",
      country: "United States",
      zipcode: 29455,
      name: "Summer Islands",
      price: 755.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 4,
      address: "98 Cane Cottage Lane",
      city: "Ponte Vedra Beach",
      state: "Florida",
      country: "United States",
      zipcode: 32082,
      name: "Cane Cottage Oceanfront Oasis",
      price: 626.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 5,
      address: "433 FontaineBleau Street, Unit 1212",
      city: "Miami Beach",
      state: "Florida",
      country: "United States",
      zipcode: 33140,
      name: "FontaineBleau",
      price: 622.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Spots', null, {});
  }
};
