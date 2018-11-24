const randomNumberInRange = (min, max) => Math.round(Math.random() * (max - min) + min);
const remove = (array, index) => [...array.slice(0, index), ...array.slice(index + 1)];

/*
    Creates a random permutation with pairs out of the input array
*/
function createPairs(seedArray) {
  if (!Array.isArray(seedArray)) {
    throw new Error("must be array");
  }

  if (seedArray.length < 2) {
    throw new Error("must have atleast two elements");
  }

  const pairs = [];
  const numberOfPairs = seedArray.length;
  let headIndex = randomNumberInRange(0, seedArray.length - 1);

  for (let index = 0; index < numberOfPairs; index++) {
    const headElem = seedArray[headIndex];
    seedArray = remove(seedArray, headIndex);
    const tailIndex = randomNumberInRange(0, seedArray.length - 1);
    const tailElem = index === numberOfPairs - 1 ? pairs[0][0] : seedArray[tailIndex];

    pairs.push([headElem, tailElem]);
    headIndex = tailIndex;
  }

  return pairs;
}

module.exports = createPairs;
