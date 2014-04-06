import 'dart:js';

class Element {

  final JsObject jsModule = context.callMethod('require', ['element']);
  JsObject jsEl;

  Element(String name) {
    jsEl = jsModule.callMethod('createElement', [name]);
  }

  attr(String key, [val]) {
    if (val == null) return jsEl.callMethod('attr', [key]);
    jsEl.callMethod('attr', [key, val]);
    return this;
  }

  Element append(Element child) {
    jsEl.callMethod('append', [child.jsEl]);
    return this;
  }

  void open() {
    jsEl.callMethod('callUIMethod', ['open']);
  }

}