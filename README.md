# sbn++

A fork of sbn to continue adding features, which is a compiler for small drawing language sbn(SVG by Numbers). Inspired by John Maeda's book: Design by Numbers. It is not interoperable with SBN as the cordinate system on the Y axis is flipped.

## Supported Keywords
This compiler is work-in-progress. Here is a list of commands currently supported (v1.0.1) & planning to implement
- [x] `Paper`
- [x] `Pen`
- [x] `Line`
- [x] `Rect`
- [x] `// comment`
- [x] `Set` (variable)
- [x] `{ }` (block)
- [ ] `Fill`
- [ ] Nested block
- [ ] `Repeat`
- [ ] `(+ - / *)` (calculations)
- [x] `[x, y]` (dot)
- [ ] Copy Dots (calculation on dot)
- [ ] `Same ? / NotSame?` (question)
- [ ] `Smaller ? / NotSmaller?` (question)
- [ ] `Command` (function)
- [ ] `Load` (import)

## usage
### browser
include sbn.js in your html, `sbn` object will be available in global scope.
```html
<script src="./lib/sbn.js"></script>
```
Call `compile` method. The compiler creates SVG out of sbn code you passed.
```javascript
var code = 'Paper 95\nPen 1\nLine 50 15 85 80\nPen 30\nLine 85 80 15 80\nPen 70\nLine 15 80 50 15'
var svg = sbn.compile(code)

document.body.innerHTML = svg
```

### node
You can run sbn compiler on node to create SVG file.
```javascript
var fs = require('fs')
var sbn = require('sbnp')

var code = `
  Paper 95
  Pen 1
  Line 50 15 85 80
  Pen 30
  Line 85 80 15 80
  Pen 70
  Line 15 80 50 15
`

fs.writeFile("sbn_drawing.svg", sbn.compile(code), function(err) {
    console.log('SVG was saved!')
})
```

## License
Copyright 2016 Mariko Kosaka

Code licensed under the [Apache-2.0 License](http://www.apache.org/licenses/LICENSE-2.0)
Documentation licensed under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/)