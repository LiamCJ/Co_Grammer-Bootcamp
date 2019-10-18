import java.util.Scanner;
import java.util.ArrayList;

public class identicalArrays {

	public static void main(String[] args){
		Scanner input = new Scanner(System.in); // initializing the scanner
		// initializing two class arrays
		ArrayList<Integer> array_1 = new ArrayList<>();
		ArrayList<Integer> array_2 = new ArrayList<>();
		int user_Int = 0; // initializing the user input 
		boolean compare; // initializing the boolean variable

		for(int i = 6;i > 0; --i){ // a for loop that continues for 6 times where it initializes the integer "i" and decrements it until it is 0
			if(i > 3){ // if "i" is greater than 3 the users input will be appended to "array_1"
				System.out.println("Enter An Integer To The First Array"); //prompting the user to enter an integer to the array
				user_Int = input.nextInt(); // getting the users input
				array_1.add(user_Int); // adding the input to the array				
			}else if(i <= 3){ // if "i" is less than or equal to 3 the users input will be appended to "array_2"
				System.out.println("Enter An Integer To The Second Array"); //prompting the user to enter an integer to the array
				user_Int = input.nextInt(); // getting the users input
				array_2.add(user_Int); // adding the input to the array
			}

		};

		compare = array_1.equals(array_2); // using equals() to compare the arrays

		if(compare == true){ // if the boolean variable "compare" is true line 30 will take place else if it is false line 32 will take place
			System.out.println("The Two Arrays Are Identical"); // displaying the message "The Two Arrays Are Identical"
		}else{
			System.out.println("The Two Arrays Are Not Identical"); // displaying the message "The Two Arrays Are Not Identical"
		};
	}
}