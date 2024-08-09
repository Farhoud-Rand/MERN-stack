
const ProductController = require('../controllers/ProductController');
module.exports = function(app){
    app.post('/api/product', ProductController.addNewProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getProduct);
    app.patch('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}

