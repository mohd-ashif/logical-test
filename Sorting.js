function customSort(n, a) {
    let first = [];
    let second = [];
    for (let i = 0; i < n; i++) {
      if (i < 4) {
        first.push(a[i]);
      } else {
        second.push(a[i]);
      }
    }
    first.sort((a, b) => a - b);
    second.sort((a, b) => b - a);
  
    return first.concat(second);
  }
  
  console.log(customSort(8, [3, 10, 67, 4, 90, 78, 45, 10]));

