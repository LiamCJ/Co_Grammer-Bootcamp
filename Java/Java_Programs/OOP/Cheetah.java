public class Cheetah extends Animal { //Cheetah class that extends Animal class
// initializing variables
    String cheetahType;
    Object[] cheetah = {getNumTeeth() ,getSpots() ,getWeight()};

// Cheetah class constructor
    public Cheetah(int numTeeth, boolean spots, int weight) {
        super(numTeeth, spots, weight);
        this.setType(getWeight());
    }

//  cheetahType setter
    public void setType(int cheetahWeight) {
        // conditional statement to determine the type of cheetah
        /*
           if "cheetahWeight" is less 50, "cheetahType" will be set to 'Cub'
           else if "cheetahWeight" is more than 50 and less or equal to 100, "cheetahType" will be set to 'Female'
           else "cheetahType" will be set to 'Male'
        */
        if(cheetahWeight < 50) { 
            this.cheetahType = "Cub";
        } else if (cheetahWeight > 50 && cheetahWeight <= 100 ) {
            this.cheetahType = "Female";
        } else {
            this.cheetahType = "Male";
        }
    }

//  cheetah getter
    public String getType(){
    	return cheetahType;
    }

// toString() method
    public String toString() {
        String output = "Number of Teeth: " + cheetah[0] + "\nSpots: " + cheetah[1] + "\nWeight: " + cheetah[2] + "\nType: "+ getType();
        return output;
    }

}