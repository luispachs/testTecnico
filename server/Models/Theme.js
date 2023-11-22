const {DataTypes,Sequelize} = require('sequelize');
const {sqlConnection,database,user,password} =require('../config/sqlConnection')
const Subcategory = require('./Subcategory');
const ThemeModel = {
    id:{ 
        type: DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        autoIncrement: true   ,
        field:'id' 
    },
    theme_name:{
        type:DataTypes.STRING(30),
        allowNull:false,
        field:'name',
    },
    subcategory_id:{
        field:'subcategory_id',
        type:DataTypes.INTEGER,
        references:{
            model: Subcategory,
            key:'id'
        },
    }
};
let sequelize = new Sequelize(database,user,password,sqlConnection);

Theme = sequelize.define('themes',ThemeModel,{
    timestamps: false,
    createdAt:false,
    updatedAt:false
  });
module.exports=Theme;