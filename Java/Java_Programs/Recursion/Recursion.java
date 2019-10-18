import java.util.Scanner;
import java.util.Arrays;
import java.lang.String;
import javax.script.ScriptEngineManager;
import javax.script.ScriptEngine;


public class Recursion {


    public static String reverse(String reversed) {
        // will return a blank line if the input is blank
        if (reversed.isEmpty()) {
            return reversed;
        }
        /*
        	returns the input string starting with the last character of a word
        	each charter is returned until the first is returned
        */
        return reverse(reversed.substring(1)) + reversed.charAt(0);
    }

    public static int fibonacci(int number) {
    	// if the input is either 1 or 2, 1 will be returned
        if(number == 1 || number == 2) {
            return 1;
        }
        // returns the sum of the two previous numbers of the inputted number
        return  fibonacci(number - 1) + fibonacci(number - 2); //tail recursion
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in); // initializing the scanner
        String userString; // initializing the String variable
        int userInt; // initializing the int variable

        System.out.println("Enter String:");
        userString = scan.nextLine();

        System.out.println("\n"+"Reversed: " + reverse(userString) + "\nEnter a number:");
        userInt = scan.nextInt();
        System.out.println();

        for(int i = userInt; i > 0; i--) { // decrementing the userInt in order to display the Fibonacci numbers before it
            System.out.print(fibonacci(i) + ","); //displaying the Fibonacci the numbers
        }
    }
}