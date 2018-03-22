function insertDash(num) {
  let result = '';
  let a = num.toString();
  for (let i = 0; i < a.length; i++){
    let first = a.substr(i,1);
    let second = a.substr(i+1, 1);
    if(isOdd(parseInt(first)) && isOdd(parseInt(second))){
      result = result + first + '-';
    }else{ 
      result = result + first;
    }
  }
  return result;
}

function isOdd(n) {
  return Math.abs(n % 2) == 1;
}
