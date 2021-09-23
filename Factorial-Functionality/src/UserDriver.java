import java.util.Scanner;

public class UserDriver extends Factorial{
    public static void main(String[] args) {

        Scanner readIn = new Scanner(System.in);
        int input = 0;

        System.out.println("------------------------------\n" +
                            "This is the Factorial Calculator. \n\nType in a number of your liking and this program " +
                            "will calculate it in linear time and recursive time.\n" +
                            "------------------------------");


        while(true){
            System.out.print("Input: ");
            input = readIn.nextInt();
            System.out.println("Output: " + new Factorial().recursiveFactorial(input));
        }
    }
}
