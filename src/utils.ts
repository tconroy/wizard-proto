export const sleep = async (ms: number, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(undefined);
      } else {
        resolve(undefined);
      }
    }, ms);
  });
};
