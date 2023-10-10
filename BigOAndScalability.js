const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(100000).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + "ms");
}

// O(n) --> Linear Time
findNemo(large); 

boxes = ['Samsung', 'iPhone', 'Xiaomi']

function compressFirstBox(boxes) {
  console.log(boxes[0])
}

// O(1) --> Constant Time
compressFirstBox(boxes)

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]) // O(1)
  console.log(boxes[1]) // O(1)
}

logFirstTwoBoxes(boxes) // O(2) --> Constant Time
