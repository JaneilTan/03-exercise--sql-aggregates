const fs = require("fs");
const path = require("path");
const utilities = require("../../utilities/test-helpers");

describe("6 Sum", () => {
  const jsonPath = path.join(__dirname, "..", "6-sum.json");
  const queryPath = path.join(__dirname, "..", "6-sum.sql");

  test("Query SQL file has been updated", () => {
    const query = fs.readFileSync(queryPath, { encoding: "utf8" });
    expect(query).not.toBe(
      `-- Task: Get the total runtime of all movies on Hulu! --`
    );
  });

  test("Query returned all the rows", () => {
    const results = require(jsonPath);
    const normalised = utilities.normaliseObject(results[0]);
    results[0] = normalised;
    expect(results[0].sum).toBe("86196");
  });
});
