import java.util.Scanner;

public class HexToDecimalConversion {
    /* Main method */
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        // Prompt the user to enter a string
        System.out.print("Enter a Hexadecimal Number:");
        String hex = input.nextLine();
        System.out.println("The Decimal value for hex number " + hex + " is " + hexToDecimal(hex.toUpperCase()));
    }

    public static int hexToDecimal(String hex) {
        int decimalValue = 0;
        try {
            for (int i = 0; i < hex.length(); i++) {
                char hexChar = hex.charAt(i);
                decimalValue = decimalValue * 16 + hexCharToDecimal(hexChar);
            }
        } catch(NumberFormatException e) {
            System.out.println("Input Entered Is Not A HexaDecimal Number" + e);

        }

        return decimalValue;

    }

    public static int hexCharToDecimal(char ch) {
        if(ch >= 'A' && ch <= 'F') {
            return 10 + ch - 'A';
        } else if (ch >= 0 && ch <= 9) {
            return ch - 0;
        } else throw new NumberFormatException("Please Enter A HexaDecimal");
    }
}