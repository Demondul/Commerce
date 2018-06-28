const mongoose = require('mongoose');
const Products = mongoose.model('Products');

module.exports = {
    retrieve_all: function(request,response){
        console.log("retrieving...")
        Products.find({}, function(err,prods){
            if(err){
                console.log(err);
                response.json({message:"Retrieval Error", data:err});
            }
            else{
                console.log("retrieved...")
                return response.json({data:prods});
            }
        });
    },
    retrieve_id: function(request,response){
        Products.find({_id:request.params.id}, function(err,obj){
            if(err){
                console.log(err);
                response.json({message:"Retrieval Error",data:err.errors});
            }
            else{
                response.json({data:obj[0]});
            }
        });
    },
    create_Products: function(request,response){
        let obj = new Products({
            name:request.body.name,
            quantity:request.body.quantity,
            price:request.body.price
        });

        obj.save(function(err){
            if(err){
                response.json({message:err.errors});
            }
            else{
                response.json({message:"Saved!",data:obj})
            }
        });
    },
    update_Products: function(request,response){
        Products.findOne({_id:request.params.id},function(err,obj){

            obj.name = request.body.name;
            obj.quantity = request.body.quantity;
            obj.price = request.body.price;

            obj.save(function(err){
                if(err){
                    response.json({message:err.errors});
                }
                else{
                    response.json({message:"Updated!",data:obj});
                }
            });
        });
    },
    delete_Products: function(request,response){
        Products.remove({_id:request.params.id},function(err){
            if(err){
                response.json({message:err.errors});
            }
            else{
                response.json({message:"Deleted!"})
            }
        });
    }
}