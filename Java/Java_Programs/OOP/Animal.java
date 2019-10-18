public class Animal { // Animal Class
// initializing variables
    private int numTeeth = 0;
    private boolean spots = false;
    private int weight = 0;
// Animal class constructor
    public Animal(int numTeeth, boolean spots, int weight) {
        this.setNumTeeth(numTeeth);
        this.setSpots(spots);
        this.setWeight(weight);
    }
// numTeeth getter
    public int getNumTeeth() {
        return numTeeth;
    }
// numTeeth setter
    public void setNumTeeth(int numTeeth) {
        this.numTeeth = numTeeth;
    }
// spots getter
    public boolean getSpots() {
        return spots;
    }
// spots setter
    public void setSpots(boolean spots) {
        this.spots = spots;
    }
// weight getter
    public int getWeight() {
        return weight;
    }
// weight setter
    public void setWeight(int weight) {
        this.weight = weight;
    }
}