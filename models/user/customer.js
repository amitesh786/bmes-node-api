'use strict';
module.exports = (sequelize, DataTypes) => {
    
    const Customer = sequelize.define('Customer', {
        personId: DataTypes.INTEGER,
        isDeleted: DataTypes.BOOLEAN
    }, {});

    Customer.associate = function(models) {
        // associations can be defined here
        Customer.belongsTo(models.Person);
        Customer.belongsToMany(models.Address, { through: models.CustomerAddress });
    };

    return Customer;
};
