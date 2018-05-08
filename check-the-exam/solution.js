function checkExam( correctArr, studentArr ) {
  studentScore = 0;
  for ( var i in correctArr ) {
    if ( studentArr[ i ] === correctArr[ i ] ) {
      studentScore += 4;
    } else if ( studentArr[ i ] === '' ) {
      studentScore += 0;
    } else {
      studentScore -= 1;
    }
  }
  if ( studentScore < 0 ) {
    studentScore = 0;
  }
  return studentScore;
}