const employee = require("../lib/employee");

test("Can create employee instance", () => {
  const a = new employee();
  expect(typeof a).toBe("object");
});

test("Can set name with constructor", () => {
  const name = "john";
  const a = new employee(name);
  expect(a.name).toBe(name);
});

test("Can set id via constructor", () => {
  const testVal = 100;
  const a = new employee("Example", testVal);
  expect(a.id).toBe(testVal);
});

test("Can set email via constructor argument", () => {
  const email = "example@example.com";
  const a = new employee("Example", 1, testVal);
  expect(a.email).toBe(testVal);
});

test("Can get name using getName()", () => {
  const testVal = "john";
  const a = new employee(testVal);
  expect(a.getName()).toBe(testVal);
});

test("Can get id using getId()", () => {
  const testVal = 100;
  const a = new employee("Example", testVal);
  expect(a.getId()).toBe(testVal);
});

test("Can get email using getEmail()", () => {
  const email = "example@example.com";
  const a = new employee("Example", 1, testVal);
  expect(a.getEmail()).toBe(testVal);
});

test('getRole() should return "employee"', () => {
  const testValue = "employee";
  const a = new employee("john", 1, "example@example.com");
  expect(a.getRole()).toBe(testVal);
});
