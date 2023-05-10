// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusSquareValues = {"a": "11", "b": "21", "c": "31", "d": "41", "e": "51", "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52", "l": "13", "m": "23", "n": "33", "o": "43", "p": "53", "q": "14", "r": "24", "s": "34", "t": "44", "u": "54", "v": "15", "w": "25", "x": "35", "y": "45", "z": "55" }

  function polybius(input, encode = true) {
    //encode
    if (encode) {
    const fixedInput = input.toLowerCase().split("")
    let translated = fixedInput.map((letter)=> {
      if (letter === " ") return letter
      if (letter === "i" || letter === "j") return "42"
      if (!(letter in polybiusSquareValues)) return letter; 
      return polybiusSquareValues[letter]
    })

    return translated.join("")
    //decode
    } else {
      const fixedInput = input.split(" ") || []
      const oddLength = false
      const pairs = []
      const inputCheckingOdds = fixedInput.join("")
      if (inputCheckingOdds.length % 2 !== 0) return false;
      // console.log("26")
      fixedInput.map((element)=> {
        pairs.push(" ")
        for (let i = 0; i < element.length; i += 2) {
          const pair = element.slice(i, i+2)
          if (pair.length === 1) oddLength = true
          pairs.push(pair)
          //console.log(pairs)
        }
      })
      pairs.shift()
      console.log("37")
      const translatedArray = pairs.map((element)=> {
        // console.log(element)
        if (element === " ") return " "
        if (element === "42") return "(i/j)"
        const translatedLetter = Object.entries(polybiusSquareValues).find(([key, value]) => value === element)
        //console.log(translatedLetter)
        if (translatedLetter) return translatedLetter[0]
        
      })
      
     const translatedString = translatedArray.join("")
     //console.log(translatedString)
     console.log("Odd Length: ", oddLength)
     return translatedString
     
  }
}

  return {
    polybius,
  };
})();



module.exports = { polybius: polybiusModule.polybius };
