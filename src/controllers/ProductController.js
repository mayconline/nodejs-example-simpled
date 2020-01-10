const Product = require('../models/Product');

//index - lista todos os produtos
//store - cadastra um produto
//update - atualiza um produto
//delete - deleta um produto
//show - lista um unico produto

module.exports={

   async index(req,res){
       try{
            const products = await Product.find().sort('-createdAt')
            return res.json(products)
    
       }
       catch(err){
           return res.json(err)
       }
        
    },

  async store(req,res){
        const {title, description} = req.body
        try{
            const store = await Product.create({
                title,
                description
            })
            return res.json(store)
        }
        catch(err){
            return res.json(err)
        }
    },

    async update(req,res){
        const {_id} = req.params
        try{
            const update = await Product.findByIdAndUpdate(_id, req.body, {new:true})
            return res.json(update)
        }
        catch(err){
            return res.json(err)
        }
    },

    async delete(req,res){
        const {_id} = req.params
            try{
                await Product.findByIdAndRemove(_id)
                return res.json({delete:true})
            }
            catch(err){
                return res.json(err)
            }
    }

}