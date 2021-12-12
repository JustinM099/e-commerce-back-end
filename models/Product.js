// import important parts of sequelize library
const { Model, DataTypes, STRING, FLOAT, INTEGER } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
      product_name: STRING,
      price: FLOAT(80, 2),
      stock: INTEGER,
      tagIds: [] //still need to do
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
