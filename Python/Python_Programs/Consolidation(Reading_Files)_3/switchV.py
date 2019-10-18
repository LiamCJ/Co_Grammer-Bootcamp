#This program displays the output of 2 different functions and edits two files with the other functions

#This function translates a DNA sequence into the different amino acids in inside it
def translate(codon):
  aminoA = []                            #(aminoA) is amino Acid which is a empty list to store the amino acids
  aminoC = ''                            #(aminoC) is amino Code which is the string that stores the abbreviations of the amino acids
  while len(codon) != 0:                 #loop continue until there are no nucleotides left
    if codon[:3] == 'ATT' or codon[:3] == 'ATC' or codon[:3] == 'ATA':   #[lines 7,11,15,19,23] check for the codon for the corresponding amino acids
      aminoA.append('Isoleucine')        #[lines 8,12,16,20,24]add the amino acids name to (aminoA)
      aminoC += 'I'                      #[lines 9,13,17,21,25] add the amino acids abbreviations to (aminC)
      codon = codon[3::]                 #[lines 10,14,18,22,26,30] remove the codon once it is check in order to move to the next codon
    elif codon[:3] == 'CTT' or codon[:3] == 'TTA' or codon[:3] == 'TTG' or codon[:3] == 'CTC' or codon[:3] == 'CTA' or codon[:3] == 'CTG':
      aminoA.append('Leucine') 
      aminoC += 'L' 
      codon = codon[3::] 
    elif codon[:3] == 'GTT' or codon[:3] == 'GTA' or codon[:3] == 'GTG':
      aminoA.append('Valine')
      aminoC += 'V'
      codon = codon[3::]
    elif codon[:3] == 'TTT' or codon[:3] == 'TTC':
      aminoA.append('Phenylalanine')
      aminoC += 'F'
      codon = codon[3::]
    elif codon[:3] == 'ATG':
      aminoA.append('Methionine')
      aminoC += 'M'
      codon = codon[3::]
    else:                               #Occurs if the above requirents are not met
      aminoA.append('X')                #adds X to (aminoA)
      aminoC += 'X'                     #adds X to (aminC)
      codon = codon[3::]

  print(aminoC,'(representing:',','.join(aminoA),')') #Displays the amino acid abbreviations with the amino acids name
	
#This function replaces a character of one file with different characters depending on the file it is going to be written to
def mutate():
  dna = open('DNA.txt','r',encoding = 'utf-8-sig')                           #Opens and reads the DNA.txt
  normDna = open('normalDNA.txt','r+',encoding = 'utf-8-sig')                #[lines 37-38] opens,reads and writes to normalDNA.txt and mutatedDNA.txt
  mutDna = open('mutatedDNA.txt','r+',encoding = 'utf-8-sig')
  dnaCon = dna.read()                                                        #Stores the contents of 
  a = dnaCon.find('a')                                                       #finds the position of the character 'a'
  normDna.write(dnaCon.replace(dnaCon[a],'A'))                               #writes the new DNA sequence with 'a' replaced with 'A' to normalDNA.txt
  mutDna.write(dnaCon.replace(dnaCon[a],'T'))                                #writes the new DNA sequence with 'a' replaced with 'T' tomutatedDNA.txt

  dna.close()                                                                #[lines 44-49] closes the opened files
  normDna.close()
  mutDna.close()
  dna.closed
  normDna.closed
  mutDna.closed

#this function calls onto the first function to translate two DNA sequences
def txtTranslate():
  normDna = open('normalDNA.txt','r',encoding = 'utf-8-sig')                 #[lines 53 - 54] open files normalDNA.txt and mutatedDNA.txt
  mutDna = open('mutatedDNA.txt','r',encoding = 'utf-8-sig')
  nCon = normDna.read()                                                      #(nCon) is normal Content which stores the content of normalDNA.txt
  mCon = mutDna.read()                                                       #(mCon) is mutated Content which stores the content of mutatedDNA.txt
  print('normalDNA.txt:')
  translate(nCon)                                                            #calls the translate function to translate (nCon)
  print('mutatedDNA.txt:')
  translate(mCon)                                                            #calls the translate function to translate (mCon)
	
  normDna.close()                                                            #[lines 62-69] closes the opened files
  mutDna.close()
  normDna.closed
  mutDna.closed
#[lines 67-70] call the functions
dna = input('Enter a DNA sequence: ').upper()
translate(dna)
mutate()
txtTranslate()
