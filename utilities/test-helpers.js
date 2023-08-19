module.exports = {
  normaliseObject: (value) => {
    if (value == undefined) {
      return;
    } else {
      let normalisedObject = { ...value };
      Object.keys(normalisedObject).forEach((key, index) => {
        if (typeof normalisedObject[key] === "number" && key == "imdb_rating") {
          normalisedObject[key] = normalisedObject[key].toFixed(1);
        }
        normalisedObject[key] = normalisedObject[key].toString();
      });
      return normalisedObject;
    }
  },
  normaliseArray: (array) => {
    const normalisedArray = array.map((item) =>
      module.exports.normaliseObject(item)
    );
    return normalisedArray;
  },
};
