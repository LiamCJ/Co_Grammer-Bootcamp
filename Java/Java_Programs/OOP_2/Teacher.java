public class Teacher // Teacher Class
{
    String teacher_name, teacher_surname, teacher_subject, teacher_gender; //initializing all String variables
    int  teacher_age; //initializing int variable

    public Teacher(String name, String surname, String gender, int age, String subject) // the class' constructor
    {
        this.teacher_name = name ;
        this.teacher_surname = surname ;
        this.teacher_gender = gender ;
        this.teacher_age = age ;
        this.teacher_subject = subject;
    }

    public String toString() // the class' toString function
    {
        String output = "Full Name: " + teacher_name + " " + teacher_surname;
        output += "\nAge: " + teacher_age;
        output += "\nGender: " + teacher_gender;
        output += "\nSubject Taught: " + teacher_subject;
        return output + "\n";
    }
}