// IMPORT DEPENDENCIES

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// IMPORT ROUTER
const usersRouter = require("../users/users-router");

// INSTANTIATE EXPRESS
const server = express();

// GLOBAL MIDDLEWARE
server.use(cors());
server.use(helmet());
server.use(express.json());

// ROUTER
server.use("/api/users", usersRouter);

module.exports = server;
