'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spots = sequelize.define('Spots', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    address:{
      type: DataTypes.STRING(256),
      allowNull: false

    },
    city:{
      type: DataTypes.STRING(100),
      allowNull: false

    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: false

    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: false

    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false

    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    price: {
      type: DataTypes.NUMERIC(10,2),
      allowNull: false
    }
  }, {});
  Spots.associate = function(models) {
    // associations can be defined here
  };
  return Spots;
};
