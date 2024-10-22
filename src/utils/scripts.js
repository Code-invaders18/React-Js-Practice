const transform = (i) => {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve(i % 2);
      },
      i % 2 === 0 ? 2000 : 1000
    );
  });

  // return i % 2;
};

export const run = async () => {
  const start = performance.now();
  const inputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const result = [];
  for (let i = 0; i < inputs.length; i++) {
    const response = await transform(inputs[i]);
    result.push(response);
  }
  console.log(result);
  // Output: [0, 1, 0, 1, ...]
  const end = performance.now();
  console.log(`Execution time ${end - start}`);
};
