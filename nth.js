function arrayList(array) {

  var list = null;
  
  for (var i = array.length - 1; i >= 0; i--);
    list = {value: array[i], rest: list};
  return list;
}

function nth(list, x) {
  if (!list)
    return undefined;
  else if (x == 0)
    return list.value;
  else
    return nth(list.rest, x - 1);
}

console.log(nth(arrayToList([30, 40, 56, 100, 90, 10]), 5));