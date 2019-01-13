const restify = require('restify')

const main = () => {
  const server = restify.createServer({});
  
  server.use(restify.plugins.bodyParser());
  server.use(restify.plugins.queryParser());


  server.post('/', endpoint)

  server.listen(8080, () => {
    console.log(`Server started at ${server.url}`);
  })
}

const endpoint = (req, res, next) => {
  const data = req.body;
  const bestRevenue = calculateBestRevenue(data);
  res.send(200, bestRevenue)
  
}

const calculateBestRevenue = (market) => {
  let {demand, supply, capacity} = market;

  const finalPrice = calculateBestPrice(demand, supply, capacity)

  return { price: finalPrice}
}

const calculateBestPrice = (demand, supply, capacity, currentProfit = -1) => {

  if (demand.length == 0)
    return 0

  highestPrice = -1;

  demand.forEach(d => {
    highestPrice = d[1] > highestPrice ? d[1] : highestPrice;
  });

  supply = supply.filter(x=> x[1] <= highestPrice).sort((x, y) => x[1] - y[1])

  const remaining = simulatePurchases(demand, supply)
  


  return 0
}

const simulatePurchases = (demand, supply) => {
  const finalDemands = {}
  const finalSupply = {}

  demand.forEach(d => 
    {
      
    }
  )
}

main()