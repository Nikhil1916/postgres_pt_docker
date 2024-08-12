import express, { Request, Response, Router } from 'express';
import userRouter from './userRouter';
import todoRouter from './todoRouter';

const mainRouter = Router();
// console.log("kokok");
mainRouter.use("/user",userRouter);
mainRouter.use("/todo",todoRouter);
export default mainRouter;