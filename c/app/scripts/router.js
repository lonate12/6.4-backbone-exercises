var $ = require('jquery');
var Backbone = require('backbone');
var models = require('./models/models.js');
var views = require('./views/views.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'displayMain'
  },
  initialize: function(){
    this.collection = new models.BlogCollection();
  },
  index: function(){
    var newBlogList = new views.BlogListView({collection: this.collection});
    $('.blog-list-container').html(newBlogList.render().el);
    this.collection.fetch();
  },
  displayMain: function(id){
    var selectedBlog = this.collection.get(id);
    var activeBlog = new views.MainDisplayView({model: selectedBlog});

    $('.current-blog-display').html(activeBlog.render().el);
  }
});

var router = new AppRouter();

module.exports = router;
