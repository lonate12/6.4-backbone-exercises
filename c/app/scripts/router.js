var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/models.js');
var views = require('./views/views.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'homeView'
  },
  initialize: function(){
    this.collection = new models.BlogCollection();
  },
  homeView: function(){
    var newBlogList = new views.BlogListView(this.collection);
  }
});

var router = new AppRouter();

module.exports = router;
