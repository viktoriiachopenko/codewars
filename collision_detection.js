// Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in addition to their radii:

// function collision(x1, y1, radius1, x2, y2, radius2) {
//   // collision?
// }
// If a collision is detected, return true. If not, return false.

function collision(x1, y1, radius1, x2, y2, radius2) {
    let a;
    let x;
    let y;

    a = radius1 + radius2;
    x = x1 - x2;
    y = y1 - y2;

    if (a > Math.sqrt((x * x) + (y * y))) {
        return true;
    } else {
        return false;
    }
}