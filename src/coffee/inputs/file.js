﻿// Generated by CoffeeScript 1.7.1
(function() {
  (function(OJ) {
    var inputName;
    inputName = 'file';
    OJ.inputs.register(inputName, function(options, owner) {
      var defaults, ret;
      if (owner == null) {
        owner = OJ.body;
      }
      defaults = {
        props: {
          type: inputName,
          accept: '',
          multiple: ''
        },
        styles: {},
        events: {
          click: _.noop
        }
      };
      OJ.extend(defaults, options, true);
      ret = OJ.input(defaults, owner);
      return ret;
    });
  })((typeof global !== 'undefined' && global ? global : (typeof window !== 'undefined' ? window : this)).OJ);

}).call(this);

//# sourceMappingURL=file.js.map