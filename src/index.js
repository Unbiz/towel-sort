
module.exports = function towelSort (matrix = []) {
    const result = matrix.map((line, i) => {
        if (i % 2 === 0) return line;
        return line.reverse();
    });
  return result.flat();
}
