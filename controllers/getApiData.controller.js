const axios =require('axios');
// const { response } = require("express");
const GetApiDataModel=require('../models/getApiData.model')

const getApiData =(req,res)=>{
    axios.get(`https://digimon-api.vercel.app/api/digimon`).then(response=>{
        const modeledData=response.data.map(obj=>{
            return(new GetApiDataModel(obj));
        })
        res.send(modeledData)
    }).catch(error=>res.send(error.message))
}
module.exports=getApiData;