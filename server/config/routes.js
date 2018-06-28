var control = require('../controller/control.js');

module.exports = function(app){
    app.get('/products.api',control.retrieve_all);
    app.get('/products.api/:id',control.retrieve_id);
    app.post('/products.api/new',control.create_Products);
    app.put('/products.api/:id/edit',control.update_Products);
    app.delete('/destroy.api/:id',control.delete_Products);
}