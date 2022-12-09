const manager = require("../lib/manager");
const employee = require("../lib/employee");

test("Can set office number with constructor", () => {
  const testVal = 100;
  const a = new manager("example", 1, "example@example.com", testVal);
  expect(a.officeNumber).toBe(testVal);
});
test('getRole() should return "Manager"', () => {
  const testVal = "Manager";
  const a = new manager("example", 1, "example@example.com", testVal);
  expect(a.getRole()).toBe(testVal);
});
test("Can get office using getOffice()", () => {
  const testVal = 100;
  const a = new manager("example", 1, "example@example.com", testVal);
  expect(a.getOfficeNumber()).toBe(testVal);
});
