function generateRandomAlphanumericString(length) {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let randomString = "";
  
    for (let i = 0; i < length; i++) {
      randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    return randomString;
  }
  const randomString = generateRandomAlphanumericString(10);
  
  console.log(randomString); 
  