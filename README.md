# tiel

jQuery-style helper for manipulating Titanium Views.
Only works on [Dart Titanium](https://github.com/dawicorti/dart-titanium) applications

## Usage

```dart
import 'package:tiel/el.dart';

void main() {
  el('window')
    .attr('backgroundColor', 'white')
    .append(
      el('label')
        .attr('text', 'Hello World !')
    )
    .open();
}
```

## Create element

```dart
el('button');
```

## Append child

```dart
Element button = el('button');
el('view').append(button);
```

## Set/Get attribute

```dart
Element button = el('button');
button.attr('color', 'blue');
print(button.attr('color'))
```
