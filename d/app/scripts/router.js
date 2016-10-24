var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/models.js');
var views = require('./views/views.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  initialize: function(){
    this.collection = new models.URLCollection();
  },
  index: function(){
    var newURLForm = new views.URLSubmissionForm({collection: this.collection});

    $('.url-form-container').html(newURLForm.render().el);
  }
});

var router = new AppRouter();

module.exports = router;
