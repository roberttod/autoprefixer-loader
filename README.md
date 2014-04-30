# CSS autoprefixer loader for webpack

## Usage:

Best used in conjunction with css-loader and style-loader.

```js
{ test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader!' }
```