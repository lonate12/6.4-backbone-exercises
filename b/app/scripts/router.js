var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/models.js');
var views = require('./views/views.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'homeForm',
  },
  initialize: function(){
    this.collection = new models.PersonCollection();
  },
  homeForm: function(){
    var newHomeForm = new views.NewPersonFormView({collection: this.collection});

    $('.app').html(newHomeForm.render().el);
  },
});

var router = new AppRouter();

module.exports = router;
