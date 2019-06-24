'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookingLimit = sequelize.define('bookingLimit', {
    roomId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'rooms',
          schema: 'master'
        },
        key: 'id'
      },
      field: 'room_id'
    },
    advancedBookingLimitTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'booking_limit_types',
          schema: 'master'
        },
        key: 'id'
      },
      field: 'advanced_booking_limit_type_id'
    },
    advancedBookingLimit: DataTypes.INTEGER,
    lateBookingLimitTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'booking_limit_types',
          schema: 'master'
        },
        key: 'id'
      },
      field: 'late_booking_limit_type_id'
    },
    lateBookingLimit: DataTypes.INTEGER,
    advancedCancellationLimitTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'booking_limit_types',
          schema: 'msater'
        },
        key: 'id'
      },
      field: 'advanced_cancellation_limit_type_id'
    },
    advancedCancellationLimit: DataTypes.INTEGER,
    lateCancellationLimitTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'booking_limit_types',
          schema: 'master'
        },
        key: 'id'
      },
      field: 'late_cancellation_limit_type_id'
    },
    lateCancellationLimit: DataTypes.INTEGER,
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' } 
  }, {
    freezeTableName: true,
    tableName: 'space_booking_limits',
    schema: 'master'
  });
  BookingLimit.associate = function(models) {
    // associations can be defined here
    BookingLimit.belongsTo(models.room, { foreignKey: 'roomId' });
    BookingLimit.belongsTo(models.bookingLimitType, 
              { 
                foreignKey: 'advancedBookingLimitTypeId',
                as: 'advancedBookingLimitType'
              }
    );
    BookingLimit.belongsTo(models.bookingLimitType, 
      { 
        foreignKey: 'lateBookingLimitTypeId',
        as: 'lateBookingLimitType'
      }
    );
    BookingLimit.belongsTo(models.bookingLimitType, 
      { 
        foreignKey: 'advancedCancellationLimitTypeId',
        as: 'advancedCancellationLimitType'
      }
    );
    BookingLimit.belongsTo(models.bookingLimitType, 
      { 
        foreignKey: 'lateCancellationLimitTypeId',
        as: 'lateCancellationLimitType'
      }
    );
  };
  return BookingLimit;
};
