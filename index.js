const express = require('express');
var port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: [ 'hdfgdo87s8df3bvc29' ]
	})
);
app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);
app.use(cartsRouter);

//Form that the server sends

//Server listening on port 3000
app.listen(port, function() {
	console.log(`listening -_-`);
});
