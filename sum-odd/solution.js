function cubeOdd(arr) {
  if (arr.every(x => (typeof x === 'number'))){
    var res = arr.map( x => Math.pow(x, 3));
    var filtered = res.filter( x => x%2!==0);
    if(filtered.length > 0){
      var final = filtered.reduce( (sum, value) => sum + value );
      return final;
    }
    else { return 0 };
  }
  else{
    return undefined;
  }
}