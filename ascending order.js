function sortByKey(array, key) {
    const sortedArray = array.sort((a, b) => {
      return a[key] - b[key];
    });
  
    return sortedArray;
  }
  const array = [{ name: "John", age: 30 }, { name: "Jane", age: 20 }, { name: "Peter", age: 10 }];
  
  const sortedArray = sortByKey(array, "age");
  
  console.log(sortedArray);