'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zipcode: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.NUMERIC
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
  };
  return Spot;
};