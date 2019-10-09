"use strict";

describe("models/task", () => {
  let User;
  let Task;
  beforeAll(function() {
    return require("../../models").sequelize.sync();
  });

  beforeEach(function() {
    User = require("../../models").User;
    Task = require("../../models").Task;
  });

  describe("create", () => {
    it("creates a task", async () => {
      const user = await User.create({ username: "johndoe" });
      const task = await Task.create({ title: "a title", UserId: user.id });
      expect(task.title).toBe("a title");
    });
  });
});
