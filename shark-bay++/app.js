const restify = require('restify')

const PORT = process.env.PORT || 3000

const main = () => {
  const server = restify.createServer({});
  
  server.use(restify.plugins.bodyParser());
  server.use(restify.plugins.queryParser());


  server.post('/', endpoint)

  server.listen(PORT, () => {
    console.log(`Server started at ${server.url}`);
  })
}

const endpoint = (req, res, next) => {
  const {initialBoard, numberOfIterations} = req.body
  const finalBoard = playGameOfLife(initialBoard, numberOfIterations)

  res.send(200, {boardAfterGenerations: finalBoard})
}

const playGameOfLife = (board, turns) => {
  for (let t = 0; t < turns; t++) {
    const original = JSON.parse(JSON.stringify(board))
    for(let i = 0; i < board.length; i++){
      for(let j = 0; j < board[0].length; j++) {
        const alive = original[i][j] == 1
        const neighbours = getNeighbourCount(original, i, j)
        if (alive && (neighbours !== 2 && neighbours !== 3)){
          board[i][j] = 0
        }
        if(!alive && neighbours == 3) {
          board[i][j] = 1
        }
      }
    }
  }
  return board
}

const getNeighbourCount = (board, x, y) => {
  let total = 0
  // TOP LEFT
  if(x!=0 && y != 0) 
    total += board[x - 1][y - 1]
  
  // TOP CENTER
  if(x!=0) 
    total += board[x - 1][y]

  // TOP RIGHT
  if(x!=0 && y != board[0].length - 1) 
    total += board[x - 1][y + 1]

  // MIDDLE LEFT
  if(y!=0) 
    total += board[x][y - 1]

  // MIDDLE RIGHT
  if(y != board[0].length - 1)
    total += board[x][y + 1]

  // BOTTOM LEFT
  if(x != board.length - 1 && y!=0)
    total += board[x + 1][y - 1]

  // BOTTOM CENTER
  if(x != board.length - 1)
    total += board[x + 1][y]

  // BOTTOM RIGHT
  if(x != board.length - 1 && y != board[0].length - 1)
    total += board[x + 1][y + 1]

  return total
}

main()