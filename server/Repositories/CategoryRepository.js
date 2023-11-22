const Repository = require('./Repository');
const Category = require('../Models/Category');
const Subcategory = require('../Models/Subcategory');



module.exports = class CategoryRepository extends Repository{
    constructor(){
        super(Category);
        this.entityManager().hasMany(Subcategory,{foreignKey:'category_id'});
    }
    
}

