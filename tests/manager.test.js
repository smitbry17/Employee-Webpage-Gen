const manager = require("../lib/manager");
const employee = require("../lib/employee");
const { default: test } = require("node:test");

test("Can set office number with constructor", () => {
  const testVal = 100;
  const a = new manager("example", 1, "example@example.com", testVal);
  expect(a.officeNumber).toBe(testVal);
});
test('getRole() should return "manager"', () => {
  const testVal = "manager";
  const a = new manager("example", 1, "example@example.com", testVal);
  expect(a.getRole()).toBe(testValue);
});
test("Can get office using getOffice()", () => {
  const testVal = 100;
  const a = new manager("example", 1, "example@example.com", testVal);
  expect(a.getOfficeNumber()).toBe(testVal);
});
