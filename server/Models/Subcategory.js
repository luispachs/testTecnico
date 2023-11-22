const {DataTypes,Sequelize} = require('sequelize');
const {sqlConnection,database,user,password} =require('../config/sqlConnection')
const Category= require('./Category');
const SubcategoryModel = {
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement: true,
        field:'id'
    },
    subcategory_name:{
        type:DataTypes.STRING(50),
        allowNull:false,
        field:'name'
    },
    categoryId:{
        type:DataTypes.INTEGER,
        references:{
            model: Category,
            key:'id',
        },
        field:'category_id',
    }
};
let sequelize = new Sequelize(database,user,password,sqlConnection);

Subcategory = sequelize.define('subcategories',SubcategoryModel,{
    timestamps: false,
    createdAt:false,
    updatedAt:false
  });


module.exports= Subcategory;