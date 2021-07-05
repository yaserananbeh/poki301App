const axios =require('axios');
// const { response } = require("express");
const GetApiDataModel=require('../models/getApiData.model')
const Cache =require('../helper/cache')
const newCache=new Cache;

const getApiData =(req,res)=>{
    if(newCache[0]){
        res.send(newCache[0])
    }
    else{
        axios.get(`https://digimon-api.vercel.app/api/digimon`).then(response=>{
            const modeledData=response.data.slice(0, 10).map(obj=>{
                return(new GetApiDataModel(obj));
            })
            newCache[0]=modeledData
            res.send(modeledData)
        }).catch(error=>res.send(error.message))
    }
}
module.exports=getApiData;