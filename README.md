# koch-snowflake-cli
Print the [Koch Snowflake](https://en.wikipedia.org/wiki/Koch_snowflake) to the console!

![What koch-snowflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/koch-snowflake-cli/main/img/koch-snowflake-banner.png)

[![npm version](https://img.shields.io/npm/v/koch-snowflake-cli)](https://www.npmjs.com/package/koch-snowflake-cli)
[![bundle size](https://img.shields.io/bundlephobia/min/koch-snowflake-cli)](https://bundlephobia.com/package/koch-snowflake-cli)
[![downloads](https://img.shields.io/npm/dy/koch-snowflake-cli)](https://www.npmjs.com/package/koch-snowflake-cli)
[![license](https://img.shields.io/npm/l/koch-snowflake-cli)](https://github.com/spirometaxas/koch-snowflake-cli/blob/main/LICENSE)

Why the console?  Because it's the *cool* way.  

[See All Fractals](https://spirometaxas.com/projects/fractals-cli) in the [fractals-cli](https://www.npmjs.com/package/fractals-cli) project.

## Usage
### Via `npx`:
```
$ npx koch-snowflake-cli <n>
$ npx koch-snowflake-cli <n> [size] [options]
```
where `n >= 0` and `size >= n` (if provided).

### Via Global Install
```
$ npm install --global koch-snowflake-cli
$ koch-snowflake-cli <n>
$ koch-snowflake-cli <n> [size] [options]
```
where `n >= 0` and `size >= n` (if provided).

### Via Import
```
$ npm install koch-snowflake-cli
```
then:
```
const koch_snowflake = require('koch-snowflake-cli');
console.log(koch_snowflake.create(<n>));
console.log(koch_snowflake.create(<n>, { 
    size: <number>, 
    character: <character> 
}));
```
The config params are optional.

## Options
### Recursive Step  
```
$ koch-snowflake-cli <n>
```
The first param `<n>` is the recursive step.  `<n>` should be an integer greater than or equal to 0.

#### Examples:
```
$ koch-snowflake-cli 2
```
![What koch-snowflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/koch-snowflake-cli/main/img/koch-snowflake-2.png)

```
$ koch-snowflake-cli 3
```
![What koch-snowflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/koch-snowflake-cli/main/img/koch-snowflake-3.png)

### Size
```
$ koch-snowflake-cli <n> [size]
```
The optional `[size]` param allows the Koch Snowflake to be drawn at larger sizes.  `[size]` should be an integer greater than or equal to `<n>`.  Including size will draw a Koch Snowflake of `<n>` recursive steps the size of a hexagon with `[size]` recursive steps.  

#### Example:
```
$ koch-snowflake-cli 2 3
```
![What koch-snowflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/koch-snowflake-cli/main/img/koch-snowflake-2-3.png)

### Custom Characters
```
$ koch-snowflake-cli <n> --character=<character>
```
The optional `--character=<character>` param will draw the Koch Snowflake using the provided character.  (Please provide only 1 character)  

#### Example:
```
$ koch-snowflake-cli 1 3 --character=*
```
![What koch-snowflake-cli prints to the console](https://raw.githubusercontent.com/spirometaxas/koch-snowflake-cli/main/img/koch-snowflake-1-3-character.png)

## Related

#### Main Project
- [fractals-cli](https://www.npmjs.com/package/fractals-cli) - Print 22 Fractals to the console

#### Fractal Shapes
- [sierpinski-triangle-cli](https://www.npmjs.com/package/sierpinski-triangle-cli) - Print the Sierpinski Triangle to the console
- [sierpinski-carpet-cli](https://www.npmjs.com/package/sierpinski-carpet-cli) - Print the Sierpinski Carpet to the console
- [sierpinski-hexagon-cli](https://www.npmjs.com/package/sierpinski-hexagon-cli) - Print the Sierpinski Hexagon to the console
- [hexaflake-cli](https://www.npmjs.com/package/hexaflake-cli) - Print the Hexaflake Fractal to the console
- [koch-antisnowflake-cli](https://www.npmjs.com/package/koch-antisnowflake-cli) - Print the Koch Anti-Snowflake to the console
- [triflake-cli](https://www.npmjs.com/package/triflake-cli) - Print the Triflake Fractal to the console

#### Fractal Patterns
- [cantor-set-cli](https://www.npmjs.com/package/cantor-set-cli) - Print the Cantor Set to the console
- [cantor-dust-cli](https://www.npmjs.com/package/cantor-dust-cli) - Print the Cantor Dust Fractal to the console
- [h-tree-cli](https://www.npmjs.com/package/h-tree-cli) - Print the H-Tree Fractal to the console
- [minkowski-sausage-cli](https://www.npmjs.com/package/minkowski-sausage-cli) - Print the Minkowski Sausage to the console
- [t-square-cli](https://www.npmjs.com/package/t-square-cli) - Print the T-Square Fractal to the console
- [vicsek-fractal-cli](https://www.npmjs.com/package/vicsek-fractal-cli) - Print the Vicsek Fractal to the console
- [v-tree-cli](https://www.npmjs.com/package/v-tree-cli) - Print the V-Tree Fractal to the console

#### Space Filling Curves
- [dragon-curve-cli](https://www.npmjs.com/package/dragon-curve-cli) - Print the Dragon Curve to the console
- [hilbert-curve-cli](https://www.npmjs.com/package/hilbert-curve-cli) - Print the Hilbert Curve to the console
- [moore-curve-cli](https://www.npmjs.com/package/moore-curve-cli) - Print the Moore Curve to the console
- [peano-curve-cli](https://www.npmjs.com/package/peano-curve-cli) - Print the Peano Curve to the console
- [greek-cross-cli](https://www.npmjs.com/package/greek-cross-cli) - Print the Greek Cross Fractal to the console
- [gosper-curve-cli](https://www.npmjs.com/package/gosper-curve-cli) - Print the Gosper Curve to the console
- [sierpinski-arrowhead-cli](https://www.npmjs.com/package/sierpinski-arrowhead-cli) - Print the Sierpinski Arrowhead Curve to the console
- [sierpinski-curve-cli](https://www.npmjs.com/package/sierpinski-curve-cli) - Print the Sierpinski "Square" Curve to the console

## License
- [MIT](https://github.com/spirometaxas/koch-snowflake-cli/blob/main/LICENSE) &copy; [Spiro Metaxas](https://spirometaxas.com)