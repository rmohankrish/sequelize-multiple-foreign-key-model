'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookingLimitType = sequelize.define('bookingLimitType', {
    bookingLimitType: { 
	type: DataTypes.STRING(50), 
	field: 'booking_limit_type' 
    },
    description: { 
	type: DataTypes.STRING(100), 
	field: 'description' 
    },
    createdAt: { 
	type: DataTypes.DATE, 
	field: 'created_at' 
    },
    updatedAt: { 
	type: DataTypes.DATE, 
	field: 'updated_at' 
    }
  }, 					    
  {
    freezeTableName: true,
    tableName: 'booking_limit_types',
    schema: 'master'
  });
  BookingLimitType.associate = function(models) {
    // associations can be defined here
  };
  return BookingLimitType;
};
