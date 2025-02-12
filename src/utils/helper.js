export function sortAlphabetically(param, key = "name") {
  if (!Array.isArray(param)) {
    throw new Error("Param in sortAlphabetically function must be an array");
  }

  if (param.length === 0) return param; // Return the array as it is if it's empty

  return param.sort((a, b) => {
    let valueA, valueB;

    // Check if the first element of `param` is an object and has a 'name' property
    if (typeof param[0] === "object" && key in param[0]) {
      valueA = a[key].toUpperCase();
      valueB = b[key].toUpperCase();
    } else {
      valueA = String(a).toUpperCase();
      valueB = String(b).toUpperCase();
    }

    if (valueA < valueB) return -1; // Move "a" before "b"
    if (valueA > valueB) return 1; // Move "a" after "b"
    return 0; // order remains same
  });
}
