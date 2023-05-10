// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  function caesar(input, shift, encode = true) {
    //checking for invalid shift values, manipulating input into workable data
    if (shift === 0 || shift > 25 || shift < -25) return false;
    const fixedInput = input.toLowerCase().split("")

    const translated = fixedInput.map((letter)=> {
      if (!alphabet.includes(letter)) return letter; 

    let numIndexValue = alphabet.findIndex((index)=> index === letter) 
    let finalValue = numIndexValue 
    
    //checking to encode or decode
      if (encode) {
        finalValue += shift
      } else {
        finalValue -= shift
      }

      // % operator will go to the beginning of the array in larger numbers
      if (finalValue >= 0) {
        return alphabet[finalValue % alphabet.length]
      } else if (finalValue < 0) {
        let tempFindIndex = alphabet.length + (finalValue  % alphabet.length)
        return alphabet[tempFindIndex]
      }
      
    })
    return translated.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
