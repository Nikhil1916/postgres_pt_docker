"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const todoRouter_1 = __importDefault(require("./todoRouter"));
const mainRouter = (0, express_1.Router)();
// console.log("kokok");
mainRouter.use("/user", userRouter_1.default);
mainRouter.use("/todo", todoRouter_1.default);
exports.default = mainRouter;
