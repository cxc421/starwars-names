import { expect } from "chai";
import starWarsNames from "./index";

describe("starwars-names", () => {
  describe("all", () => {
    it("should be an array of string", () => {
      expect(starWarsNames.all).to.satisfies(isArrayOfString);

      function isArrayOfString(array) {
        return array.every(item => typeof item === "string");
      }
    });

    it("should contain `Like Skywalker`", () => {
      expect(starWarsNames.all).to.include("Luke Skywalker");
    });
  });

  describe("random", () => {
    it("should return a random item from the starWarsNames.all", () => {
      const randomItem = starWarsNames.random();
      expect(starWarsNames.all).to.include(randomItem);
    });

    it("should return an array of random items if passed a number", () => {
      const randomItems = starWarsNames.random(3);

      expect(randomItems).to.have.length(3);
      randomItems.forEach(item => {
        expect(starWarsNames.all).to.include(item);
      });
    });
  });
});
