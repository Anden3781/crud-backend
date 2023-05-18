const usersRouter = require('./users.router')
const express = require('express');
const router = express.Router();

// Users router
router.use("/users", usersRouter);

module.exports = router;