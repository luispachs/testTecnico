const Repository = require('./Repository');
const Theme = require('../Models/Theme');
const Subcategory = require('../Models/Subcategory')
const {Op,Sequelize} = require('sequelize')


module.exports = class ThemeRepository extends Repository{
    constructor(){
        super(Theme);
        this.entityManager().hasOne(Subcategory,{foreignKey:'id',onDelete: 'RESTRICT',});
    }
};

