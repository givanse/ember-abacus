import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberAbacusENV.locationType
});

Router.map(function() {
  this.resource('abacus', function() {
    this.resource('thousands', function() {
      this.route('millions');
    });
  });
});

export default Router;
