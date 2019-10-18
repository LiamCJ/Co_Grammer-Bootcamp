public class Output{ // Output class	
    public static void main(String[] args) {
    	// creating new objects
        Lion simba = new Lion(150, false, 150); // new Lion object
        Cheetah cheeto = new Cheetah(100, true, 80); // new Cheetah object
  
        System.out.println("Lion Type: " + simba.getType() + "\n\n"+cheeto.toString());
    }
} 