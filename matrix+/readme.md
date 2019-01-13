[//]: # (# Challenge: tic-tac-toe)
### Problem
 * Receive a STRING with tic-tac-toe fields, together with a width.
 * Format this string into a nicer looking string by adding line and column separators (' | ' and ' - ').
 
### Request

| Key           | Data type     | 
|:-------------:|:-------------:| 
| board     | string        | 
| width     | integer        |

example:
```
{
    "board": "OX  X XO "
    "width": 3
}
```

### Response
| Key           | Data type     | 
|:-------------:|:-------------:| 
| answer     | String        | 

```
{
    "answer" : " O | X |   \n-----------\n   | X |   \n-----------\n X | O |   "
}

(It should look like this)

     O | X |   
    -----------
       | X |   
    -----------
     X | O |   
```

### Tips
 * There should be as many dashes as characters per newline.
 * The array length will always be a multiple of the width, no worries about missing elements.