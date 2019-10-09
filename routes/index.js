import express from "express";
import models from "../models";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await models.User.findAll({
    include: [models.Task]
  });
  res.render("index", {
    title: "Sequelize: Express Example",
    users
  });
});

export default router;
