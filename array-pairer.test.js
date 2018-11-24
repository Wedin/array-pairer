const createPairs = require("./array-pairer");

it("Handles boundaries", () => {
  expect(() => {
    return createPairs([]);
  }).toThrowError("must have atleast two elements");

  expect(() => {
    return createPairs([1]);
  }).toThrowError("must have atleast two elements");

  expect(() => {
    return createPairs("asdf");
  }).toThrowError("must be array");
});

describe("Generates pairs", () => {
  const pairs = createPairs(["lo", "re", "m ", "ip", "sum"]);

  it("Generates correct amount of pair", () => {
    expect(pairs).toHaveLength(5);
  });

  it("Each element exist in each pair", () => {});
  const firstInPair = pairs.map(p => p[0]);
  const lastInPair = pairs.map(p => p[1]);

  expect(firstInPair).toEqual(expect.arrayContaining(["lo", "re", "m ", "ip", "sum"]));
  expect(lastInPair).toEqual(expect.arrayContaining(["lo", "re", "m ", "ip", "sum"]));
});

describe("Generates pairs from even", () => {
  const seedArray = [111, 222, 333, 444, 555, 666];
  const pairs = createPairs(seedArray);

  it("Generates correct amount of pair", () => {
    expect(pairs).toHaveLength(pairs.length);
  });

  it("Each element exist in each pair", () => {});
  const firstInPair = pairs.map(p => p[0]);
  const lastInPair = pairs.map(p => p[1]);

  expect(firstInPair).toEqual(expect.arrayContaining(seedArray));
  expect(lastInPair).toEqual(expect.arrayContaining(seedArray));
});

describe("Handles duplicated", () => {
  const seedArray = [111, 222, 111, 222];
  const pairs = createPairs(seedArray);

  it("Generates correct amount of pair", () => {
    expect(pairs).toHaveLength(seedArray.length);
  });

  it("Each element exist in each pair", () => {});
  const firstInPair = pairs.map(p => p[0]);
  const lastInPair = pairs.map(p => p[1]);

  expect(firstInPair).toEqual(expect.arrayContaining(seedArray));
  expect(lastInPair).toEqual(expect.arrayContaining(seedArray));
});
