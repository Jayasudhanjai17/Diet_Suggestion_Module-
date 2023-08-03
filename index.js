const express = require('express');
const app = express();
const router = express.Router();

const path = require('path');
const exphbs = require('express-handlebars');

// Cardio  Folder sucessfully imported
const card = require('./routes/api/cardio');
const breathingproblem = require('./routes/api/cardio');
// console.log(card);

// Handle Bars Middleware
// app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static('images'));
// app.set('views', path.join(__dirname, 'views'));

//Home Page route
// app.get('/', (req, res) => {
//   console.log(req.query);
//   res.render('index', {
//     title: 'MemberApp',
//     card,
//   });
// });

// app.post('/', (req, res) => {
//   console.log(req.query);
//   res.render('index', {
//     title: 'MemberApp',
//     card,
//   });
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set  Static Folder

app.use(express.static(path.join(__dirname, 'public')));

// MEMBERS API Routes
app.use('/', require('./routes/api/calls'));

const PORT = process.env.PORT || 5000;
//GET ALL THE MEMBERS
app.listen(PORT, () => console.log(`server running ${PORT}`));
