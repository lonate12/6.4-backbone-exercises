var $ = require('jquery');
var Backbone = require('backbone');
var newURLFormTemplate = require('../../templates/URL-form.hbs');

var URLSubmissionForm = Backbone.View.extend({
  tagName: 'form',
  className: 'url-form',
  template: newURLFormTemplate,
  render: function(){
    this.$el.html(this.template());

    return this;
  },
});


module.exports = {
  URLSubmissionForm: URLSubmissionForm
};
