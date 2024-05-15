<!--
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 -> Output (explanation)))

1, 1 -> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 -> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
-->

<?php
// task body
use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    public function testBasic() {
        $this->assertEquals("10", add_binary(1,1), "Invalid result for a = 1, b = 1");
        $this->assertEquals("1", add_binary(0,1), "Invalid result for a = 0, b = 1");
        $this->assertEquals("1", add_binary(1,0), "Invalid result for a = 1, b = 0");
        $this->assertEquals("100", add_binary(2,2), "Invalid result for a = 2, b = 2");
        $this->assertEquals("111111", add_binary(51,12), "Invalid result for a = 51, b = 12");
    }
}
// end

function add_binary($a, $b) {
    // Бинарное строковое представление числа
    return decbin($a + $b);
}
?>