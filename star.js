let n = 5 ;
let row = ' '

for (let  i =1 ; i< n ; i++){
    for (let j =1 ; j< n-1 ; j++){

        if (i ==1 || j ==1 || i ==n || j == n-i){

            row +='*'
        }else {
            row =+ " "
    }
    row +="\n"
}


}
console.log(row);
