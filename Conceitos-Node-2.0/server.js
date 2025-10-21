import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

                    //request , responsse
app.get('/usuarios', async (req, res) => {    
    //GET = Listar

    const users = await prisma.user.findMany()

    res.status(200).json(users)
})

    // POST = Criar
app.post('/usuarios', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name,
        },
    })
    
    //res.status(201).json(user) //Quando ativado aparece as informações do usuário no console
    res.status(201).json({message: "Usuário criado com sucesso"}) //Não aparece as informações do usuário no console
})

app.put('/usuarios/:id', async (req, res) => {
    
    const user = await prisma.user.update({
        where: {
            id: req.params.id,
        },
        data: {
            email: req.body.email,
            age: req.body.age,
            name: req.body.name
        }
    })
    
    res.status(200).json({message: "Usuário criado com sucesso"})
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id,
        },
    })

    res.status(200).json({message: "Usuário deletado com sucesso"})
})

app.listen(3001, () => console.log('🚀 Servidor rodando em http://localhost:3000'))

    // PUT = Editar Vários
    // PATCH = Editar UM
    //DELETE = Deletar

    /* HTTP Status
    200 a 299 = Confirmação / Sucesso. Ocorreu tdo certo
    200 = Requisição realizada com sucesso
    201 = Criado - Requisição de criação realizada com sucesso.
    400 a 499 = Erro do Cliente Front-End
    400 = Bad Request
    401 = Unauthorized
    403 = forbidden (Proibido)
    404 = Not Found (Não foi encontrado)
    500 a 501 = Erro do Servidor Back-And 
    500 = Internal Server Error
    502 - Bad Gateway
    */

    /* MONGO DB
    alexandre
    #Eduardo2012
    */
   /*
   OK = CRIAR
   OK = LER
   OK = DELETAR
   OK = EDITAR

        CRUD
        CREATE
        READ
        UPDATE
        DELETE
        */