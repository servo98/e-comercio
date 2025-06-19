/** @type {import('jest').Jest} */
import { beforeAll, afterAll, beforeEach, expect } from "@jest/globals";

import supertest from "supertest";
import api from "../api.js";
import {
  databaseConnect,
  databaseDisconnect,
  databaseClean,
} from "./datababase.js";

beforeEach(async () => {
  await databaseClean();
});

beforeAll(async () => {
  await databaseConnect();
});

afterAll(async () => {
  await databaseDisconnect();
});

const request = supertest(api);

describe("Auth register user tests", () => {
  test("Should register new user", async () => {
    const response = await request.post("/api/auth/register").send({
      firstName: "test name",
      lastName: "test last name",
      birthday: "1990-01-01",
      address: "123 Test St",
      phone: "123456789",
      username: "testuser",
      email: "test@test.com",
      password: "123123",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("user");
    expect(response.body.message).toBe("Usuario creado");
  });

  test("duplicate user registration", async () => {
    const response = await request.post("/api/auth/register").send({
      firstName: "test name",
      lastName: "test last name",
      birthday: "1990-01-01",
      address: "123 Test St",
      phone: "123456789",
      username: "testuser",
      email: "test@test.com",
      password: "123123",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("user");
    expect(response.body.message).toBe("Usuario creado");

    const response2 = await request.post("/api/auth/register").send({
      firstName: "test name",
      lastName: "test last name",
      birthday: "1990-01-01",
      address: "123 Test St",
      phone: "123456789",
      username: "testuser",
      email: "test@test.com",
      password: "123123",
    });

    expect(response2.status).toBe(400);
  });
});
