const { succeed, fail, repair, get } = require("./enhancer");

let item = {
  name: "Tanner",
  enhancement: 18,
  durability: 18,
};

describe("method testing", () => {
  describe("repair()", () => {
    it("should restore the durability back to 100", () => {
      expect(repair(item).durability).toBe(100);
    });
  });
  describe("succeed()", () => {
    it("should increase enhancement by 1 if its not at 20", () => {
      expect(succeed(item).enhancement).toBe(19);
    });
  });
  describe("fail()", () => {
    it("if enhancement is more than 15 decrease durability by 10 but if the enhancement is more than 16 decrease durability by 10 and decrease enhancement by 1. If enhancement is less than 15 decrease durability by 5.", () => {
      expect(fail(item).enhancement).toBe(17);
    });
  });
  describe("get()", () => {
    it("if enhancement is greater than 0 add the enhancement number before their name", () => {
      expect(get(item).name).toBe("[+18] Tanner");
    });
  });
});
