function validateCreditCard(cc) {
  const ccIntOnly = cc.replace(/-/g, "");
  const errors = [
    "There are not 16 digits",
    "Not all digits are numbers",
    "All the digits cannot be the same",
    "The final digit must be even",
    "Digits sum is less than 16",
  ];
  const functions = [
    ccIntOnly.length === 16,
    checkIfAllNumbers(ccIntOnly),
    checkSameDigits(ccIntOnly),
    checkFinalDigit(ccIntOnly),
    checkSumDigits(ccIntOnly),
  ];
  const validation = functions.indexOf(false);
  let response = {
    valid: validation === -1 ? true : false,
    number: ccIntOnly,
  };
  validation === -1 ? null : (response.error = errors[validation]);
  return response;
}

function checkIfAllNumbers(cc) {
  const numbers = "0123456789";
  for (let i = 0; i < cc.length; i++) {
    if (!numbers.includes(cc[i])) return false;
  }
  return true;
}

function checkSameDigits(cc) {
  const numbers = "0123456789";
  for (let i = 0; i < numbers.length; i++) {
    let counter = 0;
    for (let j = 0; j < cc.length; j++) {
      if (cc[j] === numbers[i]) counter++;
    }
    if (counter === 16) return false;
  }
  return true;
}

function checkSameDigits2(cc) {
  for (let i = 0; i < cc.length - 1; i++) {
    if (cc[i] !== cc[i + 1]) return true;
  }
  return false;
}

function checkFinalDigit(cc) {
  if (cc[cc.length - 1] % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function checkSumDigits(cc) {
  let total = 0;
  for (let i = 0; i < cc.length; i++) {
    total += Number(cc[i]);
  }
  if (total >= 16) {
    return true;
  } else {
    return false;
  }
}

console.clear();
console.log(validateCreditCard("9999-7777-8888-0000"));
console.log(validateCreditCard("6666-6666-6666-1666"));
console.log(validateCreditCard("a923-3211-9c01-1112"));
console.log(validateCreditCard("4444-4444-4444-4444"));
console.log(validateCreditCard("1211-1111-1111-1112"));
