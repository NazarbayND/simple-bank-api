const express = require("express");
const userService = require("../services/userService");
const { validateBalanceUpdate } = require("../validators/userValidator");
const { handleError, responseHandler } = require("../utils/helpers");

const router = express.Router();

router.post("/update-balance", validateBalanceUpdate, async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const result = await userService.updateBalance(userId, amount);
    responseHandler(res, result);
  } catch (error) {
    responseHandler(res, null, handleError(error), 400);
  }
});

router.get("/get-balance/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await userService.getBalance(userId);
    responseHandler(res, result);
  } catch (error) {
    responseHandler(res, null, handleError(error), 400);
  }
});

module.exports = router;
