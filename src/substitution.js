// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const normalAlphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

  function substitution(input, alphabet = "", encode = true) {
    const splitInput = input.split("")
    if (alphabet.length !== 26) return false
    if (alphabet === "") return false
    
    const dupeChecker = []
    const alphabetSplit = alphabet.split("")

    alphabetSplit.map((letter)=> {
      const filterLengthCheck = alphabetSplit.filter((char)=> char === letter)
      if (filterLengthCheck.length > 1) dupeChecker.push("spy!")
    })
    if (dupeChecker.length > 1) return false
    
    if (encode) {
      const translatedLetters = splitInput.map((letter)=> {
        if (letter === " ") return letter
        for (let i = 0; i < normalAlphabet.length; i++) {
          if (letter === normalAlphabet[i]) return alphabet[i]
        }
    })
      return translatedLetters.join("")
          //DECODING
    } else {
      const translatedLetters = splitInput.map((letter)=> {
        if (letter === " ") return letter
        for (let i =0; i < alphabet.length; i++) {
          if (letter === alphabet[i]) return normalAlphabet[i]
          
        }
      })
      return translatedLetters.join("")
    }
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
