const mongoose =require('mongoose');
const pokimonSchema=mongoose.Schema({
    name: {
        type: String,
        unique:true,
        lowercase:true,
        trim:true
      },
      img:String,
      level:String,

})
const pokimonModel=mongoose.model('pokiCollection',pokimonSchema);
module.exports=pokimonModel