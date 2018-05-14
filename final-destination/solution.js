function reachDestination( distance, speed ) {
  let travelTime = distance / speed;
  travelTime = ( Math.round( travelTime * 2 ) / 2 );
  let pluralMessage = `The train will be there in ${travelTime} hours.`
  let singularMessage = `The train will be there in ${travelTime} hour.`
  if ( travelTime === 1 ) {
    return singularMessage;
  } else {
    return pluralMessage;
  }
}