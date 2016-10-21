var Backbone = require('backbone');

var AppRouter = Backbone.Router.extend({
  routes: {
    '/': 'getForm'
  },
  getForm: function(){
    var homeForm = new HomeFormView();
  }
});

var router = new AppRouter();

module.exports = router;
