'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ProductBrand extends Model {
        static associate(models) {
        // define association here
        }
    };
    ProductBrand.init({
        productId: DataTypes.INTEGER,
        brandId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'ProductBrand',
    });
    return ProductBrand;
};
