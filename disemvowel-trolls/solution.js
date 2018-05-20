function disemvowel( str ) {
  let newString = str.replace( /[aeiou]/ig, '' );
  return newString;
}