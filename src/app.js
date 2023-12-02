const PORT = 9000
import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

console.log(import.meta.url);
app.get('/product', (req, res) => {
	res.sendFile(path.join(__dirname, './view/product.html'))
})

app.use('/', (req, res) => {
	res.status(404).send('<html><body><h1>Page not found</h1></body></html>')
})


app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})