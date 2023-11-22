const {Sequelize} = require('sequelize');

class Repository{
    entity
    hasOneTarget=null
    belongToTarget=null    
    hasOneOptions=null
    belongToOptions=null

    constructor(entity){
            this.entity =entity
    }

    entityManager(){
        return this.entity;
    }
    close(){
        this.entity.close()
    }

   async find(id,obj=null){
       return await this.entity.findByPk(id,obj);
    }
    async create(obj){
        return this.entity.create(obj)
    }
}

module.exports=Repository;