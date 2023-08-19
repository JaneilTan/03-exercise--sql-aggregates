const fs = require("fs");
const path = require("path");
const utilities = require("../../utilities/test-helpers");

describe("4 Max", () => {
  const jsonPath = path.join(__dirname, "..", "4-max.json");
  const queryPath = path.join(__dirname, "..", "4-max.sql");

  test("Query SQL file has been updated", () => {
    const query = fs.readFileSync(queryPath, { encoding: "utf8" });
    expect(query).not.toBe(`-- Task: Get the max runtime. --`);
  });

  test("Query returned all the rows", () => {
    const results = require(jsonPath);
    const normalised = utilities.normaliseObject(results[0]);
    results[0] = normalised;
    expect(results[0].max).toBe("1256");
  });
});
