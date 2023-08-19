const fs = require("fs");
const path = require("path");
const utilities = require("../../utilities/test-helpers");

describe("7 Average", () => {
  const jsonPath = path.join(__dirname, "..", "7-average.json");
  const queryPath = path.join(__dirname, "..", "7-average.sql");

  test("Query SQL file has been updated", () => {
    const query = fs.readFileSync(queryPath, { encoding: "utf8" });
    expect(query).not.toBe(
      `-- Task: Get the average Rotten Tomatoes rating for all movies. --`
    );
  });

  test("Query returned all the rows", () => {
    const results = require(jsonPath);
    const normalised = utilities.normaliseObject(results[0]);
    results[0] = normalised;
    expect(results[0].avg).toBe("65.42846064366033");
  });
});
