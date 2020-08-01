// 'use strict';
// const {
//     Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class ProductCategory extends Model {
//         static associate(models) {
//         // define association here
//         }
//     };
//     ProductCategory.init({
//         productId: DataTypes.INTEGER,
//         categoryId: DataTypes.INTEGER
//     }, {
//         sequelize,
//         modelName: 'ProductCategory',
//     });
//     return ProductCategory;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {

    const ProductCategory = sequelize.define('ProductCategory', {
        productId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER
    }, {});

    ProductCategory.associate = function(models) {
        // associations can be defined here
    };

    return ProductCategory;
};
