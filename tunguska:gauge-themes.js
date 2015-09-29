/*
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
*/

TunguskaGaugeThemePack = {
  none: {},
  basic: {
    range: {
      min: 0,
      max: 100,
      startAngle: -135,
      sweep: 225,
      colorBand: [{
        startAt: 0.95,
        endAt: 0.99,
        from: 0,
        to: 75,
        color: '#0d0'
      },{
        startAt: 0.90,
        endAt: 0.99,
        from: 75,
        to: 90,
        color: '#ed0'
      }, {
        startAt: 0.85,
        endAt: 0.99,
        from: 90,
        to: 100,
        color: '#d00'
      }]
    },
    outer: {
      lineWidth: 1,
      color: 'black',
      alpha: 0.5,
      radius: 1
    },
    pointer: {
      points: [
        [-0.1, -0.05],
        [0.95, 0],
        [-0.1, 0.05]
      ],
      lineWidth: 1,
      color: 'black',
      alpha: 1,
      fillColor: 'red',
      shadowX: 2,
      shadowY: 2,
      shadowBlur: 5,
      shadowColor: '#000',
      dynamics: {
        duration: 150,
        easing: 'bounce'
      }
    },
    tick: {
      minor: {
        lineWidth: 1,
        startAt: 0.90,
        endAt: 0.96,
        interval: 2,
        color: 'black',
        alpha: 1,
        first: 0,
        last: 100
      },
      major: {
        lineWidth: 2,
        startAt: 0.86,
        endAt: 0.96,
        interval: 10,
        color: 'black',
        legend: {
          color: '#669',
          font: '12px sans-serif',
          radius: 0.72
        },
        alpha: 1,
        first: 0,
        last: 100
      }
    },
    digital: {
      top: 40,
      left: 0,
      font: '20px monospace',
      color: '#66a'
    }
  },
  steampunk: {
    background: {
      image: 'packages/tunguska_gauge-themes/images/steampunkbg.png'
    },
    radius: 0.95,
    range: {
      min: 0,
      max: 100,
      startAngle: -150,
      sweep: 300,
      lowStop: -2,
      highStop: 102
    },
    tick: {
      major: {
        lineWidth: 3,
        startAt: 0.65,
        endAt: 0.7,
        interval: 10,
        color: 'black',
        legend: {
          color: 'black',
          font: '12px sans-serif',
          radius: 0.82
        },
        alpha: 1,
        first: 0,
        last: 100
      }
    },
    digital: {
      top: 35,
      left: 0,
      font: 'bold 20px courier',
      color: '#ffc'
    },
    pointer: {
      image: {
        name: 'packages/tunguska_gauge-themes/images/steampunk02.png',
        xOffset: 32,
        yOffset: 15
      },
      shadow: {
        name: 'packages/tunguska_gauge-themes/images/steampunk03.png',
        xOffset: 32,
        yOffset: 15
      },
      shadowX: 2,
      shadowY: 2,
      dynamics: {
        duration: 160,
        easing: 'bounce'
      }
    }
  },
  rotary: {
    background: {
      image: 'packages/tunguska_gauge-themes/images/rotarybg.png'
    },
    foreground: {
      image: 'packages/tunguska_gauge-themes/images/rotaryfg.png'
    },
    radius: 0.90,
    range: {
      min: 0,
      max: 100,
      startAngle: -230,
      sweep: -270,
      lowStop: -2,
      highStop: 102
    },
    pointer: {
      shadow: {
        name: 'packages/tunguska_gauge-themes/images/rotaryp.png',
        xOffset: 89,
        yOffset: 94
      },
      shadowX: 1.5,
      shadowY: 5,
      dynamics: {
        duration: 400,
        easing: 'bounce'
      }
    }
  },
  clock: {
    radius: 0.57,
    range: {
      min: 0,
      max: 60,
      startAngle: 0,
      sweep: 360
    },
    tick: {
      minor: {
        lineWidth: 1,
        startAt: 0.95,
        endAt: 0.99,
        interval: 1,
        color: 'white',
        alpha: 1,
        first: 1,
        last: 59
      },
      major: {
        lineWidth: 2,
        startAt: 0.9,
        endAt: 0.99,
        interval: 5,
        color: 'white',
        legend: {
          color: 'white',
          font: '12px sans-serif',
          radius: 0.75,
          callback: function(n) {
            return parseInt(n / 5, 10);
          }
        },
        alpha: 1,
        first: 5,
        last: 60
      }
    },
    callback: {
      pointer: function(d) {
        var a = [];
        var h = (d.getHours() % 12);
        var m = d.getMinutes();
        var s = d.getSeconds();
        a[0] = (h + m / 60 + s / 3600) * 5; // gauge range is 0..60, so need to *5 for h=0..12;
        a[1] = m + s / 60;
        a[2] = s;
        return a;
      },
      wrap: true
    },
    pointer: [{
      dynamics: {
        duration: 1,
        easing: 'instant'
      },
      points: [
        [-0.1, -0.05],
        [0.7, 0],
        [-0.1, 0.05]
      ],
      lineWidth: 1,
      color: 'white',
      alpha: 1,
      fillColor: 'white',
      shadowX: 1,
      shadowY: 1,
      shadowBlur: 1,
      shadowColor: '#000'
    }, {
      dynamics: {
        duration: 1,
        easing: 'instant'
      },
      points: [
        [-0.1, -0.03],
        [0.9, 0],
        [-0.1, 0.03]
      ],
      lineWidth: 1,
      color: 'white',
      alpha: 1,
      fillColor: 'white',
      shadowX: 1,
      shadowY: 1,
      shadowBlur: 1,
      shadowColor: '#000'
    }, {
      dynamics: {
        duration: 60,
        easing: 'linear'
      },
      points: [
        [-0.1, -0.01],
        [0.95, 0],
        [-0.1, 0.01]
      ],
      lineWidth: 1,
      color: 'red',
      alpha: 1,
      fillColor: 'red',
      shadowX: 1,
      shadowY: 2,
      shadowBlur: 2,
      shadowColor: '#000'
    }],
    outer: {
      alpha: 0
    },
    digital: {
      top: 75,
      left: 0,
      font: '12px monospace',
      color: '#0f0',
      callback: function(d) {
        var dayNames = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
        var monthNames = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
          'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
        var h = d.getHours();
        var ampm = 'am';
        if (h > 11) ampm = 'pm';
        h = h % 12;
        if (h === 0) h = 12;
        var m = '' + d.getMinutes();
        if (m.length == 1) m = '0' + m;
        var s = '' + d.getSeconds();
        if (s.length == 1) s = '0' + s;
        var t = dayNames[d.getDay()] + ' ' + d.getDate() + ' ' + monthNames[d.getMonth()];
        t += ' ' + d.getFullYear() + '\n' + h + ':' + m + ':' + s + ampm;
        return t;
      }
    }
  }
};

