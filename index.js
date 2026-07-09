import historicoInflacao from "./dados/dados.js"

import express from "express";
const app = express();

import calculo from "./servicos/servico.js";





app.get('/historicoIPCA',(req,res)=>{

res.json({historicoInflacao:historicoInflacao})

})


app.get('/historicoIPCA/ano',(req,res)=>{
    var ano = req.query.ano;

    var result = historicoInflacao.filter((index)=> index.ano == ano );
    res.json({resultado:result})
})


app.get('/historicoIPCA/id/:id',(req,res)=>{
        var id = req.params.id;

    if(id >= 1 && id <= 101){

          var result = historicoInflacao.find((index)=> index.id == id );

    res.json({resultado:result})



       
    }else{
        
   
         res.json({Erro:"Elemento não encontrado"})

    }

})









app.get('/historicoIPCA/calculo',(req,res)=>{




        var valor = Number(req.query.valor);
        var mesInicial = Number(req.query.mesInicial);
        var anoInicial = Number(req.query.anoInicial);
        var anoFinal = Number(req.query.anoFinal);
        var mesFinal = Number(req.query.mesFinal);
        

        calculo(historicoInflacao,valor,mesInicial,mesFinal,anoInicial,anoFinal,req,res)



})









app.listen(3000,()=>{
    console.log("Server on!")
})
