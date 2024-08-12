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
const userRouter = (0, express_1.Router)();
userRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        console.log(users);
        res.json({
            users
        });
    }
    catch (e) {
        res.json({
            e
        });
    }
}));
userRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const user = yield prisma.user.findUnique({
            where: {
                id: +id
            },
            include: {
                todos: true
            }
        });
        if (!user) {
            res.json({
                err: "User not there"
            });
            return;
        }
        res.json({
            user
        });
    }
    catch (e) {
        res.json({
            e
        });
    }
}));
userRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    let user = null;
    try {
        user = yield prisma.user.create({
            data: Object.assign({}, body)
        });
    }
    catch (e) {
        res.json({
            e
        });
    }
    res.json({
        user
    });
}));
userRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Update User with ID: ${id}`);
});
exports.default = userRouter;
