'use strict';
module.exports = (sequelize, DataTypes) => {
  var Listing = sequelize.define('Listing', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Listing;
};