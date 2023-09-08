function areAnagrams(str1, str2) {
    // Remove whitespace and convert both strings to lowercase
    str1 = str1.replace(/\s/g, '').toLowerCase();
    str2 = str2.replace(/\s/g, '').toLowerCase();
  
    // Check if the lengths of the strings are different
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Sort the characters in both strings and compare them
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  // Example usage:
  const string1 = "listen";
  const string2 = "silent";
  
  if (areAnagrams(string1, string2)) {
    console.log(`${string1} and ${string2} are anagrams.`);
  } else {
    console.log(`${string1} and ${string2} are not anagrams.`);
  }
  