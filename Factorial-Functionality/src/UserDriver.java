/**************************************
 *
 * File Name: UserDriver.java
 * Date: 9/24/2021
 * Description: Java executable file that drives the Factorial Java class to create a User facing program that allows
 *  users to input a number of their desire. Since this program is only a proof of concept, there was no input
 *  validation other than the case of NULL.
 *
 **************************************/
// Importing the Scanner tool
import java.util.Scanner;

/**
 * Below is a class that is user facing that sits in a while loop calculating the factorial of the user input
 *  until the program breaks or ends.
 */
public class UserDriver extends Factorial{
    public static void main(String[] args) {

        // Print off a statement of how the program works
        System.out.println("------------------------------\n" +
                            "This is the Factorial Calculator. \n\nType in a number of your liking and this program " +
                            "will calculate it in linear time and recursive time.\n" +
                            "------------------------------");

        // Creating and initializing a scanner and input
        Scanner readIn = new Scanner(System.in);
        int input = 0;

        // While loop to continuously take in the user input and output the factorial in recursion and in linear.
        while(true){
            System.out.print("Input: ");
            input = readIn.nextInt();
            System.out.println("Output with Recursion: " + new Factorial().recursiveFactorial(input));
            System.out.println("Output in Linear: " + new Factorial().linearFactorial(input));
            System.out.println("output in unfactorial: " + new Factorial().unFactorial(input));
        }
    }
}
