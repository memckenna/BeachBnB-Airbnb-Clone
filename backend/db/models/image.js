'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    spotId: {
      types: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      types: DataTypes.TEXT,
      allowNull: false,
    }

  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Spot, { foreignKey: 'spotId' })
  };
  return Image;
};
