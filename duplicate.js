function hasDuplicates(a) {
    let n = a.length;
  
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if (a[i] === a[j]) {
          console.log('true');
          return true;
        }
      }
    }
  
    console.log('false');
    return false; 
  }
  
(hasDuplicates([1, 2, 3,1])); 
  

// function duplicates(a) {
//     let n = 4
       
  
  
//     for (let i = 0; i < n; i++) {
        
//             if (a[i] == a[i+3]) {
               
//                 console.log("true")
            
              
//             } else{
//                 console.log("false")
//                 }

        
//        break
//     } 

// }

// duplicates( [1, 2, 3, 1])


