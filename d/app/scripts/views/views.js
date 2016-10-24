var $ = require('jquery');
var Backbone = require('backbone');
var newURLFormTemplate = require('../../templates/URL-form.hbs');

var URLSubmissionForm = Backbone.View.extend({
  tagName: 'form',
  className: 'url-form',
  template: newURLFormTemplate,
  events: {
    'submit': 'addURL'
  },
  render: function(){
    this.$el.html(this.template());

    return this;
  },
  addURL: function(e){
    e.preventDefault();
    var newURL = {
      url: $('#url').val(),
      tag: $('#tag').val(),
    };

    this.collection.create(newURL);

    $('#url').val('');
    $('#tag').val('');
  }
});

var TagListItem = Backbone.View.extend({
  tagName: 'li',
  className: 'tag-item'
});


module.exports = {
  URLSubmissionForm: URLSubmissionForm,
  TagListItem: TagListItem
};
