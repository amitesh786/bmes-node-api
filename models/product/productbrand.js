// 'use strict';
// const {
//     Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class ProductBrand extends Model {
//         static associate(models) {
//         // define association here
//         }
//     };
//     ProductBrand.init({
//         productId: DataTypes.INTEGER,
//         brandId: DataTypes.INTEGER
//     }, {
//         sequelize,
//         modelName: 'ProductBrand',
//     });
//     return ProductBrand;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
    const ProductBrand = sequelize.define('ProductBrand', {
        productId: DataTypes.INTEGER,
        brandId: DataTypes.INTEGER
    }, {});

    ProductBrand.associate = function(models) {
        // associations can be defined here
    };

    return ProductBrand;
};
