var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/models.js');
var views = require('./views/views.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'getForm'
  },
  initialize: function(){
    this.collection = new models.BlogCollection();
  },
  getForm: function(){
    console.log("GetForm function fired");
    var homeForm = new views.HomeFormView({collection: this.collection});
  
    $('.app').html(homeForm.render().el);
  }
});

var router = new AppRouter();

module.exports = router;
