let n= 5;
let row =""

for(let i =0 ; i< n ; i++){

    for(let j=0; j< n-i ; j++){
        row += " "
    }
    for(let k=0; k < i;k++){
        row+="*"
    }
    
    row+="\n"
}

console.log(row)