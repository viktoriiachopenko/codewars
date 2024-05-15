<!--
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input -> Output):

39 -> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 -> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 -> 0 (because 4 is already a one-digit number)
-->

<?php
// task body
class PersistenceTest extends TestCase {
    public function testDescriptionExamples() {
        $this->assertSame(3, persistence(39));
        $this->assertSame(4, persistence(999));
        $this->assertSame(0, persistence(4));
    }
}
//end

function persistence(int $num): int {
    $digits = str_split($num);
    $a = 0;

    if (count($digits) > 1) {
        while(count($digits) > 1) {
            for($i = 0; $i < count($digits); $i++) {
                $digits = array_product($digits);
                $digits = str_split($digits);
                $a++;
            }
        }
    }
    return $a;
}
?>
