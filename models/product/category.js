'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate(models) {
            // define association here
            Category.belongsToMany(models.Product, { through: models.ProductCategory });
        }
    };
    Category.init({
        name: DataTypes.STRING,
        slug: DataTypes.STRING,
        description: DataTypes.STRING,
        metaDescription: DataTypes.STRING,
        metaKeywords: DataTypes.STRING,
        categoryStatus: { type: DataTypes.ENUM, values: ['active', 'inactive'] },
        isDeleted: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Category',
    });
    return Category;
};
