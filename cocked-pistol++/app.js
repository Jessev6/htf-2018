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

function unmultiplyString (str, factor) {
	var ret = [];
	str.split('').reduce(function (prev, current) {
		if (prev === 0) {
			ret.push(current);
			return factor - 1;
		}
		return prev - 1;
	}, factor - 1)
	return ret.join('');
}

function shortestSequenceLength (str) {
	var ret = str.split('').reduce(function (prev, current) {
		if (current === prev.character) {
			prev.length = prev.length + 1;
		} else {
			if (prev.length < prev.shortestLength) {
				prev.shortestLength = prev.length;
			}
			prev.character = current;
			prev.length = 1;
		}
		return prev;
	}, {
		character: null,
		length: Infinity,
		shortestLength: Infinity
	});
	return (ret.length < ret.shortestLength) ?  ret.length : ret.shortestLength;
}

function decodeBits (bits) {
    bits = bits.substring(bits.indexOf('1'), bits.lastIndexOf('1') + 1); // remove leading/trailing 0's
    bits = unmultiplyString(bits, shortestSequenceLength(bits));
    return bits.replace(/0000000/g, '   ')
               .replace(/000/g, ' ')
               .replace(/111/g, '-')
               .replace(/1/g, '.')
               .replace(/0/g, '');
}

var decodeMorse = function(morseCode){
 return morseCode.trim().split('   ')
 .map((w) => {
   return w.split(' ')
   .map((c) => {
     return MORSE_CODE[c]
   }).join('');
 }).join(' ');
}

const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "---.": "9",
  "-----": "0"
}

const endpoint = (req, res, next) => {
  const { value } = req.body
  console.log(decodeMorse(decodeBits(value)))
  res.send(200, {value: `${decodeMorse(decodeBits(value))}NULL`})
}

main()