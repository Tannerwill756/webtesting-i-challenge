const { succeed, fail, repair, get } = require("./enhancer");

describe("method testing", () => {
  describe("repair()", () => {
    it("should restore the durability back to 100", () => {
      expect(
        repair({ name: "Tanner", enhancement: 18, durability: 18 }).durability
      ).toBe(100);
    });
  });

  describe("succeed()", () => {
    it("should increase enhancement by 1 if its not at 20", () => {
      expect(
        succeed({ name: "Tanner", enhancement: 18, durability: 18 }).enhancement
      ).toBe(19);
    });
    it("if its less than 0 then return 0", () => {
      expect(
        succeed({ name: "Tanner", enhancement: -5, durability: 18 }).enhancement
      ).toBe(0);
    });
    it("if its greater than 20 then return 20", () => {
      expect(
        succeed({ name: "Tanner", enhancement: 25, durability: 18 }).enhancement
      ).toBe(20);
    });
    it("if its a string then return 0", () => {
      expect(
        succeed({ name: "Tanner", enhancement: "Not a number", durability: 18 })
          .enhancement
      ).toBe(0);
    });
  });

  describe("fail()", () => {
    it("if enhancement is 15 or more decrease durability by 10 but if the enhancement is more than 16 decrease durability by 10 and decrease enhancement by 1. If enhancement is less than 15 decrease durability by 5.", () => {
      expect(
        fail({ name: "Tanner", enhancement: 14, durability: 18 }).durability
      ).toBe(13);
    });
    it("when enhancement is 15 should decrease durability by 10", () => {
      expect(
        fail({ name: "Tanner", enhancement: 15, durability: 18 }).durability
      ).toBe(8);
    });
    it("when enhancement is more than 15 should decrease durability by 10 and enhancement by 1", () => {
      expect(
        fail({ name: "Tanner", enhancement: 17, durability: 18 }).durability
      ).toBe(8);
      expect(
        fail({ name: "Tanner", enhancement: 17, durability: 18 }).enhancement
      ).toBe(16);
    });
  });

  describe("get()", () => {
    it("if enhancement is greater than 0 add the enhancement number before their name", () => {
      expect(
        get({ name: "Tanner", enhancement: 17, durability: 18 }).name
      ).toBe("[+17] Tanner");
      expect(get({ name: "Tanner", enhancement: 0, durability: 18 }).name).toBe(
        "Tanner"
      );
    });
  });
});
