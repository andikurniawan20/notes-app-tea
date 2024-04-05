const express = require('express');
const app = express();

// Set EJS sebagai view engine
app.set('view engine', 'ejs');

// Tentukan folder untuk file EJS
app.set('views', 'views');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

const express = require('express');
const bodyParser = require('body-parser');
const notesController = require('./path-to-your-notes-controller'); // Sesuaikan ini
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', 'views');

// Rute untuk halaman depan
app.get('/', (req, res) => {
    const notes = notesController.getNotes(); // Asumsi Anda memiliki fungsi seperti ini
    res.render('index', { notes: notes });
});

// Rute untuk menambah catatan
app.post('/add-note', (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    notesController.addNote(title, body); // Asumsi Anda memiliki fungsi seperti ini
    res.redirect('/');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
