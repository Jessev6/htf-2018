[//]: # (# Challenge: Price War)
### Problem
- the goal of your mission is to <strong><em>optimize your revenue</em></strong> in a given market of supply and demand
- <strong><em>customers</em></strong> have a desired quantity they want to buy for a given maximum price
- <strong><em>suppliers</em></strong> have a maximum capacity they can deliver for a given price 
- <strong><em>your goal</em></strong> is to set the optimal price for a given capacity to maximize your total revenue

### Rules
- only one product is available on the market
- the demand market is given in a specific order, this should be respected
- customers don't pay more then their maximum price<br/>
  (so only suppliers with sell-price <= maximum-price can sell to a customer) 
- supply is used up from lowest to highest price<br>
  (the lowest supply price is used first until it's capacity is used up, then the next, etc...)
- all prices have the same currency and are scaled to 2 decimals
- quantities and capacities are also scaled to maximum 2 decimals
- all suppliers need to have a different price
- your maximum production capacity is given
- your revenue is the quantity sold of your capacity multiplied by your price 
- if nothing can be sold then return price 0
- in case more then one price gives the same optimal revenue, then return the price that needs the least capacity to achieve the same revenue

### Request

| Key      | Data type                 |  <i>Remarks</i>                       |
|:--------:|:-------------------------:|:-------------------------------------:|
| demand   | array of array of decimal | <i>array of [quantity, max price]</i> |
| supply   | array of array of decimal | <i>array of [max capacity, price]</i> |
| capacity | decimal                   | <i>max capacity</i>                   |
 
example:
```
{
   "demand": [[500.00, 15.00], [500.00, 14.50]],
   "supply": [[850.00, 14.85], [750.00, 14.75]],
   "capacity": 650.00
}
```

### Response

| Key   | Data type | <i>Remarks</i>       |
|:-----:|:---------:|:--------------------:| 
| price | decimal   | <i>optimal price</i> |
example:    
```
{
   "price": 14.50
}
```

### Example
- <strong><em>demand</em></strong> = [ [500, 15.00], [500, 14.50] ]
- <strong><em>supply</em></strong> = [ [850, 14.85], [750, 14.75] ]
- <strong><em>your capacity</em></strong> = 650
- based on the rules below the demand gets fulfilled in the original sequence [ [500, 15.00], [500, 14.50] ]
- the suppliers are used up from lowest to highest price [ [750, 14.75], [850, 14.85] ]
- suppose you would set your price to 14.74
  - this would result in supply sequence [ [650, 14.74], [750, 14.75], [850, 14.85] ]
  - and gives you a revenue of 14.74 * 500 = 7370, since the second buyer does'nt go over 14.50
- if you set a price higher then 14.85, your revenue would be zero, because nothing would have been sold
- using 14.84 would give following results 
  - supply sequence [ [750, 14.75], [650, 14.84], [850, 14.85] ]
  - and a revenue of 14.84 * 250 = 3710
- on the other hand if you set 14.50 as price both buyers will be satisfied
  - this would result in supply sequence [ [650, 14.50], [750, 14.75], [850, 14.85] ]
  - and gives you a revenue of 14.50 * (500 + 150) = 9425    
- so your <strong><em>optimal price</em></strong> in this case = 14.50

### Some More Examples

###### Example 1 - supply > demand
- demand = [ [1100, 25.13], [1000, 23.10], [888, 19.19], [3000, 11.8] ]
- supply = [ [5000, 17], [2000, 16] ]
- capacity = 500
- => optimal price = 16.99

###### Example 2 - demand > supply
- demand = [ [100, 20.00], [50, 30.00], [300, 5.00], [5000, 25.00] ]
- supply = [ [1000, 27], [500, 16] ]
- capacity = 250
- => optimal price = 25.00

###### Example 3 - more profit when not using up capacity
- demand = [ [1000, 10.00], [1000, 11.00], [1000, 4.80], [400, 12.00] ]
- supply = [ [1500, 4.75], [1500, 4.75] ]
- capacity = 900
- => optimal price = 12.00

###### Example 4 - no competition
- demand: [ [1000, 12.50] ]
- supply: [ ]
- capacity: 10000
- => optimal price: 12.50

#### good luck!!!