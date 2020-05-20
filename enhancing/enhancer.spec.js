const { succeed, fail, repair, get } = require("./enhancer");

let item = {
  name: "Tanner",
  enhancement: 5,
  durability: 15,
};

describe("method testing", () => {
  describe("repair()", () => {
    it("should restore the durability back to 100", () => {
      expect(repair(item).durability).toBe(100);
    });
  });
});
