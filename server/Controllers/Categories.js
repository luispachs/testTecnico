const Router = require('express').Router;
const Category = require('../Models/Category');
const Subcategory = require('../Models/Subcategory');
const CategoryRepository = require('../Repositories/CategoryRepository');
const { Op,Sequelize } = require("sequelize");



let router = Router();


router.get('/',async (req,res)=>{
    categoryRepository = new CategoryRepository();
    try{
    categories =await categoryRepository.entityManager().findAll({ include:{
        model:Subcategory,
        },
    });
    return res.status(200).json(categories);
    }
    catch(error){
        return res.status(error.number);
    }
});

router.get('/:id',async (req,res)=>{
    categoryRepository = new CategoryRepository();
    let id =parseInt(req.params.id);
    try {
        category =await categoryRepository.find(id,{
            include:{
                model:Subcategory,
                },
            });
        return res.status(200).json(category);
    } catch (error) {
        return res.status(error.number);
    }
});

router.post('/create',async (req,res)=>{
    categoryRepository = new CategoryRepository();
    let categoryName = req.body.name.toString().toLowerCase();
    category = await categoryRepository.create({"name":categoryName});
    
    return res.json(category);

});

router.delete('/:id',async (req,res)=>{
    let id =parseInt(req.params.id);
    let categoryRepository = new CategoryRepository();
    try {
        let hasItems= await categoryRepository.entityManager().findByPk(id);
        let count = await hasItems.getThemes()
        if(count.length != 0){
            return res.status(400).json({'msg':'El elemento no puede ser eliminado'});
        }
       let categoryDelete=  categoryRepository.entityManager().destroy({
            where:{id:id}
        });
        return res.status(200).json(categoryDelete);
    } catch (error) {
        return res.status(error.number) 
    }
    
});
router.put('/update',async (req,res)=>{
    let id = parseInt(req.body.id);
    let name = req.body.name;
    let categoryRepository = new CategoryRepository();
    try {
        categoryUpdated=await categoryRepository.entityManager().update({theme_name:name},{
            where:{
                id:id
            }
        });
        return res.status(200).json(categoryUpdated); 
    } catch (error) {
        return res.status(error.number)
    }   
});
module.exports =router;