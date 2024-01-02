let numbers = 122

let result = String(numbers).split('').reduce((acc , curr) => {
  return   acc+ Number(curr) 
},0)

console.log(result)


