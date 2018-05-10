function insertDash( number ) {
  let newArr = number.toString().split( '' );
  for ( let i = 0; i < newArr.length; i++ ) {
    if ( newArr[ i ] % 2 === 1 && newArr[ i + 1 ] % 2 === 1 ) {
      newArr.splice( ( i + 1 ), 0, '-' );
    }
  }
  newArr = newArr.join( '' );
  return newArr;
}