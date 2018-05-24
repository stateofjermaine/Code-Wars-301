function toCamelCase( str ) {
  let newArray = str.includes( '-' ) ? str.split( '-' ) : str.split( '_' );
  let result = [ newArray[ 0 ] ];
  for ( let i = 1; i < newArray.length; i++ ) {
    result.push( newArray[ i ].substring( 0, 1 ).toUpperCase() );
    result.push( newArray[ i ].substring( 1 ).toLowerCase() );
  }
  return result.join( '' );
}