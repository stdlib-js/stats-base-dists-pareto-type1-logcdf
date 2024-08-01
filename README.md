<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Cumulative Distribution Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the natural logarithm of the [cumulative distribution function][cdf] for a [Pareto (Type I)][pareto-distribution] distribution.

<section class="intro">

The [cumulative distribution function][cdf] for a [Pareto (Type I)][pareto-distribution] random variable is

<!-- <equation class="equation" label="eq:pareto_type1_cdf" align="center" raw="F(x)= 1 - \left( \frac{\beta}{x} \right)^\alpha \text{for }x \ge \beta" alt="Cumulative distribution function for a Pareto (Type I) distribution."> -->

```math
F(x)= 1 - \left( \frac{\beta}{x} \right)^\alpha \text{for }x \ge \beta
```

<!-- <div class="equation" align="center" data-raw-text="F(x)= 1 - \left( \frac{\beta}{x} \right)^\alpha \text{for }x \ge \beta" data-equation="eq:pareto_type1_cdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/pareto-type1/logcdf/docs/img/equation_pareto_type1_cdf.svg" alt="Cumulative distribution function for a Pareto (Type I) distribution.">
    <br>
</div> -->

<!-- </equation> -->

and zero otherwise. In the equation, `alpha > 0` is the shape parameter and `beta > 0` is the scale parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import logcdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-logcdf@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-logcdf@esm/index.mjs';
```

#### logcdf( x, alpha, beta )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF) for a [Pareto (Type I)][pareto-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```javascript
var y = logcdf( 2.0, 1.0, 1.0 );
// returns ~-0.693

y = logcdf( 5.0, 2.0, 4.0 );
// returns ~-1.022

y = logcdf( 4.0, 2.0, 2.0 );
// returns ~-0.288

y = logcdf( 1.9, 2.0, 2.0 );
// returns -Infinity

y = logcdf( +Infinity, 4.0, 2.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logcdf( NaN, 1.0, 1.0 );
// returns NaN

y = logcdf( 0.0, NaN, 1.0 );
// returns NaN

y = logcdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `alpha <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, -1.0, 0.5 );
// returns NaN

y = logcdf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `beta <= 0`, the function returns `NaN`.

```javascript
var y = logcdf( 2.0, 0.5, -1.0 );
// returns NaN

y = logcdf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### logcdf.factory( alpha, beta )

Returns a function for evaluating the natural logarithm of the [cumulative distribution function][cdf] (CDF) of a [Pareto (Type I)][pareto-distribution] distribution with parameters `alpha` (shape parameter) and `beta` (scale parameter).

```javascript
var mylogcdf = logcdf.factory( 10.0, 2.0 );
var y = mylogcdf( 3.0 );
// returns ~-0.017

y = mylogcdf( 2.5 );
// returns ~-0.114
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import logcdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-pareto-type1-logcdf@esm/index.mjs';

var alpha;
var beta;
var x;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    x = randu() * 8.0;
    alpha = randu() * 5.0;
    beta = randu() * 5.0;
    y = logcdf( x, alpha, beta );
    console.log( 'x: %d, α: %d, β: %d, ln(F(x;α,β)): %d', x.toFixed( 4 ), alpha.toFixed( 4 ), beta.toFixed( 4 ), y.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-pareto-type1-logcdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-pareto-type1-logcdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-logcdf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-logcdf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-pareto-type1-logcdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-pareto-type1-logcdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-pareto-type1-logcdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-pareto-type1-logcdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-logcdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-logcdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-logcdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-logcdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-logcdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-logcdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-pareto-type1-logcdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-pareto-type1-logcdf/main/LICENSE

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[pareto-distribution]: https://en.wikipedia.org/wiki/Pareto_distribution

</section>

<!-- /.links -->
