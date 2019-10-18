import java.util.Scanner;
import java.io.FileReader;
import java.util.ArrayList;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileNotFoundException;

public class MyFile {
    public static void main(String[] args) {
        int min_num = 1, max_num = 1, lines = 0,sum = 0; // initializing int variables
        double avg_num = 0, sum_avg = 0, per90 = 0, per70 = 0; // initializing float variables
        String line; // initializing line variable
        String[] strings_Array, nums_Array; // initializing String arrays
    	ArrayList<Integer> int_Array;
        Scanner input = null; // initializing Scanner variable
        BufferedReader reader = null; // initializing BufferedReader variable

        // try catch method for error handling
        try {

            reader = new BufferedReader(new FileReader("input.txt"));

            while(reader.readLine() != null) {
                lines++;
            }
            
            reader.close();

            /*trying to read the file 'input.txt'
            if it fails lines 25-28 will take place
            but if it succeeds lines 30 */
            input = new Scanner(new FileInputStream("input.txt"));


        } catch(FileNotFoundException e) {
            // Displaying the error message
            System.out.println("Error Opening File Input.txt");
            System.exit(0); //existing the program
        } catch(IOException e) {
            System.out.println("Error whilst reading Input.txt");

        }

        //looping through each line in the input.txt
        for(int i = lines; i > 0; i--) {
            line = input.nextLine(); // reads  line
            strings_Array = line.split(":"); // splitting the input received from the file to store inside an array
            nums_Array = strings_Array[1].split(","); // splitting the the string containing integers in order to
        	int_Array = new ArrayList<Integer>(); // initializing all ArrayList<Integer>

            // looping through 'nums_Array' to cast each String index to int
            for(String n : nums_Array) {
                int cast_To_Int = Integer.parseInt(n); // casting the Strings to Integers
                int_Array.add(cast_To_Int); // adding the integers to the arrayList
            }

            /*
                switch case method to determine what needs to happen by checking what the first index of 'strings_Array' 
                and executes the appropriate block 
            */
            switch(strings_Array[0]) {
            case "min":
                // line[63-65,68-70,73-75] loops through 'int_Array' to determine the min,max and average numbers
                for(int in: int_Array) {
                    min_num = Math.min(min_num, in); // using the Math class to determine the minimum numbers
                }
                break;
            case "max":
                for(int in: int_Array) {
                    max_num = Math.max(max_num, in); // using the Math class to determine the maximum numbers
                }
                break;
            case "avg":
                for(int in: int_Array) {
                    sum_avg += in; // adding all the integers
                }
                avg_num = sum_avg/6; // determining the average number
                break;
            case "P90":
                per90 = (double) (0.9) * int_Array.size(); // determining the 90th percentile of the array
                break;
            case "Sum":
                for(int in: int_Array) {
                    sum += in; // adding all the integers
                }
                break;
            case "P70":
                per70 = Math.floor((0.7) * int_Array.size()); // determining the 70th percentile of the array
                break;
            }
        }

        input.close(); // closing the file

        // Output Functionality

        PrintWriter output = null;

        try {
            output = new PrintWriter(new FileOutputStream("Output.txt"));

        } catch(FileNotFoundException e) {
            System.out.println("Error Opening File Output.txt");
            System.exit(0);

        }
        // printing data onto file
        output.println(
            "The min of [1,2,3,5,6] is " + min_num +
            "\nThe max of [1,2,3,5,6] is " + max_num +
            "\nThe avg of [1,2,3,5,6] is " + avg_num +
            "\nThe 90th percentile of [1,2,3,4,5,6,7,8,9,10] is " + per90 +
            "\nThe sum of [1,2,3,5,6] is " + sum +
            "\nThe 70th percentile of [1,2,3] is " + per70);

        output.close();
        System.out.println("Program Ended");
    }
}