# Tunguska Gauge Theme Pack

Extends Tunguska Gauge with some example gauges.

# Install

```JavaScript
meteor add tunguska:gauge           } Tunguska Theme Pack needs Tunguska Gauge
meteor add tunguska:gauge-themes    } Order of adding doesn't matter
```

# Demo

tbd

# Basic Usage

This theme pack provides the following example themes:

- "none": no configuration options whatsoever - it's all up to you. See the [Tunguska Gauge README](https://github.com/robfallows/tunguska-gauge) for more information!
- "basic": an extended version of the default basic theme with colour bands.
- "steampunk": rendered using images for a steampunk experience.
- "rotary": uses a dial as a pointer - think bathroom scales.
- "clock": an analogue clock. Rendered hands on an image background.

```
var newGauge = new TunguskaGauge({
  id: 'dom-id',
  theme: 'steampunk'
});
```


## Examples

tbd

## Licence

The MIT License (MIT)

Copyright (c) 2015 Rob Fallows

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

