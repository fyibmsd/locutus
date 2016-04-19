---
layout: page
title: "About Locutus"
date: 2012-09-26 17:18
comments: true
permalink: /about/
redirect_from:
- /pages/contact
- /
---

{{site.description}}

**Why?**

 - to create interoperable encoding functions
 - to see if we can
 - to learn JavaScript
 - to help others learn JavaScript
 - to profit from a few useful functions such as:
[strip_tags](/php/strip_tags/),
[strtotime](/php/strtotime/),
[md5](/php/md5/),
[strftime](/php/strftime/),
[number_format](/php/number_format/),
[wordwrap](/php/wordwrap/), 
[vsprintf](/php/vsprintf/), and
[date](/php/date/), that do not exist in JavaScript's standard library.

JavaScript as a language is wide-spread, but lacking a large 
standard library, developers coming from other languages are often wondering how
to achieve common tasks, like [formatting dates](/php/strftime/), 
or [generating a hashes](/php/sha1/).

Locutus aims to show developers coming from the other programming languages
how to achieve these things in JavaScript. We had to write a lot of it in order to port 
[{{ site.functions |size }} functions](/functions).
We've come to appreciate the language and hope you will too. Locutus exists to aid in learning it, not to avoid that.

One thing you'll notice is that we're also porting low-level functions like Go's [string.Index](/golang/strings/Index/)
that have perfectly good (and more performant) JavaScript equivalents supported natively by means of [String.indexOf](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/indexOf).

There are two reasons why we're going the extra mile:

1. To show newcomers by example how the behavior differs across languages (`false` vs `-1` in the example of `strpos` vs JavaScript's `indexOf`)
2. The geeky-challenge of porting ALL-THE-THINGS also opens up Locutus to other fun experiments such as running actual `.php` files on V8. While have no idea why you would want that, nor would we recommend it, we sure think it's fun to see if we can manage (this does bring the burden of mimicking the other languages as good as we can, even their mistakes).

## What we're not

Even though Locutus is porting standard libraries from other languages, we don't see ourselves as 
a viable standard library for JavaScript. We're too hefty, too diffuse, too hobby. If you're interested in something like that, we recommend taking a look at lodash, which is more lightweight, better tested, and has a better relation with JavaScript's native data types.

## What we're not porting

We're trying to stick to raw functions and won't be porting global environment, language constructs or data-types. While this would be possible to varying degrees, we feel this is outside Locutus' scope and welcome other projects to take a stab at this, using our modules (or not).

One thing we discovered was that Locutus won't be able to fully support many of PHP's array functions because native arrays on PHP are more like Objects in JavaScript, except that some JavaScript platforms do not guarantee to preserve ordering in objects. Rightfully, because that behavior is not part of ECMA. Instead of rolling our own data-structures, this is a case where we accept defeat. We take comfort in the fact that most platforms preserve ordering, and put up big disclaimers with those functions. There are rumors of it becoming a part of ECMA.

## A community effort

Going by [The McDonald's Theory](https://medium.com/what-i-learned-building/9216e1c9da7d) 
we have plenty of functions online that aren't perfect just yet.

If you know better ways, you're very welcome to send us a pull request : )

## Contributing

We use [GitHub](http://github.com/kvz/locutus) for collaboration.
Please do adhere to our [CONTRIBUTING.md](http://github.com/kvz/locutus/CONTRIBUTING.md) guidelines when you're sending in a contribution.

## Licensing

Locutus is licensed under the MIT licenses.

[The MIT license](https://github.com/kvz/locutus/blob/master/LICENSE) allows you to use the library as you see fit (even in commercial projects) as long as you redistribute original the license with it. You're not obligated to share your improvements, but obviously that would be greatly appreciated and ensure you won't lose your changes after you upgrade.