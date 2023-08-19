const fs = require("fs");
const path = require("path");
const utilities = require("../../utilities/test-helpers");

describe("1 Count", () => {
  const jsonPath = path.join(__dirname, "..", "1-count.json");
  const queryPath = path.join(__dirname, "..", "1-count.sql");

  test("Query SQL file has been updated", () => {
    const query = fs.readFileSync(queryPath, { encoding: "utf8" });
    expect(query).not.toBe(
      `-- Task: Count the number of movies using the COUNT aggregation function. --`
    );
  });

  test("Query returned all the rows", () => {
    let results = require(jsonPath);
    const normalised = utilities.normaliseObject(results[0]);
    results[0] = normalised;
    expect(results[0].count).toBe("16744");
  });
});
