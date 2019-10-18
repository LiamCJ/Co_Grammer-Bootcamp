import java.util.ArrayList;
import java.util.Scanner;
import java.util.Arrays;
import java.util.List;

public class NoDups {

	public static ArrayList<Integer> dup_Rmv(int[] array){ // a  method that returns the data type ArrayList<Integer>

		ArrayList<Integer> no_Dups =  new ArrayList<>();// initializing the class array
		// loops through the array that is in the parameter where "i" is each index of the array
		 for (int i : array){
		    if (no_Dups.contains(i) == false){ // if array "no_Dups" does not contain a value of the "i" it will be added to the array "no_Dups"
		    	no_Dups.add(i);
		    };		    
		};

		// the array "no_Dups" is returned
		return no_Dups;
	}

	public static void main(String[] args){
		int[] check_Array = {20,100,10,80,70,1,0,1,2,10,15,300,7,6,2,18,19,21,9,0};	// initializing a static array
		// displaying the array with duplicates and the array without duplicates
		System.out.println(Arrays.toString(check_Array) + "\nDuplicates have been removed\n" + dup_Rmv(check_Array));

	}
}

