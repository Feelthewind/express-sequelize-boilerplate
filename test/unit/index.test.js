"use strict";

describe("models/index", () => {
  it("returns the task model", () => {
    const models = require("../../models");
    expect(models.Task).toBeDefined();
  });

  it("returns the user model", () => {
    const models = require("../../models");
    expect(models.User).toBeDefined();
  });
});
