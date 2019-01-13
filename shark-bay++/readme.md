# Challenge: Game of life

### Problem
 * Receive a randomly generated 2D array of numbers filled with 0 and 1 depicting a square culture of bacteria
    * 0 means a dead cell
    * 1 means a living cell
 * You should try to evolve your dataset by following the rules of "the game of life".  
 * Apply these rules an amount of times specified by "iterations".
 
##### Rules:
1. A living cell with less than 2 living neighbors, dies a horrible death.
2. Any living cell with 2 or more living neighbors, lives on to the next generation.
3. Any living cell with more than 3 living neighbors, dies ...
4. Any dead cell with exactly 3 living neighbors, becomes a live cell.

The updates travel from top-left to down-right in a row by row manner.
The edges are solid, do not take into account the opposite side.

### Request

| Key                | Data type                  | 
|:------------------:|:--------------------------:| 
| initialBoard       | Array of Arrays of integer | 
| numberOfIterations | integer                    |

example:
```json
{
"initialBoard": [[1,0,0,0], [0,1,1,1]],
"numberOfIterations": 10
}
```

### Response

| Key                | Data type                  | 
|:------------------:|:--------------------------:| 
| initialBoard       | Array of Arrays of integer | 
| numberOfIterations | integer                    |
example:
```json
{
   "boardAfterGenerations": [[1,0,0,0], [0,1,1,1]]
}
```


### Tips
##### Example
```

1 1 0              1 1 0
   
1 0 0    =>        1 1 0 

0 0 0              0 0 0

```

