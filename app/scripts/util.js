define(["jquery"], function ($) {
  var util = {
    mockPost: function(path) {
      var data = {};
      return $.when(data);
    }
  };
  return util;
});

