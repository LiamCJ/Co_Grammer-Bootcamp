import java.io.File;
import java.util.Scanner;
import java.util.ArrayList;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
import java.io.FileReader;
import java.io.PrintWriter;
import java.io.FileOutputStream;
import java.io.FileNotFoundException;

public class MyFile {
    public static void main(String[] args) {
        String line, content; // initializing line variable
        String[] strings_Array, nums_Array; // initializing String arrays
    	ArrayList<Integer> int_Array;
        ArrayList<String> outputs = new ArrayList<String>();
        FileWriter fileWrite = null;
        File text = new File("src/output.txt");
        Scanner input = null; // initializing Scanner variable

        // try catch method for error handling
        try {
            /*trying to read the file 'input.txt'
            if it fails lines 25-28 will take place
            but if it succeeds lines 30 */
            
//            InputStream in = getClass().getClassLoader().loadResourceAsStream("input.txt");
            
            input = new Scanner(new FileInputStream("src/input.txt"));
            
        } catch(FileNotFoundException e) {
            // Displaying the error message
            System.out.println("Error Opening File input.txt");
            System.exit(0); //existing the program
        }

        //looping through each line in the input.txt
        while(input.hasNextLine()) {
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
            outputs.add(MethodCalculator.calculate(strings_Array[0], int_Array));
            
        }

        content  = String.join("\n", outputs);
        
        PrintWriter output = null;

        try {
            output = new PrintWriter(new FileOutputStream("src/Output.txt"));

        } catch(FileNotFoundException e) {
            System.out.println("Error Opening File Output.txt");
            System.exit(0);

        }
        
        // printing data onto file
        output.print(content);
        
        output.close();
        System.out.println("Program Ended");
    }
    
    
}