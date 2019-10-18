import java.util.Scanner;

public class averageNumber {
	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in); //initializing the input scanner
		int user_Int, int_Sum = 0, int_Count = 0, pos_int = 0, neg_Int = 0; //initializing all the integer variables
		float int_Avg = 0; // initializing the float variables

		// displaying what the user must do
		System.out.println("Please Enter A Positive Or Negative Number.\n If You Wish To Stop Entering Numbers Enter 0");
		// lines 12-26 will run as long as the user does not enter 0
		do{
			user_Int = scan.nextInt(); //the user input is stored in the variable "user_Int"
			// if the user enters 0 the loop will break
			if (user_Int == 0){
				break;				
			}

			if (user_Int > 0){ // if the users input is more than zero it is positive and line 21 takes place else line 23 takes place
				++pos_int; // incrementing the variable that keeps count of the positive numbers
			}else{
				++neg_Int; // incrementing the variable that keeps count of the negative numbers
			}

			++int_Count; //incrementing the counter
			int_Sum += user_Int; // adding to the sum of the numbers
			
		}while (user_Int != 0);

		int_Avg = int_Sum / int_Count; // calculating the average of the numbers
		// displaying the numbers of positive and negative numbers along with the sum and average of all the numbers
		System.out.println("Number of Postive Numbers: " + pos_int + "\nNumber of Negative Numbers: " + neg_Int + "\nTotal of Numbers: " + int_Sum +"\nAverage of Numbers: " + int_Avg);

	};
}