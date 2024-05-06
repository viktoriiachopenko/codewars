// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(integers){
    const evens = [];
    const odds = [];
    
    for (var i = 0; i < integers.length; i++){
      if ((integers[i] % 2) == 0) {
        evens.push(integers[i]);
      } 
      else {
        odds.push(integers[i]);
      }
    }
    
    const elen = evens.length;
    const olen = odds.length;
    
    if (elen > olen) {
      return odds[0];
    } else {
      return evens[0];
    }
  }