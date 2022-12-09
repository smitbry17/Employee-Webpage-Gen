const intern = require("../lib/intern");

test("Can set school with constructor", () => {
  const testVal = "UCI";
  const a = new intern("example", 1, "example@example.com", testVal);
  expect(a.school).toBe(testVal);
});

test("getRole() should return \"intern\"", () => {
  const testVal = "Intern";
  const a = new intern("example", 1, "example@example.com", "UCI");
  expect(a.getRole()).toBe(testVal);
});

test("Can find school with getSchool()", () => {
  const testVal = "UCI";
  const a = new intern("example", 1, "example@example.com", testVal);
  expect(a.getSchool()).toBe(testVal);
});
