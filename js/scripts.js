// UTILITY LOGIC




// BUSINESS LOGIC
function ccValidator(number) {
  if ((isNaN(number)) || number < 0) {
    return false;
  }
  const ccNum = number.split("");
  //console.log("ccNum: "+ ccNum); //should print our int array
  const vmNumbers = [4, 5, 6];
  const amExNumbers = [34, 37];
  let firstNumResult = false;
  vmNumbers.forEach (function(startNum){
    //console.log("startNum: " + startNum + " ccNum[0]: " + ccNum[0] + " ccNum[0].typeOf: " + typeof(ccNum[0]));
    if (startNum === parseInt(ccNum[0])) {
      firstNumResult = true;
    }
  })

  amExNumbers.forEach (function(startNum){
    //console.log("startNum: " + startNum + " ccNum[0]: " + ccNum[0] + " ccNum[0].typeOf: " + typeof(ccNum[0]));
    let firstTwoChar = ccNum[0] + ccNum[1];
    firstTwoChar = parseInt(firstTwoChar);
    console.log("firstTwoChar: " + firstTwoChar + " typeof(firstTwoChar): " + typeof(firstTwoChar));
    if (startNum === firstTwoChar) {
      firstNumResult = true;
    }
  })

  console.log(firstNumResult);

  // vmNumbers.forEach(function(startNum){
  //   console.log("startNum: " + startNum + " number.charAt: " + number.charAt(0));
  //   if (startNum === (parseInt(number.charAt(0)))) {
  //     return true;  
  //   }
  // })

  

  //const ccNum = parseInt(number);

}



function fnName (parameter) {

  return result;
}


// UI LOGIC