import java.io.File;
import java.io.IOException;
import java.io.FileWriter;
import java.util.ArrayList;

public class MethodCalculator {
    
    public static String calculate(String method, ArrayList<Integer> list){
        double output = 0 , sum_avg = 0;
        String display;
        boolean known;
        ArrayList<String> outputs = new ArrayList<String>();
        
        switch(method) {
            case "min":
                // line[63-65,68-70,73-75] loops through 'list' to determine the min,max and average numbers
                output = 1;
                known = true;
                for(int in: list) {
                    output = Math.min(output, in); // using the Math class to determine the minimum numbers
                }
                break;
            case "max":
                output = 1;
                known = true;
                for(int in: list) {
                    output = Math.max(output, in); // using the Math class to determine the maximum numbers
                }
                break;
            case "avg":
                output = 0;
                known = true;
                for(int in: list) {
                    sum_avg += in; // adding all the integers
                }
                output = sum_avg/6; // determining the average number
                break;
            case "P90":
                output = 0;
                known = true;
                output = (double) (0.9) * list.size(); // determining the 90th percentile of the array
                break;
            case "Sum":
                output = 0;
                known = true;
                for(int in: list) {
                    output += in; // adding all the integers
                }
                break;
            case "P70":
                output = 0;
                known = true;
                output = Math.floor((0.7) * list.size()); // determining the 70th percentile of the array
                break;
            default:
                known = false;
                break;
            } 

            if(known){
                display = String.format("The %s of %s is %s", method, list,  output ) ;
            }else{
                display = "Not A Known Method";
            }

         return display;
            
    }
}
