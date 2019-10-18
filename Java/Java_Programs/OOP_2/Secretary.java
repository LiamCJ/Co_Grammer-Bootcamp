public class Secretary
{
    String secretary_name, secretary_surname, secretary_gender; //initializing all String variables
    int  secretary_age, secretary_no_of_years; //initializing all int variables

    public Secretary(String name, String surname, String gender, int age, int no_of_years) // the class' constructor
    {
        this.secretary_name = name ;
        this.secretary_surname = surname ;
        this.secretary_gender = gender ;
        this.secretary_age = age ;
        this.secretary_no_of_years = no_of_years;
    }

    public String toString() // the class' toString function
    {
        String output = "Full Name: " + secretary_name + " " + secretary_surname;
        output += "\nAge: " + secretary_age;
        output += "\nGender: " + secretary_gender;
        output += "\nNumber of Years At School: " + secretary_no_of_years;
        return output + "\n";
    }
}