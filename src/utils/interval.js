const waitFor = (i) => {
  return new Promise((resolve) => {
    // resolve();
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

export const run = async () => {
  const start = performance.now();

  const end = performance.now();
  console.log(`Execution time ${end - start}`);
};
