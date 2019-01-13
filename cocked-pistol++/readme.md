[//]: # (# Challenge: Morse code)
### Problem
* You get a long string of 0 and 1
* You have to translate this to morse code first and then turn it into letters to produce a word/sentence

##### Rules
* "Dot" is 1 time unit long.
* "Dash" is 3 time units long.
* Pause between dots and dashes in a character is 1 time unit long.
* Pause between characters inside a word is 3 time units long.
* Pause between words is 7 time units long.

### Request

| Key           | Data type     | 
|:-------------:|:-------------:| 
| value     | string        | 
example:
```
{
"value": "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011",
}
```

### Response

| Key           | Data type     |
|:-------------:|:-------------:| 
| value     | string        | 
example:
```
{
   "value": "HEY JUDE"
}
```


### Tips
http://www.codewars.com/kata/decode-the-morse-code-advanced