const Repository = require('./Repository');
const Subcategory = require('../Models/Subcategory');
const ThemeRepository = require('../Repositories/ThemeRepository');
const Category = require('../Models/Category');
const Theme =require('../Models/Theme')


module.exports = class SubcategoryRepository extends Repository{
    constructor(){
        super(Subcategory);
        this.entityManager().hasOne(Category,{foreignKey:'id',onDelete: 'RESTRICT',sourceKey:'categoryId'});
        this.entityManager().hasMany(Theme,{foreignKey:"subcategory_id",onDelete: 'RESTRICT'});
    }
}


