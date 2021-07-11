//! 8 kyu
//? Convert number to reversed array of digits

function digitize(n) {
 return n.toString().split('').reverse().map( x => Number(x)) 
}

//! 8 kyu
//? Geometry Basics: Distance between points in 2D

function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow(a.x-b.x, 2) + Math.pow(a.y - b.y, 2));
}

//! 8 kyu
//? Remove First and Last Character

function removeChar(str){
 return str.substring(1, str.length-1)
};

//! 7 kyu
//? Complementary DNA

function DNAStrand(dna){
    let dnaOutput = "";
    for(let i = 0; i <= dna.length-1; i++){
        switch(dna[i]) {
            case 'A':
            dnaOutput = dnaOutput.concat('', 'T')
            break;
            case 'T':
            dnaOutput = dnaOutput.concat('', 'A')
            break;
            case 'G':
            dnaOutput = dnaOutput.concat('', 'C')
            break;
            case 'C':
            dnaOutput = dnaOutput.concat('', 'G')
            break;
        }
        
    }
    return dnaOutput;
}

//! 8 kyu
//? Get the mean of an array

function getAverage(marks){
 marks.length 
  let sum = 0;  
  for(let i = 0; i <= marks.length-1; i++){
  sum = marks[i] + sum
  }
  let medium = Math.floor(sum / marks.length);
  return medium;
}

//! 8 kyu
//? Find the first non-consecutive number

function firstNonConsecutive (arr) {
 if (arr === [] || arr.length === 1){
   return null;
  }
  for(let i = 1; i <= arr.length-1; i++){
    if(arr[i] != arr[i-1]+1){
      return arr[i];
    }
  }
  return null;
}

//! 8 kyu
//? Sum The Strings

function sumStr(a,b) {
   if (a>0 && b>0) return (parseInt(a)+parseInt(b)).toString()
  else if (a == "" && b == ""){
    return "0";
  } 
  else if (a==""){
    return b;
  } else if (b=="") {
    return a;
  } 
}

//! 8 kyu
//? Return Negative

function makeNegative(num) {
  return (Math.abs(num))* -1;
}

//! 8 kyu
//? Returning Strings

function greet(name){
  return "Hello, " + name + " how are you doing today?"
}

//! 8 kyu
//? Reversed Words

function reverseWords(str){
  return (str.split(" ").reverse()).join(" ");
}

//! 8 kyu
//? Calculate BMI

function bmi(weight, height) {
  let result = weight/Math.pow(height,2) 
  if(result <= 18.5) {
    return "Underweight";
  } else if(result <= 25.0){
    return "Normal";
  } else if(result <= 30.0){
    return "Overweight";
  } else if( result > 30) {
    return "Obese";
  }
}

//! 8 kyu
//? MakeUpperCase

function makeUpperCase(str) {
 return  str.toUpperCase();
}

//! 8 kyu
//? Opposites Attract

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

//! 8 kyu
//? Multiply

function multiply(a, b){
  a * b
  return a * b
};

