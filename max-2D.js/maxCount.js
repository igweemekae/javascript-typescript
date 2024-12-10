/*Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) and returns an array containing the maximum value in each column. The array length should be equal to the number of columns, such that returnArray[i] is equal to the max value in the ith column.*/

function maxColumn(matrix) {
    // your code here...
    newray = [];
    let col1 = 1;
    let col2 = 1;
    let col3 = 1;
    
    for (i = 0; i < matrix.length; i++) {
          let frame = matrix[i];
          
          
          for (j = 0; j < frame.length; j++) {
              if (frame[0] > col1) {
                  col1 = frame[0];
              }
              else if (frame[1] > col2) {
                  col2 = frame[1];
              }
              else if (frame[2] > col3) {
                  col3 = frame[2];
              }
          }
      }
      
      newray.push(col1);
      newray.push(col2);
      newray.push(col3);
      
      return  newray;
  }
  
  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]
  
  console.log(maxColumn(matrix)); // [12, 19, 21]