import java.util.Arrays;
import java.util.Random;
import java.util.Scanner;

public class ArrayIndexOutOfBounds {

    public static int checkIndex(int indexInput) throws IndexOutOfBoundsException {
        int[] randomArray = new int[100]; // Initializing the int Array
        Random randomInt = new Random(); // Initializing the Random method

    	// a loop to add 100 random numbers 
        for(int i = 0; i <= 99; i++) {
            randomArray[i] = randomInt.nextInt(100); // (randomInt.nextInt(100)) generates a random number and adds it to the arrays index
        }

        if(indexInput >= 100 || indexInput < 0) { // 
            throw new IndexOutOfBoundsException("The Index You Entered Does Not Exist.");
        } else {
            return randomArray[indexInput];
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int userInput;

        System.out.println("Enter a number:");
        userInput = scan.nextInt();
        System.out.println(checkIndex(userInput));
    }
}