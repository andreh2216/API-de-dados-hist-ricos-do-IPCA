

export default function calculo(colecaoDados,valor,mesInicial,mesFinal,anoInicial,anoFinal,req,res){
    

        if(isNaN(valor)){
            res.status(500).json({Error:"Envie Apenas números"})
        }else{

        

                


                
        //CONVERTENNDO PARA APENAS UM NUMERO EXEMPLO 202305
        var inicio = Number(anoInicial) * 100 + Number(mesInicial);
        var fim = Number(anoFinal) * 100 + Number(mesFinal);

     
            if(inicio >= 201505 && fim <= 202305){    


                var newArray = colecaoDados.filter((index)=> {


       ///CONVERTENDO O ANO E MES PARA O FORMATO
       const atual = Number(index.ano) * 100 + Number(index.mes)


       //COMPARANDO
        return atual >= inicio && atual <= fim


    }

);


    var valorCorrigido = valor;

    newArray.forEach((item)=>{

    valorCorrigido = valorCorrigido * (1 + (item.ipca / 100))



    })


    res.json({resultado:valorCorrigido})


                
            }else{
                res.status(500).json({"Error":"Envie apenas meses e anos apartir do mes 1 de 2015 até o mes 5 de 2023"})
            }


        }
}