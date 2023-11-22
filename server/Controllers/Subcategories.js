const Router = require('express').Router;
const SubcategoryRepository = require('../Repositories/SubcategoryRepository');
const Category = require('../Models/Category');
const Theme = require('../Models/Theme');


let router = Router();


router.get('/',async (req,res)=>{
    let subcategoryRepository = new SubcategoryRepository();
    try{
    let subcategory = await subcategoryRepository.entityManager().findAll({include:Theme});
    return res.status(200).json(subcategory)
    }
    catch(error){
        return res.status(error.number)
    }
});

router.get('/:id',async (req,res)=>{
    let subcategoryRepository = new SubcategoryRepository();
    let id = parseInt(req.params.id);
    try {
        let subcategory =await subcategoryRepository.find(id,{include:[{model:Theme},{model:Category}]});
        return res.status(200).json(subcategory);
    } catch (error) {
        return res.status(error.number)
    }
});
router.post('/create',async (req,res)=>{
    let subcategoryRepository = new SubcategoryRepository();
    let subcategoryName = req.body.name.toString().toLowerCase();
    let categoryId = parseInt(req.body.categoryId);
    let subcategory = await subcategoryRepository.create({"subcategory_name":subcategoryName,"category":categoryId});
    
    return res.json(subcategory);

});

router.delete('/:id',async (req,res)=>{
    let id =parseInt(req.params.id);
    let subcategoryRepository = new SubcategoryRepository();
    try {
        let hasItems= await subcategoryRepository.entityManager().findByPk(id);
        let count = await hasItems.getThemes()
        if(count.length != 0){
            return res.status(400).json({'msg':'El elemento no puede ser eliminado'});
        }
       let subcategoryDelete=  subcategoryRepository.entityManager().destroy({
            where:{id:id}
        });
        return res.status(200).json(subcategoryDelete);
    } catch (error) {
        return res.status(error.number) 
    }
    
});
router.put('/update',async (req,res)=>{
    let id = parseInt(req.body.id);
    let name = req.body.name;
    let subcategoryRepository = new SubcategoryRepository();
    try {
        subcategoryUpdated=await subcategoryRepository.entityManager().update({theme_name:name},{
            where:{
                id:id
            }
        });
        return res.status(200).json(subcategoryUpdated); 
    } catch (error) {
        return res.status(error.number)
    }   
});
module.exports =router