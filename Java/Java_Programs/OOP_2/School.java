public class School
{
    public static void main(String[] args)
    {
        // [lines 54-56] initialize new Teacher objects
        Teacher teacher_1 = new Teacher("Balinda", "James", "Female", 34, "Physical Science") ;
        Teacher teacher_2 = new Teacher("Dwayne", "Johnson", "Male", 43, "Math") ;
        Teacher teacher_3 = new Teacher("Akira", "Toriyama", "Male", 50, "English") ;
        // [lines 58-60] initialize new Secretary objects
        Secretary secretary_1 = new Secretary("Fabian", "Frazier", "Male", 25, 2) ;
        Secretary secretary_2 = new Secretary("Paige", "Hartman", "Female", 52, 10) ;
        Secretary secretary_3 = new Secretary("Nathen", "May", "Male", 32, 5) ;
        // displaying the objects from the Teacher class
        System.out.println("Teacher Staff: \n" + teacher_1 + "\n" + teacher_2 + "\n" + teacher_3 + "\n"); 
         // displaying the objects from the Secretary class
        System.out.println("Secretary Staff: \n" + secretary_1 + "\n" + secretary_2 + "\n" + secretary_3 + "\n");
    }
}