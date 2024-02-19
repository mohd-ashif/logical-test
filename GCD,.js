function Gcd(n, m){
    let dupe ="";

    for(let i =0 ; i<m; i++){
        if(m/i == n/i ){
            dupe += n
        }
    }
    console.log (dupe)
}
Gcd(12, 24)
