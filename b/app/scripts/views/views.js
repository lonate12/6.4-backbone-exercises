var $ = require('jquery');
var Backbone = require('backbone');
var newPersonForm = require('../../templates/new-person-form.hbs');

var NewPersonFormView = Backbone.View.extend({
  tagName: 'form',
  className: 'new-person-form form-horizontal',
  template: newPersonForm,
  events: {
    'submit': 'addPersonToServ'
  },
  render: function(){
    this.$el.html(this.template());

    return this;
  },
  addPersonToServ: function(e){
    e.preventDefault();
    var newPerson = {
      'first-name': $('#first-name').val(),
      'last-name': $('#last-name').val(),
      'address': $('#address').val(),
      'phone-number': $('#phone-number').val()
    };

    this.collection.create(newPerson);

    $('#first-name').val('');
    $('#last-name').val('');
    $('#address').val('');
    $('#phone-number').val('');

  }
});

module.exports = {
  NewPersonFormView: NewPersonFormView
};
