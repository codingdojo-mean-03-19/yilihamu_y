
var cakeControllers = require('../controllers/cakes');

module.exports = function(app){
    app.get("/cakes", cakeControllers.index);
    app.get("/cakes/:id", cakeControllers.show);
    app.post("/cakes", cakeControllers.create);
    app.post("/cakes/:id/rate", cakeControllers.rate);
}
