// const axios =require('axios');
const pokimonModel =require('../models/pokimon.mongoose.model')


const postpokimon=(req,res)=>{
    const {name,img,level}=req.body;
    pokimonModel.find({name:name},(error,data)=>{
        if(data.length>0){
            res.send('the data already exist')
        }
        else{
            const newpokimonPiece = new pokimonModel({
                name: name,
                img: img,
                level: level
              });
              newpokimonPiece.save();
            res.send(newpokimonPiece)
        }
    })
}
const getpokimon=(req,res)=>{
    pokimonModel.find({}, (error, data) => {
        res.send(data);
      });
}
const deletepokimon=(req,res)=>{
    const name=req.params.name;
    pokimonModel.deleteOne({name:name},(error,data)=>{
        if(error){
            res.send(error.message)
        }
        else{
            res.send(data)
        }
    })
}
const updatepokimon=(req,res)=>{
    const name=req.params.name;
    const {level}=req.body;
    pokimonModel.findOne({name:name},(error,data)=>{
        if(error){
            res.send(error.message);
          }
          else{
            data.level=level;
            data.save();
            res.send(data);
          }
    })
}
module.exports={
    postpokimon,getpokimon,deletepokimon,updatepokimon
}