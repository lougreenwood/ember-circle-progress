/*jshint node:true*/
module.exports = {
  description: 'ember-circle-progress',

  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addPackageToProject('jquery-circle-progress');
  }
};
