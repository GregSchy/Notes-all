function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// Test cases
console.log(isPalindrome("racecar")); // Should output true
console.log(isPalindrome("hello")); // Should output false
