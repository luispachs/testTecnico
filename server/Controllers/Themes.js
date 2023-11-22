const Router = require('express').Router;
const Theme = require('../Models/Theme');
const Subcategory = require('../Models/Subcategory');
const ThemeRepository = require('../Repositories/ThemeRepository');


let router = Router();


router.get('/',async (req,res)=>{
    let themeRepository = new ThemeRepository();
    try{
    let theme = await themeRepository.entityManager().findAll({ include: Subcategory});
    return res.status(200).json(theme);
    }
    catch(error){
        return res.status(error.number);
    }
});

router.get('/:id',async (req,res)=>{
    let themeRepository = new ThemeRepository();
    try {
        let theme =await themeRepository.find(parseInt(req.params.id),{ include: Subcategory });
        return res.status(200).json(theme);
    } catch (error) {
        return res.status(error.number);
    }
});
router.post('/create',async (req,res)=>{
    let themeRepository = new ThemeRepository();
    let themeName = req.body.name.toString().toLowerCase();
    let subcategory = parseInt(req.body.id);
    theme = await themeRepository.create({'theme_name':themeName,'subcategory_id':subcategory});
    
    return res.json(theme);

});
router.delete('/:id',(req,res)=>{
    let id =parseInt(req.params.id);
    let themeRepository = new ThemeRepository();
    try {
        let themeDelete=  themeRepository.entityManager().destroy({
            where:{id:id}
        });
        return res.status(200).json(themeDelete);
    } catch (error) {
        return res.status(error.number) 
    }
    
});
router.put('/update',async (req,res)=>{
    let id = parseInt(req.body.id);
    let name = req.body.name;
    let themeRepository = new ThemeRepository();
    try {
        themeUpdated=await themeRepository.entityManager().update({theme_name:name},{
            where:{
                id:id
            }
        });
        return res.status(200).json(themeUpdated); 
    } catch (error) {
        return res.status(error.number)
    }   
});

module.exports =router