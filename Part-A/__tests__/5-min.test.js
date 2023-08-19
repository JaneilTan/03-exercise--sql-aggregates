const fs = require("fs");
const path = require("path");
const utilities = require("../../utilities/test-helpers");

describe("5 Min", () => {
  const jsonPath = path.join(__dirname, "..", "5-min.json");
  const queryPath = path.join(__dirname, "..", "5-min.sql");

  test("Query SQL file has been updated", () => {
    const query = fs.readFileSync(queryPath, { encoding: "utf8" });
    expect(query).not.toBe(`-- Task: Get min runtime of 'Comedy' movies. --`);
  });

  test("Query returned all the rows", () => {
    const results = require(jsonPath);
    const normalised = utilities.normaliseObject(results[0]);
    results[0] = normalised;
    expect(results[0].min).toBe("2");
  });
});
