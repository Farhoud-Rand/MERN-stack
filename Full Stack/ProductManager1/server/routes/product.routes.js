
const ProductController = require('../controllers/ProductController');
module.exports = function(app){
    app.post('/api/product', ProductController.addNewProduct);
}

