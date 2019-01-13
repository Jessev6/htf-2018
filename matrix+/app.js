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
  const { board, width } = req.body
  
  const fields = board.split('')

  let result = ""
  const lenght = (width * 3) + (width - 1)

  for(let i = 1; i <= fields.length; i++){
    if (i % width !== 0) {
      result += ` ${fields[i-1]} |`
    } else if(i !== fields.length) {
      result += ` ${fields[i-1]} \n`
      for(let j = 0; j < lenght; j++) {result+='-'}
      result += '\n'
    } else {
      result += ` ${fields[i-1]} `
    }
  }

  console.log(result)
  res.send(200, {answer: result})
}

main()