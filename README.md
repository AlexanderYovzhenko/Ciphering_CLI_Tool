# Ciphering-CLI-Tool
Program for encoding, decrypting text

Download the program to your computer and run it  
The program can be run from the command line with the following command:   `node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"` 

Parameters that can be passed:

1 -c or --config and its value "C1-C1-R0-A" Required parameter  
 Value (encoding):  
  -valid ciphers: C1, C0, R1, R0, A  
  -C1 - encrypt Caesar (shift 1 forward)  
  -C0 - decrypt Caesar (shift 1 back)  
  -R1 - encrypt ROT-8 (shift 8 forward)  
  -R0 - decrypt ROT-8 (shift 8 back)  
  -A - Atbash cipher (encrypt and decrypt)  
  -ciphers should be separated -  
  -the length of the encoding can be any  
  -fonts can be placed in any order  
  -only Latin letters are encrypted / decrypted  

2 -i or --input and its value "./input.txt" Optional parameter  
  If the parameter is not specified, then reading is carried out from the console
  Value (input file):  
    -you can use a relative or full path to the file  

3 -o or --output and its value "./output.txt" Optional parameter  
  If the parameter is not specified, then the recording is made to the console  
  Value (output file):  
    -you can use a relative or full path to the file  

The parameters can be used in any order  
Duplication of parameters is prohibited