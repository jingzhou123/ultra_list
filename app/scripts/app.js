var mockPost = function(path) {
  var data = {};
  return $.when(data);
};
var ListViewModel = function() {
  var path = 'mock/list.json';
  var that = this;
  this.list = ko.observableArray([]);
  this.newItemName = ko.observable('');
  this.addItem = function() {
    var that = this;
    mockPost(path).then(function(res) {
      that.list.push({itemName: that.newItemName()});
    });
  };

  this.rmItem = function(item) {
    mockPost(path).then(function(res) {
      that.list.remove(item);
    });
  };

  $.get(path).then(function(res) {
    that.list(res);
  });
};

ko.applyBindings(new ListViewModel());
