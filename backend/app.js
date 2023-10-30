const express = require('express')
const mongoose = require('mongoose')
const app=express()
async function main(){
    try{
        await mongoose.connect('');
        console.log("Connected!");
    }catch(error){
        console.log(error)
    }
}
main();