const express = require('express');
const app = express();
const Pokemon = require('./models/pokemon.js');
const methodOverride = require('method-override');


/////////////////////////////////////////////
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"))
app.use(methodOverride('_method'))

/////////////////////////////////////////////
// INDEX route (GET => /Pokemon)
app.get('/pokemon/', (req, res) => {
    res.render('index.ejs', { data: Pokemon, title: "Pokemon - Index Page"});
});

// NEW route (GET => /Pokemon/new)
app.get('/pokemon/new', (req, res) => {
    res.render('new.ejs', {title: "Pokemon - New Page"})
});


// CREATE route (POST => /Pokemon)
app.post('/pokemon', (req, res) => {
    Pokemon.push(req.params.id)
    res.redirect("/pokemon")
});

// EDIT route (GET => /Pokemon/:id/edit)
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {data: Pokemon[req.params.id], title: "Pokemon - Edit Page"})
})

// UPDATE route (PUT => /Pokemon/:id)
app.put('/pokemon/:id', (req, res) => {
    Pokemon[req.params.id] = req.params.id
    res.redirect("/pokemon")
});

// DESTROY/delete route
app.delete('/pokemon/:id', (req, res) => {
    Pokemon.splice(req.params.id, 1)
    res.redirect("/pokemon")
})


// SHOW route (GET => /Pokemon/:id)
app.get('/Pokemon/:id', (req, res) => {
res.render('show.ejs', { data: Pokemon[req.params.id], title: "Pokemon - Show Page"});
});

// listener
app.listen(3000, () => console.log('express is listening on:', 3000));
 