public class Lion extends Animal {
    String lionType ; // initializing variable

// Lion Class constructor
    public Lion(int numTeeth, boolean spots, int weight) {
        super(numTeeth, spots, weight);
        this.setType(getWeight());
    }
    
  // lionType setter  
    public void setType(int lionWeight) { 
    // conditional statement to determine the type of Lion
    /*
       if "lionWeight" is less 50, "lionType" will be set to 'Cub'
       else if "lionWeight" is more than 50 and less or equal to 100, "lionType" will be set to 'Female'
       else "lionType" will be set to 'Male'
    */
        if(lionWeight < 80) {
            this.lionType = "Cub";
        } else if (lionWeight > 80 && lionWeight <= 120 ) {
            this.lionType = "Female";
        } else {
            this.lionType = "Male";
        }
    }

    // lionType getter
    public String getType() {
        return lionType;
    }
}