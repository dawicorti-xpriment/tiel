import 'element.dart';

Element el(String nameOrQuery, [Element elm]) {
  if (elm == null) return new Element(nameOrQuery);
}
