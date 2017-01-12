# Handlebars Loop
Handlebars helper that iterates x number of times.

## Usage
```javascript
{{#loop 0 5 1}}
<div>{{this}}</div>
{{/loop}}
```
Should output

```html
<div>0</div>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
```
