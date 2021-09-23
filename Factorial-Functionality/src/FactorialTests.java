import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class FactorialTests extends Factorial{

    @Test
    public void LinearTest1(){
        assertEquals(1, linearFactorial(1));
    }

    @Test
    public void LinearTest2(){
        assertEquals(2, linearFactorial(2));
    }

    @Test
    public void LinearTest3(){
        assertEquals(6, linearFactorial(3));
    }

    @Test
    public void LinearTest4(){
        assertEquals(24, linearFactorial(4));
    }

    @Test
    public void LinearTest6(){
        assertEquals(479001600, linearFactorial(12));
    }

    @Test
    public void RecursiveTest1(){
        assertEquals(1, recursiveFactorial(1));
    }

    @Test
    public void RecursiveTest2(){
        assertEquals(2, recursiveFactorial(2));
    }

    @Test
    public void RecursiveTest3(){
        assertEquals(6, recursiveFactorial(3));
    }

    @Test
    public void RecursiveTest4(){
        assertEquals(24, recursiveFactorial(4));
    }

    @Test
    public void RecursiveTest6(){
        assertEquals(479001600, recursiveFactorial(12));
    }
}
