function abbrev( str ) {
  let result = `${str.charAt( 0 )}.`;
  for ( let i = 1; i < str.length; i++ ) {
    if ( str.charAt( i ) === ' ' ) {
      result += str.charAt( i + 1 );
    }
  }
  return result.toUpperCase();
}