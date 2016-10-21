var $ = require('jquery');
var Backbone = require('backbone');
var homeFormTemplate = require('../../templates/new-blog-form.hbs');

var HomeFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'new-blog-form',
  template: homeFormTemplate,
  events: {
    'submit': 'postBlogToServ'
  },
  render: function(){
    this.$el.html(this.template());
    // console.log('render function triggered');
    return this;
  },
  postBlogToServ: function(e){
    e.preventDefault();
    var newBlogPost = {
      title: $('#blog-title').val(),
      content: $('#blog-content').val()
    };

    this.collection.create(newBlogPost);

    $('#blog-title').val('');
    $('#blog-content').val('');
  }
});

module.exports = {
  HomeFormView: HomeFormView
};
