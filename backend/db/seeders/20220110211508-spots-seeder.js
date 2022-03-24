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
       bedrooms: 6,
       baths: 5,
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
      bedrooms: 7,
      baths: 5,
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
      bedrooms: 4,
      baths: 5,
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
      bedrooms: 5,
      baths: 4,
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
      bedrooms: 3,
      baths: 3,
      price: 622.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      address: "4321 Ocean View Way",
      city: "Malibu",
      state: "California",
      country: "United States",
      zipcode: 93013,
      name: "Breathtaking Malibu Ocean View Sanctuary",
      bedrooms: 8,
      baths: 7,
      price: 800.00,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 1,
      address: "9631 Malibu Beach Way",
      city: "Malibu",
      state: "California",
      country: "United States",
      zipcode: 93013,
      name: "Malibu Beach at its Best...",
      bedrooms: 3,
      baths: 3,
      price: 2630.00,
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
