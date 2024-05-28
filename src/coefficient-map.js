const boyChildCoefficientMap = (age) => {
  switch (age) {
    case 5:
      return { a: 0.386, b: 23.699 };
    case 6:
      return { a: 0.461, b: 32.382 };
    case 7:
      return { a: 0.513, b: 38.878 };
    case 8:
      return { a: 0.592, b: 48.804 };
    case 9:
      return { a: 0.687, b: 61.39 };
    case 10:
      return { a: 0.752, b: 70.461 };
    case 11:
      return { a: 0.782, b: 75.106 };
    case 12:
      return { a: 0.783, b: 75.642 };
    case 13:
      return { a: 0.815, b: 81.348 };
    case 14:
      return { a: 0.832, b: 83.695 };
    case 15:
      return { a: 0.766, b: 70.989 };
    case 16:
      return { a: 0.656, b: 51.822 };
    case 17:
      return { a: 0.672, b: 53.642 };
  }
};
const girlChildCoefficientMap = (age) => {
  switch (age) {
    case 5:
      return { a: 0.377, b: 22.75 };
    case 6:
      return { a: 0.458, b: 32.079 };
    case 7:
      return { a: 0.508, b: 38.367 };
    case 8:
      return { a: 0.561, b: 45.006 };
    case 9:
      return { a: 0.652, b: 56.992 };
    case 10:
      return { a: 0.73, b: 68.091 };
    case 11:
      return { a: 0.803, b: 78.846 };
    case 12:
      return { a: 0.796, b: 76.934 };
    case 13:
      return { a: 0.655, b: 54.234 };
    case 14:
      return { a: 0.594, b: 43.264 };
    case 15:
      return { a: 0.56, b: 37.002 };
    case 16:
      return { a: 0.578, b: 39.057 };
    case 17:
      return { a: 0.598, b: 42.339 };
  }
};
const childCoefficientMap = (gender, age) => {
  switch (gender) {
    case "man":
      return boyChildCoefficientMap(age);
    case "woman":
      return girlChildCoefficientMap(age);
  }
};

export { childCoefficientMap };
