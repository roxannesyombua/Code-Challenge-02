//Function to generate an array of numbers between two values (inclusive)
function createArray(start, end) 
{
  if (start > end) {
    // If start is greater than end, create a new array and fill it in reverse order
    const arr = Array.from({ length: start - end + 1 }, (_, index) => start - index);
    return arr;
  } else {
    // If start is less than or equal to end, create a new array and fill it in ascending order
    const arr = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    return arr;
  }
}

// Output the result of generating an array between 4 and 7 (inclusive)
console.log(createArray(4, 7));
// Output the result of generating an array between -4 and 7 (inclusive)
console.log(createArray(-4, 7));