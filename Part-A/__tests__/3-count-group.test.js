const fs = require("fs");
const path = require("path");
const utilities = require("../../utilities/test-helpers");

const unalteredFileContents = `-- Task:  Use the COUNT function to count the number of movies for each IMDB rating. So, the query results should have a column of IMDB ratings and a "count" column. The IMDB rating column should list all the different IMDB ratings, for example, 5.0, 5.1, 5.2, 5.3, 5.4, 5.5, and so on, the corresponding count column cell should have the number of movies with that rating.
--       
--        Example
--        | imdb_rating | count |
--        | ----------- | ----- |
--        | 1           | 2     |
--        | 1.3         | 1     |
--        | 1.4         | 4     |
--        | 1.5         | 2     |
--        | 1.6         | 10    |
--        
-- Order the results by IMDB rating in ascending order, and only get the First 10 rows/results. --`;

describe("3 Count Group", () => {
  const jsonPath = path.join(__dirname, "..", "3-count-group.json");
  const queryPath = path.join(__dirname, "..", "3-count-group.sql");

  test("Query SQL file has been updated", () => {
    const query = fs.readFileSync(queryPath, { encoding: "utf8" });
    expect(query).not.toBe(unalteredFileContents);
  });

  test("Query returned all the rows", () => {
    let results = require(jsonPath);
    const normalised = utilities.normaliseArray(results);
    results = normalised;
    expect(results[0].imdb_rating).toBe("1.0");
    expect(results[0].count).toBe("2");
    expect(results[1].imdb_rating).toBe("1.3");
    expect(results[1].count).toBe("1");
    expect(results[2].imdb_rating).toBe("1.4");
    expect(results[2].count).toBe("4");
    expect(results[3].imdb_rating).toBe("1.5");
    expect(results[3].count).toBe("2");
    expect(results[4].imdb_rating).toBe("1.6");
    expect(results[4].count).toBe("10");
    expect(results[5].imdb_rating).toBe("1.7");
    expect(results[5].count).toBe("8");
    expect(results[6].imdb_rating).toBe("1.8");
    expect(results[6].count).toBe("8");
    expect(results[7].imdb_rating).toBe("1.9");
    expect(results[7].count).toBe("9");
    expect(results[8].imdb_rating).toBe("2.0");
    expect(results[8].count).toBe("19");
    expect(results[9].imdb_rating).toBe("2.1");
    expect(results[9].count).toBe("31");
  });
});
