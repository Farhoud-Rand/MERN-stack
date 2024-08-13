const AuthorController = require('../controllers/AuthorController');

module.exports = function(app){
    app.post('/api/author', AuthorController.addNewAuthor);
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/author/:id', AuthorController.getAuthor);
    app.patch('/api/author/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}

