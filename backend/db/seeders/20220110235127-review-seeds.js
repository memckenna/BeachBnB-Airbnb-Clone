'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [
     {
      userId: "1",
      spotId: "1",
      review: "Amazing stay on 30A! This home was perfect for our family of 4 and made for a perfect place to celebrate the holiday season this year! Would highly recommend this home to anyone wanting a walkable community and a beautiful home!",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: "2",
      spotId: "2",
      review: "Very nicely done home right on the beach. The owner was so easy to deal with and all details were exactly as provided. Beds slept like a dream and the space was great for a larger crowd.",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: "3",
      spotId: "3",
      review: "This house comes with a lot of amenities-bikes, pool, pool table. It’s quite huge and the outdoor space is amazing. The host was very responsive and we would definitely go back.",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: "4",
      spotId: "4",
      review: "Beautifully appointed, fabulous view, all creature comforts provided for....from robes, to extra pillows and throws....and the ocean tides comforting you to sleep at night, and OMG I will be back. Thank you for sharing your beautifully appointed home. xoxo",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: "5",
      spotId: "5",
      review: "The condo was clean, spacious, and just as described. Check-in was seamless and the hosts were gracious and very easy to deal with and communicate. I would absolutely stay with them again!",
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      userId: "1",
      spotId: "7",
      review: "This ocean front property in Malibu is beyond amazing! The whole house is beautifully decorated! We cannot wait to book our next stay at this home!!",
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
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
