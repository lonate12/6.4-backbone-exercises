var $ = require('jquery');
var Backbone = require('backbone');
var blogItemTemplate = require('../../templates/blog-item.hbs');
var activeBlogTemplate = require('../../templates/active-blog-display.hbs');

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
  render: function(){
    var contextObject = this.model.toJSON();
    this.$el.html(this.template(contextObject));

    return this;
  }
});

var MainDisplayView = Backbone.View.extend({
  tagName: 'div',
  className: 'active-blog-container',
  template: activeBlogTemplate,
  render: function(){
    var contextObject = this.model.toJSON();
    this.$el.html(this.template(contextObject));

    return this;
  },
});

module.exports = {
  BlogListView: BlogListView,
  BlogItemView: BlogItemView,
  MainDisplayView: MainDisplayView
};
