const fs = require("fs");
const path = require("path");
const utilities = require("../../utilities/test-helpers");

describe("2 Count Where", () => {
  const jsonPath = path.join(__dirname, "..", "2-count-where.json");
  const queryPath = path.join(__dirname, "..", "2-count-where.sql");

  test("Query SQL file has been updated", () => {
    const query = fs.readFileSync(queryPath, { encoding: "utf8" });
    expect(query).not.toBe(
      `-- Task: Count the number of movies on Netflix. --`
    );
  });

  test("Query returned all the rows", () => {
    const results = require(jsonPath);
    const normalised = utilities.normaliseObject(results[0]);
    results[0] = normalised;
    expect(results[0].count).toBe("3560");
  });
});
