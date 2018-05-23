function cubeOdd( arr ) {
  if ( arr.every( elem => typeof ( elem ) === 'number' ) ) {
    let filteredArr = arr.filter( elem => elem % 2 === 1 || elem % 2 === -1 );
    let mappedArr = filteredArr.map( elem => Math.pow( elem, 3 ) );
    let reducedArr = mappedArr.reduce( ( accum, curr ) => accum + curr, 0 );
    return reducedArr;
  } else {
    return undefined;
  }
}