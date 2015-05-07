var ListViewModel = function() {
  var path = 'list.json';
  var that = this;
  this.list = ko.observableArray([]);

  $.get(path).then(function(res) {
    that.list(res);
  });
};

ko.applyBindings(new ListViewModel());
