public class Factorial {
    protected long linearFactorial(int x){
        long out = 1;
        for(int i = 1; i <= x; i++){
            out *= i;
        }
        return out;
    }

    protected long recursiveFactorial(long x){
        if(x == 0){
            return 1;
        }
        return x * recursiveFactorial(x-1);
    }
}
