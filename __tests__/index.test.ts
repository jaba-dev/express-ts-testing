import request from "supertest";
import app from "../src/index"; 

describe("Express App", () => {
  it("should respond with a welcome message on GET /", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      message: "Welcome to Express TypeScript testing.",
    });
  });

  it("should return a 404 for an undefined route", async () => {
    const response = await request(app).get("/nonexistent");

    expect(response.status).toBe(404);

    expect(response.body).toEqual({});
  });
});

