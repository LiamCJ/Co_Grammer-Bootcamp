import java.util.Scanner;

public class sumElements {
	public static void main(String[] args){

		Scanner input = new Scanner(System.in); // initializing the scanner
		double user_Int = 0, total, sum_1 = 0, sum_2 = 0, sum_3 = 0, sum_4 = 0; // initializing the double  variables
		double[][] twoD_Array = new double[3][4]; // initializing the double array

		for(double[] array: twoD_Array){ // a for each loop for the array twoD_Array 

			for(int i = 0; i < 4; ++i){ // looping the arrays inside the array twoD_Array 
				System.out.println("Enter A Number"); // asking the user to enter a integer
				array[i] = input.nextInt(); // adding the users input to the index of the array
			};
		};		

		for(double[] array: twoD_Array){ // looping the arrays inside the array twoD_Array
			sum_1 += array[0]; // adding all the first index of the array
			sum_2 += array[1]; // adding all the second index of the array
			sum_3 += array[2]; // adding all the third index of the array
			sum_4 += array[3]; // adding all the fourth index of the array
		};
		// displaying the totals of the columns
		System.out.println("Column 1 Total = " + sum_1 +"\nColumn 2 Total = " + sum_2 +"\nColumn 3 Total = " + sum_3 +"\nColumn 4 Total = " + sum_4);
	}
	
}