var ELM_TYPES = [
  'Window',
  'View',
  'Button',
  'Label'
];

var Element = function (name) {
  this.uiName = this.realName(name);
  if (this.uiName === null) throw 'Unknown el name : "' + name + '"';

  try {
    this.ui = Ti.UI['create' + this.uiName]();
  } catch (e) {
    throw 'Failed to call Ti.UI.create' + this.uiName + '()';
  }

  this.children = [];
};

var elm = Element.prototype;

elm.realName = function (name) {
  var realName = null;

  ELM_TYPES.every(function (typeName) {
    if (name.toLowerCase() === typeName.toLowerCase()) {
      realName = typeName;
      return false;
    }

    return true;
  });

  return realName;
};


elm.find = function (query) {
  // @TODO
};

elm.append = function (child) {
  this.ui.add(child.ui);
  this.children.push(child);
};

elm.callUIMethod = function (method, args) {
  try {
    this.ui[method](
      !!args && args.length > 0 ? args[0] : undefined,
      !!args && args.length > 1 ? args[1] : undefined,
      !!args && args.length > 2 ? args[2] : undefined,
      !!args && args.length > 3 ? args[3] : undefined,
      !!args && args.length > 4 ? args[4] : undefined
    );
  } catch (e) {
    throw 'Failed to call ' + method + ' on ' + this.uiName + '\n' + e;
  }
};

elm.attr = function (key, val) {
  var setterData = {};
  if (typeof val === 'undefined') return this.ui[key];

  setterData[key] = val;
  this.ui.applyProperties(setterData)
  return this;
};

exports.createElement = function (name) {
  return new Element(name);
};
