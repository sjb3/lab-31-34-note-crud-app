'use strict';

require('./create-note-form.scss');
const angular = require('angular');
angular.module('galleryApp').directive('appCreateNoteForm', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./create-note-form.html'),
    scope: {
      createNote: '&'
    }
  };
});
