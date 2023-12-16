const n = 5;
 let count = '';

for(let i =1;i<= n ; i++){
 
  for(let j = 1 ;j <=n -i ;j++ ){
    count += ' ';
  }
  for(let k = 1;k <= 2*i-1; k++){
    count +='*'
  }
  count+='\n'
}
for(let i =n; i >= 1 ;i--){

  for(let j = 1;j<= n -i;j++){
   count +=' '
  }
  for(let k =1;k <=2*i-1; k++){
    count+= "*"
    
  }
 count+= '\n'
}
 console.log(count)

 