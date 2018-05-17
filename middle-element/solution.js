var gimme = function( inputArray ) {
  let sortedArray = inputArray.slice().sort( ( a, b ) => { return a - b } );
  let middleValue = sortedArray[ 1 ];
  let valueIndex = inputArray.indexOf( middleValue );
  return valueIndex;
};