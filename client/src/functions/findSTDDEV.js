import findAverage from "./findAverage";

const findSTDDEV = arr => {
  const average = findAverage(arr);
  let sum = 0;
  for (let num of arr) {
    sum += Math.pow(num - average, 2) / arr.length;
  }
  return Math.sqrt(sum);
};

export default findSTDDEV;
