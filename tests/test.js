const test = require("node:test");
const assert = require("node:assert");
const { isValidTask } = require("../script");

test("valid task should be accepted", () => {
    assert.strictEqual(isValidTask("Complete assignment"), true);
});

test("empty task should be rejected", () => {
    assert.strictEqual(isValidTask(""), false);
});