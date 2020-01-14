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
    },

   async show(req,res){
        //Exemplo:  params /products/1eda443ds
        const {_id} = req.params
            try{
                const product = await Product.findById(_id)
                return res.json(product)
            }
            catch(err){
                return res.json(err)
            }
    },

   async search(req,res){
         //Exemplo:  params /search/fruta
        const {title} = req.params;
           
        try{
            const search = await Product.find({title})
            return res.json(search)
        }
        catch(err){
            return res.json(err)
        }
    },

    async searchQueryString(req,res){
        //Exemplo: query /searchquery?title=fruta
       const {title} = req.query;
     
        try{
            const search = await Product.find({title})
            return res.json(search)
        }
        catch(err){
            return res.json(err)
        }
    }

}