const fs = require("fs");
const path = require("path");
const utilities = require("../../utilities/test-helpers");

const unalteredFileContents = `-- Task: Get the title and runtime for all movies on Disney+ that have a runtime equal to or greater than the average runtime of movies on Disney+. --

-- Order the results by runtime in descending order, and only return/display the first 20 rows/results. --`;

describe("8 Average Subquery", () => {
  const jsonPath = path.join(__dirname, "..", "8-average-subquery.json");
  const queryPath = path.join(__dirname, "..", "8-average-subquery.sql");

  test("Query SQL file has been updated", () => {
    const query = fs.readFileSync(queryPath, { encoding: "utf8" });
    expect(query).not.toBe(unalteredFileContents);
  });

  test("Query returned all the rows", () => {
    let results = require(jsonPath);
    const normalised = utilities.normaliseArray(results);
    results = normalised;
    expect(results[0].title).toBe("Avengers: Endgame");
    expect(results[0].runtime).toBe("181");
    expect(results[1].title).toBe("The Sound of Music");
    expect(results[1].runtime).toBe("172");
    expect(results[2].title).toBe("Pirates of the Caribbean: At World's End");
    expect(results[2].runtime).toBe("169");
    expect(results[3].title).toBe("Star Wars: The Last Jedi");
    expect(results[3].runtime).toBe("152");
    expect(results[4].title).toBe(
      "Empire of Dreams: The Story of the Star Wars Trilogy"
    );
    expect(results[4].runtime).toBe("151");
    expect(results[5].title).toBe("Pirates of the Caribbean: Dead Man's Chest");
    expect(results[5].runtime).toBe("151");
    expect(results[6].title).toBe("The Chronicles of Narnia: Prince Caspian");
    expect(results[6].runtime).toBe("150");
    expect(results[7].title).toBe("Newsies: The Broadway Musical");
    expect(results[7].runtime).toBe("149");
    expect(results[8].title).toBe("Captain America: Civil War");
    expect(results[8].runtime).toBe("147");
    expect(results[9].title).toBe("The Avengers");
    expect(results[9].runtime).toBe("143");
    expect(results[10].title).toBe(
      "Pirates of the Caribbean: The Curse of the Black Pearl"
    );
    expect(results[10].runtime).toBe("143");
    expect(results[11].title).toBe(
      "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe"
    );
    expect(results[11].runtime).toBe("143");
    expect(results[12].title).toBe("Star Wars: The Rise of Skywalker");
    expect(results[12].runtime).toBe("142");
    expect(results[13].title).toBe(
      "Star Wars: Episode II - Attack of the Clones"
    );
    expect(results[13].runtime).toBe("142");
    expect(results[14].title).toBe("Avengers: Age of Ultron");
    expect(results[14].runtime).toBe("141");
    expect(results[15].title).toBe(
      "Star Wars: Episode III - Revenge of the Sith"
    );
    expect(results[15].runtime).toBe("140");
    expect(results[16].title).toBe("Robin Hood");
    expect(results[16].runtime).toBe("140");
    expect(results[17].title).toBe("Mary Poppins");
    expect(results[17].runtime).toBe("139");
    expect(results[18].title).toBe("Star Wars: The Force Awakens");
    expect(results[18].runtime).toBe("138");
    expect(results[19].title).toBe("Invincible");
    expect(results[19].runtime).toBe("137");
  });
});
