/**************************************
 *
 * File Name: Factorial.java
 * Date: 9/24/2021
 * Description: Java non-executable file that is extended by many other classes to find the factorial of any given
 *  number in linear or recursive time. In this class, all methods are returning long numbers to benefit larger numbers
 *  since the primitive int can not exceed a certain number based on lack of space and/or memory.
 *
 **************************************/

/**
 * This class is a non-executable java file that is extended by many other classes to find the factorial of any given
 *  number in linear or recursive time.
 */
public class Factorial {

    /**
     * This protected method is not accessible from any other program other than ones that extend it. linearFactorial
     *  finds the factorial of the passed in value of x in linear time then outputs that number in a casted long form
     *  to benefit larger numbers.
     * @param x
     * @return
     */
    protected long linearFactorial(int x){
        long out = 1;
        for(int i = 1; i <= x; i++){
            out *= i;
        }
        return out;
    }

    /**
     * This protected method is not accessible from any other program other than ones that extend it. recursiveFactorial
     *  finds the factorial of the passed in value of x in recursive time then outputs that number in a casted long form
     *  to benefit larger numbers.
     * @param x
     * @return
     */
    protected long recursiveFactorial(long x){
        if(x == 0){
            return 1;
        }
        return x * recursiveFactorial(x-1);
    }

    protected long unFactorial(long x){
        int i = 1;
        long temp = x;
        while(x > 1 && i < temp){
            x = x / i;
            i++;
        }
        if(x == 1){
            return i-1;
        }
        return 0;
    }
}
