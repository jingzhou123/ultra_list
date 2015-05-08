define(["jquery", "ko", "util"], function ($, ko, util) {

  var ListViewModel = function() {
    var path = 'mock/list.json';
    var that = this;
    this.list = ko.observableArray([]);
    this.newItemName = ko.observable('');
    this.addItem = function() {
      var that = this;
      util.mockPost(path).then(function(res) {
        that.list.push({itemName: that.newItemName()});
      });
    };

    this.rmItem = function(item) {
      util.mockPost(path).then(function(res) {
        that.list.remove(item);
      });
    };

    this.openModal = function() {

    };

    $.get(path).then(function(res) {
      that.list(res);
    });
  };

  ko.applyBindings(new ListViewModel());
});


