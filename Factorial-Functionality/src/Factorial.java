public class Factorial {
    protected int linearFactorial(int x){
        int out = 1;
        for(int i = 1; i <= x; i++){
            out *= i;
        }
        return out;
    }

    protected int recursiveFactorial(int x){
        if(x == 0){
            return 1;
        }
        return x * recursiveFactorial(x-1);
    }
}
