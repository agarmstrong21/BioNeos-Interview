public class Driver extends Factorial {
    public static void main(String[] args) {
        int test = new Factorial().linearFactorial(6);
        System.out.println(6);
        System.out.println(test);

        int test2 = new Factorial().recursiveFactorial(6);
        System.out.println(6);
        System.out.println(test2);
    }
}
