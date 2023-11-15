function isAnagram(str1, str2) {
  const firstWord  = str1.split('').sort().join('');
  const secondWord = str2.split('').sort().join('');
return firstWord === secondWord;
}

console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hmllo', 'lehlo'));

