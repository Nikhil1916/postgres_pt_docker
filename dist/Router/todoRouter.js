"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const todoRouter = (0, express_1.Router)();
todoRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield prisma.todo.create({
            data: req.body
        });
        res.json({
            todo
        });
    }
    catch (e) {
        res.json({
            e
        });
    }
    console.log("Todo added");
}));
todoRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const todo = yield prisma.todo.update({
            where: {
                id: +id
            },
            data: Object.assign({}, req.body)
        });
        res.json({
            todo
        });
    }
    catch (e) {
        res.json({
            e
        });
    }
    console.log("Todo added");
}));
todoRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield prisma.todo.findMany();
    return res.json({
        todos
    });
}));
exports.default = todoRouter;
