import java.util.Scanner;

public class rockPaperScissors {
	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in); //initializing the input scanner
		int comOutput, playerOutput; //initializing all the integer variables
		comOutput = (int)(Math.random() * 3); // a randomized number is stored in the variable "comOutput"
		// Requiring the user to enter either 0 , 1 or 2
		System.out.println("Choose Your Hand: \n Rock - 0 \n Paper - 1 \n Scissors - 2");
		playerOutput = scan.nextInt(); //Storing the users input in the variable "playerOutput"
		
		if (playerOutput == comOutput) { //if the users input is the same as the "comOutput" line 14 will take place
			System.out.println("IT IS A TIE!"); // displays "IT IS A TIE!"

        } else if ( // if the the following conditions occur the user wins and line 21 will take place 
            (playerOutput == 0 && comOutput == 2) ||
            (playerOutput == 1 && comOutput == 0) ||
            (playerOutput == 2 && comOutput == 1)
        ) {
        	System.out.println("YOU WIN!");
        } else { // if any other outcome occurs the user losers and line 23 will take place
        	System.out.println("YOU LOSE!");
        }
		
		System.out.println("Player Choice:" + playerOutput + "\nComputer Choice:" + comOutput); //displaying the user and "comOutput" choices
	}
}