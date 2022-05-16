import express from "express";
import {
  crateExpense,
  getExpenses,
} from "../models/expenseModel/Expenses.model.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { authorization } = req.headers;

    // model get al expenses of userID = authorization
    const expenses = await getExpenses({ userId: authorization });

    res.json({
      status: "success",
      expenses,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const { authorization } = req.headers;

    const result = await crateExpense({ ...req.body, userId: authorization });

    result?._id
      ? res.json({
          status: "success",
          message: "Expense created successfully",
        })
      : res.json({
          status: "error",
          message: "Error creating expense, try again later",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/", (req, res) => {
  res.json({
    message: "Welcome to the expenses API delete",
  });
});

export default router;
