// 'use strict';
// const {
//     Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class Brand extends Model {
//         static associate(models) {
//             // define association here
//             Brand.belongsToMany(models.Product, { through: models.ProductBrand });
//         }
//     };
//     Brand.init({
//         name: DataTypes.STRING,
//         slug: DataTypes.STRING,
//         description: DataTypes.STRING,
//         metaDescription: DataTypes.STRING,
//         metaKeywords: DataTypes.STRING,
//         brandStatus: { type: DataTypes.ENUM, values: ['active', 'inactive'] },
//         isDeleted: DataTypes.BOOLEAN
//     }, {
//         sequelize,
//         modelName: 'Brand',
//     });
//     return Brand;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {

    const Brand = sequelize.define('Brand', {
        name: DataTypes.STRING,
        slug: DataTypes.STRING,
        description: DataTypes.STRING,
        metaDescription: DataTypes.STRING,
        metaKeywords: DataTypes.STRING,
        brandStatus: { type: DataTypes.ENUM, values: ['active', 'inactive'] },
        isDeleted: DataTypes.BOOLEAN
    }, {});

    Brand.associate = function(models) {
        Brand.belongsToMany(models.Product, { through: models.ProductBrand });
    };
    
    return Brand;
};
