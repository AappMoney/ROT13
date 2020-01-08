function rot13(str) {
  return str.replace(/[A-Z]/g, L => 
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
    )
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC")); // FREE CODE CAMP

// /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

function rot13(str) {
  var newArr = [];
  for(let i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    if(char < 65 || char > 90) {
      newArr.push(str[i]);
    }else if(char < 78) {
      newArr.push(String.fromCharCode(char + 13))
    }else {
      newArr.push(String.fromCharCode(char -13))
    }
  }
  return newArr.join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC")); /// FREE CODE CAMP

