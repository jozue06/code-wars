function abbrevName(name){

  let array1 = name.split(' ');
  return `${array1[0].charAt(0).toUpperCase()}.${array1[1].charAt(0).toUpperCase()}`;
}