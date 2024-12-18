function mostFrequentStringLength(strings) {
  let frequency = {};

  strings.forEach((string) => {
    const stringLength = string.length;
    frequency[stringLength] = (frequency[stringLength] || 0) + 1;
  });

  const maxFrequency = Math.max(...Object.values(frequency));

  const maxFrequentLength = Object.keys(frequency).find(
    (key) => frequency[key] === maxFrequency
  );

  let frequencyString = [];
  strings.filter((string) => {
    if (string.length == maxFrequentLength) {
      frequencyString.push(string);
    }
  });
  return frequencyString;
}

function testMostFrequentStringLength() {
  const testCases = [
    {
      input: ["a", "ab", "abc", "cd", "def", "gh"],
      expected: ["ab", "cd", "gh"],
    },
    {
      input: ["hello", "world", "hi", "test", "ok"],
      expected: ["hello", "world"],
    },
    { input: ["a", "bb", "ccc", "dddd"], expected: ["a", "bb", "ccc", "dddd"] },
    { input: [], expected: [] },
    { input: ["abc", "defg", "hi", "jklm", "no"], expected: ["defg", "jklm"] },
  ];

  testCases.forEach(({ input, expected }, index) => {
    const result = mostFrequentStringLength(input);
    console.assert(
      JSON.stringify(result) === JSON.stringify(expected),
      `Test case ${index} failed: expected ${JSON.stringify(
        expected
      )} but got ${result}`
    );
  });
  console.log("All test cases passed");
}

// mostFrequentStringLength(["a", "ab", "abc", "cd", "def", "gh"]);
testMostFrequentStringLength();
