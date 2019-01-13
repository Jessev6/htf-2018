# Challenge: Faberge

### Problem
 You receive a fixed number of laser canons and are given a fixed number of tries. Devise an algorithm to determine the (theoretical) maximum strength to fire the laser without breaking.
 
##### Rules:
1. You can shoot a laser with a specific power setting every try
2. Every shot has the same, certain power - if they're shot with a certain power or below, they cannot destroy the laser canon. Otherwise they destroy the laser and you have to take the next one if available...
3. You have a fixed number of shots and a fixed number tries (2 cannons, 5 tries means 5 tries IN TOTAL).
4. What is the power setting, such that you can always determine which power setting is the one where the cannon breaks.

So when I have one try with one laser, I must shoot it from the first power setting. Because if I shoot it with setting two and the laser breaks, I may never know if it survives a shot with the first setting.
 

### Request

| Key                | Data type                  | 
|:------------------:|:--------------------------:| 
| lasers             | BigInteger                 | 
| tries              | BigInteger                 |

example:
```json
{
"lasers": 312,
"tries": 409
}
```

### Response

| Key                | Data type                  | 
|:------------------:|:--------------------------:| 
| value              | BigInteger                 | 
example:
```json
{
   "value": 10
}
```


### Tips
##### Example
```
lazers   tries   result
0        2        0
1        0        0
1        2        2
2        3        6
2        4        10
2        5        15
4        17       3213
531      550      3685510180489786476798393145496356338786055879312930105836138965083617346086082863365358130056307390177215209990980317284932211552658342317904346433026688858140133147
```

