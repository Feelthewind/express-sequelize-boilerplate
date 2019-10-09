import express from "express";
import models from "../models";

const router = express.Router();

router.post("/create", async (req, res) => {
  const user = await models.User.create({
    username: req.body.username
  });
  res.redirect("/");
});

router.post("/:user_id/tasks/create", async (req, res) => {
  const task = await models.Task.create({
    title: req.body.title,
    UserId: req.params.user_id
  });
  res.redirect("/");
});

export default router;
