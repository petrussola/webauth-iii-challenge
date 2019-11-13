// IMPORT DEPENDENCIES

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// IMPORT ROUTER
const usersRouter = require("../users/users-router");
const authRouter = require("../auth/auth-router");

// INSTANTIATE EXPRESS
const server = express();

// GLOBAL MIDDLEWARE
server.use(cors());
server.use(helmet());
server.use(express.json());

// ROUTER
server.use("/api/users", usersRouter);
server.use("/auth", authRouter);

module.exports = server;
