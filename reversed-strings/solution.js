function solution( str ) {
  let stringArr = str.split( '' );
  let newArray = [];
  while ( stringArr.length > 0 ) {
    let currentElem = stringArr.pop();
    newArray.push( currentElem );
  }
  return newArray.join( '' );
}