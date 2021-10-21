import { createTestAuth } from "../src";

describe("Smoke test", () => {
  it("is a function", () => {
    expect(createTestAuth).toBeInstanceOf(Function);
  });

  it("createTestAuth.VERSION is set", () => {
    expect(createTestAuth.VERSION).toEqual("0.0.0-development");
  });
});
