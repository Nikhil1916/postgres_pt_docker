import { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const todoRouter = Router();
todoRouter.post("/",async(req:Request, res:Response)=>{
    try {
        const todo = await prisma.todo.create({
            data : req.body
        });
        res.json({
            todo
        })
    } catch(e) {
        res.json({
            e
        })
    }
    console.log("Todo added");
});


todoRouter.put("/:id",async(req:Request, res:Response)=>{
    const id = req.params.id;
    try {
        const todo = await prisma.todo.update({
            where: {
                id: +id
            },
            data: {
                ...req.body
            }
        })
        res.json({
            todo
        })
    } catch(e) {
        res.json({
            e
        })
    }
    console.log("Todo added");
});

todoRouter.get("/",async(req,res)=>{
    const todos = await prisma.todo.findMany();
    return res.json({
        todos
    })
})

export default todoRouter;