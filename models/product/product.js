// 'use strict';
// const {
//     Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class Product extends Model {
//         static associate(models) {
//             // define association here
//             Product.belongsToMany(models.Product, { through: models.ProductCategory });
//             Product.belongsToMany(models.Product, { through: models.ProductBrand });
//         }
//     };
//     Product.init({
//         name: DataTypes.STRING,
//         slug: DataTypes.STRING,
//         description: DataTypes.STRING,
//         metaDescription: DataTypes.STRING,
//         metaKeywords: DataTypes.STRING,
//         sku: DataTypes.STRING,
//         model: DataTypes.STRING,
//         price: DataTypes.DECIMAL,
//         oldPrice: DataTypes.DECIMAL,
//         imageUrl: DataTypes.STRING,
//         isBestseller: DataTypes.BOOLEAN,
//         isFeatured: DataTypes.BOOLEAN,
//         quantity: DataTypes.INTEGER,
//         productStatus: { type: DataTypes.ENUM, values: ['active', 'inactive'] },
//         isDeleted: DataTypes.BOOLEAN
//     }, {
//         sequelize,
//         modelName: 'Product',
//     });
//     return Product;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        slug: DataTypes.STRING,
        description: DataTypes.STRING,
        metaDescription: DataTypes.STRING,
        metaKeywords: DataTypes.STRING,
        sku: DataTypes.STRING,
        model: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        oldPrice: DataTypes.DECIMAL,
        imageUrl: DataTypes.STRING,
        isBestseller: DataTypes.BOOLEAN,
        isFeatured: DataTypes.BOOLEAN,
        quantity: DataTypes.INTEGER,
        productStatus: { type: DataTypes.ENUM, values: ['active', 'inactive'] },
        isDeleted: DataTypes.BOOLEAN
    }, {});

    Product.associate = function(models) {
        Product.belongsToMany(models.Category, { through: models.ProductCategory });
        Product.belongsToMany(models.Brand, { through: models.ProductBrand });
    };

    return Product;
};
