var $ = require('jquery');
var Backbone = require('backbone');
var blogItemTemplate = require('../../templates/blog-item.hbs');

var BlogListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'blog-list',
  initialize: function(){
    this.listenTo(this.collection, 'add', this.addBlogItem);
  },
  addBlogItem: function(blog){
    var newBlogItem = new BlogItemView({model: blog});
    this.$el.append(newBlogItem.render().el);
  }
});

var BlogItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'blog-item',
  template: blogItemTemplate,
  events: {
    'click': 'makeActive'
  },
  render: function(){
    var contextObject = this.model.toJSON();
    this.$el.html(this.template(contextObject));

    return this;
  },
  makeActive: function(e){
    e.preventDefault();
    console.log('makeActive has been triggered.');
  }
});

module.exports = {
  BlogListView: BlogListView,
  BlogItemView: BlogItemView
};
