var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/models.js');
var views = require('./views/views.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'homeView',
    ':_id': 'displayMain'
  },
  initialize: function(){
    this.collection = new models.BlogCollection();
  },
  homeView: function(){
    var newBlogList = new views.BlogListView({collection: this.collection});
    $('.blog-list-container').html(newBlogList.render().el);
    this.collection.fetch();
  },
  displayMain: function(id){
    console.log(id);
  }
});

var router = new AppRouter();

module.exports = router;
