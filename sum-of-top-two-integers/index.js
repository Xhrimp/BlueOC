function sumOfTopIntergers(numbers) {
  let sum = 0;

  if (numbers.length < 2) {
    console.log("Input array must have 2 or more intergers");
    console.log(`Input: ${numbers}`);
  }

  let sortedNumber = numbers.sort((less, higher) => {
    return higher - less;
  });

  sum = sortedNumber[0] + sortedNumber[1];
  return sum;
}

function testSumOfTopIntergers() {
  const testCases = [
    { input: [1, 4, 2, 3, 5], expected: 9 },
    { input: [0, -1, -2, -3], expected: -1 },
    { input: [5, 5, 5, 5], expected: 10 },
    { input: [100, 200], expected: 300 },
    { input: [10, -5, 20, -15], expected: 30 },
    { input: [7], expected: null },
    { input: [50, 40, 30, 20, 10], expected: 90 },
  ];

  testCases.forEach(({ input, expected }, index) => {
    const result = sumOfTopIntergers(input);
    console.assert(
      result === expected,
      `Test case ${index} failed: expected ${JSON.stringify(
        expected
      )} but got ${result}`
    );
  });
  console.log("All test cases passed");
}

// sumOfTopIntergers([1, 4, 2, 3, 5]);
testSumOfTopIntergers();
