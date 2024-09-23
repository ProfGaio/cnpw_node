const express = require('express')
const axios =  require('axios')
const { application } = require('express')
const app = express()
const porta = 3000

//Rota padrão
app.get('/', async(req,res)=>{
    res.json({mensagem: "Bem-vindo a API"})
})

//Rota para dados
app.get('/cidades', async (req,res)=>{
    try{
        //Exemplo de API que retorna dados sobre cidades
        const resposta = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios')
        res.json(resposta.data)
    }
    catch{(erro) =>
        res.status(500).send('Erro ao buscar os dados!')
    }
})

app.listen(porta, () => {

    console.log(`Servidor rodando na porta ${porta}`)
})
 
