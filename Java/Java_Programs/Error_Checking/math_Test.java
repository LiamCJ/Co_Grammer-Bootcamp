import java.util.Scanner;
public class math_Test {
	public static void main(String[] args) {
		int correct_Count, counter, number1, number2, answer, temp; // initializing the int variables
		long startTime, endTime, testTime; // initializing the long variables
		final int no_of_tries = 5;
		Scanner input = new Scanner(System.in);  // initializing the scanner
		startTime = System.currentTimeMillis(); // initializing the startTime which i the time the method starts
		String results = " "; // initializing the string that stores the question and whether the questions is correct or wrong
		correct_Count = 0; // initializing the variable that keeps count of the correct answers 
		counter = 0; // initializing the counter

		while (counter < no_of_tries) {

			number1 = (int)(Math.random() * 10); // initializing the random number
			number2 = (int)(Math.random() * 10); // initializing the random number
			/*
				conditional statement that swaps the variable "number2" with "number1" 
				if "number2" is bigger than "number1" so that the answer is never negative
			*/
			if (number1 < number2) {
				temp = number1; 
				number1 = number2; 
				number2 = temp;
			}

			System.out.print( "What is " + number1 + " - " + number2 + "? "); //asking the question for the user
			answer = input.nextInt(); // getting the answer from the user and store it in the variable "answer" 

			if (number1 - number2 == answer) { // if the difference of "number1" and "number2" is equal to "answer" lines 31&32 take place
				System.out.println("You are correct!");
				correct_Count++; // Incrementing the correct answer count
			}
			else{
				// Displaying that the user is wrong and the correct answer
				System.out.println("Your answer is wrong.\n" + number1+ " - " + number2 + " should be " + (number1 - number2));	
			}

			counter++; //incrementing the counter
			// displaying the question and the users answer and whether the answer was correct or wrong
			results += "\n" + number1 + "-" + number2 + "=" + answer + ((number1 - number2 == answer) ? " correct" : " wrong");
		}

		endTime = System.currentTimeMillis(); // initializing the endTime which i the time the method ends
		testTime = endTime - startTime; // storing the difference of the endTime and startTime which is how long the code ran
		// displaying the amount of time the user got the questions correct, how long it took them to answer all the questions and the results of the questions
		System.out.println("\nCorrect count is " + correct_Count + "\nTest time is " + testTime / 1000 + " seconds\nResults:" + results);
	}
}