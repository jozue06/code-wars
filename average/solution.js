function find_average(array) {
  const sum = array.reduce((acc, curr) => (acc + curr));
  return sum/array.length;
 }