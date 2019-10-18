import java.util.Scanner;

public class factorial{
	public static void main(String[] args){

		Scanner input = new Scanner(System.in); //initializing the input scanner
		int factorial, user_Int; //initializing all the integer variables
		factorial = 1;

		System.out.println("Enter A Positive Number"); // prompting the user to enter a positive numbers
		user_Int = input.nextInt();	// getting the user input	

		for(int num = 1; num <= user_Int; ++num){ // for the length of the users input the loop will continue while num is incremented until what the user entered
			factorial =  factorial * num; // the factorial will be multiplied by "num"
		}

		// displaying the factorial
		System.out.println(user_Int + "! = " + factorial);
	}
}