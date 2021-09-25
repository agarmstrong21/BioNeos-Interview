/**************************************
 * 
 * File Name: FactorialTests.java
 * Date: 9/24/2021
 * Description: Java executable that utilizes JUnit testing to test certain cases of the Factorial.java file. This is
 *  user created, so it is not testing user input from the terminal. This file is purely a proof of concept for
 *  Factorial-WebApp.
 * 
 **************************************/

// Importing certain built in methods
import static org.junit.Assert.assertEquals;
import org.junit.Test;
import java.util.Random;

/**
 *  Below is a class that extends the Factorial java class to create and test different inputs to prove that the
 *      Factorial calculator is working correctly.
 */
public class FactorialTests extends Factorial{

    // First 5 cases are to prove that the linear method of Factorial is working correctly
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
    public void LinearTest5(){
        assertEquals(479001600, linearFactorial(12));
    }

    // Second set of 5 test cases are to prove that the recursive method of Factorial is working correctly.
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
    public void RecursiveTest5(){
        assertEquals(479001600, recursiveFactorial(12));
    }

    // Lastly, the VersusTest is a test that generates a random number between 0 and 20 that will be inputted to both
    //  the recursive and linear methods of the Factorial class. See Wiki for reasoning behind maxing randomGen to 20.
    @Test 
    public void VersusTest(){
        Random randomGen = new Random();
        int rand = randomGen.nextInt(20);
        assertEquals(recursiveFactorial(rand), linearFactorial(rand));
    }
}
