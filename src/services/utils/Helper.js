export function checkObjectInArray(obj, array, uniqueParam) {
  for (let i = 0; i < array.length; i++) {
    if (array[i][uniqueParam] === obj[uniqueParam]) {
      return true;
    }
  }
  return false;
}
