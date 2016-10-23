var Backbone = require('backbone');

var BookmarkedURL = Backbone.Model.extend({
  idAttribute: '_id'
});

var URLCollection = Backbone.Collection.extend({
  model: BookmarkedURL,
  URL: 'https://tiny-lasagna-server.herokuapp.com/collections/rene-exercise-d/'
});

module.exports = {
  BookmarkedURL: BookmarkedURL,
  URLCollection: URLCollection
};
