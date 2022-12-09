const engineer = require("../lib/engineer");

test("Can set Github account with constructor", () => {
    const testVal = "GitUser";
    const a = new engineer("example", 1, "example@example.com", testVal);
    expect(a.github).toBe(testVal);
});

test("getRole() returns \"engineer\"", () => {
    const testVal = "engineer";
    const a = new engineer("example", 1, "example@example.com", testVal);
    expect(a.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGitHub()", () => {
    const testVal = "GitUser";
    const a = new engineer("example", 1, "example@example.com", testVal);
    expect(a.getGitHub()).toBe(testVal);
});