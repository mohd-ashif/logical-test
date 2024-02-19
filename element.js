
function majorityElement(arr) {
    let n = 3;
    for (let i = 0; i < n; i++) {
      let count = 1;
      for (let j = i + 1; j < n; j++) {
        if (arr[i] === arr[j]) {
          count++;
        }
      }
      if (count > n /2) {
        console.log(arr[i]);
      }
    }
  }

  majorityElement([2,1,2]);
  