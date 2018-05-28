function capitalize( str, arr ) {
  let splitArr = str.split( '' );
  for ( let i = 0; i < splitArr.length; i++ ) {
    for ( let j = 0; j < arr.length; j++ ) {
      if ( i === arr[ j ] ) {
        splitArr[ i ] = splitArr[ i ].toUpperCase();
      }
    }
  }
  return splitArr.join( '' );
};