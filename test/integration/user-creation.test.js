"use strict";

import request from "supertest";
import app from "../../app";

describe("user creation page", () => {
  let models;

  beforeAll(() => {
    return require("../../models").sequelize.sync();
  });

  beforeEach(() => {
    models = require("../../models");

    return Promise.all([
      models.Task.destroy({ truncate: true }),
      models.User.destroy({ truncate: true })
    ]);
  });

  test("loads correctly", done => {
    request(app)
      .get("/")
      .expect(200, done);
  });
});
