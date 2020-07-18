const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

// Create `ExpressHandlebars` instance with a default layout.
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

// Register `hbs.engine` with the Express app.
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views')

// add asset directory
app.use(express.static(
  path.join(__dirname, 'public')
));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});