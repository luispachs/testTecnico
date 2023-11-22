const {DataTypes,Sequelize} = require('sequelize');
const {sqlConnection,database,user,password} =require('../config/sqlConnection')
const Subcategory = require('./Subcategory');
const CategoryModel ={
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement: true,
        field:'id'
    },
    name:{
        type:DataTypes.STRING(30),
        allowNull:false,
        unique:true,
        field:'name'
    }
};

let sequelize = new Sequelize(database,user,password,sqlConnection);

Category = sequelize.define('categories',CategoryModel,{
    timestamps: false,
    createdAt:false,
    updatedAt:false
  });

module.exports=Category;